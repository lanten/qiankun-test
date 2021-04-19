import React from 'react'
import { Provider } from 'react-redux'
// import { ConfigProvider } from 'antd'
// import zhCN from 'antd/es/locale/zh_CN'
import { store } from '@/store'
// import { AppRouter } from '@/components'

import { loadQiankun } from './qiankun'

interface AppProps {}

export default class App extends React.Component<AppProps> {
  contentRef = React.createRef<HTMLDivElement>()

  componentDidMount() {
    loadQiankun(this.contentRef.current || '#app-content')
  }

  render(): JSX.Element {
    return (
      <Provider store={store}>
        <div>master</div>
        <div ref={this.contentRef} id="app-content"></div>
      </Provider>
    )
  }
}
