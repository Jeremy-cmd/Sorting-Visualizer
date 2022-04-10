import React, {useEffect, useState} from 'react';
import './Sorting.css';
import {getMergeAnimation} from './algorithms/mergeSort.jsx';
import {getBubbleAnimation} from './algorithms/bubbleSort.jsx';
import {getHeapAnimation} from './algorithms/heapSort.jsx';
import {getQuickAnimation} from './algorithms/quickSort.jsx';

const ANIMATION_SPEED_MS = 5;
const COLOR = 'turquoise';
const SECONDARY_COLOR = 'red';


function Sorting() {

  const [sortArray, setSortArray] = useState([]);

  useEffect(() => {
    resetArray();
  }, []);

  function randomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  function resetArray() {
    const array = [];
    for(let i=0; i<150; i++){
      array.push(randomInt(5,550));
    }
    setSortArray(array);

  }

  function toSort(animate) {
    const animations = animate;

    console.log(animations);
    console.log("the sorted array is " + sortArray);
    for(let i=0; i<animations.length; i++){
      const bars = document.getElementsByClassName('bar');
      // divided by three, every three sections one swap
      // change to red, back to turquoise, then swap
      const changeColor = i % 3 !== 2;
      if(changeColor){
        const [firstBarIdx, secondBarIdx] = animations[i];
        const color = i % 3 === 0 ? SECONDARY_COLOR : COLOR;
        setTimeout(() => {
          bars[firstBarIdx].style.backgroundColor = color;
          bars[secondBarIdx].style.backgroundColor = color;
        }, i * ANIMATION_SPEED_MS);
      }
      else{
        // third item in animations means the swapping
        setTimeout(() => {
          const [firstBarIdx, height] = animations[i];
          let cur = (parseInt(firstBarIdx)+1)

          if(cur < sortArray.length && parseInt(bars[firstBarIdx].style.height, 10) > parseInt(bars[firstBarIdx+1].style.height, 10)){
            bars[firstBarIdx+1].style.height = bars[firstBarIdx].style.height;
          }
          bars[firstBarIdx].style.height = `${height}px`;

        }, i * ANIMATION_SPEED_MS);
      }
    }


  }

  function merge() {
    const animations = getMergeAnimation(sortArray);
    toSort(animations);
  }

  function bubble() {
    console.log("the array is " + sortArray);
    const animations = getBubbleAnimation(sortArray);
    toSort(animations);
  }

  function heap() {

    const animations = getHeapAnimation(sortArray);

    console.log(animations);
    console.log("the sorted array is " + sortArray);
    for(let i=0; i<animations.length; i++){
      const bars = document.getElementsByClassName('bar');
      // divided by three, every three sections one swap
      // change to red, back to turquoise, then swap
      const changeColor = i % 3 !== 2;
      if(changeColor){
        const [firstBarIdx, secondBarIdx] = animations[i];
        const color = i % 3 === 0 ? SECONDARY_COLOR : COLOR;
        setTimeout(() => {
          bars[firstBarIdx].style.backgroundColor = color;
          bars[secondBarIdx].style.backgroundColor = color;
        }, i * ANIMATION_SPEED_MS);
      }
      else{
        // third item in animations means the swapping
        setTimeout(() => {
          const [firstBarIdx, secondBarIdx, height] = animations[i];

          if(height != parseInt(bars[firstBarIdx].style.height, 10)){
            bars[secondBarIdx].style.height = bars[firstBarIdx].style.height;
            bars[firstBarIdx].style.height = `${height}px`;
          }

        }, i * ANIMATION_SPEED_MS);
      }
    }


  }

  function quick() {
    console.log("not sorted " + sortArray);
    const animations = getQuickAnimation(sortArray);
    console.log("sorted " + sortArray);

    for(let i=0; i<animations.length; i++){
      const bars = document.getElementsByClassName('bar');
      const changeColor = i % 3 !== 2;
      if(changeColor){
        const [firstBarIdx, secondBarIdx] = animations[i];
        const color = i % 3 === 0 ? SECONDARY_COLOR : COLOR;
        setTimeout(() => {
          bars[firstBarIdx].style.backgroundColor = color;
          bars[secondBarIdx].style.backgroundColor = color;
        }, i * ANIMATION_SPEED_MS);
      }
      else{
        setTimeout(() => {

          const [firstBarIdx, secondBarIdx, height] = animations[i];
          if(height != parseInt(bars[firstBarIdx].style.height, 10)){
            bars[secondBarIdx].style.height = bars[firstBarIdx].style.height;
            bars[firstBarIdx].style.height = `${height}px`;
          }


        }, i * ANIMATION_SPEED_MS);

      }
    }


  }

  return (
    <div className="array-container">

      {sortArray.map((value, idx) => (
        <div className="bar"
             key={idx}
             style={{
               backgroundColor: COLOR,
               height: `${value}px`}}>

        </div>
      ))}

      <button onClick={() => resetArray()}>Generate New Array</button>
      <button onClick={() => merge()}>Merge Sort</button>
      <button onClick={() => bubble()}> Bubble Sort </button>
      <button onClick={() => heap()}> Heap Sort </button>
      <button onClick={() => quick()}> Quick Sort </button>

    </div>


  );



}


export default Sorting;
