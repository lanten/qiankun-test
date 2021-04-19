import React from 'react'
import reactDom from 'react-dom'

import App from './app'
import '@/styles/index.less'

renderApp()

function renderApp() {
  reactDom.render(<App />, document.getElementById('app'))
}
