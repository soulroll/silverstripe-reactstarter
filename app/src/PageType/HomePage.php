<?php

namespace Reactstarter\Reactstarter\PageType;

use Page;
use SilverStripe\Forms\FieldGroup;
use SilverStripe\Forms\CheckboxField;

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

		return $fields;

	}
}







