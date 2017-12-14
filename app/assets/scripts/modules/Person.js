function Person(fullName, favColor) {
    this.name = fullName;
    this.favoriteColor = favColor;
    this.greet = function () {
        console.log("Hello, my name is " + name + " and my favoirte color is " + favColor + ".");
    }
}

module.exports = Person;