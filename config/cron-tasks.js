"use strict";

async function updateFeed() {
  return await strapi.config.feedUpdater.main();
}
module.exports = {
  "10 * * * * *": ({ strapi }) => {
    console.log("Chay cron trong 10s");
    updateFeed();
  },
};
