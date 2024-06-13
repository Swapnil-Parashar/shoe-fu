import React from "react";
import {
  FaTwitterSquare,
  FaFacebookSquare,
  FaInstagramSquare,
  FaYoutubeSquare,
} from "react-icons/fa";
import { useSelector } from "react-redux";

const Footer = () => {
  const loginState = useSelector((state) => state.auth.isLoggedIn);

  return (
    <footer className="footer footer-center p-10 bg-base-200 text-base-content rounded mt-10 max-md:px-0">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        <div className="md:col-span-1">
          <h4 className="text-2xl font-semibold mb-4">Customer Policies</h4>
          <ul className="space-y-2">
            <li>
              <a href="/contact" className="text-lg">
                Contact Us
              </a>
            </li>
            <li>
              <a href="/faq" className="text-lg">
                FAQ
              </a>
            </li>
            <li>
              <a href="/terms" className="text-lg">
                Terms & Conditions
              </a>
            </li>
          </ul>
        </div>

        <div className="md:col-span-1">
          <h4 className="text-2xl font-semibold mb-4">Useful Links</h4>
          <ul className="space-y-2">
            <li>
              <a href="/blog" className="text-lg">
                Blog
              </a>
            </li>
            <li>
              <a href="/career" className="text-lg">
                Career
              </a>
            </li>
            <li>
              <a href="/sitemap" className="text-lg">
                Site Map
              </a>
            </li>
          </ul>
        </div>

        {/* Column 3: Social Media Links */}
        <div className="md:col-span-2">
          <h4 className="text-2xl font-semibold mb-4">Follow Us</h4>
          <div className="grid grid-flow-col gap-4">
            <FaTwitterSquare className="text-6xl max-sm:text-4xl text-accent-content" />
            <FaFacebookSquare className="text-6xl max-sm:text-4xl text-accent-content" />
            <FaInstagramSquare className="text-6xl max-sm:text-4xl text-accent-content" />
            <FaYoutubeSquare className="text-6xl max-sm:text-4xl text-accent-content" />
          </div>
        </div>
      </div>

      {/* Copyright */}
      <aside className="mt-8">
        <p className="text-2xl max-sm:text-sm text-accent-content">
          Copyright © 2024 - All rights reserved by Shoe-fu
        </p>
      </aside>
    </footer>
  );
};

export default Footer;
