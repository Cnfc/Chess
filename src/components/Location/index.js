import React, { Component } from 'react';

const Location = () => {
  return (
    <div className="location">
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d128083.26573163123!2d10.645033699622648!3d59.89395286100945!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46416e61f267f039%3A0x7e92605fd3231e9a!2z0J7RgdC70L4!5e0!3m2!1sru!2sno!4v1538998776224"
         width="100%"
         height="500"
         frameBorder="0"
         allowFullScreen>
       </iframe>

       <div className='location_tag'>

       </div>

    </div>
  );
};
export default Location;
