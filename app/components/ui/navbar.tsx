import Link from "next/link";

export default function Navbar() {
  return (
    <header className="bg-gray-100 shadow">
      <div className="container mx-auto px-4 py-6 flex items-center justify-between">
        <Link href="/">
          <div className="flex items-center">
            <span className="font-bold text-3xl tracking-tight text-blue-950">
              Home
            </span>
          </div>
        </Link>
        </div>
    </header>
  );
}