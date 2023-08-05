import globalComponentGenerator from './plop-templates/global-component/prompt.mjs'
// import businessComponentGenerator from './plop-templates/business-component/prompt.mjs'

export default function (plop) {
  plop.setGenerator('gc', globalComponentGenerator(plop))
  // plop.setGenerator('bc', businessComponentGenerator)
}
