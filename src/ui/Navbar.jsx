const Nav = () => {
  return (
    <nav className="bg-gray-100 h-20 flex justify-between p-4">
      <p>Logo</p>
      <ul className="flex gap-5">
        {/*  */}
        <li>Home</li>
        <li>Why Mutual Funds?</li>
        <li>How it Works</li>
        <li>About</li>
        {/* Contact Us Page */}
        <li>Contact Us</li>
      </ul>
      <span>Login</span>
    </nav>
  );
};

export default Nav;
