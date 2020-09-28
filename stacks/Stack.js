
function Stack(capacity) {
  this.capacity = capacity || Number.POSITIVE_INFINITY;
  this._count = 0;
  this.storage = {};
  this.sorted = [];
}

Stack.prototype.push = function (value) {
  if (this._count === this.capacity) {
    console.error(`Max capacity ${this.capacity} already reached. Remove element before adding a new one`);
    return;
  }

  this.storage[this._count++] = value;
  return this._count;
};
// Time complexity: O(1)

Stack.prototype.pop = function () {
  if (this._count === 0) {
    console.error("No more item in the stack");
    return;
  }
  const lastItem = this.storage[this._count - 1];
  delete this.storage[--this._count];
  return lastItem;
};
// Time complexity: O(1)

Stack.prototype.peek = function () {
  return this.storage[this._count - 1];
};
// Time complexity: O(1)

Stack.prototype.count = function() {
  return this._count;
};
// Time complexity: O(1)

Stack.prototype.contains = function(val) {
  for (let k in this.storage) {
    if (this.storage[k] === val) {
      return true;
    }
  }
  return false;
};
// Time complexity: O(n)

Stack.prototype.until = function(val) {
  for (let i = this._count - 1; i >= 0; i--) {
    if (this.storage[i] === val) {
      return this._count - i;
    }
  }
  return -1;
};
// Time complexity: O(n)

Stack.prototype.min = function(val) {

};
// Time complexity: O(1)n

function balancedParens(str) {
  const strArr = str.split("");
  const strLen = str.length;
  const strStack = new Stack();
  let stackedParensNum = 0;
  let popedChar = "";
  let result = false;

  for (let i = 0; i < strLen; i++) {
    let char = strArr[i];

    if (char !== ")") {
      strStack.push(char);
      if (char === "(") {
        stackedParensNum++;
      }
    } else {
      do {
        popedChar = strStack.pop()
      }
      while (popedChar !== "(");
      stackedParensNum--;
      if (stackedParensNum < 0) {
        result = false;
        break;
      }
    }
  }

  if (stackedParensNum === 0) {
    result = true;
  }

  return result;

}

const aStack = new Stack(5);
console.log(aStack.push(2));
console.log(aStack.push(3));
console.log(aStack.push(5));
console.log(aStack.push(6));
console.log(aStack.push(4));

console.log(aStack.push(41));

console.log(aStack.count());

console.log(aStack.pop());
console.log(aStack.count());
console.log(aStack.push(41));
console.log(aStack.peek());
console.log("contains 1 ", aStack.contains(1));
console.log("contains 2 ", aStack.contains(2));
console.log("until 2 ", aStack.until(2));
console.log("balancedParens 1 ", balancedParens( 'sqrt(5*(3+8)/(4-2))' ) );
console.log("balancedParens 2 ", balancedParens( 'Math.min(5,(6-3))(' ) );


function tower_of_Hanoi(N) {
  const stack1 = new Stack();
  const stack2 = new Stack();
  const stack3 = new Stack();
  let steps = 0;

  function init() {
    for (let i = N; i > 0; i--) {
      stack1.push(i);
    }
  }

  function move_tower_of_Hanoi(stack1, stack2, stack3, N) {
    if (N > 1) {
      move_tower_of_Hanoi(stack1, stack3, stack2, N - 1);
      const itemN = stack1.pop();
      stack3.push(itemN);
      steps++;
      move_tower_of_Hanoi(stack2, stack1, stack3, N - 1);
    }

    if (N === 1) {
      const poppedItem = stack1.pop();
      stack3.push(poppedItem);
      steps++;
    }
  }

  init();
  move_tower_of_Hanoi(stack1, stack2, stack3, N);

  return [stack1, stack2, stack3, steps];
}

const result = tower_of_Hanoi(10);
console.log("tower_of_Hanoi result", result);



// todo:
// 2. Sort a stack so that its elements are in ascending order.