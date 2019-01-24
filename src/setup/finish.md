---
title: Finish the installation
---
# Finish the installation
Finally, you finish the installation by running:

```bash
php artisan workshop:install
```

This command will configure your Laravel project to use oloid-laravel-patternlib
and publish some of our assets/resources.

## Laravel configuration
In order to use the generated patterns we must tell Laravel, where to find these additional Blade templates.
Your templates are located in `/resources/oloid` by default. By running `php artisan workshop:install` we add an 
extra view path in the `view.php` config file.

```php{14}
/*
|--------------------------------------------------------------------------
| View Storage Paths
|--------------------------------------------------------------------------
|
| Most templating systems load templates from disk. Here you may specify
| an array of paths that should be checked for your views. Of course
| the usual Laravel view path has already been registered for you.
|
*/

'paths' => [
    resource_path('views'),
    resource_path('oloid'),
],
```

## Published vendor resources
The following resourced are published and can be customized:
```bash
config/workshop.php
public/vendor/workshop/css/app.css
public/vendor/workshop/images
public/vendor/workshop/js/app.css
```

Also the folder `resources/<WORKSHOP_BASE_PATH>/<WORKSHOP_PATTERN_PATH>`


## Changing the base path
Once you change the `WORKSHOP_BASE_PATH` in your `.env` file, you should run:
```php
php artisan workshop:reconfig
``` 
This will apply the correct path in `view.php` and create a new and fresh folder structure in your resources folder.