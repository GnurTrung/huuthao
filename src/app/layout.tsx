import "./globals.css";

const title = "ThaoHằng - We are getting married!";
const desc =
  "ThaoHằng's wedding invitation";
const img = "/assets/images/chew/cuoi_pc.jpg";

export const metadata = {
  title: title,
  description: desc,
  keywords: ["wedding", "thao", "hằng"],
  openGraph: {
    title: title,
    description: desc,
    images: img,
  },
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
