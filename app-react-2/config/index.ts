import path from 'path'
import { ReactTsConfigPartial } from 'ts-rc-cli'
import { env, COMMON_ENV, EnvVariables } from './env.config'

const rootPath = process.cwd()

const projectName = 'app-react-2'
const projectTitle = 'app-react-2'

const config: ReactTsConfigPartial = {
  projectName,
  projectTitle,
  port: 18082,
  htmlOptions: {
    template: path.resolve(rootPath, 'src/index.html'),
  },
  devServerOptions: {
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
