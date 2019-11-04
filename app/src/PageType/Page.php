<?php

namespace {

	use SilverStripe\CMS\Model\SiteTree;
	use SilverStripe\ORM\DataObject;
	use SilverStripe\GraphQL\Scaffolding\Interfaces\ScaffoldingProvider;
	use SilverStripe\GraphQL\Scaffolding\Scaffolders\SchemaScaffolder;

	class Page extends SiteTree implements ScaffoldingProvider
	{
		private static $db = [];

		private static $has_one = [];

		/**
		 * @param SchemaScaffolder $scaffolder Scaffolder
		 * @return SchemaScaffolder
		 */
		public function provideGraphQLScaffolding(SchemaScaffolder $scaffolder)
		{
			// Provide entity type
			$typeScaffolder = $scaffolder
				->type('Page')
				->addFields([
					'ID',
					'Title',
					'Content'
				]);
			// Provide operations
			$typeScaffolder
				->operation(SchemaScaffolder::READ)
				->setName('readSiteTrees')
				->end();

			return $scaffolder;
		}

		public function canView($member = '')
		{
			return true;
		}


	}

}
