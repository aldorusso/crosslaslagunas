import Link from 'next/link';
import Image from 'next/image';

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative h-[600px] overflow-hidden">
        {/* Background Image with Blur Effect */}
        <div className="absolute inset-0">
          <Image
            src="/images/galeria-9.jpeg"
            alt="Cross Las Lagunas - Dehesa de Santibáñez"
            fill
            className="object-cover scale-110 blur-[2px]"
            priority
            quality={100}
          />
          {/* Multiple overlay layers for better appearance */}
          <div className="absolute inset-0 bg-gradient-to-br from-verde-oscuro/85 via-verde-oscuro/70 to-verde-claro/75"></div>
          <div className="absolute inset-0 diagonal-pattern"></div>
        </div>

        <div className="absolute inset-0 flex items-center justify-center">
          <div className="container mx-auto px-4 text-center text-white z-10">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 drop-shadow-lg">
              CROSS LAS LAGUNAS
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto drop-shadow-md">
              Descubre el I Cross Las Lagunas: Conexión Pura con la Naturaleza de Extremadura
            </p>
            <p className="text-lg md:text-xl mb-12 max-w-4xl mx-auto drop-shadow-md">
              Participa en esta carrera de campo a través única que te llevará a través de la majestuosa Dehesa de Santibáñez,
              un entorno donde la naturaleza pura de Extremadura se fusiona con la sombra de encinas centenarias.
              ¡Ven a vivir este espectacular cross!
            </p>
            <Link
              href="/inscripcion"
              className="inline-block bg-beige text-verde-oscuro px-8 py-4 rounded-lg font-bold text-lg hover:bg-white transition-colors shadow-lg"
            >
              Inscríbete Ahora
            </Link>
          </div>
        </div>
      </section>

      {/* Sobre el Evento */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 text-verde-oscuro">
            Sobre el Evento
          </h2>
          <div className="max-w-4xl mx-auto space-y-6 text-gray-700 leading-relaxed">
            <div className="bg-beige/30 p-8 rounded-lg">
              <h3 className="text-2xl font-bold mb-4 text-verde-oscuro">Historia: La Dehesa como protagonista</h3>
              <p>
                El I Cross Popular "Dehesa de Santibáñez" nace de la visión de un grupo de vecinos comprometidos con el deporte
                y el desarrollo local, con el objetivo de convertir un activo natural inigualable —la Dehesa de Santibáñez el Bajo—
                en el escenario de una experiencia deportiva memorable. Este paraje, corazón de la comarca Trasierra-Tierras de Granadilla,
                se distingue por su biodiversidad, sus encinas centenarias y alcornoques, que dibujan un paisaje de llanuras y suaves ondulaciones.
                La historia del evento está intrínsecamente ligada al territorio, buscando honrar la dehesa extremeña y posicionar a Santibáñez
                el Bajo en el mapa del turismo deportivo regional.
              </p>
            </div>

            <div className="bg-verde-claro/20 p-8 rounded-lg">
              <h3 className="text-2xl font-bold mb-4 text-verde-oscuro">Filosofía y Ambiente: Deporte, Naturaleza y Comunidad</h3>
              <p>
                Nuestra filosofía se resume en tres pilares: <strong>Deporte, Naturaleza y Comunidad</strong>. Más allá de la competición,
                buscamos promover la salud y el bienestar, el respeto absoluto por el entorno (con un plan de sostenibilidad Cero Residuos
                y balizado respetuoso) y el fortalecimiento del tejido social. El ambiente será festivo e inclusivo, comenzando la jornada
                con las emocionantes carreras infantiles y culminando con la prueba reina de la categoría absoluta. El punto álgido será
                la convivencia post-carrera, que se reforzará con una degustación del sabor local, ofreciendo a corredores y acompañantes
                las tradicionales migas extremeñas como agradecimiento por su participación.
              </p>
            </div>

            <div className="bg-beige/30 p-8 rounded-lg">
              <h3 className="text-2xl font-bold mb-4 text-verde-oscuro">Impacto y Proyección de Futuro</h3>
              <p>
                El Cross está estratégicamente diseñado para ser mucho más que una carrera de un día: es una inversión en el futuro del municipio.
                Buscamos generar un turismo de fin de semana activo, atrayendo a corredores y familias de Extremadura y provincias limítrofes,
                lo que dinamizará directamente la hostelería, el comercio y los alojamientos locales. El evento aspira a consolidarse como
                una cita anual ineludible en el calendario extremeño de campo a través, proyectando la imagen de Santibáñez el Bajo como
                un municipio vivo, activo y comprometido con la naturaleza y el deporte.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Valores */}
      <section className="py-20 bg-gradient-to-br from-verde-claro to-verde-oscuro text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Nuestros Valores</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white/10 p-6 rounded-lg backdrop-blur-sm">
              <div className="text-4xl mb-4">🌿</div>
              <h3 className="text-xl font-bold mb-3">Sostenibilidad y Naturaleza Pura</h3>
              <p className="text-sm">
                Respeto absoluto por el entorno. La Dehesa no es solo un circuito, es nuestra protagonista.
                Evento con política Cero Residuos y balizado responsable.
              </p>
            </div>

            <div className="bg-white/10 p-6 rounded-lg backdrop-blur-sm">
              <div className="text-4xl mb-4">🏃</div>
              <h3 className="text-xl font-bold mb-3">Deporte Auténtico y Superación</h3>
              <p className="text-sm">
                Recuperar la esencia del cross puro y el campo a través. Recorrido técnico y exigente
                para el disfrute de atletas y corredores populares.
              </p>
            </div>

            <div className="bg-white/10 p-6 rounded-lg backdrop-blur-sm">
              <div className="text-4xl mb-4">🤝</div>
              <h3 className="text-xl font-bold mb-3">Comunidad e Identidad Local</h3>
              <p className="text-sm">
                El Cross es una fiesta del pueblo y para el pueblo. Impulsar el turismo activo,
                dinamizar la economía local y reforzar nuestra identidad.
              </p>
            </div>

            <div className="bg-white/10 p-6 rounded-lg backdrop-blur-sm">
              <div className="text-4xl mb-4">👨‍👩‍👧‍👦</div>
              <h3 className="text-xl font-bold mb-3">Inclusión y Familia</h3>
              <p className="text-sm">
                El deporte une a todas las generaciones. Evento accesible para todas las edades,
                desde los Chupetines hasta los Veteranos.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Categorías Destacadas */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 text-verde-oscuro">
            Categorías y Distancias
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            <div className="bg-gradient-to-br from-verde-oscuro to-verde-claro text-white p-6 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold mb-2">Absoluta / Seniors / Veteranos</h3>
              <p className="text-3xl font-bold mb-4">12 km</p>
              <p className="text-sm">
                La Prueba Reina. El tramo más exigente y técnico en circuito ondulado de hierba y tierra compacta.
              </p>
            </div>

            <div className="bg-gradient-to-br from-verde-claro to-beige text-verde-oscuro p-6 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold mb-2">Popular Corta / Cross Corto</h3>
              <p className="text-3xl font-bold mb-4">5 km</p>
              <p className="text-sm">
                Iniciación al Cross. Ideal para deportistas ocasionales que desean experimentar el entorno.
              </p>
            </div>

            <div className="bg-gradient-to-br from-beige to-verde-claro text-verde-oscuro p-6 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold mb-2">Juvenil / Cadete</h3>
              <p className="text-3xl font-bold mb-4">3-4 km</p>
              <p className="text-sm">
                Pruebas competitivas para jóvenes atletas, manteniendo la esencia del campo a través.
              </p>
            </div>

            <div className="bg-gradient-to-br from-verde-claro to-verde-oscuro text-white p-6 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold mb-2">Infantil / Alevín</h3>
              <p className="text-3xl font-bold mb-4">1-2 km</p>
              <p className="text-sm">
                Deporte Base. Carreras seguras y cortas para máxima visibilidad y seguridad.
              </p>
            </div>

            <div className="bg-gradient-to-br from-beige via-verde-claro to-verde-oscuro text-white p-6 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold mb-2">Chupetines</h3>
              <p className="text-3xl font-bold mb-4">100-200 m</p>
              <p className="text-sm">
                Familiar y Lúdica. Carrera no competitiva para los más pequeños. Todos reciben medalla.
              </p>
            </div>
          </div>
          <div className="text-center mt-12">
            <Link
              href="/categorias"
              className="inline-block bg-verde-oscuro text-white px-8 py-4 rounded-lg font-bold hover:bg-verde-claro transition-colors"
            >
              Ver Todas las Categorías
            </Link>
          </div>
        </div>
      </section>

      {/* Factor Diferencial */}
      <section className="py-20 bg-beige">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 text-verde-oscuro">
            Un Cross con Alma de Dehesa y Sabor a Extremadura
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="text-center">
              <div className="bg-verde-oscuro text-white w-20 h-20 rounded-full flex items-center justify-center text-3xl mx-auto mb-4">
                🌳
              </div>
              <h3 className="text-xl font-bold mb-3 text-verde-oscuro">El Escenario Natural Exclusivo</h3>
              <p className="text-gray-700">
                100% campo a través en un entorno de alto valor ambiental. Corre entre encinas centenarias
                y desconecta del ruido urbano.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-verde-oscuro text-white w-20 h-20 rounded-full flex items-center justify-center text-3xl mx-auto mb-4">
                🍽️
              </div>
              <h3 className="text-xl font-bold mb-3 text-verde-oscuro">Identidad Local</h3>
              <p className="text-gray-700">
                Degustación de migas extremeñas y productos de la tierra tras la competición.
                Un evento con sabor local auténtico.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-verde-oscuro text-white w-20 h-20 rounded-full flex items-center justify-center text-3xl mx-auto mb-4">
                🏞️
              </div>
              <h3 className="text-xl font-bold mb-3 text-verde-oscuro">Turismo Activo</h3>
              <p className="text-gray-700">
                Eje central para una escapada de fin de semana a la comarca Trasierra-Tierras de Granadilla.
                Descubre patrimonio y gastronomía.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Galería */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 text-verde-oscuro">
            Galería: La Dehesa de Santibáñez
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((num) => (
              <div key={num} className="relative h-64 rounded-lg overflow-hidden shadow-lg group">
                <Image
                  src={`/images/galeria-${num}.jpeg`}
                  alt={`Galería ${num}`}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-110"
                />
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <div className="relative h-80 rounded-lg overflow-hidden shadow-2xl max-w-4xl mx-auto">
              <Image
                src="/images/laguna-dehesa.jpg"
                alt="Laguna de la Dehesa"
                fill
                className="object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-verde-oscuro/90 to-transparent p-6">
                <p className="text-white text-xl font-bold">Laguna de la Dehesa</p>
                <p className="text-beige">Un entorno natural único en Extremadura</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Apoyo Institucional */}
      <section className="py-20 bg-beige/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-8 text-verde-oscuro">Apoyo y Organización</h2>
            <div className="bg-beige/50 p-8 rounded-lg mb-8">
              <p className="text-lg mb-4 text-gray-700">
                <strong className="text-verde-oscuro">Contamos con el apoyo firme del Ayuntamiento de Santibáñez el Bajo</strong>,
                cuyo compromiso es esencial para impulsar el deporte y el turismo activo en nuestra Dehesa.
              </p>
            </div>
            <div className="bg-verde-claro/20 p-8 rounded-lg">
              <p className="text-lg text-gray-700">
                Este proyecto nace del corazón de una <strong className="text-verde-oscuro">Comisión Organizadora de Vecinos
                y Amantes del Deporte</strong> que, junto a nuestros voluntarios, dedican su tiempo para convertir nuestra
                Dehesa en un circuito de ensueño. Son la verdadera alma del Cross.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-20 bg-gradient-to-br from-verde-oscuro to-verde-claro text-white text-center diagonal-pattern">
        <div className="container mx-auto px-4 relative z-10">
          <h2 className="text-4xl font-bold mb-6">¿Listo para la Aventura?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Únete a nosotros en esta experiencia única en la Dehesa de Santibáñez.
            ¡Inscríbete ahora y forma parte de la primera edición!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/inscripcion"
              className="inline-block bg-beige text-verde-oscuro px-8 py-4 rounded-lg font-bold text-lg hover:bg-white transition-colors shadow-lg"
            >
              Inscríbete Ahora
            </Link>
            <Link
              href="/informacion"
              className="inline-block bg-white/20 text-white border-2 border-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white hover:text-verde-oscuro transition-colors"
            >
              Más Información
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
