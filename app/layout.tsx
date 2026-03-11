import type { Metadata } from "next";
import { PropsWithChildren } from "react";
import { Toaster } from "react-hot-toast";
import { ThemeProvider, ThemeScript } from "@kadoui/react";

import "./globals.css";

export const metadata: Metadata = {
  title: "The land of mind",
  description: "Your land for develop your life",
};

function RootLayout({ children }: PropsWithChildren) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <ThemeScript />
      </head>
      <body>
        <ThemeProvider>
          {children}
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}


export default RootLayout;