---
title: Global resources
---
# Global resources
Sometimes you want to use fonts, styles or javascript libraries in your whole project. In other words, these resources
are globally required. We provide a smart way to integrate and use these global resources in your project as well as
in the workshop's preview.

## Integration in the main project
In order to integrate global resources into the main project, you have to add these two lines to your app's layout 
file.

```php{4,14}
<head>
    <title>Laravel</title>

    @include('workshop::resources')

    <!-- Styles -->
    <link href="{{ asset('css/app.css') }}" rel="stylesheet">

    
</head>
<body>
    <!-- Your content goes here -->
    
    @yield('workshop.scripts')
</body>
```

::: tip
The integration in the workshop is already done. Nothing you have to bother about.
:::

## Examples
You can add global resources e.g. from [https://cdnjs.com/](https://cdnjs.com/) by clicking the 
gear icon in the right upper corner or by using the global keyboard shortcut `r`.
```html
<script src="https://cdnjs.cloudflare.com/ajax/libs/lodash.js/4.17.11/lodash.min.js" 
        integrity="sha256-7/yoZS3548fXSRXqc/xYzjsmuW3sFKzuvOCHd06Pmps=" 
        crossorigin="anonymous">
</script>
```

```html
<link href="https://fonts.googleapis.com/css?family=Fira+Sans:400,900" 
      rel="stylesheet">
```

::: tip
Font and style resources should be located in the head while some javascript resources should be located in the head 
or just above the closing `</body>` tag.
:::

Global resources are saved in `<WORKSHOP_BASE_PATH>/resources.json.`
```json
{
  "head": "<link href=\"https:\/\/fonts.googleapis.com\/css?family=ZCOOL+KuaiLe\" rel=\"stylesheet\">\n\n<script src=\"https:\/\/cdnjs.cloudflare.com\/ajax\/libs\/sweetalert\/2.1.2\/sweetalert.min.js\"><\/script>",
  "body": ""
}
```