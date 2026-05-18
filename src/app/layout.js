import './globals.css'

export const metadata = {
  title: 'OSCE UKMPPD — Materi Bulan Mei',
  description: 'Rangkuman materi OSCE UKMPPD Bulan Mei 2022–2025 lengkap dengan S&S, Diagnosis Banding, dan Tatalaksana',
}

export default function RootLayout({ children }) {
  return (
    <html lang="id">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link href="https://fonts.googleapis.com/css2?family=DM+Serif+Display&family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,400;0,9..40,500;0,9..40,600;1,9..40,400&display=swap" rel="stylesheet" />
      </head>
      <body>{children}</body>
    </html>
  )
}
