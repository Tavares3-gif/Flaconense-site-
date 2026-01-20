export const metadata = {
  title: "Flaconense FC",
  description: "Site oficial do Flaconense Futebol Clube"
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body style={{ margin: 0 }}>{children}</body>
    </html>
  );
}
