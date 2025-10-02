import React from 'react'
import Header from './header'

const Layout = ({ children }) => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main>{children}</main>
      <footer className="bg-gray-800 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">Inoviso</h3>
              <p className="text-gray-300 mb-4">
                Votre spécialiste de l'isolation par l'extérieur
              </p>
              <div className="text-gray-300">
                <p>5 rue des Frères Lumière</p>
                <p>44 119 Treillières</p>
                <p className="mt-2">02 40 13 83 22</p>
                <p>contact@inoviso.fr</p>
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Navigation</h4>
              <ul className="space-y-2 text-gray-300">
                <li><a href="/" className="hover:text-white">Accueil</a></li>
                <li><a href="/qui-sommes-nous" className="hover:text-white">Qui sommes-nous ?</a></li>
                <li><a href="/particuliers" className="hover:text-white">Particuliers</a></li>
                <li><a href="/professionnels" className="hover:text-white">Professionnels</a></li>
                <li><a href="/contact" className="hover:text-white">Contact</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Suivez-nous</h4>
              <a href="#" className="text-gray-300 hover:text-white">
                LinkedIn
              </a>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Inoviso. Tous droits réservés.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Layout