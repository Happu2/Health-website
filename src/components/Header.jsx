// src/components/Header.jsx
import Logo from "../assets/IMAGE7.png";
import CartIcon from "../assets/ShopCart.png";

export default function Header() {
  return (
    // top gap handled by Hero, so simple header
    <header className="bg-white shadow-sm border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex justify-between items-center h-20 space-x-12">
          
          {/* LEFT: Logo */}
          <img 
            src={Logo}
            alt="Health Desk"
            className="h-14 w-auto"
          />
          
          {/* RIGHT: Nav + Cart */}
          <div className="flex-1 flex justify-end items-center space-x-8">
            <nav className="hidden md:flex space-x-8 text-gray-700 font-medium">
              {['Home', 'Shop', 'About Us', 'FAQ', 'Blog', 'Contact Us'].map((item) => (
                <a 
                  key={item}
                  href="#"
                  className="hover:text-blue-600 transition"
                >
                  {item}
                </a>
              ))}
            </nav>

            {/* Cart icon */}
            <button className="flex items-center text-gray-600 font-medium group transition">
              <img 
                src={CartIcon}
                alt="Shopping Cart"
                className="h-6 w-6"
              />
            </button>
          </div>

        </div>
      </div>
    </header>
  );
}
