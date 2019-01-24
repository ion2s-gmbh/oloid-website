module.exports = {
  base: '/oloid-website/',
  dest: 'docs',

  themeConfig: {
    repo: 'ion2s-gmbh/oloid-laravel-patternlib',
    lastUpdated: true,
    nav: [
      {
        text: 'Documentation',
        link: '/introduction/'
      },
      {
        text: 'ion2s Gmbh',
        link: 'https://www.ion2s.com'
      }
    ],
    sidebar: [
      {
        title: 'Introduction',
        children: [
          ['/introduction/', 'What it is']
        ]
      },
      {
        title: 'Setup',
        children: [
          ['/setup/', 'Get started'],
          '/setup/configuration',
          '/setup/finish',
        ]
      },
      {
        title: 'Usage',
        children: [
          ['/usage/', 'Opening the workshop'],
          '/usage/dashboard',
          '/usage/create-pattern',
          '/usage/preview-pattern',
          '/usage/remove-pattern',
          '/usage/use-pattern',
          '/usage/rename-pattern',
          '/usage/global-dependencies',
          '/usage/shortcuts'
        ]
      }
    ]
  }
};