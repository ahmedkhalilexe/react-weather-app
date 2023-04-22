import "./globals.css";

export const metadata = {
  title: "React Weather App",
  description:
    "a simple react app fetching data from api and printing it to the screen",
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
