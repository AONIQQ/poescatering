'use client'

import Image from 'next/image'
import Link from 'next/link'
import { Instagram, Moon, Sun, Menu, X } from 'lucide-react'
import { useState, useEffect } from 'react'

export default function PoesJoint() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0)
  const [darkMode, setDarkMode] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const carouselImages = [
    '/sandwhich3.jpg',
    '/sandwhich4.jpg', 
    '/sandwhich5.jpg',
    '/sandwhich6.jpg',
    '/fries.jpg', 
    '/hero.jpg', 
    '/home.webp',       
    '/sandwhich7.jpg',  
    '/sandwhich8.jpg',
    '/sandwhich9.jpg',  
    '/sandwhich10.jpg', 
    '/sandwhich11.jpg',
  ]

  const testimonials = [
    {
      text: "Poe's is the best sandwich shop in Philly! The sandwiches are huge and delicious. The staff is super friendly too!",
      name: "Sarah M.",
      rating: 5
    },
    {
      text: "Amazing sandwiches and even better service! The Italian hoagie is to die for. Highly recommend!",
      name: "Mike R.",
      rating: 5
    },
    {
      text: "Best cheesesteaks in the city, hands down. The quality of ingredients really shows. Will definitely be ordering again!",
      name: "Chris L.",
      rating: 5
    }
  ]

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTestimonial((prevTestimonial) => (prevTestimonial + 1) % testimonials.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  const toggleDarkMode = () => {
    setDarkMode(!darkMode)
    document.documentElement.classList.toggle('dark')
  }

  return (
    <div className={`min-h-screen ${darkMode ? 'dark' : ''}`}>
      <div className="bg-white dark:bg-gray-900 text-gray-800 dark:text-white transition-colors duration-300">
        {/* Navbar */}
        <nav className="bg-white dark:bg-gray-800 p-4">
          <div className="container mx-auto flex justify-between items-center">
            <div className="flex items-center">
              <Image src="/logo.webp" alt="Poe's Joint Logo" width={120} height={120} />
            </div>
            <div className="hidden md:flex items-center space-x-4">
              <button
                onClick={toggleDarkMode}
                className="p-2 rounded-full bg-gray-200 dark:bg-gray-700"
              >
                {darkMode ? <Sun className="w-6 h-6" /> : <Moon className="w-6 h-6" />}
              </button>
              <a
                href="https://poesjoint.square.site"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#03939c] hover:bg-[#1b0c5f] text-white px-4 py-2 rounded-full text-sm font-semibold transition duration-300"
              >
                View Menu
              </a>
              <Link
                href="#contact"
                className="bg-[#03939c] hover:bg-[#1b0c5f] text-white px-4 py-2 rounded-full text-sm font-semibold transition duration-300"
              >
                Contact
              </Link>
            </div>
            <div className="md:hidden">
              <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
          {mobileMenuOpen && (
            <div className="md:hidden mt-4 space-y-4">
              <button
                onClick={toggleDarkMode}
                className="block w-full text-left p-2 rounded-md bg-gray-200 dark:bg-gray-700"
              >
                {darkMode ? 'Light Mode' : 'Dark Mode'}
              </button>
              <a
                href="https://poesjoint.square.site"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full text-center bg-[#03939c] hover:bg-[#1b0c5f] text-white px-4 py-2 rounded-full text-sm font-semibold transition duration-300"
              >
                View Menu
              </a>
              <Link
                href="#contact"
                className="block w-full text-center bg-[#03939c] hover:bg-[#1b0c5f] text-white px-4 py-2 rounded-full text-sm font-semibold transition duration-300"
                onClick={() => setMobileMenuOpen(false)}
              >
                Contact
              </Link>
            </div>
          )}
        </nav>

        {/* Hero Section */}
        <section className="relative h-screen">
          <video autoPlay loop muted className="absolute top-0 left-0 w-full h-full object-cover">
            <source src="/video.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-black bg-opacity-50 z-10" />
          <div className="absolute inset-0 flex flex-col items-center justify-center z-20 text-white text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 shadow-text">Poe&apos;s Sandwich Joint Catering</h1>
            <p className="text-xl md:text-2xl mb-8 shadow-text">Authentic Philly Flavors for Your Events</p>
            <Link
              href="#contact"
              className="bg-[#03939c] hover:bg-[#1b0c5f] text-white px-6 md:px-8 py-2 md:py-3 rounded-full text-lg font-semibold transition duration-300"
            >
              Request a Quote
            </Link>
          </div>
        </section>

        {/* Image Collage */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 text-center">Our Delicious Offerings</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {carouselImages.map((src, index) => (
                <div key={index} className="aspect-square overflow-hidden rounded-lg">
                  <Image src={src} alt={`Food image ${index + 1}`} width={300} height={300} className="object-cover w-full h-full" />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* About Us */}
        <section className="py-16 bg-gray-100 dark:bg-gray-800">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 text-center">About Us</h2>
            <div className="flex flex-col md:flex-row items-center">
              <div className="md:w-1/2 mb-8 md:mb-0">
                <Image src="/team1.jpg" alt="About Poe's Joint" width={600} height={400} className="rounded-lg shadow-lg" />
              </div>
              <div className="md:w-1/2 md:pl-8">
                <p className="text-lg mb-4">
                  Poe&apos;s Sandwich Joint brings the authentic flavors of Philadelphia to your events. With our passion for quality ingredients and traditional recipes, we create unforgettable dining experiences for corporate gatherings, weddings, and special occasions.
                </p>
                <p className="text-lg">
                  Our team of experienced sandwich artisans and catering professionals ensure that every detail is perfect, from the first bite to the last. Let us make your next event a delicious success!
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Our Catering Services */}
        <section className="py-16 dark:bg-gray-900">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 text-center">Our Catering Services</h2>
            <ul className="list-disc list-inside space-y-4 text-center">
              <li>Corporate Events: Impress your clients and colleagues with our professional catering services.</li>
              <li>Weddings: Make your special day even more memorable with our delicious Philly-style sandwiches.</li>
              <li>Private Parties: Celebrate in style with our customized catering options for any occasion.</li>
              <li>Business Catering: Fuel your team&apos;s productivity with our delicious and satisfying sandwich platters.</li>
            </ul>
          </div>
        </section>

        {/* Menu Highlights */}
        <section className="py-16 bg-gray-100 dark:bg-gray-800">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 text-center">Menu Highlights</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-64 h-64 mx-auto mb-4 relative overflow-hidden">
                  <Image src="/sandwhich1.jpg" alt="Signature Sandwiches" layout="fill" objectFit="cover" className="rounded-lg" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Signature Sandwiches</h3>
                <p>Our famous sandwiches packed with premium meats, cheeses, and fresh vegetables.</p>
              </div>
              <div className="text-center">
                <div className="w-64 h-64 mx-auto mb-4 relative overflow-hidden">
                  <Image src="/cheesesteak.jpg" alt="Philly Cheesesteaks" layout="fill" objectFit="cover" className="rounded-lg" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Authentic Philly Cheesesteaks</h3>
                <p>Experience the true taste of Philadelphia with our mouthwatering cheesesteaks.</p>
              </div>
              <div className="text-center">
                <div className="w-64 h-64 mx-auto mb-4 relative overflow-hidden">
                  <Image src="/fries.jpg" alt="Loaded Fries" layout="fill" objectFit="cover" className="rounded-lg" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Loaded Fries</h3>
                <p>Indulge in our crispy fries topped with a variety of delicious toppings.</p>
              </div>
            </div>
          </div>
          <div className="text-center mt-12">
            <Link
              href="#contact"
              className="bg-[#03939c] hover:bg-[#1b0c5f] text-white px-8 py-3 rounded-full text-lg font-semibold transition duration-300"
            >
              Request a Quote
            </Link>
          </div>
        </section>

        {/* How It Works */}
        <section className="py-16 dark:bg-gray-900">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 text-center">How It Works</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-[#03939c] rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">1</div>
                <h3 className="text-xl font-semibold mb-2">Contact Us</h3>
                <p>Reach out to discuss your event details and requirements.</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-[#03939c] rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">2</div>
                <h3 className="text-xl font-semibold mb-2">Customize Menu</h3>
                <p>Work with our team to create the perfect menu for your event.</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-[#03939c] rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">3</div>
                <h3 className="text-xl font-semibold mb-2">Confirm Details</h3>
                <p>Finalize all the details and confirm your booking.</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-[#03939c] rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">4</div>
                <h3 className="text-xl font-semibold mb-2">Enjoy Your Event</h3>
                <p>Relax and savor the delicious food at your event.</p>
              </div>
            </div>
          </div>
          <div className="text-center mt-12">
            <Link
              href="#contact"
              className="bg-[#03939c] hover:bg-[#1b0c5f] text-white px-8 py-3 rounded-full text-lg font-semibold transition duration-300"
            >
              Request a Quote
            </Link>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-16 bg-gray-100 dark:bg-gray-800">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 text-center">What Our Customers Say</h2>
            <div className="max-w-2xl mx-auto">
              <div className="text-center">
                <p className="text-xl italic mb-4">{testimonials[currentTestimonial].text}</p>
                <p className="font-semibold">{testimonials[currentTestimonial].name}</p>
                <div className="flex justify-center mt-2">
                  {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Us */}
        <section id="contact" className="py-16 dark:bg-gray-900">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 text-center">Request a Quote</h2>
            <form className="max-w-lg mx-auto">
              <div className="mb-4">
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Name</label>
                <input type="text" id="name" name="name" required className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#03939c] focus:border-[#03939c] dark:bg-gray-700 dark:border-gray-600 dark:text-white" />
              </div>
              <div className="mb-4">
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Email</label>
                <input type="email" id="email" name="email" required className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#03939c] focus:border-[#03939c] dark:bg-gray-700 dark:border-gray-600 dark:text-white" />
              </div>
              <div className="mb-4">
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Phone Number</label>
                <input type="tel" id="phone" name="phone" required className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#03939c] focus:border-[#03939c] dark:bg-gray-700 dark:border-gray-600 dark:text-white" />
              </div>
              <div className="mb-4">
                <label htmlFor="date" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Event Date</label>
                <input type="date" id="date" name="date" required className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#03939c] focus:border-[#03939c] dark:bg-gray-700 dark:border-gray-600 dark:text-white" />
              </div>
              <div className="mb-4">
                <label htmlFor="guests" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Number of Guests</label>
                <input type="number" id="guests" name="guests" required className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#03939c] focus:border-[#03939c] dark:bg-gray-700 dark:border-gray-600 dark:text-white" />
              </div>
              <div className="mb-4">
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Message/Comments</label>
                <textarea id="message" name="message" rows={4} className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#03939c] focus:border-[#03939c] dark:bg-gray-700 dark:border-gray-600 dark:text-white"></textarea>
              </div>
              <div className="text-center">
                <button type="submit" className="bg-[#03939c] hover:bg-[#1b0c5f] text-white px-8 py-3 rounded-full text-lg font-semibold transition duration-300">Submit Request</button>
              </div>
            </form>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-gray-800 text-white py-8 dark:bg-black">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center"> {/* Added text-center here */}
              <div>
                <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
                <p>Address: 1710 N 5th St, Philadelphia, PA 19122</p>
                <p>Phone: (215) 454-2654</p>
                <p>Menu: <a href="https://poesjoint.square.site" target="_blank" rel="noopener noreferrer" className="underline">poesjoint.square.site</a></p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4">Follow Us</h3>
                <div className="flex space-x-4 justify-center"> {/* Added justify-center here */}
                  <a href="https://www.instagram.com/poessandwichjoint/" target="_blank" rel="noopener noreferrer" className="hover:text-[#03939c]">
                    <Instagram className="w-6 h-6" />
                    <span className="sr-only">Instagram</span>
                  </a>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4">Business Hours</h3>
                <p>Sunday - Wednesday: 11 AM - 10:00 PM (Last call for delivery 9:30 PM)</p>
                <p>Thursday - Saturday: 11 AM - 11:00 PM (Last call for delivery 10:30 PM)</p>
              </div>
            </div>
            <div className="mt-8 text-center">
              <p>&copy; {new Date().getFullYear()} Poe&apos;s Sandwich Joint Catering. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </div>
    </div>
  )
}