function createCar(manufacturer, modelName) {
    var options = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        options[_i - 2] = arguments[_i];
    }
    var car = {
        manufacturer: manufacturer,
        modelName: modelName
    };
    // Loop through the options and add them to the car object
    options.forEach(function (option) {
        var key = option[0], value = option[1];
        car[key] = value;
    });
    return car;
}
