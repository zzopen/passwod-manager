import { notEmpty } from '../common/utils.mjs'

const PREFIX_PATH = 'src/renderer/'
const TEMPLATE_PATH = 'plop-templates/global-component/template'

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
    const templateFileName = 'business'

    const componentParentDirPath = path
    const componentDirName = name
    const componentName = name

    const actions = [
      // index.ts
      {
        type: 'add',
        path: `${componentParentDirPath}/${componentDirName}/index.ts`,
        templateFile: `${TEMPLATE_PATH}/index.ts.hbs`,
        data: {
          component_name: name
        }
      },
      // src/component-props.ts
      {
        type: 'add',
        path: `${componentParentDirPath}/${componentDirName}/src/${componentName}-props.ts`,
        templateFile: `${TEMPLATE_PATH}/src/component-props.ts.hbs`,
        data: {
          component_name: name
        }
      },
      // src/component.vue
      {
        type: 'add',
        path: `${componentParentDirPath}/${componentDirName}/src/${componentName}.vue`,
        templateFile: `${TEMPLATE_PATH}/src/component.vue.hbs`,
        data: {
          component_name: name
        }
      },
      // src/styles/component.scss
      {
        type: 'add',
        path: `${componentParentDirPath}/${componentDirName}/src/${componentName}.scss`,
        templateFile: `${TEMPLATE_PATH}/src/component.scss.hbs`,
        data: {
          component_name: name
        }
      }
    ]

    return actions
  }
}
