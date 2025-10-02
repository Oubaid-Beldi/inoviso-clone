import React from 'react'
import Layout from '../components/layout'
import Hero from '../components/hero'
import Article from '../components/article'
import Seo from "../components/seo"

const HomePage = () => {
  const newsItems = [
    {
      date: "30 septembre 2024",
      title: "Démarrage du chantier Le Plessis",
      excerpt: "Sur la lignée de La Trébale, le bailleur social Silène et l'entreprise générale Léon Grosse nous font confiance pour la réhabilitation thermique du bâtiment Le...",
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      date: "1 octobre 2024",
      title: "Métamorphose en cours pour la Mairie de Savenay",
      excerpt: "La Mairie de Savenay s'est lancée dans la réhabilitation du centre-ville et notamment la rénovation énergétique de l'Hôtel de Ville. Nous avons été choisi pour la...",
      image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      date: "1 juillet 2024",
      title: "La Galicherais a fait peau neuve !",
      excerpt: "A Saint-Nazaire, située près des quartiers Plaisance et Trébale, La Galicherais a fait l'objet d'un ambitieux programme de réhabilitation. Lancé en mai 2022 et visant à rénover...",
      image: "https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      date: "3 juin 2024",
      title: "Rapidité et efficacité à Guérande", 
      excerpt: "Une jolie maison sur Guérande se renouvelle complètement.Sous un soleil radieux, notre chargé d'affaire à réceptionné les travaux fin mai, moment pour lui de vérifier...",
      image: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    }
  ]

  const testimonials = [
    {
      text: "Très bien réalisé, très bon respect des délais et bonne tenue de chantier",
      author: "Chargé d'opération chez CISN",
      date: "06.05.2022"
    },
    {
      text: "Entreprise réactive, faisant part d'initiative et de bonne volonté sur le chantier.",
      author: "Nantes Métropole", 
      date: "05.05.2022"
    },
    {
      text: "Travaux de qualité. Entreprise réactive avec une bonne tenue du chantier.",
      author: "Chargée d'opérations chez Espace Domicile",
      date: "13.12.2019"
    },
    {
      text: "Les équipes sont très professionnelles, tous les engagements ont été respectés.",
      author: "Particulier",
      date: "29.10.2024"
    }
  ]

  return (
    <Layout>
      {/* Hero Section with Swiper */}
      <Seo
        title="Accueil"
        description="Inoviso, spécialiste de l'isolation thermique par l'extérieur. Améliorez votre confort, réduisez vos factures d'énergie. Devis gratuit en Loire-Atlantique."
        keywords="isolation thermique extérieur, ITE, économies énergie, confort thermique, Nantes, Saint-Nazaire"
        pathname="/"
      />

      <Hero />

      {/* About Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-8">DÉCOUVREZ INOVISO</h2>
          <p className="text-lg text-gray-600 max-w-4xl mx-auto">
            Explorez le savoir-faire de notre entreprise, l'un des leaders dans le domaine de l'isolation thermique par l'extérieur, 
            à travers notre activité, nos performances chiffrées et notre histoire inspirante via notre page « qui-sommes-nous »
          </p>
        </div>
      </section>

      {/* News Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-800 mb-12 text-center">ACTUALITÉS</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {newsItems.map((item, index) => (
              <Article
                key={index}
                image={item.image}
                date={item.date}
                title={item.title}
                excerpt={item.excerpt}
                category="News"
              />
            ))}
          </div>
        </div>
      </section>

      {/* Sponsoring Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">SPONSORING</h2>
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-lg text-gray-600 mb-6">
              Inoviso est fier d'annoncer un partenariat avec l'équipe locale de basket, Orvault Sports Basket. 
              Ce partenariat marque le début d'une collaboration prometteuse visant à soutenir le développement du sport local 
              et à renforcer les liens avec la communauté d'Orvault.
            </p>
            <p className="text-gray-600">
              En soutenant Orvault Sports Basket, nous avons pour ambition de promouvoir des valeurs telles que l'effort, 
              l'esprit d'équipe et la persévérance, qui sont également fondamentales pour notre entreprise
            </p>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-800 mb-12 text-center">CE QUE LES CLIENTS PENSENT DE NOUS</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                    </svg>
                  ))}
                </div>
                <p className="text-gray-600 mb-4 italic">"{testimonial.text}"</p>
                <div className="text-sm">
                  <div className="font-semibold text-gray-800">{testimonial.author}</div>
                  <div className="text-gray-500">{testimonial.date}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default HomePage