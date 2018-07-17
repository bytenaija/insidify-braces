function checkBraces(str) {
    //console.log(str)
    var braceStr = "[]{}()",
        stack = [],
        i, character, braceList;

    for (i = 0; character = str[i]; i++) {
        braceList = braceStr.indexOf(character);
        if (braceList === -1) {
            continue;
        }
        if (braceList % 2 === 0) {
            stack.push(braceList + 1)
                // console.dir(stack)
        } else {
            if (stack.pop() != braceList) {
                return false;
            }
        }
    }
    return stack.length === 0;
}

function braces(arr) {
    let result = [];
    for (value of arr) {
        if (checkBraces(value)) {
            result.push('YES');
        } else {
            result.push('NO')
        }
    }

    return result;
}

let arr = ['{}[]{[]()}', '{}[]{[]()', '[{}]'];

console.log(braces(arr));