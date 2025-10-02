import React from 'react'
import Layout from '../components/layout'
import Seo from "../components/seo"

const ProfessionnelsPage = () => {
  const clientTypes = [
    {
      title: "Bailleurs sociaux",
      description: "Réhabilitation thermique de logements collectifs et amélioration du confort des locataires",
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      ),
      projects: ["Résidence Les Sableaux", "La Galicherais", "Le Plessis"]
    },
    {
      title: "Entreprises générales",
      description: "Partenariat technique pour vos chantiers de construction et rénovation",
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
        </svg>
      ),
      projects: ["Léon Grosse", "Bouygues Construction", "Vinci Construction"]
    },
    {
      title: "Collectivités",
      description: "Rénovation énergétique de bâtiments publics et équipements municipaux",
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z" />
        </svg>
      ),
      projects: ["Mairie de Savenay", "Nantes Métropole", "Conseil Départemental"]
    },
    {
      title: "Syndics & Gestionnaires",
      description: "Solutions d'isolation pour copropriétés et patrimoine immobilier",
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      ),
      projects: ["Espace Domicile", "Avelim", "CISN"]
    }
  ]

  const services = [
    {
      title: "Études techniques",
      description: "Diagnostic thermique, étude de faisabilité et conception technique adaptée à vos contraintes",
      features: ["Audit énergétique", "Plans d'exécution", "Calculs thermiques", "Dossier réglementaire"]
    },
    {
      title: "Réalisation travaux",
      description: "Mise en œuvre par nos équipes qualifiées avec respect des délais et de la qualité",
      features: ["Équipes certifiées RGE", "Matériaux haute performance", "Suivi de chantier", "Contrôle qualité"]
    },
    {
      title: "Accompagnement administratif",
      description: "Gestion complète des démarches administratives et recherche de financements",
      features: ["Dossiers de subventions", "Déclarations préalables", "Coordination MOE", "Suivi réglementaire"]
    },
    {
      title: "Maintenance & SAV",
      description: "Service après-vente et maintenance préventive pour pérenniser vos investissements",
      features: ["Garantie décennale", "Maintenance préventive", "Intervention rapide", "Suivi performance"]
    }
  ]

  const advantages = [
    {
      title: "Expertise reconnue",
      description: "Plus de 15 ans d'expérience dans l'isolation thermique par l'extérieur",
      stat: "15+ ans"
    },
    {
      title: "Équipe qualifiée",
      description: "Techniciens certifiés RGE et formés aux dernières techniques",
      stat: "100% RGE"
    },
    {
      title: "Réactivité",
      description: "Délais d'intervention courts et respect des plannings",
      stat: "48h"
    },
    {
      title: "Garanties",
      description: "Assurance décennale et garanties étendues sur tous nos travaux",
      stat: "10 ans"
    }
  ]

  const references = [
    {
      client: "Silène (Bailleur social)",
      project: "Réhabilitation Le Plessis",
      description: "Isolation thermique par l'extérieur de 120 logements collectifs avec finition enduit",
      year: "2024",
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      client: "Nantes Métropole",
      project: "Équipements publics",
      description: "Rénovation énergétique de plusieurs bâtiments municipaux dans l'agglomération nantaise",
      year: "2023",
      image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      client: "Léon Grosse",
      project: "Partenariat technique",
      description: "Sous-traitance spécialisée pour plusieurs chantiers de construction neuve et rénovation",
      year: "2023-2024",
      image: "https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    }
  ]

  const certifications = [
    {
      name: "RGE Qualibat",
      description: "Reconnu Garant de l'Environnement",
      logo: "🏆"
    },
    {
      name: "ISO 9001",
      description: "Management de la qualité",
      logo: "⭐"
    },
    {
      name: "Qualibat 7131",
      description: "Isolation thermique par l'extérieur",
      logo: "🛡️"
    },
    {
      name: "CSTB",
      description: "Avis techniques validés",
      logo: "✅"
    }
  ]

  return (
    
    <Layout>
              <Seo
        title="Professionnels - Partenaire B2B isolation"
        description="Partenaire de confiance pour vos projets d'isolation thermique par l'extérieur. Bailleurs sociaux, entreprises générales, collectivités. Expertise technique garantie."
        keywords="isolation professionnelle, bailleur social, entreprise générale, collectivité, partenariat B2B, sous-traitance"
        pathname="/professionnels/"
      />
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-800 to-indigo-900 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-6xl font-bold mb-6">Professionnels</h1>
              <p className="text-xl md:text-2xl font-light mb-8">
                Partenaire de confiance pour vos projets d'isolation thermique par l'extérieur. 
                Expertise technique, qualité garantie et respect des délais.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-white text-blue-800 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                  Demander un devis
                </button>
                <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-800 transition-colors">
                  Nos références
                </button>
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Chantier professionnel"
                className="rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Client Types Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-800 mb-12 text-center">
            Nos clients professionnels
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {clientTypes.map((client, index) => (
              <div key={index} className="text-center p-6 bg-gray-50 rounded-lg hover:shadow-lg transition-shadow">
                <div className="text-blue-600 mb-6 flex justify-center">
                  {client.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-4">{client.title}</h3>
                <p className="text-gray-600 mb-4">{client.description}</p>
                <div className="text-sm text-blue-600">
                  <p className="font-semibold">Références :</p>
                  {client.projects.map((project, idx) => (
                    <p key={idx} className="text-xs">{project}</p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-800 mb-12 text-center">
            Nos services professionnels
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <h3 className="text-2xl font-bold text-gray-800 mb-4">{service.title}</h3>
                <p className="text-gray-600 mb-6">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-gray-700">
                      <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Advantages Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-800 mb-12 text-center">
            Pourquoi nous choisir ?
          </h2>
          <div className="grid md:grid-cols-4 gap-8">
            {advantages.map((advantage, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl font-bold text-blue-600 mb-2">{advantage.stat}</div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">{advantage.title}</h3>
                <p className="text-gray-600">{advantage.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* References Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-800 mb-12 text-center">
            Nos dernières réalisations
          </h2>
          <div className="grid lg:grid-cols-3 gap-8">
            {references.map((ref, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                <img 
                  src={ref.image}
                  alt={ref.project}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="text-lg font-bold text-gray-800">{ref.project}</h3>
                    <span className="text-sm text-blue-600 font-semibold">{ref.year}</span>
                  </div>
                  <p className="text-sm text-blue-600 font-semibold mb-2">{ref.client}</p>
                  <p className="text-gray-600 text-sm">{ref.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-800 mb-12 text-center">
            Nos certifications et labels
          </h2>
          <div className="grid md:grid-cols-4 gap-8">
            {certifications.map((cert, index) => (
              <div key={index} className="text-center p-6 bg-gray-50 rounded-lg">
                <div className="text-4xl mb-4">{cert.logo}</div>
                <h3 className="text-lg font-bold text-gray-800 mb-2">{cert.name}</h3>
                <p className="text-sm text-gray-600">{cert.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 bg-blue-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-800 mb-12 text-center">
            Notre approche projet
          </h2>
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">1</div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">Analyse & Étude</h3>
                <p className="text-gray-600">Diagnostic technique complet et étude de faisabilité personnalisée</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">2</div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">Planification</h3>
                <p className="text-gray-600">Coordination des équipes et planification détaillée des interventions</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">3</div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">Réalisation</h3>
                <p className="text-gray-600">Exécution des travaux avec suivi qualité et respect des délais</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-gradient-to-r from-blue-800 to-indigo-900 text-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Développons ensemble vos projets</h2>
              <p className="text-xl mb-8">
                Contactez notre équipe commerciale pour étudier vos besoins et établir un partenariat durable.
              </p>
              <div className="space-y-4">
                <div className="flex items-center">
                  <svg className="w-6 h-6 mr-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <span>02 40 13 83 22</span>
                </div>
                <div className="flex items-center">
                  <svg className="w-6 h-6 mr-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <span>contact@inoviso.fr</span>
                </div>
                <div className="flex items-center">
                  <svg className="w-6 h-6 mr-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <span>5 rue des Frères Lumière, 44119 Treillières</span>
                </div>
              </div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-8 rounded-lg">
              <h3 className="text-2xl font-bold mb-6">Demande de devis professionnel</h3>
              <form className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <input 
                    type="text" 
                    placeholder="Nom de l'entreprise"
                    className="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-white/70 focus:outline-none focus:border-white"
                  />
                  <input 
                    type="text" 
                    placeholder="Contact"
                    className="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-white/70 focus:outline-none focus:border-white"
                  />
                </div>
                <input 
                  type="email" 
                  placeholder="Email professionnel"
                  className="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-white/70 focus:outline-none focus:border-white"
                />
                <textarea 
                  placeholder="Décrivez votre projet..."
                  rows="4"
                  className="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-white/70 focus:outline-none focus:border-white resize-none"
                ></textarea>
                <button className="w-full bg-white text-blue-800 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                  Envoyer la demande
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default ProfessionnelsPage
