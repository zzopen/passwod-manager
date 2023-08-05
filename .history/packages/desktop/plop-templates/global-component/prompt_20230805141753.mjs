import { notEmpty } from './utils.mjs'

const PREFIX_PATH = 'src/renderer/'
const TEMPLATE_PATH = 'plop-templates/global-component'

export default {
  description: 'generate vue3 ts component',
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

    const actions = [
      // index.ts
      {
        type: 'add',
        path: `${componentParentDirPath}/${componentDirName}/index.ts`,
        templateFile: `${TEMPLATE_PATH}/${templateFileName}-component/index.ts.hbs`,
        data: {
          component_name: name
        }
      },
      {
        type: 'add',
        path: `${path}/${name}/src/index.vue`,
        templateFile: `plop-templates/component/${templateFileName}-component/{{ pascalCase tpl }}.vue.hbs`,
        data: {
          component_name: name,
          class_name: name,
          template: blocks.includes('template'),
          script: blocks.includes('script'),
          style: blocks.includes('style')
        }
      },

      // src/index.scss
      {
        type: 'add',
        path: `${path}/${name}/src/index.scss`,
        templateFile: `plop-templates/component/${templateFileName}-component/index.scss.hbs`,
        data: {
          component_name: name
        }
      },
      // src/props.ts
      {
        type: 'add',
        path: `${path}/${name}/src/props.ts`,
        templateFile: `plop-templates/component/common/props.ts.hbs`,
        data: {
          component_name: name
        }
      }
    ]

    return actions
  }
}
