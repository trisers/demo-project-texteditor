import React from "react";

const Navbar = () => {
  return (
    <div>
      <nav className="bg-black p-4 shadow-md">
        <div className="container mx-auto flex justify-between items-center">
          <div className="text-white font-bold text-2xl">Demo Project</div>
          <div className="space-x-6"></div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
