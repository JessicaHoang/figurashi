import Link from 'next/link'
import Image from 'next/image'
// components/Footer.tsx
export default function Footer() {
    return (
      <footer className="bg-[#EAA074] text-brown-900 px-6 py-12">
        {/* Top Section */}
        <div className="max-w-7xl mx-auto text-center mb-10">
          <h2 className="text-lg font-bold tracking-wide uppercase mb-2">Create. Share. Unite.</h2>
          <p className="max-w-2xl mx-auto text-sm leading-relaxed">
            Our mission is to light up passion and unite the world with love and appreciation
            towards our art created by artists around the world.
          </p>
        </div>
  
        {/* Social + App Buttons */}
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center mb-10 gap-6">
          <div className="text-left">
            <h1 className="font-bold text-md mb-2">Follow us on</h1>
            {/* Add social icons here */}
            <div className="flex justify-between gap-4">
          <Link href="https://www.instagram.com//" className="hover:opacity-80 transition-opacity flex justify-center">
          <Image
                src="/images/socials/Instagram.svg"
                alt="Check it out here!"
                width={160}
                height={48}
                className="h-12 w-auto"
              />
            </Link>
            <Link href="https://www.facebook.com/" className="hover:opacity-80 transition-opacity flex justify-center">
          <Image
                src="/images/socials/Facebook.svg"
                alt="Check it out here!"
                width={160}
                height={48}
                className="h-12 w-auto"
              />
            </Link>
            <Link href="https://x.com/" className="hover:opacity-80 transition-opacity flex justify-center">
          <Image
                src="/images/socials/Twitter.svg"
                alt="Check it out here!"
                width={160}
                height={48}
                className="h-12 w-auto"
              />
            </Link>
          </div>
          </div>
          <div className="flex gap-4">
          <Link href="https://play.google.com/store/games?device=windows&pli=1" className="hover:opacity-80 transition-opacity flex justify-center">
          <Image
                src="/images/buttons/Google Play.svg"
                alt="Check it out here!"
                width={160}
                height={48}
                className="h-12 w-auto"
              />
            </Link>
            <Link href="https://www.apple.com/app-store/" className="hover:opacity-80 transition-opacity flex justify-center">
          <Image
                src="/images/buttons/App Store.svg"
                alt="Check it out here!"
                width={160}
                height={48}
                className="h-12 w-auto"
              />
            </Link>
          </div>
        </div>
  
        {/* Community Signup */}
        <div className="max-w-7xl mx-auto mb-10">
          <h4 className="font-semibold mb-2">Join the community</h4>
          <div className="flex flex-col md:flex-row gap-4">
            <input
              type="email"
              placeholder="Your email"
              className="border border-brown-300 px-4 py-2 rounded-md w-full md:w-1/2"
            />
            <button className="bg-brown-900 text-white px-4 py-2 rounded-md">Sign Me Up</button>
          </div>
        </div>
  
        {/* Contact + Links */}
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 text-sm">
          {/* Contact Info */}
          <div>
            <h5 className="font-bold mb-2">Contact us</h5>
            <p>Monday – Sunday: 8:00 am – 2:00 am PDT</p>
            <p>Email us: <a href="mailto:na.support@figurashi.com" className="underline">na.support@figurashi.com</a></p>
            <p>Change Country/Region: <span className="font-semibold">US</span></p>
          </div>
  
          {/* Support Links */}
          <div>
            <h5 className="font-bold mb-2">Support</h5>
            <ul className="space-y-1">
              <li>FAQ</li>
              <li>Privacy Policy</li>
              <li>Shipping Policy</li>
              <li>Returns</li>
              <li>Exchange</li>
            </ul>
          </div>
  
          {/* Shop Links */}
          <div>
            <h5 className="font-bold mb-2">Shop</h5>
            <ul className="space-y-1">
              <li>Launch Calendar</li>
              <li>Accessories</li>
              <li>Plush Toys</li>
              <li>Bundles</li>
              <li>New Releases</li>
            </ul>
          </div>

            {/* About Links */}
          <div>
            <h5 className="font-bold mb-2">About</h5>
            <ul className="space-y-1">
              <li>About Figurashi</li>
              <li>Artists</li>
            </ul>
          </div>
          
          
        </div>
        
  
        {/* Bottom Legal */}
        <div className="max-w-7xl mx-auto mt-10 text-xs text-center text-brown-700">
          <p>Your Privacy Choice</p>
          <p>Terms & Conditions</p>
        </div>
      </footer>
    )
  }