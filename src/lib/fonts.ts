import { Inter } from 'next/font/google'

const fontSans = Inter({
  subsets: ['latin'],
  variable: '--inter-sans',
})

const fontHeading = Inter({
  subsets: ['latin'],
  variable: '--inter-heading',
})

export const fonts = [fontSans.variable, fontHeading.variable]
