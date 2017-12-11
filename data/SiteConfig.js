module.exports = {
  blogPostDir: 'sample-posts', // The name of directory that contains your posts.
  siteTitle: 'Neel Bommisetty, A frontend Developer', // Site title.
  siteTitleAlt: 'Neel Bommisetty', // Alternative site title for SEO.
  siteLogo: '/logos/logo-1024.png', // Logo used for SEO and manifest.
  siteUrl: 'https://neelbommisetty.com', // Domain of your website without pathPrefix.
  pathPrefix: '/', // Prefixes all links. For cases when deployed to example.github.io/gatsby-advanced-starter/.
  siteDescription: "Frontend Developer's Personal Site", // Website description used for RSS feeds/meta description tag.
  siteRss: '/rss.xml', // Path to the RSS file.
  siteFBAppID: '2064700513763142', // FB Application ID for using app insights
  googleAnalyticsID: 'UA-111008911-1', // GA tracking ID.
  disqusShortname: 'neelbommisetty1', // Disqus shortname.
  postDefaultCategoryID: 'Tech', // Default category for posts.
  userName: 'Anonymous User', // Username to display in the author segment.
  userTwitter: '@neelbommisetty', // Optionally renders "Follow Me" in the UserInfo segment.
  userLocation: 'Bengaluru,India', // User location to display in the author segment.
  userAvatar: 'https://api.adorable.io/avatars/150/test.png', // User avatar to display in the author segment.
  userDescription: 'I am a Javascript Developer', // User description to display in the author segment.
  // Links to social profiles/projects you want to display in the author segment/navigation bar.
  userLinks: [
    {
      label: 'GitHub',
      url: 'https://github.com/neelbommisetty',
      name: 'github',
      color:'black'
    },
    {
      label: 'Twitter',
      url: 'https://twitter.com/neelbommisetty',
      name: 'twitter'
    },
    {
      label: 'Email',
      url: 'mailto:neel250294@gmail.com',
      name: 'mail',
      color: 'grey',
    },
    {
      label: 'Facebook',
      url: 'https://facebook.com/neel.bommisetty',
      name: 'facebook',

    },
    {
      label: 'Linkedin',
      url: 'https://linkedin.com/in/neelbommisetty',
      name: 'linkedin'
    }
  ],
  copyright: 'Copyright © 2017. Neel Bommisetty', // Copyright string for the footer of the website and RSS feed.
  themeColor: '#c62828', // Used for setting manifest and progress theme colors.
  backgroundColor: '#e0e0e0' // Used for setting manifest background color.
};
