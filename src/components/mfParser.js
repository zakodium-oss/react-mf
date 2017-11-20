/**
 * Parse a mf to an array of kind / value
 * @param {string} mf
 *
 */

const ISOTOPE = 'isotope';
const ATOM = 'atom';
const CHARGE = 'charge';
const NUMBER = 'number';
const CHARGE_OVER_NUMBER = 'chargeOverNumber';
const SPACER_AND_MULTIPLIER = 'spacerAndMultiplier';

function parse(mf) {

    var results = [];

    // we consider that the mf is well formatted and isotopes are in square brackets
    mf = mf.replace(/\]/g, '');

    var parts = mf.split(/(?=[\[A-Z ])/);
    var result = {};

    for (let part of parts) {
        if (part.startsWith('[')) { // we deal with an isotope
            result = {
                kind: ISOTOPE,
                value: part.slice(1)
            };
            results.push(result);
        } else if (part.match(/^[0-9 .]+$/)) { // we deal with spaces, numbers and possible salt separator
            if (result.kind === SPACER_AND_MULTIPLIER) {
                result.value += part.replace(/ \./g, ' •');
            } else {
                result = {
                    kind: SPACER_AND_MULTIPLIER,
                    value: part.replace(/ \./g, ' •')
                };
                results.push(result);
            }
        } else {
            // we take the first part that should be the atom
            var atom = part.replace(/^([A-Z][a-z]*).*/, '$1');
            result = {
                kind: ATOM,
                value: atom
            };
            results.push(result);
            // we deal with multipliers and charges
            var numbers = part.replace(/^[A-Z][a-z]*/, '');
            if (numbers.match(/^[0-9]/)) {
                var multiplier = numbers.split(/(?=[+(-])/)[0];
                var charge = getCharge(numbers.split(/(?=[+(-])/).slice(1).join(''));
            } else {
                var multiplier = '';
                var charge = getCharge(numbers);
            }
            if (charge === '') {
                if (multiplier) {
                    result = {
                        kind: NUMBER,
                        value: multiplier
                    };
                    results.push(result);
                }
            } else {
                if (multiplier) {
                    result = {
                        kind: CHARGE_OVER_NUMBER,
                        multiplier: multiplier,
                        charge: charge
                    };
                    results.push(result);
                } else {
                    result = {
                        kind: CHARGE,
                        value: charge
                    };
                    results.push(result);
                }
            }
        }
    }

    console.log(results);

    return results;

}

function getCharge(charge) {
    charge = charge.replace(/[\(\)]/, '');
    var chargeNumber = 0;
    if (charge.match(/^[+-]+$/)) {
        for (var i = 0; i < charge.length; i++) {
            if (charge.charAt(i) === '+') chachargeNumberrge++;
            else chargeNumber--;
        }
    } else {
        chargeNumber = Number(charge);
    }

    if (chargeNumber === 1) return '+';
    if (chargeNumber > 1) return '+' + chargeNumber;
    if (chargeNumber < 0) return chargeNumber;
    return '';
}

parse('NO3--');
// parse('(CH3CH2)3N . [2H]2O3++ . 0.5H3O(+) . NH4+ . NO3-- . NO3(2-) . NO3 (-2)');
