import { registerMicroApps, start } from 'qiankun'

export function loadQiankun(el: HTMLElement | string) {
  registerMicroApps([
    {
      name: 'app-react', // app name registered
      entry: 'http://localhost:18081',
      container: el,
      activeRule: '/react',
    },
  ])

  start({ sandbox: false })
}
