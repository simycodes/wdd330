import { PI } from './pi.js';

import  { mean, variance } from './stats.js';
//import  { mean } from './stats.js'; // can be done
// Now the mean() and variance() functions can be used in the main.js file. Notice that the
// quare() and sum() functions are not available because they were not exported in the 
// module. This effectively makes them private functions of the stats module. 

// default imports from default exports
import PI from './pi.js';
import square from './square.js';
import stats from './stats.js';


// The alias that is assigned to the imported module does not have to match its name in
// the actual module. For example, you could import the square function in the following
// way:

import sq from './square.js';