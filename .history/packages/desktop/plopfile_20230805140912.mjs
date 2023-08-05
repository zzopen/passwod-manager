import componentGenerator from './plop-templates/component/prompt.mjs'
import componentGenerator from './plop-templates/component/prompt.mjs'

export default function (plop) {
  plop.setGenerator('gc', componentGenerator),
  plop.setGenerator('bc', componentGenerator),
}
