/**
 * @param {string} s
 * @return {string}
 */

// a < b < c
var sortString = function(s) {
    const o = {};
    for(let i = 0; i<s.length; i++) {
        const asciiCode = s[i].charCodeAt();
        if(o[asciiCode]) {
            o[asciiCode] = o[asciiCode] + 1;
        } else {
            o[asciiCode] = 1;
        }
    }
    const asciiKeys = Object.keys(o);
    let flag = true;
    let i = 0;
    let r = "";
    while(i < s.length) {
        if(flag) {
            for(let j = 0; j<asciiKeys.length; j++) {
                const code = asciiKeys[j];
                if(o[code]) {
                    o[code] = o[code] - 1;
                    i++;
                    r += String.fromCodePoint(code);
                }
            }
        } else {
            for(let j = asciiKeys.length - 1; j >= 0; j--){
                const code = asciiKeys[j];
                if(o[code]) {
                    o[code] = o[code] - 1;
                    i++;
                    r += String.fromCodePoint(code)
                }
            }
        }
        flag = !flag;
    }
    console.log(r);
    return r;
};


sortString('aaaabbbbcccc');
