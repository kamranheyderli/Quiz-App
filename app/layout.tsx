import "@/styles/globals.css";
import ClientProviders from "./clientProviders";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning >
      <body>
        <ClientProviders>{children}</ClientProviders>
      </body>
    </html>
  );
}
