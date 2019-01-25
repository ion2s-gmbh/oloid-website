module.exports = {
  base: '/oloid-website/',
  dest: 'docs',

  plugins: ['@vuepress/back-to-top'],

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
        text: 'CHANGELOG',
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
        ]
      },
      {
        title: 'Usage',
        children: [
          ['/usage/', 'Opening the workshop'],
          '/usage/dashboard',
          '/usage/create-pattern',
          '/usage/use-pattern',
          '/usage/preview-pattern',
          '/usage/remove-pattern',
          '/usage/rename-pattern',
          '/usage/global-dependencies',
          '/usage/shortcuts'
        ]
      }
    ]
  }
};