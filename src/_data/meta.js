export const url = process.env.URL || 'http://localhost:8080';
export const siteName = 'UCD Centre for Bioinformatics'
export const siteDescription = 'The virtual UCD Centre for Bioinformatics';
export const siteType = 'Person'; // schema
export const locale = 'en_EN';
export const lang = 'en';
export const skipContent = 'Skip to content';
export const author = {
  name: 'Graham Hughes', // i.e. Graham Hughes - page / blog author's name. Must be set.
  avatar: '/icon-512x512.png', // path to the author's avatar. In this case just using a favicon.
  email: 'g.hughes@ucd.ie', // i.e. kherronism@gmail.com - email of the author
  website: 'https://www.github.com/GMHughes' // - the personal site of the author
};
export const creator = {
  name: 'UCD Centre for Bioinformatics', // i.e. Graham Hughes - creator's (developer) name.
  email: 'g.hughes@ucd.ie',
  website: 'https://www.github.com/GMHughes',
  social: 'https://x.com/GMHughes'
};
export const template = {
  name: 'Excellent Eleventy 3.1.3',
  website: 'https://eleventy-excellent.netlify.app/'
};
export const pathToSvgLogo = 'src/assets/svg/misc/logo.svg'; // used for favicon generation
export const themeColor = '#6daa2c'; //  Manifest: defines the default theme color for the application
export const themeBgColor = '#FBFBFB'; // Manifest: defines a placeholder background color for the application page to display before its stylesheet is loaded
export const opengraph_default = '/assets/images/template/opengraph-default.jpg'; // fallback/default meta image
export const opengraph_default_alt =
  "Visible content: An Eleventy starter with CUBE CSS, Cube CSS, Every Layout, Design Tokens and Tailwind for uitility classes. A workflow for building modern and resilient websites, introduced by Andy Bell's project buildexcellentwebsit.es"; // alt text for default meta image"
export const blog = {
  // RSS feed
  name: 'UCD Centre for Bioinformatics',
  description: 'Keep in touch with the UCD Centre for Bioinformatics.',
  // feed links are looped over in the head. You may add more to the array.
  feedLinks: [
    {
      title: 'Atom Feed',
      url: '/feed.xml',
      type: 'application/atom+xml'
    },
    {
      title: 'JSON Feed',
      url: '/feed.json',
      type: 'application/json'
    }
  ],
  // Tags
  tagSingle: 'Tag',
  tagPlural: 'Tags',
  tagMore: 'More tags:',
  // pagination
  paginationLabel: 'News',
  paginationPage: 'Page',
  paginationPrevious: 'Previous',
  paginationNext: 'Next',
  paginationNumbers: true
};
export const details = {
  aria: 'section controls',
  expand: 'expand all',
  collapse: 'collapse all'
};
export const navigation = {
  navLabel: 'Menu',
  ariaTop: 'Main',
  ariaBottom: 'Complementary',
  ariaPlatforms: 'Platforms',
  drawerNav: true
};
export const themeSwitch = {
  title: 'Theme',
  light: 'light',
  dark: 'dark'
};
export const greenweb = {
  // this goes into src/common/greenweb.njk
  providers: {
    // if you want to add more than one, edit the array directly.
    domain: 'github.com',
    service: 'cdn'
  },
  credentials: {
    // optional, eg: 	{ domain='my-org.com', doctype = 'webpage', url = 'https://my-org.com/our-climate-record'}
    domain: '',
    doctype: '',
    url: ''
  }
};
export const viewRepo = {
  // this is for the view/edit on github link. The value in the package.json will be pulled in.
  allow: true,
  infoText: 'View this page on GitHub'
};
export const easteregg = true;
