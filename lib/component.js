/*jslint node: true, nomen: true, white: true, unparam: true*/
/*!
 * Sitegear3
 * Copyright(c) 2014 Ben New, Sitegear.org
 * MIT Licensed
 */

(function (_, schemaValidator) {
	"use strict";

	module.exports = function (app) {
		var self = {
			index: function (request, response, next) {
				var path = request.path.replace(/\/+$/, '') || 'index';
				self.pageRepository.get(path, function (error, page) {
					if (error) {
						next(error);
					} else if (!_.isUndefined(page) && !_.isNull(page)) {
						response.render('default/index', { fragments: page });
					} else {
						next();
					}
				});
			}
		};

		self.pageRepository = app.data.define('page', schemaValidator(require('./schema/page.schema.json'))).on('error', function (error) {
			console.log('Page repository encountered an error: ' + error);
		});

		return self;
	};
}(require('lodash'), require('sitegear3-validator-schema')));
