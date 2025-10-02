import React, { useState } from 'react'
import { Link } from 'gatsby'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  // Common link classes
  const linkClasses = "text-gray-700 hover:text-blue-600 transition-colors"
  const activeLinkClasses = "text-blue-600 font-semibold"

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link to="/" className="text-2xl font-bold text-blue-600">
            Inoviso
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <Link 
              to="/" 
              className={linkClasses}
              activeClassName={activeLinkClasses}
            >
              Accueil
            </Link>
            <Link 
              to="/qui-sommes-nous" 
              className={linkClasses}
              activeClassName={activeLinkClasses}
            >
              Qui sommes-nous ?
            </Link>
            <Link 
              to="/particuliers" 
              className={linkClasses}
              activeClassName={activeLinkClasses}
            >
              Particuliers
            </Link>
            <Link 
              to="/professionnels" 
              className={linkClasses}
              activeClassName={activeLinkClasses}
            >
              Professionnels
            </Link>
            <Link 
              to="/contact" 
              className={linkClasses}
              activeClassName={activeLinkClasses}
            >
              Contact
            </Link>
          </nav>

          {/* Mobile menu button */}
          <button
            className="md:hidden text-gray-700"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden pb-4">
            <div className="flex flex-col space-y-2">
              <Link 
                to="/" 
                className={`${linkClasses} py-2`}
                activeClassName={activeLinkClasses}
                onClick={() => setIsMenuOpen(false)}
              >
                Accueil
              </Link>
              <Link 
                to="/qui-sommes-nous" 
                className={`${linkClasses} py-2`}
                activeClassName={activeLinkClasses}
                onClick={() => setIsMenuOpen(false)}
              >
                Qui sommes-nous ?
              </Link>
              <Link 
                to="/particuliers" 
                className={`${linkClasses} py-2`}
                activeClassName={activeLinkClasses}
                onClick={() => setIsMenuOpen(false)}
              >
                Particuliers
              </Link>
              <Link 
                to="/professionnels" 
                className={`${linkClasses} py-2`}
                activeClassName={activeLinkClasses}
                onClick={() => setIsMenuOpen(false)}
              >
                Professionnels
              </Link>
              <Link 
                to="/contact" 
                className={`${linkClasses} py-2`}
                activeClassName={activeLinkClasses}
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </Link>
            </div>
          </nav>
        )}
      </div>
    </header>
  )
}

export default Header