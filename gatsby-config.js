module.exports = {
  siteMetadata: {
    title: `Welcome!`,
    name: `kkangjeong`,
    siteUrl: `https://kkangjeong.com`,
    description: `This is my weblog`,

    // important to set the main text that appears in the hero
    hero: {
      heading: `Perspectives on technology, design and business from the team at Narative.`,
      maxWidth: 652,
    },
    social: [
      {
        name: `github`,
        url: `https://github.com/kkangjeong`,
      },
    ],
  },
  plugins: ['@narative/gatsby-theme-novela'],
  pathPrefix: "/",

};