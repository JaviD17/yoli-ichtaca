// export const metadata: Metadata = {
//   title: "Yoli Ichtaca",
//   description: "2024 envisioned",
// };

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <main className="min-h-screen">{children}</main>;
}
