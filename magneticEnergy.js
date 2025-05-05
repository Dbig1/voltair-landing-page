/**

Calculate the magnetic energy stored in an inductor.

@param {number} inductance - The inductance in henrys (must be a positive number).

@param {number} current - The current in amperes (must be a positive number).

@returns {number} Magnetic energy in joules.

@throws {Error} If inductance or current is not a positive number.
*/
function calculateMagneticEnergy(inductance, current) {
if (typeof inductance !== 'number' || inductance <= 0) {
throw new Error('Inductance must be a positive number.');
}
if (typeof current !== 'number' || current < 0) {
throw new Error('Current must be a non-negative number.');
}


const energy = 0.5 * inductance * Math.pow(current, 2);
return energy;
}

// Example usage:
try {
console.log(calculateMagneticEnergy(0.05, 10)); // Output: 2.5
} catch (error) {
console.error(error.message);
}

// Calculate the magnetic energy stored in an inductor using E = 0.5 * L * I^
