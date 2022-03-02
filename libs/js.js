/** tgrwbVersion: 1.0 */
/**
 * const tgrwbJs = require('tgrwb-tools/tgrwb-js.js');
 */
if (! window.tgrwbJs) {
    window.tgrwbJs = {};
}
if (! window.tgrwbJs._) {
    window.tgrwbJs._ = {};
}
if (! window.tgrwbJs.get) {
    window.tgrwbJs.get = function (name) {
        try {
            let nameA = name.split(".");
            let obj = window.tgrwbJs._;
            for (let i in nameA) {
                obj[nameA[i]] || (obj[nameA[i]] = {});
                obj = obj[nameA[i]];
            }
            return obj;
        } catch (e) {
            console.error(e);
        }
    };
}
if (! window.tgrwbJs.init) {
    window.tgrwbJs.init = function (name, params) {
        try {
            let obj = this.get(name);
            obj.init && obj.init(params);
            return obj;
        } catch (e) {
            console.error(e);
        }
    };
}
if (! window.tgrwbJs.destroy) {
    window.tgrwbJs.destroy = function (name) {
        try {
            let obj = this.get(name);
            //
            obj.destroy && obj.destroy();
            //
            let nameA = name.replace(/^(?:|(.+)\.)([^\.]+)$/, '$1###$2').split('###');
            //
            if (nameA[0]) {
                obj = this.get(nameA[0]);
                return delete obj[nameA[1]];
            } else {
                return delete this._[name];
            }
        } catch (e) {
            console.error(e);
        }
    };
}

module.exports = window.tgrwbJs;
