'use client'
import { Toaster } from '@/components/ui/sonner'

import { ThemeProvider } from './theme-provider'
import { TRPCReactProvider } from '@/trpc/react'
import { type AbstractIntlMessages, NextIntlClientProvider } from 'next-intl'

export const Providers = ({
  children,
  messages,
  locale,
  timeZone,
}: {
  children: React.ReactNode
  messages: AbstractIntlMessages
  locale: string
  timeZone: string
}) => {
  return (
      <ThemeProvider
        attribute="class"
        defaultTheme="system"
        enableSystem
        disableTransitionOnChange
      >
        <TRPCReactProvider>
        <NextIntlClientProvider
            locale={locale}
            messages={messages}
            timeZone={timeZone}
          >
            {children}
            <Toaster richColors position="top-right" closeButton />
          </NextIntlClientProvider>
        </TRPCReactProvider>
      </ThemeProvider>
  )
}
