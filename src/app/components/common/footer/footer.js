import React from "react";
import Images from "../Image/Image";

const Footer = () => {
  return (
    <div className="bg-gray-100 text-black">
    
      {/* Middle section */}
      <div className="bg-themeColor text-white">
        {/* Main Content */}
        <div className="flex flex-col md:flex-row justify-between gap-10 px-6 md:px-16 py-6 border-b border-headingColor">
          {/* Logo + Info */}
          <div className="w-full md:w-1/2 mb-10 md:mb-0">
            <div className="mb-4 flex flex-col gap-1">
              <Images
                src="/images/png/logo.png"
                alt="building"
                className="w-48  mb-5"
              />
              <h2 className="text-4xl font-bold">AI Solutions</h2>
              <p className="text-sm text-gray-400 mt-1">
                Pioneering the future of artificial intelligence.
              </p>
            </div>
            <div className="text-sm text-gray-500 mt-4 space-y-1">
              <p>Khubar</p>
              <p>Saudi Arabia</p>
            </div>
          </div>

          {/* Footer Columns */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full md:w-1/2">
            {/* Column 1 */}
            <div className="flex flex-col gap-4 p-6 w-full">
              <div>
                <h3 className="font-semibold mb-3">Solutions</h3>
                <ul className="space-y-1 text-sm text-gray-400">
                  <li>AI Development</li>
                  <li>Machine Learning</li>
                  <li>Data Analytics</li>
                  <li>AI Consulting</li>
                  <li>Automation Tools</li>
                </ul>
              </div>
              <div className="pt-4">
                <h3 className="font-semibold mb-3">Explore</h3>
                <ul className="space-y-1 text-sm text-gray-400">
                  <li>  <a href="/about-us" className="text-xs font-medium">
                    About us
                  </a>
                  </li>
                  <li>  <a href="/our-products" className="text-xs font-medium">
                    Our Products
                  </a></li>
                  <li>   <a href="/our-services" className="text-xs font-medium">
                    Our Services
                  </a></li>
                </ul>
              </div>
            </div>

            {/* Column 2 */}
            <div className="flex flex-col gap-4 p-6 w-full">
              <div>
                <h3 className="font-semibold mb-3">Resources</h3>
                <ul className="space-y-1 text-sm text-gray-400">
                  <li>AI Tutorials</li>
                  <li>Whitepapers</li>
                  <li>Webinars</li>
                </ul>
              </div>

              <div className="pt-4">
                <h3 className="font-semibold mb-3">Contacts</h3>
                <ul className="space-y-1 text-sm text-gray-400">
                  <li>
                    <a href="/contact-us" className="text-xs font-medium">
                      Contact Us
                    </a>
                  </li>
                
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Legal Footer */}
        <div className="flex flex-col md:flex-row justify-between items-center px-6 md:px-16 py-4 text-sm text-paraColor bg-themeColor">
          <p>© ai-orbits Solutions 2025</p>
          <div className="flex flex-wrap gap-4 mt-2 md:mt-0">
            <p className="hover:text-white cursor-pointer">
              Terms & Conditions
            </p>
            <p className="hover:text-white cursor-pointer">Privacy Policy</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;