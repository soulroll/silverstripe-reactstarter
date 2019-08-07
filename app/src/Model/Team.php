<?php
namespace Reactstarter\Reactstarter\Model;

use SilverStripe\ORM\DataObject;
use SilverStripe\Assets\Image;
use SilverStripe\AssetAdmin\Forms\UploadField;
use SilverStripe\Forms\TabSet;
use SilverStripe\Forms\FieldList;
use SilverStripe\Forms\TextField;
use SilverStripe\Forms\GridField\GridField;
use SilverStripe\Forms\GridField\GridFieldConfig_RecordEditor;
use UndefinedOffset\SortableGridField\Forms\GridFieldSortableRows;
use Reactstarter\Reactstarter\Model\Player;

class Team extends DataObject
{
	/**
	 * @var string
	 */
	private static $table_name = 'Team';

	/**
	 * @var array
	 */
	private static $db = [
		'Name' => 'Varchar(255)',
		'Location' => 'Varchar(255)'
	];

	/**
	 * @var array
	 */
	private static $has_many = [
		'Players' => Player::class
	];

	/**
	 * @var array
	 */
	private static $has_one = [
		'TeamLogo' => Image::class
	];

	/**
	 * @var array
	 * @config
	 */
	private static $summary_fields = array(
		'getThumbnail' => 'Logo',
		'Name' => 'Name',
		'Location' => 'Location'
	);

	/**
	 * @var array
	 * @config
	 */
	private static $searchable_fields = array(
		'Name',
		'Location'
	);

	/**
	 * @return FieldList
	 */
	public function getCMSfields()
	{
		$fields = FieldList::create(
			TabSet::create('Root')
		);

		$fields->addFieldsToTab('Root.Main', array(
			TextField::create('Name', 'Name'),
			TextField::create('Location', 'Location'),
			UploadField::create('TeamLogo', 'Logo'),
			GridField::create(
				'Players',
				'Players',
				$this->owner->Players(),
				GridFieldConfig_RecordEditor::create()
					->addComponent(new GridFieldSortableRows('SortOrder'))
			)
		));

		return $fields;
	}

	public function onAfterWrite()
	{
		parent::onAfterWrite();

		if ($this->TeamLogo()->exists()) {
			$this->TeamLogo()->copyVersionToStage('Stage', 'Live');
		}
	}

	public function getThumbnail()
	{
		return $this->TeamLogo()->ScaleHeight(50);
	}

}
