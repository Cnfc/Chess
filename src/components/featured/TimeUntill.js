import React, { Component } from 'react';
import Slide from 'react-reveal/Slide';

class TimeUntill extends Component {

  state = {

  }

  render() {
    return (
      <Slide left delay={1000}>
      <div className="countdown_wrapper">
        <div className='countdown_top'>
          Event starts in
        </div>
        <div className="countdown_bottom">
          <div className="countdown_item">
            <div className="countdown_time">23</div>
            <div className="countdown_tag">Days </div>
          </div>
          <div className="countdown_item">
            <div className="countdown_time">2</div>
            <div className="countdown_tag">Hourse </div>
          </div>
          <div className="countdown_item">
            <div className="countdown_time">3</div>
            <div className="countdown_tag">Minute </div>
          </div>
          <div className="countdown_item">
            <div className="countdown_time">58</div>
            <div className="countdown_tag">Sec </div>
          </div>
        </div>
      </div>
    </Slide>
    );
  }
}
export default TimeUntill;
