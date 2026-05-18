import './globals.css'

export const metadata = {
  title: 'OSCE UKMPPD — Materi Bulan Mei',
  description: 'Rangkuman materi OSCE UKMPPD Bulan Mei 2022–2025',
}

export default function RootLayout({ children }) {
  return (
    <html lang="id">
      <head>
        <meta name="theme-color" content="#0F1117" />
      </head>
      <body>{children}</body>
    </html>
  )
}
