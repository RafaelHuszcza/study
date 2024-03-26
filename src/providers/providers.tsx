'use client'
import { Toaster } from '@/components/ui/sonner'

import { ThemeProvider } from './theme-provider'
import { TRPCReactProvider } from '@/trpc/react'

export const Providers = ({
  children,
}: {
  children: React.ReactNode
}) => {
  return (
      <ThemeProvider
        attribute="class"
        defaultTheme="system"
        enableSystem
        disableTransitionOnChange
      >
        <TRPCReactProvider>
            {children}
            <Toaster richColors position="top-right" closeButton />
        </TRPCReactProvider>
      </ThemeProvider>
  )
}
