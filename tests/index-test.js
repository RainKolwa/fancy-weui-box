import expect from 'expect'
import React from 'react'
import {render, unmountComponentAtNode} from 'react-dom'

import Component from 'src/'

const imgs = [
  'https://olcqde7ua.qnssl.com/Fl96hDtarkXwJWs2FoKkfyTJ9JdJ?imageView2/1/w/480/h/480',
  'https://olcqde7ua.qnssl.com/FlGCkPbOmqGqmf6YaJDjivOAw7P8?imageView2/1/w/480/h/480',
]

describe('Component', () => {
  let node

  beforeEach(() => {
    node = document.createElement('div')
  })

  afterEach(() => {
    unmountComponentAtNode(node)
  })

  it('displays a welcome message', () => {
    render(<Component imgs={imgs} />, node, () => {
      expect(node.innerHTML).toContain('<img src="https://olcqde7ua.qnssl.com/Fl96hDtarkXwJWs2FoKkfyTJ9JdJ?imageView2/1/w/480/h/480" alt="">')
    })
  })
})
