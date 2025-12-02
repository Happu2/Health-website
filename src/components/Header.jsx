export default function Header() {
  return (
    // REMOVED 'sticky top-0 z-50' classes
    <header className="bg-white shadow-sm border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex justify-between items-center h-20 space-x-12">
          
          {/* LEFT: Logo only */}
          <img 
            src="/src/assets/IMAGE7.png" 
            alt="Health Desk" 
            className="h-14 w-auto" 
          />
          
          {/* CENTER/RIGHT: Navigation links pushed to the right */}
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
            
            {/* RIGHTMOST: Cart button replaced by Image Placeholder */}
            {/* The button is now a flexible container for the cart icon/count */}
            <button className="flex items-center text-gray-600 font-medium group transition">
              
              {/* Image placeholder for the Cart Icon */}
              <img 
                src="/src/assets/ShopCart.png" // <-- REPLACE THIS PATH WITH YOUR ACTUAL CART ICON IMAGE SOURCE
                alt="Shopping Cart" 
                className="h-6 w-6 text-gray-600 group-hover:text-blue-600 transition"
              />
              
              {/* Optional: Keep the count next to the icon */}
            </button>
          </div>
        </div>
      </div>
    </header>
  )
}