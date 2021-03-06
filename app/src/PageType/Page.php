<?php

namespace {

	use SilverStripe\CMS\Model\SiteTree;
	use SilverStripe\ORM\DataObject;
	use SilverStripe\GraphQL\Scaffolding\Interfaces\ScaffoldingProvider;
	use SilverStripe\GraphQL\Scaffolding\Scaffolders\SchemaScaffolder;
	use SilverStripe\GraphQL\QueryFilter\FieldFilterInterface;
	use GraphQL\Type\Definition\ResolveInfo;
	use DNADesign\Elemental\Extensions\ElementalPageExtension;

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
					'ParentID',
					'Title',
					'Content',
					'URLSegment',
					'ShowInMenus',
					'Sort'
				])
				->nestedQuery(
					'Children'
				)->end();

			// Provide operations
			$typeScaffolder
				->operation(SchemaScaffolder::READ)
					->setName('readSiteTrees')
					->addArgs([
						'Title' => 'String',
						'ShowInMenus' => 'Boolean',
						'ParentID' => 'String'
					])
					->setResolver(function ($object, array $args, $context, ResolveInfo $info) {
						$list = Page::get();

						if (isset($args['ParentID'])) {
							$list = $list->filter('ParentID',$args['ParentID']);
						}

						if (isset($args['ShowInMenus']) && $args['ShowInMenus']) {
							$list = $list->filter('ShowInMenus',$args['ShowInMenus']);
						}

						if (isset($args['Title'])) {
							$list = $list->filter('Title:PartialMatch', $args['Title']);
						}

						return $list;
					})
				->end();

			return $scaffolder;
		}

		public function canView($member = '')
		{
			return true;
		}


	}

}
