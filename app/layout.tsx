import './globals.css'
import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import NavBar from './components/nav/NavBar'
import Footer from './components/footer/Footer'
import { CartContextProvider } from './hooks/useCart'
import { Toaster, resolveValue } from 'react-hot-toast';

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
    <body className={`${poppins.className} text-state-700`}>
          <Toaster toastOptions={{style:{
            background: 'white',
            color: 'black',
          }}} />
          <CartContextProvider>
          <div className='flex flex-col min-h-screen'>
              <NavBar/>
              <main className='flex-grow bg-[#f5f5f5]'>{children}</main>
              <Footer/>
            </div>
          </CartContextProvider>
        </body>
    </html>
  )
}
