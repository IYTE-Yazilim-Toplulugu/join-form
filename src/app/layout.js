import Image from 'next/image';
import './globals.css';
import { Inter } from 'next/font/google';


const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Üye Ol - Yazılım Topluluğu',
  description: 'Join our community',
}

export default function RootLayout({ children }) {
  return (
    <html lang="tr">
      <meta name="viewport" content="width=device-width, height=device-height, initial-scale=1, minimum-scale=1" />
      <body className={inter.className}>
        <div className='max-w-md mx-auto bg-[#FFE5D7]'>
          {children}
        </div>
      </body>
    </html>
  )
}
