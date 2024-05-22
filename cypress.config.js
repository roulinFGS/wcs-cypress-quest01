const { defineConfig } = require("cypress");
require('dotenv').config();

module.exports = defineConfig({
  projectId: process.env.projectId,

  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
