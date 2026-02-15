import { Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-8 bg-black border-t border-white/10 text-center text-gray-500 text-sm">
      <div className="max-w-7xl mx-auto px-4 flex flex-col items-center gap-4">
        <p className="flex items-center gap-2">
          Made with <Heart size={16} className="text-red-500 fill-red-500" /> by Srivathsa JG
        </p>
        <p>&copy; {new Date().getFullYear()} All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
