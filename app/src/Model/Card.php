<?php
namespace Reactstarter\Reactstarter\Model;

use SilverStripe\ORM\DataObject;
use SilverStripe\CMS\Model\SiteTree;
use SilverStripe\Assets\Image;
use SilverStripe\AssetAdmin\Forms\UploadField;
use SilverStripe\Forms\FieldList;
use SilverStripe\Forms\TextField;
use SilverStripe\Forms\TextAreaField;
use SilverStripe\Forms\TreeDropdownField;
use SilverStripe\Forms\GridField\GridField;
use SilverStripe\Forms\GridField\GridFieldConfig_RecordEditor;
use UndefinedOffset\SortableGridField\Forms\GridFieldSortableRows;
use Reactstarter\Reactstarter\PageType\HomePage;
use SilverStripe\GraphQL\Scaffolding\Interfaces\ScaffoldingProvider;
use SilverStripe\GraphQL\Scaffolding\Scaffolders\SchemaScaffolder;

class Card extends DataObject implements ScaffoldingProvider
{
	/**
	 * @var string
	 */
	private static $table_name = 'Card';

	/**
	 * @var string
	 * @config
	 */
	private static $default_sort = 'SortOrder';

	/**
	 * @var array
	 */
	private static $db = [
		'SortOrder' => 'Int',
		'Title' => 'Varchar(255)',
		'Content' => 'Varchar(255)'
	];

	/**
	 * @var array
	 */
	private static $has_one = [
		'Image' => Image::class,
		'InternalURL' => SiteTree::class,
		'HomePage' => HomePage::class
	];

	/**
	 * @var array
	 * @config
	 */
	private static $summary_fields = array(
		'getThumbnail' => 'Image',
		'Title' => 'Title',
		'Content' => 'Content'
	);

	/**
	 * @return FieldList
	 */
	public function getCMSfields()
	{
		$fields = parent::getCMSFields();
		$fields->removeFieldFromTab('Root.Main', 'SortOrder');
		$fields->removeFieldFromTab('Root.Main', 'Title');
		$fields->removeFieldFromTab('Root.Main', 'Content');
		$fields->removeFieldFromTab('Root.Main', 'Image');
		$fields->removeFieldFromTab('Root.Main', 'InternalURLID');
		$fields->removeFieldFromTab('Root.Main', 'HomePageID');

		$fields->addFieldsToTab('Root.Main', array(
			TextField::create('Title','Title'),
			TextAreaField::create('Content','Content'),
			UploadField::create('Image', 'Image')
				->setDescription('Image size: 640 x 480')
				->setAllowedFileCategories('image')
				->setAllowedExtensions(array('jpg', 'jpeg', 'png', 'gif'))
				->setFolderName('Card Images'),
			TreeDropdownField::create('InternalURLID', 'Page Link', SiteTree::class)
		));

		return $fields;
	}

	public function Link()
	{
		if (!$this->InternalURL()->exists()) {
			return '';
		}

		return $this->InternalURL()->Link();
	}

	public function onAfterWrite()
	{
		parent::onAfterWrite();

		if ($this->Image()->exists()) {
			$this->Image()->copyVersionToStage('Stage', 'Live');
		}
	}

	public function getThumbnail()
	{
		return $this->Image()->ScaleHeight(50);
	}

	/**
	 * @param SchemaScaffolder $scaffolder Scaffolder
	 * @return SchemaScaffolder
	 */
	public function provideGraphQLScaffolding(SchemaScaffolder $scaffolder)
	{
		// Provide entity type
		$typeScaffolder = $scaffolder
			->type(Card::class)
			->addFields([
				'ID',
				'Title',
				'Content'
			]);
		// Provide operations
		$typeScaffolder
			->operation(SchemaScaffolder::READ)
			->setName('readCard')
			->end();

		return $scaffolder;
	}

	public function canView($member = '')
	{
		return true;
	}

}
