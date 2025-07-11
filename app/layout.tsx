// layout.tsx
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <body>
        <header className="header">
          <h2>🔥 My Next.js App</h2>
        </header>
        <main>{children}</main>
        <footer className="footer">
          <small>© 2025</small>
        </footer>
      </body>
    </html>
  );
}
