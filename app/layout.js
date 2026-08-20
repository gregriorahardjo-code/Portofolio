import { Space_Grotesk, IBM_Plex_Sans, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";
import Nav from "../components/Nav";

const display = Space_Grotesk({
  subsets: ["latin"],
  weight: ["500", "700"],
  variable: "--font-display",
});

const body = IBM_Plex_Sans({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-body",
});

const mono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-mono",
});

export const metadata = {
  title: "Gregorio Rahardjo — Portfolio",
  description: "Mechanical engineering portfolio — manufacturing optimization and material analysis.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable} ${mono.variable}`}>
      <body>
        <Nav />
        {children}
        <footer>
          <div className="wrap">© {new Date().getFullYear()} Gregorio Rahardjo — built with Next.js, deployed on Vercel</div>
        </footer>
      </body>
    </html>
  );
}
