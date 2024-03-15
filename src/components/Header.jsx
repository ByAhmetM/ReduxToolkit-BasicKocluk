import { Link, NavLink } from "react-router-dom";

const Header = () => {
  return (
    <nav className="flex justify-between p-5 bg-gray-500">
      <Link className="text-red-500 font-bold " to={"/"}>
        AHMET
      </Link>
      <div className="flex gap-3 items-center">
        <NavLink to={"/"}>Anasayfa</NavLink>
        <NavLink to={"/list"}>Sorular</NavLink>
        <NavLink to={"/add"}>Soru Ekle</NavLink>
      </div>
    </nav>
  );
};

export default Header;
