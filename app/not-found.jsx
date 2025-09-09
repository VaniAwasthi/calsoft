export default function NotFound() {
  return (
    <main className="min-h-svh flex items-center justify-center bg-black">
      <img
        src="/404Giff.gif"  // file inside public/
        alt="Page Not Found"
        className="max-w-sm w-full h-auto"
      />
    </main>
  );
}