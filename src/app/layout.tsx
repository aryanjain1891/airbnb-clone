import type { Metadata } from "next";
import "./globals.css";
import ClientBody from "./ClientBody"; // Updated import of ClientBody
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Airbnb Experiences - Discover unique activities and tours",
  description: "Airbnb Experiences - Book unforgettable activities hosted by locals on Airbnb.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col">
        <ClientBody>
          <Header />
          <main className="flex-grow">
            {children}
          </main>
          <Footer />
        </ClientBody>
      </body>
    </html>
  );
}
