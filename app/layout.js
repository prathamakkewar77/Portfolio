import { Inter } from "next/font/google";
import "./globals.css";
import Image from "next/image";
import { FloatingDockDemo } from "../components/navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "PRATHAM AKKEWAR",
  description: "CREATED BY PRATHAM AKKEWAR",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main className="flex min-h-screen flex-col items-center justify-between bg-black m-0 p-0">
          {children}

{/* Desktop image */}
<div className="hidden md:block fixed bottom-0 left-0 overflow-hidden shadow-lg p-0 m-0">
  <img
    src="./pratham.png" // Make sure to replace this with the correct path to your uploaded image
    alt="Hero"
    className="object-contain h-auto"
    style={{ width: 'auto', height: '100vh', userSelect: 'none', pointerEvents: 'none' }}
    draggable="false"
  />
</div>



          <FloatingDockDemo />
        </main>
      </body>
    </html>
  );
}
