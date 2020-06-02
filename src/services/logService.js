import * as Sentry from '@sentry/browser';

function init() {
  Sentry.init({dsn: "https://f330e406e04b42df9f27f18983204080@o386705.ingest.sentry.io/5252971"});
}

function log(error) {
  Sentry.captureException(error);
}

export default {
  init,
  log
};