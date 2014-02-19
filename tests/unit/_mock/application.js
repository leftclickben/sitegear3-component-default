/*jslint node: true, nomen: true, white: true, unparam: true*/
/*!
 * Sitegear3
 * Copyright(c) 2014 Ben New, Sitegear.org
 * MIT Licensed
 */

(function (_, mockMediator) {
	"use strict";

	module.exports = function () {
		return 	{
			settings: {},
			locals: {},
			start: _.noop,
			stop: _.noop,
			get: function (key) {
				return this.settings[key];
			},
			data: mockMediator()
		};
	};
}(require('lodash'), require('./mediator')));
