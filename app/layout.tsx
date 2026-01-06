import type React from "react"
import type { Metadata } from "next"
import { Playfair_Display } from "next/font/google"
import localFont from "next/font/local"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
})

const neueMontreal = localFont({
  src: [
    {
      path: "../public/fonts/neue-montreal-free-demo-pangram-pangram-030418/NeueMontreal-Regular.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/fonts/neue-montreal-free-demo-pangram-pangram-030418/NeueMontreal-Medium.otf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../public/fonts/neue-montreal-free-demo-pangram-pangram-030418/NeueMontreal-Bold.otf",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-neue-montreal",
})

export const metadata: Metadata = {
  title: "Oak Railings | Premium Handcrafted Oak Railings",
  description:
    "Transform your home with beautifully handcrafted oak railings. Bespoke designs, expert craftsmanship, timeless elegance.",
  icons: {
    icon: "/railing.png",
    apple: "/railing.png",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${playfair.variable} ${neueMontreal.variable} font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
