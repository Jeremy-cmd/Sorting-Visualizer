import React, {useEffect, useState} from 'react';
import './Sorting.css';
import {getMergeAnimation} from './algorithms/mergeSort.jsx';
import {getBubbleAnimation} from './algorithms/bubbleSort.jsx';
// import {getHeapAnimation} from './algorithms/mergeSort.jsx';
// import {getQuickAnimation} from './algorithms/mergeSort.jsx';

const ANIMATION_SPEED_MS = 1;
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
    for(let i=0; i<250; i++){
      array.push(randomInt(5,550));
    }
    setSortArray(array);

  }

  function merge() {
    const animations = getMergeAnimation(sortArray);
    console.log(animations);
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
          bars[firstBarIdx].style.height = `${height}px`;
        }, i * ANIMATION_SPEED_MS);
      }
    }


  }

  function bubble() {

    const animations = getBubbleAnimation(sortArray);
    console.log(animations);
    for(let i=0; i<animations.length; i++){
      const bars = document.getElementsByClassName("bar");
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
          const [firstBarIdx, height] = animations[i];
          bars[firstBarIdx].style.height = `${height}px`;
        }, i * ANIMATION_SPEED_MS);

      }

    }

  }

  function heap() {

  }

  function quick() {

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

    </div>


  );



}


export default Sorting;
