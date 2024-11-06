const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="footer mt-4 mb-20 flex justify-center">
      <pre>© {currentYear} CorgiDev. All rights reserved.</pre>
    </footer>
  );
};

export default Footer;