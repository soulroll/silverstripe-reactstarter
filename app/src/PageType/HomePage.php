<?php

namespace Reactstarter\Reactstarter\PageType;

use Page;
use SilverStripe\Forms\FieldGroup;
use SilverStripe\Forms\CheckboxField;
use SilverStripe\Forms\GridField\GridField;
use SilverStripe\Forms\GridField\GridFieldConfig_RecordEditor;
use UndefinedOffset\SortableGridField\Forms\GridFieldSortableRows;
use Reactstarter\Reactstarter\Model\HomePageCarouselItem;

class HomePage extends Page
{
	/**
	 * @var string
	 * @config
	 */
	private static $singular_name = 'Home Page';

	/**
	 * @var string
	 * @config
	 */
	private static $plural_name = 'Home Pages';

	/**
	 * @var string
	 * @config
	 */
	private static $table_name = 'HomePage';

	/**
	 * @var string
	 * @config
	 */
	private static $defaults = array (
		'SliderArrows' => true
	);

	/**
	 * @var array
	 * @config
	 */
	private static $db = array(
		'SliderArrows' => 'Boolean'
	);

	/**
	 * @var array
	 * @config
	 */
	private static $has_many = array(
		'CarouselItems' => HomePageCarouselItem::class
	);

	/**
	 * @return FieldList
	 */
	public function getCMSFields() {

		$fields = parent::getCMSFields();

		$fields->addFieldsToTab(
			'Root.Main',
			array(
				FieldGroup::create(
					CheckboxField::create('SliderArrows','Arrows?')
				)->setTitle('Show arrows')->setName('SliderOptionsArrows'),
			)
		);

		$fields->addFieldsToTab(
			'Root.Carousel',
			array(
				GridField::create(
					'CarouselItems',
					'Carousel Items',
					$this->CarouselItems(),
					GridFieldConfig_RecordEditor::create()
						->addComponent(new GridFieldSortableRows('SortOrder'))
				)
			)
		);

		return $fields;

	}
}







