import './globals.css'

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
      <body>{children}</body>
    </html>
  )
}
