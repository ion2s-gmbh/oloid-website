---
title: Using patterns
---
# Use a pattern
Now that you have created a new pattern, let's use it in our templates.
Suppose we want to place a submit button on the welcome page of our Laravel app. You have to possibilies:

## Using Blade includes
```php
@include('patterns.buttons.submit', ['caption' => 'Submit'])
```

::: warning NOTE
There is a shorter way to reference patterns, by using our custom directives.
:::

## Using custom directives
The workshop automatically registers Blade directives for your patterns. The first part of the pattern's name is used 
as the directive's name. See the following example:

```php
@buttons('submit', ['caption' => 'Submit'])
```

::: tip
Of course, you can reference patterns in other patterns, too.
:::

## Replacing dynamic content in patterns
By passing an array as the second argument to the reference of a pattern, you can pass dynamic variables, that come 
from your backend implementation.