/* jshint node: true */

module.exports = function (environment) {
  var ENV = {
    modulePrefix: 'ember-playground',
    environment: environment,
    rootURL: '/',
    contentSecurityPolicy: {'connect-src': "'self' wss://*.firebaseio.com"},
    firebase: 'https://tasks-6a54e.firebaseio.com/',
    firebase: {
      apiKey: 'AIzaSyCeltowf-1A0mLxDtV9ImpCIpfG-H6YpP4',
      authDomain: 'tasks-6a54e.firebaseapp.com',
      databaseURL: 'https://tasks-6a54e.firebaseio.com/',
      // storageBucket: 'YOUR-FIREBASE-APP.appspot.com',
    },
    locationType: 'auto',
    EmberENV: {
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. 'with-controller': true
      }
    },

    APP: {
      // Here you can pass flags/options to your application instance
      // when it is created
    }
  };

  if (environment === 'development') {
    // ENV.APP.LOG_RESOLVER = true;
    // ENV.APP.LOG_ACTIVE_GENERATION = true;
    // ENV.APP.LOG_TRANSITIONS = true;
    // ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
    // ENV.APP.LOG_VIEW_LOOKUPS = true;
  }

  if (environment === 'test') {
    // Testem prefers this...
    ENV.locationType = 'none';

    // keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;

    ENV.APP.rootElement = '#ember-testing';
  }

  if (environment === 'production') {

  }

  return ENV;
};
