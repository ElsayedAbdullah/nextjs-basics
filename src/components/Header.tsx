import Link from "next/link";

const Header = () => {
  return (
    <header className="bg-violet-400 p-3">
      <ul className="flex gap-5 justify-center">
        <li className="text-slate-100">
          <Link href={"/products"}>Products</Link>
        </li>
        <li className="text-slate-100">
          <Link href={"/about"}>About</Link>
        </li>
        <li className="text-slate-100">
          <Link href={"/profile"}>Profile</Link>
        </li>
        <li className="text-slate-100">
          <Link href={"/blog"}>Blog</Link>
        </li>
      </ul>
    </header>
  );
};

export default Header;
