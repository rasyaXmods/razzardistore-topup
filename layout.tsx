import "./globals.css";

export const metadata = {
  title: "Razzardi Store",
  description: "Top up game instan, aman, dan murah.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id">
      <body>{children}</body>
    </html>
  );
}
