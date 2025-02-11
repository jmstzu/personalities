import { useState } from 'react';
import { pbalegendList } from './data.js';
import  './App.css';

export default function Gallery() {
  const [index, setIndex] = useState(0);
  const [showMore, setShowMore] = useState(false);
  const hasNext = index <pbalegendList.length - 1;

  function handleprevClick() {
    if (index == 0) {
      setIndex(pbalegendList.length - 1); 
    } else {
      setIndex(index - 1);
    }
  }

  function handleNextClick() {
    if (hasNext) {
      setIndex(index + 1);
    } else {
      setIndex(0);
    }
  }

  function handleMoreClick() {
    setShowMore(!showMore);
  }

  let sculpture = pbalegendList[index];
  return (
    <>
    <div><h1>John Mark I Salas</h1></div>
    <button onClick={handleprevClick} className='button2'>
        Back
      </button>
      <button onClick={handleNextClick} className='button3'>
        Next
      </button>
      <h2>
        <i>{sculpture.name}</i>
      </h2>
      <h3>
        ({index + 1} of {pbalegendList.length})
      </h3>
      <button onClick={handleMoreClick} className='button'>
        {showMore ? 'Hide' : 'Show'} details
      </button>
      {showMore && <p>{sculpture.description}</p>}
      <img className='Pic'
        src={sculpture.url}
        alt={sculpture.alt}
      />
    </>
  );
}

