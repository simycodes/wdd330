function square(x) {
    return x * x;
}

function sum(array, callback) {
    if(callback) {
        array = array.map(callback);
    }
    return array.reduce((a,b) => a + b );
}

function variance(array) {
    return sum(array,square)/array.length - square(mean(array))
}

function mean(array) {
    return sum(array) / array.length;
}

export {
    variance,
    mean
}

// Notice that an alternative to using export when the function is defined is to add the 
// export directive after the function definition, as seen in the example above with the
//  variance() function.

// import * as stats from './stats.js';
// This will then import all the functions from the stats.js module and they’ll be given 
// a namespace of stats. So, the mean function could be used as follows:
// stats.mean([2,6,10]);