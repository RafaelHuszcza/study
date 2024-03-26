
import createIntlMiddleware from 'next-intl/middleware'
import { i18n } from '../i18n-config'

export default createIntlMiddleware({
  ...i18n,
  localePrefix: 'always',
})


export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)'],
}
