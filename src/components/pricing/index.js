import React, { Component } from 'react';
import MyButton from '../utils/MyButton';
import Zoom from 'react-reveal/Zoom';


class Pricing extends Component {

  state = {
    prices: [100, 150, 250],
    positions:['Balcony', "Medium", "Star"],
    desc: [
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non consequuntur laboriosam id quasi nisi aliquam, at eos repellendus veniam esse temporibus vel, eaque deserunt hic pariatur beatae dolor? Iste, id.',
      'Lorem ipsum  id quasi nisi aliquam, at eos repellendus veniam esse temporibus vel, eaque deserunt hic pariatur beatae dolor? Iste, id.',
      'Lorem ipsum dolor sit amet. Non consequuntur laboriosam id quasi nisi aliquam, at eos repellendus veniam esse temporibus vel, eaque deserunt hic pariatur beatae dolor? Iste, id.'
    ],
    linkto: [
      'http://yandex.com',
      'http://yandex.ru',
      'http://ya.com',
    ],
    delay:[500, 0, 500]

  }
  showBoxes = () => (
    this.state.prices.map((box, i, ) => (
      <Zoom key={i} delay={this.state.delay[i]}>
        <div className="pricing_item">
          <div className="pricing_inner_wrapper">
            <div className="pricing_title">
              <span>${this.state.prices[i]}</span>
              <span>{this.state.positions[i]}</span>
            </div>
            <div className="pricing_description">
              <span>{this.state.desc[i]}</span>

            </div>
            <div className="pricing_buttons">
              <MyButton
                text= "Purchase"
                bck= '#ffa800'
                color=   '#ffffff'
                link={this.state.linkto[i]}
                />
            </div>
          </div>
        </div>

      </Zoom>
    ))
  )

  render() {
    return (
      <div className='bck_wrapper'>
        <div className="center_wrapper pricing_section">
          <h2>Pricing</h2>

          <div className="pricing_wrapper">
            {this.showBoxes()}
          </div>

        </div>
        <h1>Pricing Component</h1>
      </div>
    );
  }
}
export default Pricing;
