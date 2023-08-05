import { withInstall } from '../../shared/utils'
import pageContent from './src/index.vue'
import './src/page-content.scss'

export const PageContent = withInstall(pageContent)
export default PageContent
export * from './src/page-content-props'
