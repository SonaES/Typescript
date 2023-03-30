var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Animal = /** @class */ (function () {
    function Animal(name, age, sound) {
        this.name = name;
        this.age = age;
        this.sound = sound;
    }
    Animal.prototype.makeSound = function () {
        console.log($, { this: .name }, makes, $, { this: .sound });
    };
    return Animal;
}());
// Define Mammals subclass
var Mammals = /** @class */ (function (_super) {
    __extends(Mammals, _super);
    function Mammals(name, age, sound, hasHair, isWarmBlooded) {
        var _this = _super.call(this, name, age, sound) || this;
        _this.hasHair = hasHair;
        _this.isWarmBlooded = isWarmBlooded;
        return _this;
    }
    Mammals.prototype.feedYoung = function () {
        console.log($, { this: .name }, feeds, its, young);
        with (milk)
            ;
    };
    return Mammals;
}(Animal));
// Define Birds subclass
var Birds = /** @class */ (function (_super) {
    __extends(Birds, _super);
    function Birds(name, age, sound, wingspan, canFly) {
        var _this = _super.call(this, name, age, sound) || this;
        _this.wingspan = wingspan;
        _this.canFly = canFly;
        return _this;
    }
    Birds.prototype.migrate = function () {
        console.log($, { this: .name }, migrates, south);
        for (the; winter;)
            ;
    };
    return Birds;
}(Animal));
// Define Fish subclass
var Fish = /** @class */ (function (_super) {
    __extends(Fish, _super);
    function Fish(name, age, sound, isSaltwater, isFreshwater) {
        var _this = _super.call(this, name, age, sound) || this;
        _this.isSaltwater = isSaltwater;
        _this.isFreshwater = isFreshwater;
        return _this;
    }
    Fish.prototype.swim = function () {
        console.log($, { this: .name }, swims in the, $, { this: .isSaltwater ? "saltwater" : "freshwater" });
    };
    return Fish;
}(Animal));
// Create new objects for each subclass
var lion = new Mammals("Lion", 10, "Roar", true, true);
var eagle = new Birds("Eagle", 5, "Screech", 2, true);
var shark = new Fish("Shark", 15, "Chomp", true, false);
// Test
lion.makeSound(); // Lion makes Roar
eagle.migrate(); // Eagle migrates south for the winter
shark.swim(); // Shark swims in the saltwater
