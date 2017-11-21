/**
 * Parse a mf to an array of kind / value
 * @param {string} mf
 *
 */
const KIND_BEGIN = 'begin';
const KIND_ATOM = 'atom';
const KIND_CHARGE = 'charge';
const KIND_SALT = 'salt';
const KIND_OPENING_PARENTHESIS = 'openingParenthesis';
const KIND_CLOSING_PARENTHESIS = 'closingParenthesis';
const KIND_PRE_MULTIPLIER = 'preMultiplier';
const KIND_MULTIPLIER = 'multiplier';
const KIND_TEXT = 'text';

function parse(mf) {

    let number = 0;
    let atom = '';
    let charge = 0;

    let result = [];
    let lastKind = KIND_BEGIN;
    let i = 0;
    while (i < mf.length) {
        if (result.length > 0 && result[result.length - 1].kind !== KIND_TEXT) {
            lastKind = result[result.length - 1].kind;
        }
        let char = mf.charAt(i);
        let ascii = mf.charCodeAt(i);
        if (ascii > 47 && ascii < 58) { // a number
            [i, number] = getNumber(mf, i, ascii);
            if (lastKind === KIND_SALT || lastKind === KIND_BEGIN || lastKind === KIND_OPENING_PARENTHESIS) {
                result.push({kind: KIND_PRE_MULTIPLIER, value: number});
            } else {
                result.push({kind: KIND_MULTIPLIER, value: number});
            }
            continue;
        } else if (char === '.') { // a point
            result.push({kind: KIND_SALT, value: char});
            // it is not in a number otherwise it would have been taken before
            // it must be in a salt

        } else if (ascii > 64 && ascii < 91) { // an uppercase = new atom
            [i, atom] = getAtom(mf, i, ascii);
            result.push({kind: KIND_ATOM, value: atom});
            continue;
        } else if (ascii > 96 && ascii < 123) { // a lowercase
            throw new Error('found a lowercase not following an uppercase');
        } else if (char === '(') {
            [i, charge] = getParenthesisCharge(mf, i, ascii);
            if (charge) {
                result.push({kind: KIND_CHARGE, value: charge});
            } else {
                result.push({kind: KIND_OPENING_PARENTHESIS, value: '('});
            }
        } else if (char === ')') {
            result.push({kind: KIND_CLOSING_PARENTHESIS, value: ')'});
        } else if (char === '[') { // defines an isotope
            [i, atom] = getIsotope(mf, i, ascii);
            result.push({kind: KIND_ATOM, value: atom});
        } else if (char === ']') {
            throw new Error('should never meet an closing bracket not in isotopes');
        } else if (char === '{') {  // can define an exotic isotopic ratio or mixtures of groups

        } else if (char === '}') {

        } else if (char === '+') { // charge not in parenthesis
            [i, charge] = getNonParenthesisCharge(mf, i, ascii);
            result.push({kind: KIND_CHARGE, value: charge});
        } else if (char === '-') { // charge not in parenthesis OR a negative number of atom
            if (result.pop().kind === KIND_ATOM) {

            } else {

            }
        } else {
            result.push({kind: KIND_TEXT, value: char});
        }
        i++;
    }
    return result;
}

function getNumber(mf, i, ascii) {
    let number = '';
    do {
        number += String.fromCharCode(ascii);
        i++;
        ascii = mf.charCodeAt(i);
    } while (ascii > 47 && ascii < 58 || ascii === 46);
    return [i, Number(number)];
}

function getAtom(mf, i, ascii) {
    let atom = '';
    do {
        atom += String.fromCharCode(ascii);
        i++;
        ascii = mf.charCodeAt(i);
    } while (ascii > 96 && ascii < 123);
    return [i, {atom}];
}

function getIsotope(mf, i, ascii) { // [13C]
    let substring = '';
    do {
        substring += String.fromCharCode(ascii);
        i++;
        ascii = mf.charCodeAt(i);
    } while (ascii !== 93);

    let atom = substring.replace(/[^a-zA-Z]/g, '');
    let isotope = Number(substring.replace(/[^0-9]/g, ''));
    return [i, {atom, isotope}];
}

function getParenthesisCharge(mf, i, ascii) {
    let substring = '';
    let begin = i;
    do {
        substring += String.fromCharCode(ascii);
        i++;
        ascii = mf.charCodeAt(i);
    } while (ascii !== 41); // closing parenthesis
    if (substring.match(/^\([0-9+-]+$/)) {
        return [i, getCharge(substring.substring(1))];
    } else {
        return [begin];
    }
}

function getNonParenthesisCharge(mf, i, ascii) {
    let substring = '';
    do {
        substring += String.fromCharCode(ascii);
        i++;
        ascii = mf.charCodeAt(i);
    } while (ascii === 43 || ascii === 45 || (ascii > 47 && ascii < 58)); // closing parenthesis
    return [i, getCharge(substring)];
}


function getCharge(charge) {
    charge = charge.replace(/[\(\)]/, '');
    var chargeNumber = 0;
    if (charge.match(/^[+-]+$/)) {
        for (var i = 0; i < charge.length; i++) {
            if (charge.charAt(i) === '+') chargeNumber++;
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

const FORMAT_SUBSCRIPT = 'subscript';
const FORMAT_SUPERSCRIPT = 'superscript';
const FORMAT_SUPERIMPOSE = 'superimpose';
const FORMAT_TEXT = 'text';

function convertForDisplay(lines) {
    let results = [];
    let result = {};
    for (let line of lines) {
        switch (line.kind) {
            case KIND_MULTIPLIER:
                result = {
                    kind: FORMAT_SUBSCRIPT,
                    value: line.value
                };
                results.push(result);
                break;
            case KIND_CHARGE:
                if (result.kind === FORMAT_SUBSCRIPT) {
                    result.kind = FORMAT_SUPERIMPOSE;
                    result.over = line.value;
                } else {
                    result = {
                        kind: FORMAT_SUPERSCRIPT,
                        value: line.value
                    };
                    results.push(result);
                }

                break;
            case KIND_ATOM:
                if (line.value.isotope) {
                    result = {
                        kind: FORMAT_SUPERSCRIPT,
                        value: line.value.isotope
                    };
                    results.push(result);
                }
                if (result.kind === FORMAT_TEXT) {
                    result.value += line.value.atom;
                } else {
                    result = {
                        kind: FORMAT_TEXT,
                        value: line.value.atom
                    };
                    results.push(result);
                }
                break;
            default:
                if (result.kind === FORMAT_TEXT) {
                    result.value += line.value;
                } else {
                    result = {
                        kind: FORMAT_TEXT,
                        value: line.value
                    };
                    results.push(result);
                }
        }
    }
    return results;
}

// var result = parse('(CH3)2NO32[13C]2(++)-2');
var results = parse('CH3(+3) . 3NH3');
results = convertForDisplay(results);
console.log(results);
// parse('(CH3CH2)3N . [2H]2O3++ . 0.5H3O(+) . NH4+ . NO3-- . NO3(2-) . NO3 (-2)');
