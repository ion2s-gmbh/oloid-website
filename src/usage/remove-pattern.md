---
title: Remove a pattern
---
# Remove a pattern

## Remove a pattern via the workshop
You can remove a pattern by using the button in the hidden menu or by pressig `Ctrl+DEL` on the preview page.

## Remove all patterns
Using the console, you can delete all patterns at once.
```bash
php artisan workshop:clean
```
After confirming the command, you will have an initial folder structure.

::: danger
You should not remove a pattern manually. This will very likely break the system since patterns and scss files are
referenced and imported.
:::