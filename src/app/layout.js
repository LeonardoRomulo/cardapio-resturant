
import "./globals.css";


export const metadata = {
  title: "Cardápio - restaurant",
  description: "O teu cardápio a um clique de você",
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
