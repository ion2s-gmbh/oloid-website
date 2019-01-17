module.exports = {
  base: '/laratomics-website/',
  dest: 'docs',

  themeConfig: {
    repo: 'poolingpeople/laratomics-workshop',
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
}
;