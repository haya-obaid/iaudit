import { Poppins } from "next/font/google";
import "@/app/globals.css";
import MainLayout from "../components/MainLayout/MainLayout";
const poppins = Poppins({
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  variable: "--font-poppins",
});

export const metadata = {
  title: "iAudit",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} antialiased`}>
        <main className="min-h-[100vh]">
          <MainLayout>{children}</MainLayout>
        </main>
      </body>
    </html>
  );
}
