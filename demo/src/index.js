import React, {Component} from 'react'
import {render} from 'react-dom'
import { css } from 'glamor'
import FancyWeuiBox from '../../src'

const imgs = [
  'http://ww4.sinaimg.cn/bmiddle/006uLpxugy1fj3xe0tb2fj322o3404qv.jpg',
  'http://ww4.sinaimg.cn/bmiddle/006uLpxugy1fj3xdxs52mj31kw2dce83.jpg',
]

const style = css({
  margin: 0,
  padding: 0,
  overflow: 'hidden',
  ' li': { float: 'left', listStyleType: 'none', margin: '10px' },
  ' li img': { width: '100px', height: '100px', objectFit: 'cover' }
})

class Demo extends Component {
  constructor(props) {
    super(props)
    this.state = {
      active: false,
      activeIndex: 0,
    }
  }

  handleView = (index) => {
    this.setState({
      active: true,
      activeIndex: index,
    })
  }

  hideBox = () => {
    this.setState({
      active: false,
    })
  }

  render() {
    const { active, activeIndex } = this.state
    return <div>
      <h1>fancy-weui-box Demo</h1>
      <ul {...style}>
        {imgs.map((img, index)=> {
          return (
            <li key={index} onClick={()=>this.handleView(index)}>
              <img src={img} alt=""/>
            </li>
          )
        })}
      </ul>
      <FancyWeuiBox
        active={active}
        activeIndex={activeIndex}
        imgs={imgs}
        hide={this.hideBox}
      />
    </div>
  }
}

render(<Demo/>, document.querySelector('#demo'))
