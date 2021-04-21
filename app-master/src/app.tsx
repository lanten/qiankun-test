import React, { useEffect } from 'react'
import { Provider } from 'react-redux'

import { store } from '@/store'
import { loadQiankun, setDefaultMountApp } from './qiankun'

export default function () {
  const contentRef = React.createRef<HTMLDivElement>()
  const contentId = 'app-content'
  // const [count, setCount] = useState(0)

  useEffect(() => {
    loadQiankun(contentRef.current || contentId)
    setDefaultMountApp('app-react')
  }, [])

  // useEffect(() => {
  //   console.log('count update!')
  // }, [count])

  function push(subapp: string) {
    history.pushState(null, subapp, subapp)
  }

  return (
    <Provider store={store}>
      <div className="app-master-content">
        <nav className="mb-16">
          <button onClick={() => push('/app-react')}>app-react</button>
          <span className="ml-16 mr-16 text-light">|</span>
          <button onClick={() => push('/app-react/page2')}>app-react:page2</button>
          <span className="ml-16 mr-16 text-light">|</span>
          <button onClick={() => push('/app-vue')}>app-vue</button>
          <span className="ml-16 mr-16 text-light">|</span>
          <button onClick={() => push('/app-vue/about')}>app-vue:about</button>
        </nav>
        <div ref={contentRef} id={contentId}></div>
      </div>
    </Provider>
  )
}
