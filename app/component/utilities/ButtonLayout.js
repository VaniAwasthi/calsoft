import Link from "next/link";

const DiagonalHoverButton = () => {
  return (
    <Link
      href="/your-target-page"
      className="relative inline-block px-6 py-3 font-semibold text-white bg-red-600 rounded-md overflow-hidden transition-all duration-500 before:absolute before:inset-0 before:bg-white/20 before:blur-md before:scale-0 hover:before:scale-150 before:transition-all before:duration-500"
    >
      Hover Me
    </Link>
  );
};

export default DiagonalHoverButton;
