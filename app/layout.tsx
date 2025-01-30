import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import ProviderWrapper from "./store/providerWrapper";

const poppins = Poppins({
  weight: ["400", "500", "600", "700", "800"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Synergy Classroom",
  description:
    "Synergy Classroom is a platform for learning and teaching. It is a place where students and teachers can interact with each other.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${poppins.className} antialiased`}>
        <ProviderWrapper>{children}</ProviderWrapper>
      </body>
    </html>
  );
}
