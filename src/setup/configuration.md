---
title: Configuration
---
## Going with the default
You can stick to the default if you want to. In this case all your patterns will be saved in Laravel's resources/views folder.

```dotenv
WORKSHOP_URI=workshop
WORKSHOP_BASE_PATH=views
WORKSHOP_PATTERN_PATH="${WORKSHOP_BASE_PATH}/patterns"
```

# Configuration
By using the following properties in your `.env` file, you can customize the URI of the workshop GUI and the destination folder where your patterns are stored.

```dotenv
WORKSHOP_URI=workshop
WORKSHOP_BASE_PATH=oloid
WORKSHOP_PATTERN_PATH="${WORKSHOP_BASE_PATH}/patterns"
```
::: warning
The `WORKSHOP_PATTERN_PATH` should be a subpath of `WORKSHOP_BASE_PATH`.
:::