// function to callback a function

function receivesAFunction(callback){
    callback();
}

// function to return a named function
function returnsANamedFunction () {
    // Named function
    function toNamed() {

    }
    return toNamed;
}
// function returning an anonymous function
function returnsAnAnonymousFunction () {

    return function () {

    }
}