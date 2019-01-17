module.exports = {
  base: '/laratomics-website/',
  dest: 'docs',

  themeConfig: {
    repo: 'poolingpeople/laratomics-workshop',
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
          '/setup/configuration'
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