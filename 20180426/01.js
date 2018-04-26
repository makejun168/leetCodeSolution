// #1 两数之和
// 描述：给定一个整数数组和一个值target，求两个下标i、j，使得a[i] + a[j] = target，返回下标。
/*
* @params target 是數組下標的和
* @params arr 目標的數組 
*/
function twoSum(target,arr){
    if(!arr||!arr.length)return
    if(!target)return
    let indexArr = [];
    let result = [];
    for(let i in arr){
        indexArr.push(i);//先保存数组中所有下标
    }
    //再通过下标去查找是否存在
    for(let i in arr){
        for(let j in indexArr){
            if (arr[i] + arr[j] === target){
                result.push({
                    'i': i,
                    'j': j
                })
            }
        }
    }
    return result
}

var target = 10;
var arr = [1,5,6,2,4,2,3];
var result = twoSum(target,arr);
console.log(result)