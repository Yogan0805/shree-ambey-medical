import "./globals.css"

export const metadata = {
  title: "Shree Ambey Medical Stores",
  description: "Trusted Medical Store – Serving Since 2000"
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}

