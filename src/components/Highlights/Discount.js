import React, { Component } from 'react';
import Fade from 'react-reveal/Fade';
import Slide from 'react-reveal/Slide';

class Discount extends Component {
  state = {
    discountStart: 0,
    discountEnd: 30
  }
  porcentage = () => {
    if(this.state.discountStart < this.state.discountEnd){
      this.setState({
        discountStart: this.state.discountStart + 1
      })

    }
  }

componentDidUpdate(prevProps, prevState) {
  setTimeout(() => {
    this.porcentage()
  }, 300)
}

  render() {


    return (
      <div className="center_wrapper">
        <div className="discount_wrapper">

          <Fade
            onReveal={() => this.porcentage()}
            >
            <div className="discount_porcentage">
              <span>{this.state.discountStart}%</span>
              <span>OFF</span>
              </div>
          </Fade>

          <Slide right>
            <div className="discount_description">
              <h3>Purchase tickets before 20th JUNE</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repudiandae obcaecati doloribus eum in fugiat quas atque provident cum ipsam aliquid libero consequuntur, error tempore autem molestias voluptatum. Cum perspiciatis officia provident labore, dicta repellendus. Alias dolores quod repellendus ducimus non voluptas, quo aut quia fugit ad sit modi vitae, placeat.</p>
              <div>Button</div>

            </div>
          </Slide>

        </div>
      </div>
    );
  };
}
export default Discount;
