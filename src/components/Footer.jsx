export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer>
      <p>© {currentYear} Marcela Moura</p>
    </footer>
  );
}
