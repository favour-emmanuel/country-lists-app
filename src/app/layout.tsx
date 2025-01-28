import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import { Provider } from "@/Provider";

export const metadata: Metadata = {
  title: "Country Verse",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="dark:bg-appBlack">
        <Provider>
          <Navbar />
          {children}
        </Provider>
      </body>
    </html>
  );
}
