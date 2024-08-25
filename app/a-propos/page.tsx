import Container from "../components/Container";

const About = () => {
  return (
    <div className="bg-blue-50 min-h-screen">
      <Container>
        <div className="py-10 px-5">
          {/* Titre principal */}
          <h1 className="text-4xl font-bold text-blue-600 text-center mb-8 animate-fade-in">
            À propos de <span className="text-blue-700">TechNova</span>
          </h1>
          
          {/* Introduction avec image */}
          <div className="flex flex-col md:flex-row items-center gap-6 mb-8 animate-slide-up">
            <img 
              src="https://via.placeholder.com/400x300" 
              alt="Technologie moderne"
              className="w-full md:w-1/2 rounded-lg shadow-lg transition-transform duration-500 hover:scale-105"
            />
            <p className="text-lg text-gray-700 leading-relaxed">
              Bienvenue chez <strong>TechNova</strong>, votre boutique en ligne de référence pour des appareils électroniques de haute qualité. Nous vous proposons une sélection de produits technologiques innovants, adaptés à tous vos besoins.
            </p>
          </div>

          {/* Mission avec image */}
          <div className="flex flex-col md:flex-row-reverse items-center gap-6 mb-8 animate-slide-up-delayed">
            <img 
              src="https://via.placeholder.com/400x300" 
              alt="Innovation"
              className="w-full md:w-1/2 rounded-lg shadow-lg transition-transform duration-500 hover:scale-105"
            />
            <div>
              <h2 className="text-2xl font-semibold text-blue-600 mb-4">Notre Mission</h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                Chez <strong>TechNova</strong>, nous croyons que la technologie peut transformer le quotidien. Notre mission est de vous offrir les meilleures innovations tout en restant accessibles à tous.
              </p>
            </div>
          </div>

          {/* Pourquoi choisir TechNova */}
          <h2 className="text-2xl font-semibold text-blue-600 mb-4 animate-fade-in-delayed">Pourquoi nous choisir ?</h2>
          <ul className="list-disc list-inside text-lg text-gray-700 leading-relaxed mb-6 space-y-2 animate-slide-up-delayed">
            <li>Des produits de haute qualité de marques renommées</li>
            <li>Un service client disponible 24/7</li>
            <li>Livraison rapide et fiable partout en France</li>
            <li>Garantie sur tous nos produits</li>
          </ul>

          {/* Catégories de produits avec image */}
          <div className="flex flex-col md:flex-row items-center gap-6 mb-8 animate-slide-up-delayed">
            <img 
              src="https://via.placeholder.com/400x300" 
              alt="Produits électroniques"
              className="w-full md:w-1/2 rounded-lg shadow-lg transition-transform duration-500 hover:scale-105"
            />
            <div>
              <h2 className="text-2xl font-semibold text-blue-600 mb-4">Nos Produits</h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                Nous proposons une large gamme de produits, notamment :
              </p>
              <ul className="list-disc list-inside text-lg text-gray-700 leading-relaxed space-y-2">
                <li>Smartphones et tablettes</li>
                <li>Ordinateurs portables et de bureau</li>
                <li>Téléviseurs et systèmes audio</li>
                <li>Appareils intelligents pour la maison connectée</li>
                <li>Accessoires électroniques divers</li>
              </ul>
            </div>
          </div>

          {/* Contact */}
          <h2 className="text-2xl font-semibold text-blue-600 mb-4 animate-fade-in-delayed">Nous Contacter</h2>
          <p className="text-lg text-gray-700 leading-relaxed animate-slide-up-delayed">
            N'hésitez pas à nous contacter pour toute question. Nous sommes à votre disposition pour vous aider à trouver les solutions technologiques qui répondent à vos besoins.
          </p>

          <p className="text-center mt-8 text-blue-700 font-semibold animate-fade-in-delayed">
            <strong>TechNova</strong> – Votre expert en appareils électroniques.
          </p>
        </div>
      </Container>
    </div>
  );
};

export default About;
