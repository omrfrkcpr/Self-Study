const { defineConfig } = require("cypress");

module.exports = defineConfig({
  watchForFileChange: false, // default true
  defaultCommandTimeout: 10000, // default 4000
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
