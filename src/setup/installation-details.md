---
title: Installation details
---
# Installation details

[[toc]]

## Basic folder structure
After running `php artisan workshop:install` you'll find an empty folder structure in your Laravel project's resources
folder:

```bash
views
├── resources.json // (optional)
└── patterns
```

```bash
resources/
└── views
    ├── auth
    ├── home.blade.php
    ├── layouts
    ├── patterns
    │   └── patterns.scss
    ├── resources.json
    └── welcome.blade.php
```

## Laravel configuration
In order to use the generated patterns we must tell Laravel, where to find these additional Blade templates.
Your templates are located in `/resources/views` by default. By running `php artisan workshop:install` we add an 
extra view path in the `config/view.php` config file if you chose another base folder than `views`.

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
The following resources are published when you run `php artisan workshop:install`:
```bash
public/vendor/workshop/css/app.css
public/vendor/workshop/images
public/vendor/workshop/js/app.css
```

## Changing the base path
Once you change the `WORKSHOP_BASE_PATH` in your `.env` file, you should run:
```php
php artisan workshop:reconfig
``` 
This will apply the correct path in `config/view.php` and create a new and fresh folder structure in your resources folder.