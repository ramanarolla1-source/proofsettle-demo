import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "ProofSettle Demo",
  description:
    "Live MVP demonstrating how verified sports intelligence from TxLINE is transformed into trusted operational decisions, trustless Solana settlement, and transparent Trust Receipts.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
