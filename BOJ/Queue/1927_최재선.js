const fs = require('fs');

const filePath = './input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

class Heap {
  constructor() {
    this.values = [];
  }

  sortDown() {
    const recursive = (targetIndex) => {
      const targetValue = this.values[targetIndex];

      const childIndex1 = targetIndex * 2 + 1;
      const childValue1 = this.values[childIndex1];

      const childIndex2 = targetIndex * 2 + 2;
      const childValue2 = this.values[childIndex2];

      if (childValue1 && childValue2) {
        const min = Math.min(childValue1, childValue2);

        if (min < targetValue) {
          if (childValue1 === min) {
            this.values[targetIndex] = childValue1;
            this.values[childIndex1] = targetValue;

            recursive(childIndex1);
          } else if (childValue2 === min) {
            this.values[targetIndex] = childValue2;
            this.values[childIndex2] = targetValue;

            recursive(childIndex2);
          }
        }
      } else if (childValue1 && targetValue > childValue1) {
        this.values[targetIndex] = childValue1;
        this.values[childIndex1] = targetValue;

        recursive(childIndex1);
      } else if (childValue2 && targetValue > childValue2) {
        this.values[targetIndex] = childValue2;
        this.values[childIndex2] = targetValue;

        recursive(childIndex2);
      }
    };

    recursive(0);
  }

  pop() {
    if (!this.values.length) {
      return 0;
    } if (this.values.length === 1) {
      return this.values.pop();
    }

    const minValue = this.values[0];
    this.values[0] = this.values.pop();
    this.sortDown();

    return minValue;
  }

  /**
   * 0 >> 1, 2
   * 1 >>
   */
  sortUp() {
    const { length } = this.values;

    const recursive = (targetIndex) => {
      const targetValue = this.values[targetIndex];
      const parentIndex = Math.floor((targetIndex - 1) / 2);
      const parentValue = this.values[parentIndex];

      if (targetValue < parentValue) {
        this.values[targetIndex] = parentValue;
        this.values[parentIndex] = targetValue;

        recursive(parentIndex);
      }
    };

    recursive(length - 1);
  }

  push(num) {
    this.values.push(num);
    this.sortUp();
  }
}

function solution(args) {
  const MyHeap = new Heap();
  let result = '';

  for (const el of args) {
    if (el) {
      MyHeap.push(el);
    } else {
      const popped = MyHeap.pop();
      if (!result) {
        result += `${popped}`;
      } else {
        result += `\n${popped}`;
      }
    }
  }

  console.log(result);
}

solution(input.slice(1).map((el) => Number(el)));
