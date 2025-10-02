import React from 'react'
import Layout from '../components/layout'
import Seo from "../components/seo"

const ParticuliersPage = () => {
  const benefits = [
    {
      title: "Économies d'énergie",
      description: "Réduisez vos factures de chauffage jusqu'à 30% grâce à une isolation performante",
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      color: "green"
    },
    {
      title: "Confort thermique",
      description: "Supprimez les ponts thermiques et profitez d'une température homogène toute l'année",
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
        </svg>
      ),
      color: "blue"
    },
    {
      title: "Valorisation du bien",
      description: "Augmentez la valeur de votre propriété et améliorez son étiquette énergétique",
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
        </svg>
      ),
      color: "purple"
    },
    {
      title: "Protection façade",
      description: "Protégez vos murs des intempéries et prolongez la durée de vie de votre façade",
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
      color: "orange"
    }
  ]

  const solutions = [
    {
      title: "Isolation avec enduit mince",
      description: "Solution classique et économique pour rénover votre façade",
      features: ["Finition enduit taloché", "Large choix de couleurs", "Excellent rapport qualité/prix", "Mise en œuvre rapide"],
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "Isolation avec bardage",
      description: "Donnez un style moderne à votre maison avec un bardage contemporain",
      features: ["Aspect bois, composite ou métal", "Entretien minimal", "Durabilité exceptionnelle", "Design personnalisable"],
      image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "Isolation avec parement pierre",
      description: "Conservez l'authenticité avec un parement pierre naturelle ou reconstituée",
      features: ["Aspect traditionnel", "Résistance aux intempéries", "Isolation haute performance", "Esthétique intemporelle"],
      image: "https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    }
  ]

  const process = [
    {
      step: "1",
      title: "Diagnostic gratuit",
      description: "Visite technique de votre logement et étude personnalisée de vos besoins"
    },
    {
      step: "2", 
      title: "Devis détaillé",
      description: "Proposition technique et financière adaptée à votre projet et votre budget"
    },
    {
      step: "3",
      title: "Accompagnement administratif",
      description: "Aide aux démarches et recherche de financements (aides, subventions)"
    },
    {
      step: "4",
      title: "Réalisation des travaux",
      description: "Intervention de nos équipes qualifiées avec respect des délais convenus"
    },
    {
      step: "5",
      title: "Suivi et garanties",
      description: "Contrôle qualité final et activation de nos garanties décennales"
    }
  ]

  const testimonials = [
    {
      name: "Marie Dubois",
      location: "Nantes",
      text: "Très satisfaite des travaux réalisés. Ma maison est maintenant beaucoup plus confortable et mes factures de chauffage ont considérablement diminué.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80"
    },
    {
      name: "Jean-Pierre Martin",
      location: "Saint-Nazaire", 
      text: "Équipe professionnelle et travail soigné. Le chantier s'est déroulé dans les temps et sans désagrément. Je recommande vivement !",
      rating: 5,
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80"
    },
    {
      name: "Sophie Leroy",
      location: "Guérande",
      text: "Excellent accompagnement du début à la fin. L'équipe nous a aidés à obtenir les aides financières et le résultat dépasse nos attentes.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80"
    }
  ]

  const getColorClasses = (color) => {
    const colors = {
      green: "bg-green-100 text-green-600",
      blue: "bg-blue-100 text-blue-600", 
      purple: "bg-purple-100 text-purple-600",
      orange: "bg-orange-100 text-orange-600"
    }
    return colors[color] || "bg-gray-100 text-gray-600"
  }

  return (
    <Layout>
              <Seo
        title="Particuliers - Isolation de votre maison"
        description="Solutions d'isolation thermique par l'extérieur pour particuliers. Réduisez vos factures de chauffage jusqu'à 30%. Aides financières disponibles. Devis gratuit."
        keywords="isolation maison, économies chauffage, aides financières, MaPrimeRénov, particulier, rénovation énergétique"
        pathname="/particuliers/"
      />
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-green-600 to-blue-600 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-6xl font-bold mb-6">Particuliers</h1>
              <p className="text-xl md:text-2xl font-light mb-8">
                Améliorez le confort de votre maison et réduisez vos factures d'énergie 
                grâce à l'isolation thermique par l'extérieur
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                  Demander un devis gratuit
                </button>
                <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors">
                  Découvrir nos réalisations
                </button>
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1570129477492-45c003edd2be?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Maison avec isolation extérieure"
                className="rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-800 mb-12 text-center">
            Pourquoi choisir l'isolation par l'extérieur ?
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center p-6 rounded-lg hover:shadow-lg transition-shadow">
                <div className={`w-20 h-20 ${getColorClasses(benefit.color)} rounded-full flex items-center justify-center mx-auto mb-6`}>
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-4">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-800 mb-12 text-center">
            Nos solutions d'isolation
          </h2>
          <div className="grid lg:grid-cols-3 gap-8">
            {solutions.map((solution, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                <img 
                  src={solution.image}
                  alt={solution.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-3">{solution.title}</h3>
                  <p className="text-gray-600 mb-4">{solution.description}</p>
                  <ul className="space-y-2">
                    {solution.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm text-gray-600">
                        <svg className="w-4 h-4 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-800 mb-12 text-center">
            Notre processus en 5 étapes
          </h2>
          <div className="max-w-4xl mx-auto">
            {process.map((item, index) => (
              <div key={index} className="flex items-start mb-8 last:mb-0">
                <div className="flex-shrink-0 w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-lg mr-6">
                  {item.step}
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-gray-800 mb-2">{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Financing Section */}
      <section className="py-16 bg-blue-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">
              Financez votre projet d'isolation
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Profitez des nombreuses aides disponibles pour réduire le coût de vos travaux d'isolation
            </p>
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="font-bold text-gray-800 mb-2">MaPrimeRénov'</h3>
                <p className="text-sm text-gray-600">Aide de l'État pour la rénovation énergétique</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="font-bold text-gray-800 mb-2">CEE</h3>
                <p className="text-sm text-gray-600">Certificats d'Économies d'Énergie</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="font-bold text-gray-800 mb-2">Éco-PTZ</h3>
                <p className="text-sm text-gray-600">Prêt à taux zéro pour la rénovation</p>
              </div>
            </div>
            <button className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
              Simuler mes aides
            </button>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-800 mb-12 text-center">
            Témoignages de nos clients
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-gray-50 p-6 rounded-lg">
                <div className="flex items-center mb-4">
                  <img 
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full mr-4"
                  />
                  <div>
                    <h4 className="font-semibold text-gray-800">{testimonial.name}</h4>
                    <p className="text-sm text-gray-600">{testimonial.location}</p>
                  </div>
                </div>
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                    </svg>
                  ))}
                </div>
                <p className="text-gray-600 italic">"{testimonial.text}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-green-600 to-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Prêt à commencer votre projet ?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Contactez-nous dès maintenant pour un diagnostic gratuit et un devis personnalisé
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              📞 02 40 13 83 22
            </button>
            <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors">
              Demander un devis en ligne
            </button>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default ParticuliersPage
