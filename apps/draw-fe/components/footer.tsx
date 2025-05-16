export const Footer = () => {
  return (
    <footer className="bg-slate-800 text-slate-300 py-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p>
          &copy; {new Date().getFullYear()} Live Strokes. All rights reserved.
        </p>
        <p className="text-sm mt-1">
          Built with{" "}
          <span role="img" aria-label="love">
            ❤️
          </span>{" "}
          by Lovable.
        </p>
      </div>
    </footer>
  );
};
