import React from "react";

export function getHeapAnimation(array) {

  let animations = [];
  MaxHeap(array, animations);
  let end = array.length - 1;
  while(end > 0){
    animations.push([0, end]);
    animations.push([0, end]);
    let temp = array[end];
    array[end] = array[0];
    array[0] = temp;
    animations.push([0, end, array[0]]);
    siftDown(array, 0, end, animations);
    end--;
  }


  return animations;
}

function MaxHeap(array, animations) {
  let cur = Math.floor(array.length / 2);
  while (cur >= 0) {
    siftDown(array, cur, array.length, animations);
    cur--;
  }
}

function siftDown(array, start, end, animations) {
  if (start >= Math.floor(end / 2)) {
    return;
  }
  let left = start * 2 + 1;
  let right = start * 2 + 2 < end ? start * 2 + 2 : null;
  let swap;
  if (right) {
    swap = array[left] > array[right] ? left : right;
  } else {
    swap = left;
  }
  animations.push([start, swap]);
  animations.push([start, swap]);
  if (array[start] < array[swap]) {
    let temp = array[swap];
    array[swap] = array[start];
    array[start] = temp;
    animations.push([start, swap, array[start]]);
    siftDown(array, swap, end, animations);
  }
  else{
  animations.push([start, swap, array[start]]);
}
}
