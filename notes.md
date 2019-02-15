###oloid-website aufsetzen

* `npm install -g vuepress` braucht evtl. sudo
* Nach `npm run watch` ggf. einen Hinweis auf `localhost:8080` einfuegen.

### Introduction
* http://localhost:8080/oloid-website/introduction/#what-is-a-pattern --> "You might now partials" --> `know`

### Setup

* Hinweis das PHP 7.1 benötigt wird fehlt.
    ```
    sudo add-apt-repository ppa:ondrej/php
    sudo apt-get update
    sudo apt-get remove php7.0
    sudo apt-get install php7.1
    sudo apt-get install php7.1-cli php7.1-common php7.1-json php7.1-opcache php7.1-mysql php7.1-mbstring php7.1-mcrypt php7.1-zip php7.1-fpm php7.1-xml
    ```
* Hinweis, wie man ein Laravel Projekt aufsetzt fehlt.
    ```
    composer global require "laravel/installer=~1.1"
    ~/.config/composer/vendor/bin/laravel new my-website
    cd my-website
    npm install
    cp .env.example .env
    php artisan key:generate
    npm run dev
    php artisan serve
    ```    
* http://localhost:8080/oloid-website/setup/installation-details.html --> Vielleicht in der Ordnerstrukturübersicht auch den LARAVEL-HOME/ressources Ordner noch mt abbilden. Dann muss man den Text nicht lesen.
* http://localhost:8080/oloid-website/setup/installation-details.html#laravel-configuration --> `we add an extra view path in the view.php config file` zu `config/view.php` ergänzen
* http://localhost:8080/oloid-website/setup/installation-details.html#laravel-configuration --> `php artisan vendor:publish` In der Anleitung ergänzen

### Usage
Hinweis: Bei mir funktionieren die Tastatur Shortcuts nur mit Ctrl. In der Anleitung wird aber von einer verwendung ohne ctrl ausgegangen. Ich habe das jetzt mal mit aufgeschrieben, evtl. fehlt aber nur ein Update des packages.
* http://localhost:8080/oloid-website/usage/create-pattern.html#create-a-new-pattern-within-the-workshop --> `using the shortcut c` zu `using the shortcut ctrl + c`
* http://localhost:8080/oloid-website/usage/create-pattern.html#create-a-new-pattern-within-the-workshop --> `Now head over to your to your IDE ` zu `Now head over to your IDE`
* http://localhost:8080/oloid-website/usage/use-pattern.html#use-a-pattern `You have to possibilies` --> `two`
* http://localhost:8080/oloid-website/usage/preview-pattern.html#actions-on-the-preview-page Keyboard shortcut --> `Ctrl + e` und `Ctrl + d` (inkl. Ctrl) Bei mir kommt bei e --> Suche mit Google und d die Lesezeichen
* Wieso kann ich den Status nicht wieder auf todo ändern?
* Die Warning bei der Verwendung von rejected patterns funktioniert nur bei der Syntax `@buttons('submit', ['caption' => 'Submit'])` und nicht bei `@include('patterns.buttons.submit', ['caption' => 'Submit'])` Siehe https://github.com/ion2s-gmbh/oloid-laravel-patternlib/issues/5
* http://localhost:8080/oloid-website/usage/remove-pattern.html#remove-a-pattern Shortcut `Ctrl`
* http://localhost:8080/oloid-website/usage/global-resources.html#examples Es sollte gesagt werden, wo man das eingeben kann --> Workshop --> Zahnrad oben rechts
* http://localhost:8080/oloid-website/usage/global-resources.html#examples `Ctrl nennen`