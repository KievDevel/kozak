/**
 * Time 10min
 */

let isStringBigger = (str1 = '') => (str2 = '') => {
    let [s1, s2] = [str1.length, str2.length];
    return s1 > s2 ? 1 : s1 < s2 ? -1 : 0; // such code will go to prod only if I'm sure all devs can understand it

    // simple prod version, so most devs can support this code
    if (s1 > s2) {
        return 1;
    }

    if (s1 < s2) {
        return -1;
    }

    return 0;
};

let output = console.log.bind(console);

output(isStringBigger('ab')('a')); // 1
output(isStringBigger('ab')('abc')); // -1
output(isStringBigger('ab')('a2')); // 0
output(isStringBigger('')('')); // 0
output(isStringBigger()()); // 0