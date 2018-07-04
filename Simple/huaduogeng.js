// 商店有编号为1~89的89个金币等待销售，每个售价30元，其中只有1个是“幸运币”．
// 菲菲每次可以选择其中一些编号向诚实的营业员提问：“幸运币的编号在其中吗？”．
// 如果得到的答案是“在”，那么菲菲需要支付20元钱咨询费，如果得到的答案是“不在”，那么菲菲需要支付10元钱咨询费，当然，她也可以什么都不问，直接选择一些金币买走．
// 菲菲至少需要支付多少元才可以保证自己一定能得到幸运币．

var flag = 0;
var targetNum = 4;
var hashRandom = {};
var randomArr = [];
var totalPay = 0;

var renderNum = function () {
    var num = Math.floor(Math.random() * (90) + 1);
    if (!hashRandom[num]) {
        hashRandom[num] = true;
        randomArr.push(num);
        flag++;
    }
    if (flag === 90) {
        console.log(randomArr)
        testFun(randomArr)
        return
    } else {
        renderNum();
    }
};

var testFun = function (targetArr) {
    
    var leftArr = targetArr.slice(0, Math.floor(targetArr.length / 2));
    var rightArr = targetArr.slice(Math.floor(targetArr.length / 2), targetArr.length);
    var choice = Math.floor(Math.random() * (1 - 0 + 1) + 1);
    if (choice) {
        for (let item of leftArr) {
            if (item === targetNum) {

            }
        }
    } else {

    }

    console.log(leftArr);
    console.log(rightArr);
}

renderNum();