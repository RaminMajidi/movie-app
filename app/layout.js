import './globals.css'
import {Roboto_Condensed } from 'next/font/google'
import Header from '@/components/header/Header'


const robotoCondensed = Roboto_Condensed({
   subsets: ['latin'] ,
   weight:['300','400','700'],
   variable:'--font-robotoCondensed'
  })

export const metadata = {
  title: 'Movie-App',
  description: 'Made with Next-js 13.4.6 App  by Ramin Majidi',
}

export default function RootLayout({ children }) {

  return (
    <html lang="en">
      <body className={`${robotoCondensed.className}`}>
        <main className='mt-16 mx-auto px-2 max-w-[1400px]'>
        <Header/>
        {children}
        </main>
      </body>
    </html>
  )
}
