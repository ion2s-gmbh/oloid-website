module.exports = {
  base: '/laratomics-website/',
  dest: 'docs',

  themeConfig: {
    nav: [
      {
        text: 'Documentation',
        link: '/documentation/'
      },
      {
        text: 'Github',
        link: 'https://github.com/poolingpeople/laratomics-workshop'
      }
    ],
    sidebar: [
      {
        title: 'Setup',
        children: [
          '/documentation/installation',
          '/documentation/configuration'
        ]
      },
      {
        title: 'Usage',
        children: [
          '/documentation/usage',
          '/documentation/dashboard',
          '/documentation/create-pattern'
        ]
      }
    ]
  }
}
;