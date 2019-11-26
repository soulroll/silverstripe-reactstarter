<?php

namespace Reactstarter\Reactstarter\Extension;

use SilverStripe\ORM\DataExtension;
use SilverStripe\SiteConfig\SiteConfig;
use SilverStripe\Forms\FieldList;
use SilverStripe\Forms\TextField;
use SilverStripe\GraphQL\Scaffolding\Interfaces\ScaffoldingProvider;
use SilverStripe\GraphQL\Scaffolding\Scaffolders\SchemaScaffolder;
use SilverStripe\GraphQL\QueryFilter\FieldFilterInterface;
use SilverStripe\Assets\File;
use SilverStripe\Assets\Image;
use SilverStripe\AssetAdmin\Forms\UploadField;

class CustomSiteConfig extends DataExtension implements ScaffoldingProvider
{
	/**
	 * @var array
	 */
	private static $db = array(
		'SiteCopyright' => 'Text'
	);

	/**
	 * @var array
	 */
	private static $has_one = array(
		'SiteLogo' => Image::class
	);

	/**
	 * @var array
	 * @config
	 */
	private static $owns = array(
		'SiteLogo'
	);

	/**
	 * @return FieldList
	 */
	public function updateCMSFields(FieldList $fields)
	{
		$fields->addFieldsToTab('Root.Main', array(
			TextField::create('SiteCopyright', 'Copyright')
		));

		$fields->addFieldsToTab('Root.Main', array(
			UploadField::create('SiteLogo', 'Logo')
				->setDescription('Logo, dimensions of 280x95 to appear in the top left.')
				->setAllowedExtensions(array('jpg','jpeg','png','gif'))
		));

		return $fields;
	}

	public function getSiteLogoLink()
	{
		return $this->owner->SiteLogo()->Link();
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
				'SiteCopyright',
				'Title',
				'Tagline',
				'getSiteLogoLink'
			]);
		// Provide operations
		$typeScaffolder
			->operation(SchemaScaffolder::READ)
				->setName('readSiteConfig')
				->setUsePagination(false)
			->end();

		return $scaffolder;
	}

	public function canView($member = '')
	{
		return true;
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
