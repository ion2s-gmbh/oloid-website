module.exports = {
  base: '/oloid-website/',
  dest: 'docs',

  themeConfig: {
    repo: 'ion2s-gmbh/oloid-laravel-patternlib',
    lastUpdated: true,
    nav: [
      {
        text: 'Documentation',
        link: '/setup/'
      }
    ],
    sidebar: [
      {
        title: 'Setup',
        children: [
          ['/setup/', 'Installation'],
          '/setup/configuration',
          '/setup/finish',
        ]
      },
      {
        title: 'Usage',
        children: [
          '/usage/',
          '/usage/dashboard',
          '/usage/create-pattern'
        ]
      }
    ]
  }
};