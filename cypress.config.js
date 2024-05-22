const { defineConfig } = require("cypress");

module.exports = defineConfig({
  // TODO hide it
  projectId: "a7bq2k",

  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
