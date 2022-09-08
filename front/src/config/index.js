// export * from './config';

export default {
  appName: process.env.APP_NAME_LABEL || 'Dominos',
  appKey: process.env.APP_NAME || 'dominos',
  // appLogo: '',
  // display: {
  //   primaryColor: process.env.VUE_APP_WHITELABEL_PRIMARY_COLOR || '#0077b6',
  //   secondaryColor: process.env.VUE_APP_WHITELABEL_SECONDARY_COLOR || '#0077b6',
  //   backgroundColor: 'primary',
  //   backgroundImage: 'https://source.unsplash.com/random/1920x1080',
  //   appLogo: '',
  // },
  // titleLogo: '',
  env: process.env.VUE_APP_ENV || 'development', // production / test
  defaultLocale: 'fr',
  /* eslint-disable */
  apiUrl: process.env.VUE_APP_API_URL || (process.env.NODE_ENV === 'development' ? 'http://localhost:1337/' : '/'),
  // googleAuthClient: process.env.VUE_APP_GOOGLE_AUTH_CLIENT || '735540248134-ggfesuvs015qf6f1fqs79aufslflp29s.apps.googleusercontent.com',
  // buildDate: process.env.BUILDDATE || 'now',
  // version: '',
  // defaultTitle: 'Cimple',
  // primaryKey: 'id', // || '_id'
  // features: {
  //   googleAuth: process.env.VUE_APP_GOOGLE_AUTH_ACTIVE || false,
  //   facebookAuth: false,
  //   register: true,
  //   passwordReset: true,
  //   autoWireAllModels: true,
  //   customLogo: process.env.VUE_APP_CUSTOM_LOGO || false,
  //   whiteLabel: process.env.VUE_APP_WHITELABEL || false,
  // },
  // msalConfig: {
  //   auth: {
  //     clientId: process.env.VUE_APP_MS_AUTH_CLIENT || '1688ee8e-628d-4d25-bd30-067d1a5a4e5a',
  //     authority: 'https://login.microsoftonline.com/common',
  //     redirectUri: document.location.origin,
  //   }
  // },
  // microsoftGraphMeEndpoint: 'https://graph.microsoft.com/v1.0/me'
};
