import { ThemeProvider } from "@/components/theme-provider";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Abdullah Shishir | Full Stack Developer Portfolio",
  description: "Professional portfolio showcasing web development projects and technical expertise",
  keywords: "Abdullah Shishir, Full Stack Developer, Web Development, Software Engineering, Portfolio",
  authors: [{ name: "Abdullah Shishir" }],
  creator: "Abdullah Shishir",
  openGraph: {
    title: "Abdullah Shishir | Full Stack Developer Portfolio",
    description: "Professional portfolio showcasing web development projects and technical expertise",
    url: "https://abdullahshishirportfolio.vercel.app",
    siteName: "Abdullah Shishir Portfolio",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Abdullah Shishir | Full Stack Developer Portfolio",
    description: "Professional portfolio showcasing web development projects and technical expertise",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link
          href="https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css"
          rel="stylesheet"
        />
      </head>
      <body className={`${inter.className} antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
          disableTransitionOnChange
        >
          {children}
          <SpeedInsights /> {/* This usage is required to keep the import */}
          <Analytics />
        </ThemeProvider>
      </body>
    </html>
  );
}
