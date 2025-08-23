import React from "react";
import Images from "../Image/Image";

const Footer = () => {
  return (
    <div className="bg-gray-100 text-black">
      {/* Upper section */}
      {/* <div className="flex flex-col md:flex-row justify-between gap-10 px-6 md:px-16 py-10">
        <div className="flex flex-col gap-4 w-full md:w-1/2">
          <h1 className="font-extrabold text-3xl md:text-4xl">Hi, I'm</h1>
          <div className="flex items-center gap-3">
            <Images
              src="/images/png/jenny.png"
              className="w-12 h-12 rounded-full object-cover"
            />
            <span className="text-xl md:text-2xl font-semibold bg-lime-400 px-2 rounded">
              AI Nexus
            </span>
          </div>
          <p className="text-gray-600 text-sm">
            Leading AI innovation and solutions provider
          </p>
        </div>

        <div className="flex flex-col gap-4 w-full md:w-1/2">
          <h2 className="font-bold text-2xl md:text-3xl leading-snug">
            We empower businesses with cutting-edge AI technologies
          </h2>
          <p className="text-gray-600 text-sm">
            Get your first AI consultation within 72 hours
          </p>
          <div className="flex ">
            <button className="w-full px-6 py-3 bg-black text-white rounded hover:bg-gray-800 transition">
              Book a call
            </button>
            <button className="w-full px-6 py-3 bg-lime-400 text-black rounded hover:bg-lime-500 transition">
              Contact us
            </button>
          </div>
        </div>
      </div> */}

      {/* Newsletter Section */}
      {/* <div className="bg-white py-10 px-6 md:px-16">
        <div className="max-w-4xl mx-auto text-center space-y-4">
          <h2 className="text-2xl md:text-3xl font-bold text-black">
            Subscribe to Our AI Newsletter
          </h2>
          <p className="text-gray-600 text-sm">
            Stay updated with the latest AI insights, trends, and innovations.
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mt-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="px-4 py-3 rounded w-full sm:w-1/2 border border-gray-300 focus:outline-none"
            />
            <button className="px-6 py-3 bg-black text-white rounded hover:bg-gray-800 transition w-full sm:w-auto">
              Subscribe
            </button>
          </div>
        </div>
      </div> */}

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
                className="w-48 h-10 mb-5"
              />
              <h2 className="text-4xl font-bold">AI Nexus Solutions</h2>
              <p className="text-sm text-gray-400 mt-1">
                Pioneering the future of artificial intelligence.
              </p>
            </div>
            <div className="text-sm text-gray-500 mt-4 space-y-1">
              <p>Rötelsteig 13, 8037 Zürich</p>
              <p>Avenida Portal de L’Angel 40, 08002 Barcelona</p>
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
          <p>© AI Nexus Solutions 2025</p>
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