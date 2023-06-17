import './globals.css'
import { Poppins } from 'next/font/google'

import Header from '@/components/header/Header'

const poppins = Poppins({ subsets: ['latin'] ,weight:['200','400','800']})

export const metadata = {
  title: 'Movie App',
  description: 'Made with Next-js by Ramin Majidi',
}

export default function RootLayout({ children }) {

  return (
    <html lang="en">
      <body className={poppins.className}>
        <Header/>
        <main className='mt-16 mx-auto px-2 max-w-7xl'>
        {children}
        </main>
      </body>
    </html>
  )
}
