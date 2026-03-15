import event from './event'
import homePage from './homePage'
import heroSection from './heroSection'
import aboutSection from './aboutSection'
import infrastructureSection from './infrastructureSection'
import infrastructureItem from './infrastructureItem'
import campusLifeSection from './campusLifeSection'
import campusLifeItem from './campusLifeItem'
import logo from './logo'
import toppers from './toppers'
import aboutPage from './aboutPage'
import branch from './branch'
import feesPage from './feesPage'
import rulesPage from './rulesPage'
import publicDisclosure from './publicDisclosure'

export const schemaTypes = [
  // Main documents
  homePage,
  toppers,
  event,
  heroSection,
  aboutSection,
  aboutPage,
  branch,
  feesPage,
  rulesPage,
  infrastructureSection,
  campusLifeSection,
  logo,
  publicDisclosure,

  // Object types (nested within documents)
  infrastructureItem,
  campusLifeItem,
]
