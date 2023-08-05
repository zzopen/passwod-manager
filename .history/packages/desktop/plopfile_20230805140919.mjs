import componentGenerator from './plop-templates/global-component/prompt.mjs'
import componentGenerator from './plop-templates/business-component/prompt.mjs'

export default function (plop) {
  plop.setGenerator('gc', componentGenerator),
  plop.setGenerator('bc', componentGenerator),
}
