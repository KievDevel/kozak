/*
 * Time: 25min
 */
function func(s, a, b) {

    if (s.match(/^$/)) {
        return -1;
    }

    let i = s.length - 1;
    let aIndex = -1;
    let bIndex = -1;

    while ((aIndex === -1) && (bIndex === -1) && (i >= 0)) {
        if (s.substring(i, i + 1) === a)
            aIndex = i;
        if (s.substring(i, i + 1) === b)
            bIndex = i;
        i--;
    }

    if (aIndex !== -1) {
        if (bIndex === -1)
            return aIndex;
        else
            return Math.max(aIndex, bIndex);
    } else {
        if (bIndex !== -1)
            return bIndex;
        else
            return -1;
    }
}

console.log(func('', 't', 'f')); // -1
console.log(func('text', 't', '')); // 3
console.log(func('text', '', '')); // -1
console.log(func('text', '', 'x')); // 2
console.log(func('text', '', 'i')); // -1

function func2(s = '', a = '', b = '')
{
    if (s === '' || (a === '' && b === '') ) return -1;
    if (a === '') return s.lastIndexOf(b);
    if (b === '') return s.lastIndexOf(a);
    return Math.max( s.indexOf(a), s.indexOf(b), s.lastIndexOf(a), s.lastIndexOf(b));
}

console.log('---------------------------');
console.log(func('', 't', 'f')); // -1
console.log(func2('text', 't', '')); // 3
console.log(func2('text', '', '')); // -1
console.log(func2('text', '', 'x')); // 2
console.log(func2('text', '', 'i')); // -1
