import type { Linter } from 'eslint'
import factory from '@mestriga-org/eslint-config'

const config: Promise<Linter.Config[]> = factory()
export default config
