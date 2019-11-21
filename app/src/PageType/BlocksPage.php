<?php

namespace Reactstarter\Reactstarter\PageType;

use Page;

class BlocksPage extends Page
{
	/**
	 * @var string
	 * @config
	 */
	private static $table_name = 'BlocksPage';

	/**
	 * @var string
	 * @config
	 */
	private static $description = 'A modular page composed of content blocks.';

	/**
	 * @return FieldList
	 */
	public function getCMSFields() {
		$fields = parent::getCMSFields();
		return $fields;
	}

}
