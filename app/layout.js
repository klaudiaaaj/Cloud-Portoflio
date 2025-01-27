import localFont from "next/font/local";
import "./globals.css";
import { JetBrains_Mono } from 'next/font/google'
import Header from "@/components/header";
import PageTransistion from "@/components/PageTransistion";

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700'],
  variable: '--font-jetbrains-mono',
})

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={jetbrainsMono.className}
      >
      <Header/>
      <PageTransistion>
        {children}
        </PageTransistion>
      </body>
    </html>
  );
}
