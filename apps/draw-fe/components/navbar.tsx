import { Button } from "@repo/ui/button";
import Link from "next/link";

export const Navbar = () => {
  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <Link href="/" className="text-2xl font-bold text-primary">
          Live Strokes
        </Link>
        <div className="flex items-center space-x-4">
          <Link
            href="/#features"
            className="text-slate-600 hover:text-primary transition-colors"
          >
            Features
          </Link>

          <Button variant="outline">
            <Link href="/signin">Sign In</Link>
          </Button>
          <Button>
            <Link href="/signup">Sign Up Free</Link>
          </Button>
        </div>
      </nav>
    </header>
  );
};
