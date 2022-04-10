import React from "react";

export function getQuickAnimation(array){
  let animations = [];
  quickSort(0, array.length-1, array, animations);
  return animations;
}

function quickSort(start, end, array, animations){

  if(start < end){
    let pIdx = partition(start, end, array, animations);
    quickSort(start, pIdx-1, array, animations);
    quickSort(pIdx+1, end, array, animations);
}

}

function partition(start, end, array, animations){
  let pivot = array[end];
  let pIdx = start;
  for(let i=start; i<end; i++){
    animations.push([i, pIdx]);
    animations.push([i, pIdx]);
    if(array[i] <= pivot){
      let temp = array[pIdx];
      array[pIdx] = array[i];
      array[i] = temp;
      animations.push([i, pIdx, temp]);
      pIdx++;
    }
    else{
      animations.push([i, pIdx, array[i]]);
    }



  }
  animations.push([pIdx, end]);
  animations.push([pIdx, end]);
  let temp = array[end];
  array[end] = array[pIdx];
  array[pIdx] = temp;
  animations.push([pIdx, end, temp]);

  return pIdx;

}
