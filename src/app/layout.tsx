import './globals.css'
import { Inter } from 'next/font/google'
import ReposContextProvider from  './context/ReposContext'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Explore Open Source Projects',
  description: 'This project showcase a list of open source projects in react and a quick interaction with them.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ReposContextProvider>
        {children}
        </ReposContextProvider>
        </body>
    </html>
  )
}
