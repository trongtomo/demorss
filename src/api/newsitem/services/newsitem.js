'use strict';

/**
 * newsitem service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::newsitem.newsitem');
