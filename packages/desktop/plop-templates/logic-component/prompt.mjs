import { notEmpty } from '../common/utils.mjs'

const PREFIX_PATH = 'src/renderer/src'
const TEMPLATE_PATH = 'plop-templates/logic-component/template'

function defineConfig(/** @type {import('plop').NodePlopAPI} */ plop) {
  const camelCase = plop.getHelper('camelCase')
  const kebabCase = plop.getHelper('kebabCase')
  const pascalCase = plop.getHelper('pascalCase')

  return {
    description: '业务组件',
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

      const componentParentDirPath = `${PREFIX_PATH}/views/_components`
      const camelCaseComponentName = camelCase(componentName) // 首字母小写
      const kebabCaseComponentName = kebabCase(componentName) // 小写短横线连接
      const pascalCaseComponentName = pascalCase(componentName) // 首字母大写

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
        // src/props.ts
        {
          type: 'add',
          path: `${componentParentDirPath}/${kebabCaseComponentName}/src/props.ts`,
          templateFile: `${TEMPLATE_PATH}/src/props.ts.hbs`,
          data: {
            camelCaseComponentName: camelCaseComponentName,
            pascalCaseComponentName: pascalCaseComponentName
          }
        },
        // src/index.vue
        {
          type: 'add',
          path: `${componentParentDirPath}/${kebabCaseComponentName}/src/index.vue`,
          templateFile: `${TEMPLATE_PATH}/src/index.vue.hbs`,
          data: {
            kebabCaseComponentName: kebabCaseComponentName,
            camelCaseComponentName: camelCaseComponentName,
            pascalCaseComponentName: pascalCaseComponentName
          }
        }
        // src/styles/component.scss
        // {
        //   type: 'add',
        //   path: `${componentParentDirPath}/${kebabCaseComponentName}/src/index.scss`,
        //   templateFile: `${TEMPLATE_PATH}/src/index.scss.hbs`,
        //   data: {
        //     kebabCaseComponentName: kebabCaseComponentName
        //   }
        // }
      ]

      return actions
    }
  }
}

export default defineConfig
