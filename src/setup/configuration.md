---
title: Configuration
---
# Configuration
By using the following properties in your `.env` file, you can customize the URI of the workshop GUI and the folder where your patterns are stored.

::: warning
The `WORKSHOP_PATTERN_PATH` should be a subpath of `WORKSHOP_BASE_PATH`.
:::

```dotenv
WORKSHOP_URI=workshop
WORKSHOP_BASE_PATH=oloid
WORKSHOP_PATTERN_PATH="${WORKSHOP_BASE_PATH}/patterns"
```

## Go with the default
You can stick to the default, too. Then you'll find all your patterns in Laravel's resources/views folder.

```dotenv
WORKSHOP_URI=workshop
WORKSHOP_BASE_PATH=views
WORKSHOP_PATTERN_PATH="${WORKSHOP_BASE_PATH}/patterns"
```