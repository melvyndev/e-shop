import './globals.css'
import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import NavBar from './components/nav/NavBar'
import Footer from './components/footer/Footer'

const poppins = Poppins({ subsets: ['latin'],weight:['400','700'] })

export const metadata: Metadata = {
  title: 'E-Shop',
  description: 'Application E-commerce',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <div className='flex'>
          <NavBar/>
          <main>{children}</main>
          <Footer/>
        </div>
        </body>
    </html>
  )
}
