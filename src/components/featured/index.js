import React from "react";
import Carrousel from './Carrousel';
import TimeUntill from './TimeUntill';

const Featured = () => {
  return (
    <div style={{position: 'relative'}}>

      <Carrousel/>
      <TimeUntill/>

      <div className='artist_name'>
        <div className='wrapper'>
          Ariana Grande
        </div>
      </div>

    </div>
  );
};

export default Featured;
