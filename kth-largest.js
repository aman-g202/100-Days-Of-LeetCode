/* Quick Select Algorithm */

function findKthLargest(arr, low, high, k) {
    let swapPosition = low;
    let pivotIndex = high;
    while (low < high) {
        if (arr[low] >= arr[pivotIndex]){
            swap(arr, swapPosition, low);
            swapPosition++;
        }
        low++;
    }
    swap(arr, swapPosition, pivotIndex);
    pivotIndex = swapPosition; 
    if (pivotIndex === (k - 1)) {
        return arr[pivotIndex];
    } else if ((k - 1) < pivotIndex) {
        return findKthLargest(arr, 0, pivotIndex - 1, k);
    } else {
        return findKthLargest(arr, pivotIndex + 1, high, k);
    }
}

function swap(arr, i, j) {
  const temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}

console.log(findKthLargest([8, 7, 6, 1, 0, 9, 2, 5], 0, 7, 2));
