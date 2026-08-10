export const metadata = {
  title: "NEXUS SHOP",
  description: "Welcome to the Future of Digital Store",
  icons: {
    icon: "/nexuslogo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-black min-h-screen flex flex-col`}>
        <Navbar />
        <div className="flex-1">
          {children}
        </div>
      </body>
    </html>
  );
}