import { notEmpty } from '../common/utils.mjs'

const PREFIX_PATH = 'src/renderer/'
const TEMPLATE_PATH = 'plop-templates/global-component/template'

function defineConfig(/** @type {import('plop').NodePlopAPI} */ plop) {
  const camelCase = plop.getHelper('camelCase')
  const kebabCase = plop.getHelper('kebabCase')
  const pascalCase = plop.getHelper('pascalCase')

  console.log('ssss')
  return {
    description: '全局组件',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: '请输入组件名',
        validate: notEmpty('name')
      }
    ],
    actions: (data) => {
      const { name } = data
      const componentName = name

      const componentParentDirPath = `${PREFIX_PATH}/src/components`
      const camelCaseComponentName = camelCase(componentName) // 首字母小写
      const kebabCaseComponentName = kebabCase(componentName) // 小写短横线连接
      const pascalCaseComponentName = pascalCase(pascalCase) // 首字母大写

      console.log('camelCaseComponentName:', camelCaseComponentName)
      console.log('kebabCaseComponentName:', kebabCaseComponentName)
      console.log('pascalCaseComponentName:', pascalCaseComponentName)
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
}

export default defineConfig
