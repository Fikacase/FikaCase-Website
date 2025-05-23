import type { Metadata } from "next";
import { Poppins } from "next/font/google"; // Import Poppins font
import "./globals.css";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "700"], // Adjust weights as needed
});

export const metadata: Metadata = {
  title: "Fika Case",
  description: "Phone-free classrooms for elevated learning",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
