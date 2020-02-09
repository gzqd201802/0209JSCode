(function(){

    // 局部变量
    let author = {
        name: 'Su',
        gender: '男'
    };
    
    console.log(author);
    console.log(`你现在使用的库的作者是${author.name}，他的性别是${author.gender}`);

    // 给数组原型添加求最大值的方法
    Array.prototype.getMax = function () {
        // 需求：调用后返回最大值
        // 假设索引值为 0 的数最大
        let max = this[0];
        // 从索引值 1 开始比较，直到最后
        for (let i = 1; i < this.length; i++) {
            if (max < this[i]) {
                max = this[i];
            }
        }
        return max;
    }
    
})();