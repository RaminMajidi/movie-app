'use client'
import './globals.css'
import { Montserrat } from 'next/font/google'
import Header from '@/components/header/Header'

const montserrat = Montserrat({
   subsets: ['latin'] ,
   weight:['200','400','700'],
   variable:'--font-montserrat'
  })

export const metadata = {
  title: 'Movie App',
  description: 'Made with Next-js by Ramin Majidi',
}

export default function RootLayout({ children }) {

  return (
    <html lang="en">
      <body className={`${montserrat.className}`}>
        <Header/>
        <main className='mt-16 mx-auto px-2 max-w-7xl'>
        {children}
        </main>
      </body>
    </html>
  )
}
