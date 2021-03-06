import './public-path'
import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { store } from '@/store'

import App from './app'
import '@/styles/index.less'

// renderApp()

function renderApp(el?: HTMLElement) {
  ReactDOM.render(
    <Provider store={store}>
      <App routes={$tools.routes} />
    </Provider>,
    el || document.getElementById('app')
  )
}

if (!(window as any).__POWERED_BY_QIANKUN__) {
  renderApp()
}

export async function bootstrap(props: any) {
  console.log(props)
}

export async function mount(props: any) {
  console.log(props)
  renderApp(props.container)
}

export async function unmount(props: any) {
  const { container } = props
  ReactDOM.unmountComponentAtNode(container || document.querySelector('#app-content'))
}
