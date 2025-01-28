import Image from "next/image";
import React from "react";
import NavBarProfile from "../UserProfile/NavBarProfile";

const NavBar = () => {
  const role = ["Software Engineer", "Frontend Developer", "Backend Developer"];
  return (
    <div>
      <header className="border-b-2 border-gray-200">
        <nav className="flex justify-between items-center p-6">
          <Image src="/logo.svg" alt="logo" width={100} height={100} />
          <NavBarProfile
            roles={role}
            avatarSrc="/my_profile.jpeg"
            name="Salman Aziz"
            avatarHeight={50}
            avatarWidth={50}
          />
        </nav>
      </header>
      <main>
        <aside></aside>
        <section></section>
      </main>
    </div>
  );
};

export default NavBar;
