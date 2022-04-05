import React from "react";


export function getBubbleAnimation(array) {
  const animations = [];
  if(array.length <= 1){
    return array;
  }
  let k = 0;
  let sorted = false;
  while(!sorted){
    sorted = true;
    for(let i=0; i < array.length-k-1; i++){
      animations.push([i, i+1]);
      animations.push([i, i+1]);

      if(array[i] > array[i+1]){
        animations.push([i, array[i+1]]);
        let temp = array[i+1];
        array[i+1] = array[i];
        array[i] = temp;
        sorted = false;
      }
      else{
        animations.push([i, array[i]]);
      }

    }
    k++;
  }

  return animations;

}
