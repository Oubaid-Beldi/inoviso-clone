import React, { useState } from 'react'
import Layout from '../components/layout'

const ContactPage = () => {
  const [formData, setFormData] = useState({
    type: 'particulier',
    nom: '',
    email: '',
    telephone: '',
    entreprise: '',
    message: ''
  })

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
    // Ici vous pourriez ajouter l'envoi du formulaire
    alert('Merci pour votre message ! Nous vous recontacterons rapidement.')
  }

  const contactInfo = [
    {
      title: "Téléphone",
      info: "02 40 13 83 22",
      description: "Du lundi au vendredi, 8h-18h",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
        </svg>
      )
    },
    {
      title: "Email",
      info: "contact@inoviso.fr",
      description: "Réponse sous 24h ouvrées",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      )
    },
    {
      title: "Adresse",
      info: "5 rue des Frères Lumière",
      description: "44119 Treillières",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      )
    }
  ]

  const faq = [
    {
      question: "Combien coûte une isolation par l'extérieur ?",
      answer: "Le coût varie selon la surface, le type de finition et la complexité du projet. Comptez entre 120€ et 200€/m² TTC. Nous proposons un devis gratuit personnalisé."
    },
    {
      question: "Quelles aides financières sont disponibles ?",
      answer: "Vous pouvez bénéficier de MaPrimeRénov', des CEE, de l'Éco-PTZ et parfois d'aides locales. Nous vous accompagnons dans ces démarches."
    },
    {
      question: "Combien de temps durent les travaux ?",
      answer: "Pour une maison individuelle, comptez 1 à 3 semaines selon la surface. Pour les bâtiments collectifs, la durée varie de 2 à 6 mois."
    },
    {
      question: "Faut-il une autorisation pour les travaux ?",
      answer: "Une déclaration préalable est généralement nécessaire. Nous nous occupons de toutes les démarches administratives pour vous."
    },
    {
      question: "Quelle garantie offrez-vous ?",
      answer: "Nous offrons une garantie décennale sur tous nos travaux, ainsi qu'une garantie de parfait achèvement d'un an."
    }
  ]

  const zones = [
    "Nantes", "Saint-Nazaire", "Treillières", "Carquefou", "Orvault", 
    "Rezé", "Saint-Sébastien-sur-Loire", "Vertou", "Bouguenais", "Savenay",
    "Guérande", "La Baule", "Pornichet", "Saint-Brévin-les-Pins", "Ancenis"
  ]

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-600 to-green-600 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Contactez-nous</h1>
          <p className="text-xl md:text-2xl font-light max-w-3xl mx-auto">
            Une question, un projet ? Notre équipe d'experts est à votre disposition 
            pour vous conseiller et établir un devis personnalisé gratuitement.
          </p>
        </div>
      </section>

      {/* Contact Info & Form Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            
            {/* Contact Information */}
            <div>
              <h2 className="text-3xl font-bold text-gray-800 mb-8">Nos coordonnées</h2>
              <div className="space-y-6 mb-8">
                {contactInfo.map((contact, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="text-blue-600 mt-1">
                      {contact.icon}
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-800">{contact.title}</h3>
                      <p className="text-gray-900 font-medium">{contact.info}</p>
                      <p className="text-gray-600 text-sm">{contact.description}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Horaires */}
              <div className="bg-gray-50 p-6 rounded-lg mb-8">
                <h3 className="text-lg font-semibold text-gray-800 mb-4">Horaires d'ouverture</h3>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span>Lundi - Vendredi</span>
                    <span className="font-medium">8h00 - 18h00</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Samedi</span>
                    <span className="font-medium">9h00 - 12h00</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Dimanche</span>
                    <span className="text-gray-500">Fermé</span>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-4">Suivez-nous</h3>
                <div className="flex space-x-4">
                  <a href="#" className="text-blue-600 hover:text-blue-800 transition-colors">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                  </a>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-bold text-gray-800 mb-8">Demande de devis gratuit</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                
                {/* Type de client */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Vous êtes *
                  </label>
                  <div className="grid grid-cols-2 gap-4">
                    <button
                      type="button"
                      onClick={() => setFormData(prev => ({ ...prev, type: 'particulier' }))}
                      className={`p-3 border rounded-lg text-center transition-colors ${
                        formData.type === 'particulier' 
                          ? 'border-blue-600 bg-blue-50 text-blue-600' 
                          : 'border-gray-300 hover:border-gray-400'
                      }`}
                    >
                      Particulier
                    </button>
                    <button
                      type="button"
                      onClick={() => setFormData(prev => ({ ...prev, type: 'professionnel' }))}
                      className={`p-3 border rounded-lg text-center transition-colors ${
                        formData.type === 'professionnel' 
                          ? 'border-blue-600 bg-blue-50 text-blue-600' 
                          : 'border-gray-300 hover:border-gray-400'
                      }`}
                    >
                      Professionnel
                    </button>
                  </div>
                </div>

                {/* Nom */}
                <div>
                  <label htmlFor="nom" className="block text-sm font-medium text-gray-700 mb-2">
                    {formData.type === 'professionnel' ? 'Nom / Entreprise *' : 'Nom *'}
                  </label>
                  <input
                    type="text"
                    id="nom"
                    name="nom"
                    required
                    value={formData.nom}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder={formData.type === 'professionnel' ? 'Nom de l\'entreprise' : 'Votre nom'}
                  />
                </div>

                {/* Email et Téléphone */}
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="votre@email.com"
                    />
                  </div>
                  <div>
                    <label htmlFor="telephone" className="block text-sm font-medium text-gray-700 mb-2">
                      Téléphone
                    </label>
                    <input
                      type="tel"
                      id="telephone"
                      name="telephone"
                      value={formData.telephone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="06 12 34 56 78"
                    />
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Décrivez votre projet *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows="5"
                    value={formData.message}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                    placeholder="Décrivez votre projet d'isolation, la surface approximative, le type de bâtiment..."
                  ></textarea>
                </div>

                {/* RGPD */}
                <div className="flex items-start space-x-3">
                  <input
                    type="checkbox"
                    id="rgpd"
                    required
                    className="mt-1 h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                  />
                  <label htmlFor="rgpd" className="text-sm text-gray-600">
                    J'accepte que mes données soient utilisées pour me recontacter dans le cadre de ma demande. 
                    Conformément à la loi "informatique et libertés", vous pouvez exercer vos droits d'accès et de rectification des données vous concernant.
                  </label>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                >
                  Envoyer ma demande
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Nous trouver</h2>
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="h-96 bg-gray-200 flex items-center justify-center">
              {/* Ici vous pourriez intégrer Google Maps */}
              <div className="text-center">
                <svg className="w-16 h-16 text-gray-400 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <p className="text-gray-600">Carte interactive</p>
                <p className="text-sm text-gray-500">5 rue des Frères Lumière, 44119 Treillières</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Zone d'intervention */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
            Zone d'intervention
          </h2>
          <p className="text-lg text-gray-600 text-center mb-8 max-w-3xl mx-auto">
            Nous intervenons dans toute la Loire-Atlantique et les départements limitrophes. 
            Voici nos principales zones d'intervention :
          </p>
          <div className="grid grid-cols-3 md:grid-cols-5 gap-4 max-w-4xl mx-auto">
            {zones.map((zone, index) => (
              <div key={index} className="text-center p-3 bg-gray-50 rounded-lg hover:bg-blue-50 transition-colors">
                <span className="text-sm font-medium text-gray-700">{zone}</span>
              </div>
            ))}
          </div>
          <p className="text-center text-gray-600 mt-6">
            Votre ville n'apparaît pas ? Contactez-nous pour vérifier notre disponibilité dans votre secteur.
          </p>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-800 mb-12 text-center">
            Questions fréquemment posées
          </h2>
          <div className="max-w-4xl mx-auto space-y-4">
            {faq.map((item, index) => (
              <details key={index} className="bg-white rounded-lg shadow-md">
                <summary className="p-6 cursor-pointer hover:bg-gray-50 font-semibold text-gray-800">
                  {item.question}
                </summary>
                <div className="px-6 pb-6 text-gray-600">
                  {item.answer}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Urgence Section */}
      <section className="py-16 bg-red-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Intervention d'urgence</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Problème urgent d'étanchéité ou d'isolation ? Notre équipe peut intervenir rapidement.
          </p>
          <a 
            href="tel:0240138322"
            className="inline-flex items-center bg-white text-red-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
          >
            <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            Appeler maintenant
          </a>
        </div>
      </section>
    </Layout>
  )
}

export default ContactPage
