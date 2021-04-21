export * from 'qiankun'
import { registerMicroApps, start } from 'qiankun'

export function loadQiankun(el: HTMLElement | string) {
  const handleActiveRule = (name: string) => {
    return (location: Location) => {
      return location.pathname.startsWith(name)
    }
  }

  registerMicroApps([
    {
      name: 'app-react',
      entry: 'http://localhost:18081',
      container: el,
      activeRule: handleActiveRule('/app-react'),
    },

    {
      name: 'app-vue',
      // entry: { scripts: ['http://localhost:18082/js/app.js', 'http://localhost:18082/js/chunk-vendors.js'] },
      entry: 'http://localhost:18082',
      container: el,
      activeRule: handleActiveRule('/app-vue'),
    },
  ])

  start({ sandbox: false })
}
