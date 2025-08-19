import type { Metadata } from 'next'
// import { Inter, Noto_Sans_JP } from 'next/font/google'
import { Epilogue, Nunito } from 'next/font/google';
import './globals.css'
import Navigation from '@/components/Navigation'

const epilogue = Epilogue({ subsets: ['latin'] })
const nunito = Nunito({ 
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  variable: '--font-japanese'
})

export const metadata: Metadata = {
  title: 'Figurashi - Figure Starter Packs',
  description: 'E-commerce website that sells figure starter packs of friends and their dream careers. Featuring the NARI series.',
  keywords: 'figures, starter packs, e-commerce, NARI series, Japanese',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${epilogue.className} ${nunito.variable}`}>
        <Navigation />
        {children}
      </body>
    </html>
  )
}
