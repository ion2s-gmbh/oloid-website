---
title: Global dependencies
---
# Global dependencies
Sometimes you want to use fonts, styles or javascript libraries in your whole project. In other words, these resources
are globally available. We provide a smart way to integrate and use these global dependencies in your project as well as
in the workshop's preview. 

## Integration in the main project
In order to integrate global dependencies into the main project, you have to add these two lines to your app's layout 
file.

```php{4,9}
<head>
    <title>Laravel</title>

    @include('workshop::dependencies')

    <!-- Styles -->
    <link href="{{ asset('css/app.css') }}" rel="stylesheet">

    @yield('workshop.scripts')
</head>
```

::: tip
The integration in the workshop is already done. Nothing you have to bother about.
:::

## Examples
You can add global dependencies e.g. from https://cdnjs.com/ like so:
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
**integrity** and **crossorigin** attributes are optional. Though we will use them if present.
:::

The workshop automatically detects the tye of resource (style or script) and handles them accordingly.

Global dependencies are saved in `<WORKSHOP_BASE_PATH>/dependencies.json.`
```json
{
  "styles": {
    "7c6d7f6528dd5848ebc15c7ab14de532": {
      "src": "https:\/\/cdnjs.cloudflare.com\/ajax\/libs\/normalize\/8.0.1\/normalize.min.css",
      "integrity": "sha256-l85OmPOjvil\/SOvVt3HnSSjzF1TUMyT9eV0c2BzEGzU=",
      "crossorigin": "anonymous"
    },
    "0e188450c538e533f60d8338e641d554": {
      "src": "https:\/\/fonts.googleapis.com\/css?family=Fira+Sans:400,900",
      "integrity": null,
      "crossorigin": null
    }
  },
  "scripts": {
    "094841b35e7f2d90c081a6f3d18040b4": {
      "src": "https:\/\/cdnjs.cloudflare.com\/ajax\/libs\/sweetalert\/2.1.2\/sweetalert.min.js",
      "integrity": "sha256-KsRuvuRtUVvobe66OFtOQfjP8WA2SzYsmm4VPfMnxms=",
      "crossorigin": "anonymous"
    }
  }
}
```