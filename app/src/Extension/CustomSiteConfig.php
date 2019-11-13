<?php

namespace Reactstarter\Reactstarter\Extension;

use SilverStripe\ORM\DataExtension;
use SilverStripe\SiteConfig\SiteConfig;
use SilverStripe\Forms\FieldList;
use SilverStripe\Forms\TextField;
use SilverStripe\GraphQL\Scaffolding\Interfaces\ScaffoldingProvider;
use SilverStripe\GraphQL\Scaffolding\Scaffolders\SchemaScaffolder;
use SilverStripe\GraphQL\QueryFilter\FieldFilterInterface;

class CustomSiteConfig extends DataExtension implements ScaffoldingProvider
{
	/**
	 * @var array
	 */
	private static $db = array(
		'SiteCopyright' => 'Text'
	);

	/**
	 * @return FieldList
	 */
	public function updateCMSFields(FieldList $fields)
	{
		$fields->addFieldsToTab('Root.Main', array(
			TextField::create('SiteCopyright', 'Copyright')
		));

		return $fields;
	}

	/**
	 * @param SchemaScaffolder $scaffolder Scaffolder
	 * @return SchemaScaffolder
	 */
	public function provideGraphQLScaffolding(SchemaScaffolder $scaffolder)
	{
		// Provide entity type
		$typeScaffolder = $scaffolder
			->type(SiteConfig::class)
			->addFields([
				'Title',
				'Tagline',
				'SiteCopyright'
			]);
		// Provide operations
		$typeScaffolder
			->operation(SchemaScaffolder::READ)
				->setName('readSiteConfig')
				->setUsePagination(false)
			->end();

		return $scaffolder;
	}

	/**
	 * Auto-publish any images attached to the SiteConfig object if it's not versioned. Versioned objects will
	 * handle their related objects via the "owns" API by default.
	 */
	public function onAfterWrite()
	{
		if (!$this->owner->hasExtension(Versioned::class)) {
			$this->owner->publishRecursive();
		}
	}

}
