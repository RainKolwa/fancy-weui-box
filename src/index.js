import React, {Component} from 'react'
import PropTypes from 'prop-types'
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
  transition: 'all 0.4s',
  ' .fancy-weui-container': {
    position: 'absolute',
    left: 0,
    top: 0,
    bottom: 0,
    width: '100%',
    height: '100%',
    ' .react-swipeable-view-container': {
      position: 'absolute',
      left: 0,
      top: 0,
      bottom: 0,
      width: '100%',
      height: '100%',
      ' >div': {
        top: 0,
        bottom: 0,
        display: 'flex',
        alignItems: 'center',
        background: 'black',
        ' img': { width: '100%' }
      },
    },
  },
})

class FancyWeuiBox extends Component {

  render() {
    const { active, activeIndex, imgs, hide } = this.props
    return (
      <div {...css(style, { left: active ? 0 : '100%' })}>
        <SwipeableViews index={activeIndex} className="fancy-weui-container">
          {imgs.map((img, index) => {
            return (
              <img key={index} src={img} onClick={hide} alt=""/>
            )
          })}
        </SwipeableViews>
      </div>
    )
  }
}

FancyWeuiBox.PropTypes = {
  active: PropTypes.bool,
  activeIndex: PropTypes.number,
  imgs: PropTypes.array,
  hide: PropTypes.func,
}

FancyWeuiBox.defaultProps = {
  active: false,
  activeIndex: 0,
}

export default FancyWeuiBox
