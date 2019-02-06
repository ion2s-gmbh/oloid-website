# Setup

*  Install vuepress
```bash
npm install -g vuepress
```

* Clone this repository
```bash
git clone https://github.com/ion2s-gmbh/oloid-website.git
```

* Switch into the cloned folder:
```bash
cd oloid-website
```

* For development (with browsersync) run:
```bash
npm run watch
```

* For a production build run:
```bash
npm run build
```
The production build will be located in `./docs`

# Deployment
Commit your changes from `./docs` in the `master` branch and push to trigger
an instant deployment. 