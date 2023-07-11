function quickSortArray(array, left, right) {
  if (left >= right) {
    return;
  }
  let pivot = right;
  let swapPosition = left - 1;
  while (left < right) {
    if (array[left] <= array[pivot]) {
        swapPosition++;
        swap(array, swapPosition, left);
    }
    left++;
  }
  swap(array, swapPosition + 1, pivot);
  pivot = swapPosition + 1;
  quickSortArray(array, 0, pivot - 1);
  quickSortArray(array, pivot + 1, right);
  return array;
}

function swap(array, i, j) {
  const temp = array[i];
  array[i] = array[j];
  array[j] = temp;
}

console.log(quickSortArray([8, 7, 6, 1, 0, 9, 2, 5], 0, 7));
