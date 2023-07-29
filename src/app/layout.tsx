import Nav from '@/components/nav'
import './globals.css'
import { Inter } from 'next/font/google'
import Hero from '@/components/hero'
import Footer from '@/components/footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Premier League: A Data Viz Project',
  description: 'This is a webapp made by heraldjose for learning data visualization using Premier League 2023 dataset.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className='min-h-screen flex flex-col bg-black'>
        <Hero >
          <Nav />
        </Hero>
        {children}
        <Footer/>
      </body>
    </html>
  )
}
