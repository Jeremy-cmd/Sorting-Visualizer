import React from "react";


export function getMergeAnimation(array){
  const animations = [];
  if(array.length <= 1){
    return array;
  }
  const auxArray = array.slice();
  mergeSort(array, 0, array.length - 1, auxArray, animations);
  return animations;

}

const mergeSort = (array, start, end, auxArray, animations) => {


  if(start == end){
    return;
  }
  let midPoint = Math.floor((start + end) / 2);
  mergeSort(auxArray, start, midPoint, array, animations);
  mergeSort(auxArray, midPoint+1, end, array, animations);
  let i = start;
  let s = start;
  let j = midPoint + 1;

  while(i <= midPoint && j <= end){
    animations.push([i, j]);
    animations.push([i, j]);
    if(auxArray[i] <= auxArray[j]){
      animations.push([s, auxArray[i]]);
      array[s] = auxArray[i];
      s++;
      i++;
    }
    else{
      animations.push([s, auxArray[j]]);
      array[s] = auxArray[j];
      s++;
      j++;
    }
  }

  while(i <= midPoint){
    animations.push([i, i]);
    animations.push([i, i]);
    animations.push([s, auxArray[i]]);
    array[s] = auxArray[i];
    s++;
    i++;
  }

  while(j <= end){
    animations.push([j, j]);
    animations.push([j, j]);
    animations.push([s, auxArray[j]]);
    array[s] = auxArray[j];
    s++;
    j++;
  }

}
