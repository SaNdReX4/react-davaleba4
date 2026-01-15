import "./globals.css";

export const metadata = {
  title: "Registration App",
  description: "User registration form",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}