---
title: Create a new Pattern
---
# Create a new Pattern

[[toc]]

## Create a new pattern within the workshop
You can create a new pattern by clicking the button at the top right corner of the workshop or by using the shortcut 
`Ctrl + C`. This will open the form to create a new pattern.

The pattern has to have a name. The name can be nested by using the dot-notation that you are familiar with the Blade
view notation.

::: warning
In theory, you can nest a pattern how often you want. Though, we recommend a nesting level of 2-5.
:::

Example names for patterns:  
```
buttons.submit
buttons.cancel
```

Or following the atomic design methodology:
```
atoms.buttons.submit
organisms.forms.signin
```

The description is optional and can contain markdown content.

The workshop creates three files for each pattern (e.g. buttons.submit)
* buttons/submit.blade.md
* buttons/submit.scss
* buttons/submit.md

The scss file is automatically imported in a base scss file called pattern.scss. You have to import this file in your
app's `app.scss` file in order to use your pattern's stylings.

Now head over to your to your IDE and open one of the created files to start coding.

## Code the Blade file
In your Blade file, you can write Blade code as usual. You can use variables, too.
```php
<button type="submit" class="button button-rounded">
    {{ $caption }}
</button>
```

::: tip
Make sure that you define any template variables in the front-matter part of the corresponding md file.  
This also enables a certain independence from backend implementation since you can mock variable data.
:::

## Code the md file
The pattern's markdown file consists of two parts:
* front-matter
* body

The body simply contains the optional description.

The front-matter part contains the following keys and values:
* status: The status of the pattern. This is either: todo, review, rejected or done. You don't have to edit this value manually. It is set via the workshop.
* values: This key contains all variable data, that is used in the Blade template file.

```md
---
status: review
values:
    caption: Save
---
## Submit button
This button can be used to submit a form.
```

## Code the scss file
The scss file contains the required style for this pattern.

```scss
.button {
  background-color: #4CAF50;
  border: none;
  color: white;
  padding: 10px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 4px 2px;
}

.button-rounded {border-radius: 8px;}
```

After creating a new pattern you are redirected to the preview page of the pattern. In the beginning, this view is more or less empty unless you start coding.

### Importing the patterns.scss
Make sure that you import the newly created WORKSHOP_PATTERN_PATH/patterns.scss file in your application's main app.scss file, in order to use your style definitions.
```scss
@import '../oloid/patterns/patterns';
```

::: warning
Run `npm run dev` to compile your frontend.
:::