import React, {useEffect, useState} from 'react';
import './Sorting.css';


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
    console.log(array);
    setSortArray(array);

  }

  return (
    <div className="array-container">

      {sortArray.map((value, idx) => (
        <div className="array-bar"
             key={idx}
             style={{height: `${value}px`}}>

        </div>
      ))}


    </div>


  );



}


export default Sorting;
