import globalComponentGenerator from './plop-templates/global-component/prompt.mjs'
import logicComponentGenerator from './plop-templates/business-component/prompt.mjs'

export default function (plop) {
  plop.setGenerator('gc', globalComponentGenerator(plop))
  plop.setGenerator('lc', logicComponentGenerator(plop))
}
