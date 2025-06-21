import React from "react";
import Nav from "./Nav";
import MobileNav from "./MobileNav";

const Header = () => {
  return (
    <nav>
      {/* Main navigation  */}
      <div className="hidden lg:block">
        <Nav />
      </div>

      {/* Mobile navigation  */}
      <div className="block lg:hidden">
        
        <MobileNav />
      </div>
    </nav>
  );
};

export default Header;
