import event from './event'
import homePage from './homePage'
import heroSection from './heroSection'
import aboutSection from './aboutSection'
import infrastructureSection from './infrastructureSection'
import infrastructureItem from './infrastructureItem'
import leadershipSection from './leadershipSection'
import leader from './leader'
import campusLifeSection from './campusLifeSection'
import campusLifeItem from './campusLifeItem'
import logo from './logo'
import toppers from './toppers'
import aboutPage from './aboutPage'
import branch from './branch'
import feesPage from './feesPage'
import rulesPage from './rulesPage'

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
  leadershipSection,
  campusLifeSection,
  logo,





  // Object types (nested within documents)
  infrastructureItem,
  leader,
  campusLifeItem,
]
