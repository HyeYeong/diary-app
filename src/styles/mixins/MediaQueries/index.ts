import { breakpoints } from '@/helpers/common/Breakpoints'

type Size = 'md'

export const mediaQueries = (size: Size) => `@media (min-width: ${breakpoints[size]}px)`
