module.exports = {
  ci: {
    "collect": {
      "numberOfRuns": 3,
      "url": [
        "https://m0nch1-stores.com/"
      ]
    },
    "upload": {
      target: 'lhci',
      serverBaseUrl: 'https://railway-lhci-server-production.up.railway.app',
      token: '02ba037d-efd8-4f64-a3c7-e03cf17e14c7',
    },
  },
};