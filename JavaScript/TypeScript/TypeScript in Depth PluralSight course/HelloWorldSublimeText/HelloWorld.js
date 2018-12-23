var HelloWorld = /** @class */ (function () {
    function HelloWorld(message) {
        this.message = message;
    }
    return HelloWorld;
}());
var hello = new HelloWorld('Hello World Sublime');
console.log(hello.message);
