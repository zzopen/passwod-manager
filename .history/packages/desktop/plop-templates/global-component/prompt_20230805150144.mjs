import { notEmpty } from '../common/utils.mjs'
import { NodePlopAPI } from 'plop'

const PREFIX_PATH = 'src/renderer/'
const TEMPLATE_PATH = 'plop-templates/global-component/template'

function defineConfig(plop: NodePlopAPI) {}

export default {
  description: '全局组件',
  prompts: [
    {
      type: 'input',
      name: 'name',
      message: '请输入组件名',
      validate: notEmpty('name')
    },
    {
      type: 'rawlist',
      name: 'path',
      message: '请选择组件生成位置',
      choices: ['src/components'],
      filter(value) {
        if (value != 'src/components') {
          return ''
        }

        return PREFIX_PATH + value
      },
      validate(value) {
        if (!value) {
          return '请选择组件生成的位置'
        }

        return true
      }
    }
  ],
  actions: (data) => {
    const { name, path } = data

    const componentParentDirPath = path
    const componentName = name

    const camelCaseComponentName = '{{camelCase componentName}}' // 首字母小写
    const kebabCaseComponentName = '{{kebabCase componentName}}' // 小写短横线连接
    const pascalCaseComponentName = '{{pascalCase componentName}}' // 首字母大写

    const actions = [
      // index.ts
      {
        type: 'add',
        path: `${componentParentDirPath}/${kebabCaseComponentName}/index.ts`,
        templateFile: `${TEMPLATE_PATH}/index.ts.hbs`,
        data: {
          camelCaseComponentName: camelCaseComponentName,
          kebabCaseComponentName: kebabCaseComponentName,
          pascalCaseComponentName: pascalCaseComponentName
        }
      },
      // src/component-props.ts
      {
        type: 'add',
        path: `${componentParentDirPath}/${kebabCaseComponentName}/src/${kebabCaseComponentName}-props.ts`,
        templateFile: `${TEMPLATE_PATH}/src/component-props.ts.hbs`,
        data: {
          componentName: componentName
        }
      },
      // src/component.vue
      {
        type: 'add',
        path: `${componentParentDirPath}/${kebabCaseComponentName}/src/${kebabCaseComponentName}.vue`,
        templateFile: `${TEMPLATE_PATH}/src/component.vue.hbs`,
        data: {
          componentName: componentName
        }
      },
      // src/styles/component.scss
      {
        type: 'add',
        path: `${componentParentDirPath}/${kebabCaseComponentName}/src/${kebabCaseComponentName}.scss`,
        templateFile: `${TEMPLATE_PATH}/src/component.scss.hbs`,
        data: {
          componentName: componentName
        }
      }
    ]

    return actions
  }
}
