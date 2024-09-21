const Footer = () => {
  return (
    <footer className="bg-black py-8 text-white">
      <div className="mx-auto max-w-7xl text-center">
        <p className="text-sm text-white/60">
          &copy; {new Date().getFullYear()} Qershen. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
