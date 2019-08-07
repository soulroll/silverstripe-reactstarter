<?php
namespace Reactstarter\Reactstarter\ModelAdmin;

use SilverStripe\Admin\ModelAdmin;
use Reactstarter\Reactstarter\Model\Team;

class DogAppAdmin extends ModelAdmin
{
	private static $url_segment = 'teams';

	private static $menu_title = 'Teams';

	private static $managed_models = [
		Team::class
	];
}

