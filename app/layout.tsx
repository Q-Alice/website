import './globals.css'
import { Analytics } from "@vercel/analytics/react"

export const metadata = {
  title: 'Project Qalice',
  description: 'Enter the rabbit hole',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}
        <Analytics/>
      </body>
    </html>
  )
}
