// type linkedItem = {
//     value: string;
//     id: number;
//     previous: number | null;
// };
var Foo = /** @class */ (function () {
    function Foo() {
        this.x = [];
    }
    Foo.prototype.test = function () {
        this.x.push({ value: 'foo', id: 0, previous: 0 });
        var myItem = this.x.find(function (x) {
            return x.value === 'foo';
        });
        console.log(myItem);
    };
    return Foo;
}());
var foo = new Foo();
foo.test();
