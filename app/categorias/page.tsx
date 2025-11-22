import Image from 'next/image';

export default function Categorias() {
  const categorias = [
    {
      nombre: 'Absoluta Mixto / Seniors Mixto / Veteranos Mixto',
      distancia: '12 km (Aproximadamente)',
      descripcion: 'La Prueba Reina. Es el tramo más exigente y técnico. Se desarrolla en un circuito ondulado que combina terreno de hierba y tierra compacta, aprovechando las características naturales de la Dehesa.',
      publico: 'Corredores federados y populares experimentados',
      icon: '🏆',
      color: 'from-verde-oscuro to-verde-claro'
    },
    {
      nombre: 'Popular Corta / Cross Corto',
      distancia: '5 km (Aproximadamente)',
      descripcion: 'Iniciación al Cross. Ideal para deportistas ocasionales o caminantes que desean experimentar el entorno sin la carga de la distancia completa.',
      publico: 'Deportistas ocasionales, iniciados',
      icon: '🏃',
      color: 'from-verde-claro to-beige'
    },
    {
      nombre: 'Juvenil / Cadete',
      distancia: '3-4 km',
      descripcion: 'Pruebas competitivas para jóvenes atletas, manteniendo la esencia del campo a través.',
      publico: 'Jóvenes atletas (14-17 años)',
      icon: '🎯',
      color: 'from-beige to-verde-claro'
    },
    {
      nombre: 'Infantil / Alevín',
      distancia: '1-2 km',
      descripcion: 'Deporte Base. Carreras seguras y cortas, realizadas en circuito más corto y llano para máxima visibilidad y seguridad.',
      publico: 'Niños y niñas (8-13 años)',
      icon: '⚡',
      color: 'from-verde-claro to-verde-oscuro'
    },
    {
      nombre: 'Chupetines (Promocional)',
      distancia: '100-200 m',
      descripcion: 'Familiar y Lúdica. Una carrera no competitiva y festiva para los más pequeños. Todos los participantes reciben un regalo o medalla simbólica.',
      publico: 'Los más pequeños (hasta 7 años)',
      icon: '🎈',
      color: 'from-beige via-verde-claro to-verde-oscuro'
    }
  ];

  return (
    <>
      {/* Hero */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/galeria-3.jpeg"
            alt="Corredores en la dehesa"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-verde-oscuro/85 to-verde-claro/75 diagonal-pattern"></div>
        </div>
        <div className="container mx-auto px-4 text-center relative z-10 text-white">
          <h1 className="text-5xl font-bold mb-6 drop-shadow-lg">Categorías y Distancias</h1>
          <p className="text-xl max-w-3xl mx-auto drop-shadow-md">
            Tenemos una categoría para cada edad y nivel. Desde los más pequeños hasta los veteranos,
            todos tienen su lugar en el Cross Las Lagunas.
          </p>
        </div>
      </section>

      {/* Público Objetivo */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-verde-oscuro text-center">Público Objetivo</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-beige/30 p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-3 text-verde-oscuro">
                  Corredores Populares y Federados Regionales
                </h3>
                <p className="text-gray-700 mb-3">
                  <strong>Quiénes son:</strong> Atletas individuales y clubes de atletismo de Extremadura y provincias vecinas.
                </p>
                <p className="text-gray-700">
                  <strong>Qué buscan:</strong> Una carrera de campo a través competitiva y bien organizada que se salga de los circuitos urbanos,
                  ofreciendo el desafío y la belleza de la Dehesa.
                </p>
              </div>

              <div className="bg-verde-claro/20 p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-3 text-verde-oscuro">
                  Comunidad Local y Familiar
                </h3>
                <p className="text-gray-700 mb-3">
                  <strong>Quiénes son:</strong> Vecinos de Santibáñez el Bajo, familias, niños y jóvenes.
                </p>
                <p className="text-gray-700">
                  <strong>Qué buscan:</strong> Fomentar el deporte, el orgullo de pertenencia al municipio y disfrutar de un evento social,
                  participando en las categorías más cortas y lúdicas.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Categorías Detalladas */}
      <section className="py-16 bg-beige/30">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-verde-oscuro text-center">
            Todas las Categorías
          </h2>
          <div className="space-y-6 max-w-5xl mx-auto">
            {categorias.map((categoria, index) => (
              <div
                key={index}
                className={`bg-gradient-to-r ${categoria.color} text-white p-8 rounded-lg shadow-lg`}
              >
                <div className="flex items-start gap-4">
                  <div className="text-5xl">{categoria.icon}</div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold mb-2">{categoria.nombre}</h3>
                    <div className="bg-white/20 inline-block px-4 py-2 rounded-full mb-4">
                      <span className="font-bold text-lg">{categoria.distancia}</span>
                    </div>
                    <p className="mb-3 text-lg">{categoria.descripcion}</p>
                    <p className="text-sm bg-white/10 inline-block px-4 py-2 rounded">
                      <strong>Público:</strong> {categoria.publico}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Información del Recorrido */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-verde-oscuro text-center">
              Características del Recorrido
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-beige/30 p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-3 text-verde-oscuro flex items-center gap-2">
                  <span>🌲</span> Terreno
                </h3>
                <p className="text-gray-700">
                  Circuitos ondulados que combinan terreno de hierba y tierra compacta,
                  aprovechando las características naturales de la Dehesa de Santibáñez.
                </p>
              </div>

              <div className="bg-verde-claro/20 p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-3 text-verde-oscuro flex items-center gap-2">
                  <span>🔄</span> Sistema de Vueltas
                </h3>
                <p className="text-gray-700">
                  Formato inclusivo con sistema de circuitos cerrados por vueltas,
                  diseñado para máxima visibilidad y seguridad de los participantes.
                </p>
              </div>

              <div className="bg-verde-claro/20 p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-3 text-verde-oscuro flex items-center gap-2">
                  <span>🏞️</span> Entorno Natural
                </h3>
                <p className="text-gray-700">
                  100% campo a través entre encinas centenarias y alcornoques,
                  en un paraje de alto valor ambiental y paisajístico.
                </p>
              </div>

              <div className="bg-beige/30 p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-3 text-verde-oscuro flex items-center gap-2">
                  <span>🎯</span> Nivel Técnico
                </h3>
                <p className="text-gray-700">
                  Recorridos adaptados a cada categoría, desde carreras lúdicas para los más pequeños
                  hasta pruebas técnicas y exigentes para atletas experimentados.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-br from-verde-oscuro to-verde-claro text-white text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-6">¿Preparado para el Desafío?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Elige tu categoría e inscríbete en el Cross Las Lagunas
          </p>
          <a
            href="/inscripcion"
            className="inline-block bg-beige text-verde-oscuro px-8 py-4 rounded-lg font-bold text-lg hover:bg-white transition-colors shadow-lg"
          >
            Inscríbete Ahora
          </a>
        </div>
      </section>
    </>
  );
}
