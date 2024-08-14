import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Container from "./_components/Container";
import { AuthWrapper } from "@/contexts/authContext";
import { Toaster } from "react-hot-toast";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Social",
  description: "social app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-theme="black">
      <AuthWrapper>
        <body className={`${inter.className}`}>
          <Toaster position="bottom-center" />
          <Container>{children}</Container>
        </body>
      </AuthWrapper>
    </html>
  );
}