import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'AddButton Component Demo',
  description: 'Demonstration of the reusable AddButton component',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="font-sans">{children}</body>
    </html>
  )
}