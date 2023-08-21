import { Nunito } from "next/font/google";
import "./globals.css";
import type { Metadata } from "next";
import Navbar from "@/components/navbar/Navbar";
import Modal from "@/components/modals/Modal";
import RegisterModal from "@/components/modals/RegisterModal";
import { Toaster } from "react-hot-toast";
import LoginModal from "@/components/modals/LoginModal";
import getCurrentUser from "./actions/getCurrentUser";

const font = Nunito({ subsets: ["latin", "cyrillic"] });

export const metadata: Metadata = {
  title: "Airavg",
  description: "Airbnb clone",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const currentUser  = await getCurrentUser();

  return (
    <html lang="en">
      <body className={font.className}>
        <Toaster />
        <RegisterModal />
        <LoginModal />
        <Navbar currentUser={currentUser}/>
        {children}
      </body>
    </html>
  );
}
