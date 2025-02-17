export const TWILIO_RED = '#F22F46';
export const TWILIO_BLUE = '#0D122B';
export const PSA_ALERT_HEIGHT = 40;
export const PASTE_THEME_ALERT_HEIGHT = 54;
export const SITE_MASTHEAD_HEIGHT = 76;
/* Note:
 * Changing the mobile breakpoint should be reflected
 * in styles/docSearch.ts
 */
export const SITE_BREAKPOINTS = ['768px', '1024px', '1220px', '1880px'];
export const SITE_CONTENT_MAX_WIDTH = '1440px';

// Used to 'bleed' sections together. GettingStarted+Popular
export const HOMEPAGE_SECTION_OVERFLOW_OFFSET = 150;

export const PASTE_PACKAGE_PREFIX = '@twilio-paste/';
export const STORYBOOK_DOMAIN = 'https://paste-storybook.twilio.design';
export const REMIX_DOMAIN = 'https://remix.twilio.design';
export const FIGMA_PROFILE_URL = 'https://www.figma.com/@twilio';

// IDs for skip links
export const PASTE_DOCS_CONTENT_AREA = 'paste-docs-content-area';
export const PASTE_DOCS_SEARCH_INPUT = 'paste-docs-search-input';
export const PASTE_DOCS_SEARCH_INPUT_MOBILE = 'paste-docs-search-input-mobile';

// Used to adjust scrolling elements to account for sticky filter on tokens/list page
export const TOKEN_STICKY_FILTER_HEIGHT = [192, 108, 192, 108];

// Regex that looks for match on `/tokens/list/` route, specifically
export const TOKEN_LIST_PAGE_REGEX = /^\/tokens\/list\/$/;

// env variables
export const DATADOG_APPLICATION_ID = process.env.GATSBY_DATADOG_APPLICATION_ID || 'no env variable';
export const DATADOG_CLIENT_TOKEN = process.env.GATSBY_DATADOG_CLIENT_TOKEN || 'no env variable';
export const DOCSEARCH_APIKEY = process.env.GATSBY_DOCSEARCH_APIKEY || 'no env variable';
export const DOCSEARCHV3_APIKEY = process.env.GATSBY_DOCSEARCHV3_APIKEY || 'no env variable';
export const DOCSEARCHV3_INDEXNAME = process.env.GATSBY_DOCSEARCHV3_INDEXNAME || 'no env variable';
export const DOCSEARCHV3_APPID = process.env.GATSBY_DOCSEARCHV3_APPID || 'no env variable';
// Netlify provides an environment variable called CONTEXT which reflects their build context https://docs.netlify.com/site-deploys/overview/#deploy-contexts
// We need to use this to know where the Gatsby site is being run for metrics tracking. Gatsby env variables all need
// start with GATSBY_, so GATSBY_ENVIRONMENT_CONTEXT is just a re-implementation of Netlify's $CONTEXT
export type EnvironmentContext = 'production' | 'deploy-preview' | 'branch-deploy' | 'local';
export const ENVIRONMENT_CONTEXT: EnvironmentContext =
  (process.env.GATSBY_ENVIRONMENT_CONTEXT as EnvironmentContext) || 'local';

export const SidebarCategoryRoutes = {
  INTRODUCTION: '/introduction',
  FOR_DESIGNERS: '/introduction/for-designers',
  FOR_ENGINEERS: '/introduction/for-engineers',
  CONTRIBUTING: '/introduction/contributing',
  ACCESSIBILITY: '/accessibility',
  FOUNDATIONS: '/foundations',
  CONTENT: '/foundations/content',
  FOUNDATIONS_LOCALIZATION: '/foundations/localization',
  PATTERNS: '/patterns',
  EXPERIENCES: '/experiences',
  COMPONENTS: '/components',
  PRIMITIVES: '/primitives',
  TOKENS: '/tokens',
  CORE: '/core',
  LIBRARIES: '/core/libraries',
  CUSTOMIZATION: '/customization',
  ROADMAP: '/roadmap',
  BLOG: '/blog',
  THEME: '/theme',
};

export const PackageStatus = {
  BACKLOG: 'backlog',
  ALPHA: 'alpha',
  BETA: 'beta',
  STABLE: 'stable',
};

export const SiteMetaDefaults = {
  TITLE: 'Paste: The Design System for building Twilio customer experiences',
  DESCRIPTION:
    'Paste is the design system for designing and building consistent experiences at Twilio. It is made up of tokens and components, along with in-depth documentation to assist designers and developers faced with solving our customers’ problems. It is open source and contributions are welcome.',
};

export const StatusDescriptions = {
  ALPHA:
    'An experimental component that isn’t ready for use in production. API will likely change. This component may be removed if it doesn’t test well.',
  BETA: 'Component is almost mature, but may have some bugs. Needs production feedback and will experience very minimal API changes.',
};
