module.exports = {
  dest: 'docs',
  title: 'Oloid - The living desingsystem for Laravel',
  description: 'Create a living designsystem for your Laravel apps',
  head: [
    ['link', { rel: 'preconnect', href: 'https://fonts.gstatic.com/' }],
    ['link', { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Noto+Serif:700' }]
  ],

  themeConfig: {
    repo: 'ion2s-gmbh/oloid-laravel-patternlib',

    lastUpdated: true,
    docsRepo: 'ion2s-gmbh/oloid-website',
    docsDir: 'src',
    editLinks: true,
    editLinkText: 'You\'re welcome to improve this page.',

    nav: [
      {
        text: 'Documentation',
        link: '/introduction/'
      },
      {
        text: 'Changelog',
        link: '/changelog.md'
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
          '/setup/installation-details',
        ]
      },
      {
        title: 'Usage',
        children: [
          ['/usage/', 'Entering the workshop'],
          '/usage/dashboard',
          '/usage/create-pattern',
          '/usage/use-pattern',
          '/usage/preview-pattern',
          '/usage/remove-pattern',
          '/usage/rename-pattern',
          '/usage/global-resources',
          '/usage/shortcuts'
        ]
      }
    ]
  }
};