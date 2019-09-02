<?php
namespace Reactstarter\Reactstarter\Model;

use SilverStripe\ORM\DataObject;
use SilverStripe\Assets\Image;
use SilverStripe\AssetAdmin\Forms\UploadField;
use SilverStripe\Forms\TextField;
use SilverStripe\Forms\TextAreaField;
use Reactstarter\Reactstarter\PageType\HomePage;

class HomePageCarouselItem extends DataObject
{

	/**
	 * @var string
	 * @config
	 */
	private static $singular_name = "Carousel Item";

	/**
	 * @var string
	 * @config
	 */
	private static $plural_name = "Carousel Items";

	/**
	 * @var string
	 * @config
	 */
	private static $table_name = 'CarouselItem';

	/**
	 * @var string
	 * @config
	 */
	private static $default_sort = 'SortOrder';

	/**
	 * @var array
	 * @config
	 */
	private static $db = [
		'SortOrder' => 'Int',
		'Title' => 'Varchar(255)',
		'Caption' => 'Varchar(255)'
	];

	/**
	 * @var array
	 * @config
	 */
	private static $has_one = [
		'HomePage' => HomePage::class,
		'Image' => Image::class
	];

	/**
	 * @var array
	 * @config
	 */
	private static $summary_fields = array(
		'ImageThumb' => 'Image',
		'Title' => 'Title',
		'Caption' => 'Caption'
	);

	/**
	 * @return FieldList
	 */
	public function getCMSfields()
	{
		$fields = parent::getCMSFields();
		$fields->removeFieldFromTab('Root.Main', 'HomePageID');
		$fields->removeFieldFromTab('Root.Main', 'SortOrder');
		$fields->removeFieldFromTab('Root.Main', 'Title');
		$fields->removeFieldFromTab('Root.Main', 'Caption');
		$fields->removeFieldFromTab('Root.Main', 'Heading');
		$fields->addFieldsToTab(
			'Root.Main',
			[
				UploadField::create('Image', 'Carousel Image')
					->setDescription('Sizes: &nbsp;&nbsp; Full (2560 x 560) &nbsp;&nbsp;&nbsp; Boxed (1100 x 500) &nbsp;&nbsp;&nbsp; Half (690 x 350)')
					->setAllowedFileCategories('image')
					->setAllowedExtensions(array('jpg', 'jpeg', 'png', 'gif'))
					->setFolderName('Carousel Images'),
				TextField::create('Title','Title'),
				TextAreaField::create('Caption','Caption')
			]
		);
		return $fields;
	}

	/**
	 * @return image
	 */
	public function getImageThumb()
	{
		if($this->Image()->exists()) {
			return $this->Image()->ScaleWidth(100);
		}
		return "(No image)";
	}
	/**
	 * @return string
	 */
	public function onAfterWrite()
	{
		$this->Image()->publishSingle();
	}

}
