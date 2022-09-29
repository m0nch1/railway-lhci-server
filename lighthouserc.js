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
      token: process.env.LHCI_TOKEN,
    },
  },
};