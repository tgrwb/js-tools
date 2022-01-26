/** tgrwbVersion: 1.0 */
/**
 * Модуль для работы с куки.
 * @module tgrwb-tools/tgrwb-cookies
 *
 * @example
 *   const tgrwbCookies = require('tgrwb-tools/tgrwb-cookies.js');
 */
const tgrwbCookies = {};
module.exports = tgrwbCookies;

/**
 * Добавляет параметр в куки.
 *
 * @param {string} name
 * @param {string} value
 * @param {string} expire - срок жизни куки в днях
 * @param {string} params - дополнительные параметры куки
 *
 * @returns {undefined}
 */
tgrwbCookies.set = function (name, value, expire, params) {
	try {
		if (!params) {
			params = "path=/;";
		}
		var date = new Date;
		date.setDate(date.getDate() + expire);
		window.document.cookie = name + "=" + escape(value)
				+ (!expire ? "" : ";expires=" + date.toGMTString())
				+ (!params ? "" : ";" + params);
	} catch (e) {
		console.error(e);
	}
};

/**
 * Получает параметр из куки.
 *
 * @param {string} name
 * @returns {unresolved}
 */
tgrwbCookies.get = function (name) {
	try {
		var cookie = window.document.cookie;
		var length = cookie.length;
		if (length) {
			var cookie_start = cookie.indexOf(name + "=");
			if (cookie_start !== -1) {
				var cookie_end = cookie.indexOf(";", cookie_start);
				if (cookie_end === -1) {
					cookie_end = length;
				}
				cookie_start += name.length + 1;
				return unescape(cookie.substring(cookie_start, cookie_end));
			}
		}
		return null;
	} catch (e) {
		console.error(e);
	}
};

/**
 * Удаляет параметр из куки.
 *
 * @param {string} name
 * @param {string} params
 * @returns {undefined}
 */
tgrwbCookies.remove = function (name, params) {
	try {
		if (undefined === params) {
			params = 'path=/;';
		}
		this.set(name, "", -1, params);
	} catch (e) {
		console.error(e);
	}
};
