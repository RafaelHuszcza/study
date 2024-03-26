import "@/styles/globals.css";
import { Inter as FontSans } from "next/font/google";
import { cn } from "@/lib/utils"
import { Providers } from "@/providers";
import { useMessages } from 'next-intl'
// eslint-disable-next-line camelcase
import { unstable_setRequestLocale } from 'next-intl/server'

import { i18n, timeZone } from '../../../i18n-config'

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
})

export const metadata = {
  title: "Create T3 App",
  description: "Generated by create-t3-app",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};
export function generateStaticParams() {
  return i18n.locales.map((locale) => ({ locale }))
}


export default function RootLayout({
  children,
  params: { locale },
}: Readonly<{
  children: React.ReactNode
  params: { locale: string }
}>) {
  unstable_setRequestLocale(locale)
  const messages = useMessages()

  return (
    <html lang="en">
      <body className={cn(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable
        )}>
        <Providers locale={locale} messages={messages} timeZone={timeZone}>{children}
        </Providers>
      </body>
    </html>
  );
}