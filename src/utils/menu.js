const menu = [
  {
    name: 'Products',
    sublinks: [
      {
        name: 'App',
        link: 'https://app.brainaut.net/#/',
        description: 'Swap tokens and supply liquidity',
      },
      {
        name: 'Analytics',
        link: 'https://info.brainaut.net/',
        description: 'Brainaut analytics and historical data',
      },
      {
        name: 'Token Lists',
        link: 'https://tokens.brainaut.me/',
        description: 'Standard Binance Smart Chain token list standard.',
      },
    ],
  },
  {
    name: 'Developers',
    sublinks: [
      {
        name: 'Documentation',
        link: '/docs/v1', //This was v2
      },
      { name: 'GitHub', link: 'https://github.com/brainaut' },
      { name: 'Whitepaper', link: '#' },
      { name: 'Bug Bounty', link: '/bug-bounty' },
    ],
  },
  {
    name: 'Community',
    sublinks: [
      { name: 'Telegram', link: 'https://t.me/brainaut' },
      { name: 'Twitter', link: 'https://twitter.com/brainaut' },
      { name: 'Reddit', link: 'https://reddit.com/r/brainaut' },
      { name: 'Github', link: 'https://gitub.com/brainaut' },
      { name: 'Medium', link: 'https://www.medium.com/@brainaut' },
      { name: 'Discord', link: '#' },
    ],
  },
  {
    name: 'About',
    sublinks: [
      {
        name: 'Info',
        link: '/about',
      },
      {
        name: 'FAQ',
        link: 'docs/v1/faq',
      },
    ],
  },
]

module.exports = menu
