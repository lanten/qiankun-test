import path from 'path'
import { ReactTsConfigPartial } from 'ts-rc-cli'
import { env, COMMON_ENV, EnvVariables } from './env.config'

const rootPath = process.cwd()

const projectName = 'app-react'
const projectTitle = 'app-react'

const config: ReactTsConfigPartial = {
  projectName,
  projectTitle,
  port: 18081,
  htmlOptions: {
    template: path.resolve(rootPath, 'src/index.html'),
  },
  devServerOptions: {
    // publicPath: 'http://10.110.5.144:18081/',
    host: '10.110.5.144',
    disableHostCheck: true,
    // contentBase: path.join(rootPath, 'dev-dist'),
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
  },

  entry: {
    app: path.resolve(rootPath, 'src/main.tsx'),
  },

  provide: {
    $api: path.resolve(rootPath, 'src/api'),
    $tools: path.resolve(rootPath, 'src/tools'),
  },

  // moduleFederationOptions: {
  //   name: 'app_react',
  //   filename: 'exports.js',
  //   exposes: {
  //     routes: path.resolve(rootPath, 'src/tools/auto-routes'),
  //     exports: path.resolve(rootPath, 'src/app-exports'),
  //   },
  //   // shared: {
  //   //   react: {
  //   //     import: 'react', // the "react" package will be used a provided and fallback module
  //   //     shareKey: 'react', // under this name the shared module will be placed in the share scope
  //   //     shareScope: 'default', // share scope with this name will be used
  //   //     eager: true,
  //   //   },
  //   //   'react-dom': {
  //   //     eager: true,
  //   //   },
  //   // },
  // },

  COMMON_ENV: {
    PROJECT_NAME: projectName,
    PROJECT_TITLE: projectTitle,
    ...COMMON_ENV,
  } as EnvVariables,

  env,

  configureWebpack() {
    return {
      output: {
        library: `${projectName}-[name]`,
        libraryTarget: 'umd',
        chunkLoadingGlobal: `webpackJsonp_${projectName}`,
      },
    }
  },
}

export default config
