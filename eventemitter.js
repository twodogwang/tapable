var EventEmitter = /** @class */ (function () {
    function EventEmitter() {
        this.events = Object.create(null);
    }
    EventEmitter.prototype.$on = function (event, callback) {
        if (this.events[event]) {
            this.events[event].push(callback);
        }
        else {
            this.events[event] = [callback];
        }
    };
    EventEmitter.prototype.$emit = function (event, args) {
        var _this = this;
        this.events[event].forEach(function (callback) {
            callback.call(_this, args);
        });
    };
    return EventEmitter;
}());
var e = new EventEmitter();
e.$on('test', function () {
    console.log('a');
});
e.$emit('test');
