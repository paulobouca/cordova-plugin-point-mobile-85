var exec = cordova.require("cordova/exec");

module.exports = {
    scan: function (successCallback, errorCallback) {
        exec(successCallback, errorCallback, 'PointMobile85', 'scan', []);
    },
    cancel: function () {
        exec(null, null, 'PointMobile85', 'cancel', []);
    }
};
