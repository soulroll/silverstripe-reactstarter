<?php
namespace Reactstarter\Reactstarter\Model;

use SilverStripe\ORM\DataObject;
use SilverStripe\Forms\TabSet;
use SilverStripe\Forms\FieldList;
use SilverStripe\Forms\TextField;
use Reactstarter\Reactstarter\Model\Team;

class Player extends DataObject
{
	/**
	 * @var string
	 * @config
	 */
	private static $table_name = 'Player';

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
		'Alias' => 'Varchar(255)',
		'Name' => 'Varchar(255)'
	];

	/**
	 * @var array
	 * @config
	 */
	private static $has_one = [
		'Team' => Team::class
	];

	/**
	 * @var array
	 * @config
	 */
	private static $summary_fields = array(
		'Alias' => 'Alias',
		'Name' => 'Name'
	);

	/**
	 * @var array
	 * @config
	 */
	private static $searchable_fields = array(
		'Alias',
		'Name'
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
			TextField::create('Alias', 'Alias'),
			TextField::create('Name', 'Name')
		));

		return $fields;
	}

}
