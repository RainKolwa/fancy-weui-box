# fancy-weui-box

[![Travis][build-badge]][build]
[![npm package][npm-badge]][npm]
[![Coveralls][coveralls-badge]][coveralls]

> A React component for display gallery pop up box like using with wechat jssdk

## Examples
![Qrcode](http://qr.api.cli.im/qr?data=https%253A%252F%252Frainkolwa.github.io%252Ffancy-weui-box%252Fdemo%252Fdist%252F&level=H&transparent=&bgcolor=%23ffffff&forecolor=%23000000&blockpixel=&marginblock=&logourl=&size=280&kid=cliim&key=14721a0167b6cb31beff9c157f903e58)
- [demo](https://rainkolwa.github.io/fancy-weui-box/demo/dist/)

## Installation
```bash
yarn add fancy-weui-box
# npm i fancy-weui-box -S
```

## Usage
```javascript
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
  ' li img': { width: '100px', height: '100px' }
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
```

## License
MIT

[build-badge]: https://img.shields.io/travis/user/repo/master.png?style=flat-square
[build]: https://travis-ci.org/user/repo

[npm-badge]: https://img.shields.io/npm/v/npm-package.png?style=flat-square
[npm]: https://www.npmjs.org/package/npm-package

[coveralls-badge]: https://img.shields.io/coveralls/user/repo/master.png?style=flat-square
[coveralls]: https://coveralls.io/github/user/repo
