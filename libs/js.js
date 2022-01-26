/** tgrwbVersion: 1.0 */
/**
 * const tgrwbJs = require('tgrwb-tools/tgrwb-js.js');
 */
if (!window.tgrwbJs) {
	window.tgrwbJs = {};
}
if (!window.tgrwbJs._) {
	window.tgrwbJs._ = {};
}
if (!window.tgrwbJs.get) {
	window.tgrwbJs.get = function (name) {
		try {
			var nameA = name.split(".");
			var obj = window.tgrwbJs._;
			for (var i in nameA) {
				obj[nameA[i]] || (obj[nameA[i]] = {});
				obj = obj[nameA[i]];
			}
			return obj;
		} catch (e) {
			console.error(e);
		}
	};
}
if (!window.tgrwbJs.init) {
	window.tgrwbJs.init = function (name, params) {
		try {
			var obj = this.get(name);
			obj.init && obj.init(params);
			return obj;
		} catch (e) {
			console.error(e);
		}
	};
}

module.exports = window.tgrwbJs;
