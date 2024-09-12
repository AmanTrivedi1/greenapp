import type { Metadata } from "next";
import { ThemeProvider } from "@/components/theme-provider";
import { Poppins } from "next/font/google";

import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Farming app",
  description: "This app will help you to grow better",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="bg-gradient-to-br from-green-50 to-blue-50 dark:bg-gradient-to-br dark:from-[#0C0A09] dark:to-[#0C0A09]/80">
            {children}
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
