import path from 'path'
import { ReactTsConfigPartial } from 'ts-rc-cli'
import { env, COMMON_ENV, EnvVariables } from './env.config'

const rootPath = process.cwd()

const projectName = 'app-master'
const projectTitle = 'app-master'

const config: ReactTsConfigPartial = {
  projectName,
  projectTitle,
  port: 18080,
  htmlOptions: {
    template: path.resolve(rootPath, 'src/index.html'),
  },
  devServerOptions: {
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
    publicPath: '',
  },

  entry: {
    app: path.resolve(rootPath, 'src/main.tsx'),
  },

  provide: {
    $api: path.resolve(rootPath, 'src/api'),
    $tools: path.resolve(rootPath, 'src/tools'),
  },

  COMMON_ENV: {
    PROJECT_NAME: projectName,
    PROJECT_TITLE: projectTitle,
    ...COMMON_ENV,
  } as EnvVariables,

  env,
}

export default config
