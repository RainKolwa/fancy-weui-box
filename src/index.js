import React, {Component} from 'react'
import { css } from 'glamor'
import SwipeableViews from 'react-swipeable-views'

const style = css({
  position: 'fixed',
  left: '100%',
  top: 0,
  bottom: 0,
  width: '100%',
  height: '100%',
  background: 'black',
  transition: 'all 0.4s'
})

const imgBox = css({
  position: 'relative',
  left: 0,
  top: 0,
  bottom: 0,
  width: '100%',
  height: '100%',
  display: 'flex',
  alignItems: 'center',
  ' img': { width: '100%' }
})

class FancyWeuiBox  extends Component {
  
  render() {
    const { active, activeIndex, imgs, hide } = this.props
    console.log(activeIndex)
    return (
      <div {...css(style, { left: active ? 0 : '100%' })}>
        <SwipeableViews index={activeIndex}>
          {imgs.map((img, index) => {
            return (
              <div key={index} {...imgBox}>
                <img src={img} onClick={hide} alt=""/>
              </div>
            )
          })}
        </SwipeableViews>
      </div>
    )
  }
}

export default FancyWeuiBox