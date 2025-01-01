const { getDataConnect, validateArgs } = require('firebase/data-connect');

const connectorConfig = {
  connector: 'default',
  service: 'hadin-travel-vite',
  location: 'us-central1'
};
exports.connectorConfig = connectorConfig;

