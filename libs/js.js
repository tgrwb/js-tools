/**
 * const tgrwbJs = require('@tgrwb/js-tools/libs/js');
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
            name = name || '';
            let nameA = name.split(".");
            let obj = window.tgrwbJs._;
            for (let i in nameA) {
                if (! ! name[i]) {
                    obj[nameA[i]] = obj[nameA[i]] || {};
                    obj = obj[nameA[i]];
                }
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
            name = name || '';
            params = params || {};
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
            name = name || '';
            let obj = this.get(name);
            //
            obj.destroy && obj.destroy();
            //
            let nameA = name.replace(/^(?:|(.+)\.)([^\.]+)$/, '$1###$2').split('###');
            //
            obj = this.get(nameA[0]);
            return delete obj[nameA[1]];
        } catch (e) {
            console.error(e);
        }
    };
}
if (! window.tgrwbJs.has) {
    window.tgrwbJs.has = function (name) {
        try {
            //
            let nameA = name.replace(/^(?:|(.+)\.)([^\.]+)$/, '$1###$2').split('###');
            //
            let obj = this.get(nameA[0]);
            return ! ! obj[nameA[1]];
        } catch (e) {
            console.error(e);
        }
    };
}

module.exports = window.tgrwbJs;
