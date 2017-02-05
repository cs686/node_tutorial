// function func2(res) {
//     res.write('this is func 2')
// }
//
//
// module.exports = func2;//单个函数调用

//多函数调用
module.exports = {
    func2:function (res) {
        res.write('Fun2')
    }
};