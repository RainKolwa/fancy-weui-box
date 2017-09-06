import React, {Component} from 'react'
import {render} from 'react-dom'
import { css } from 'glamor'
import Example from '../../src'

const imgs = [
  'https://olcqde7ua.qnssl.com/Fl96hDtarkXwJWs2FoKkfyTJ9JdJ?imageView2/1/w/480/h/480',
  'https://olcqde7ua.qnssl.com/FlGCkPbOmqGqmf6YaJDjivOAw7P8?imageView2/1/w/480/h/480',
]

const style = css({
  margin: 0,
  padding: 0,
  overflow: 'hidden',
  ' li': { float: 'left', listStyleType: 'none', margin: '10px' },
  ' li img': { width: '100px' }
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
      <Example 
        active={active}
        activeIndex={activeIndex}
        imgs={imgs}
        hide={this.hideBox}
      />
    </div>
  }
}

render(<Demo/>, document.querySelector('#demo'))
