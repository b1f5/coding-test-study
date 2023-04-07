const binarySearch = (list, target, left, right) => {
  let mid = Math.floor((left + right) / 2);
  while (left <= right) {
    mid = Math.floor((left + right) / 2);
    if (list[mid] === target) {
      return mid;
    }
    if (target < list[mid]) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }
  return -1;
};

const binarySearchRecursive = (list, target, left, right) => {
  let mid = Math.floor((left + right) / 2);
  if (right <= left) {
    return list[mid] == target ? 1 : 0;
  }

  if (list[mid] > target) {
    right = mid - 1;
  } else {
    left = mid + 1;
  }

  return binarySearch(list, target, left, right);
};
