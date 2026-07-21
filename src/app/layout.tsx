import type { Metadata } from "next";
import "@/styles/globals.css";
import { cn } from "@/lib/utils";
import { pally } from "@/lib/fonts";

export const metadata: Metadata = {
  title: {
    default: "Magnet — Dastyare Social",
    template: "%s — Magent — Dastyare Social",
  },
  description: "magnet.dastyare.social",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cn(pally.className, "antialiased tracking-tighter")}>
        {children}
      </body>
    </html>
  );
}
