
const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    env:{
      requestMode: true
    },
    fixturesFolder: false,
    setupNodeEvents(on, config) {
      // implement node event listeners here

    },
  },
});
