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

## Replacing dynamic content
By passing an array as the second argument to the reference of a pattern, you can pass dynamic variables, that come 
from your backend implementation.

See the following example which uses the pattern `pages.todos`.

### Blade template
In your pattern's template file you can use variables as you are used to. There is no need to have a backend 
implementation in order to see the preview in the workshop. 

```php
<ul>
    @foreach($todos as $todo)
        <li>{{ $todo }}</li>
    @endforeach
</ul>
```

### Frontmatter in md file
You can mock the variables in the pattern's markdown file in the frontmatter part.

```md
---
status: todo
values:
    todos:
        - a
        - b
        - c
---
```

### Integration with backend
Later you can integrate the backend code and pass real variables to the pattern.

```php
class TodosController extends Controller
{
    public function index()
    {
        $todos = [
            'call the customer',
            'define scope',
            'start coding'
        ];

        return view('welcome', ['todos' => $todos]);
    }
}
```

And in welcome.blade.php
```php
@pages('todos')
```