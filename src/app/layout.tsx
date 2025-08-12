import type { Metadata } from 'next'
import { Inter, Noto_Sans_JP } from 'next/font/google'
import './globals.css'
import Navigation from '@/components/Navigation'

const inter = Inter({ subsets: ['latin'] })
const notoSansJP = Noto_Sans_JP({ 
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
      <body className={`${inter.className} ${notoSansJP.variable}`}>
        <Navigation />
        {children}
      </body>
    </html>
  )
}
