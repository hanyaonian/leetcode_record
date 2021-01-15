/**
 * 155. 最小栈
	设计一个支持 push ，pop ，top 操作，并能在常数时间内检索到最小元素的栈。（常数时间，所以需要存好最小值）

	push(x) —— 将元素 x 推入栈中。
	pop() —— 删除栈顶的元素。
	top() —— 获取栈顶元素。
	getMin() —— 检索栈中的最小元素。

 * 用一个辅助栈，存排好序的最小元素
 * 
 * initialize your data structure here.
 */
var MinStack = function() {
    this.minStack = [];
    this.stack = [];
};

/** 
 * @param {number} x
 * @return {void}
 */
MinStack.prototype.push = function(x) {
    this.stack.push(x);
    const targetIndex = this.minStack.findIndex(val => val < x);
    if (targetIndex === -1) {
        this.minStack.unshift(x);
    } else {
        this.minStack.splice(targetIndex + 1, 0, x);
    }
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
    let target = this.stack.pop();
    let targetIndex = this.minStack.findIndex(val => val === target);
    this.minStack.splice(targetIndex, 1);
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
    return this.stack[this.stack.length - 1]
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {
    return this.minStack[0];
};

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(x)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */