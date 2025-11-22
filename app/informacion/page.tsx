import Image from 'next/image';

export default function Informacion() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-verde-oscuro to-verde-claro text-white py-20 diagonal-pattern">
        <div className="container mx-auto px-4 text-center relative z-10">
          <h1 className="text-5xl font-bold mb-6">Información Útil</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Todo lo que necesitas saber para disfrutar al máximo de tu experiencia en el Cross Las Lagunas
          </p>
        </div>
      </section>

      {/* Servicios Generales */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-verde-oscuro text-center">
              Servicios Disponibles
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
              <div className="bg-beige/30 p-6 rounded-lg text-center">
                <div className="text-4xl mb-3">🅿️</div>
                <h3 className="font-bold text-verde-oscuro">Aparcamiento</h3>
                <p className="text-sm text-gray-600 mt-2">Zona habilitada cerca del evento</p>
              </div>

              <div className="bg-verde-claro/20 p-6 rounded-lg text-center">
                <div className="text-4xl mb-3">🍽️</div>
                <h3 className="font-bold text-verde-oscuro">Avituallamiento</h3>
                <p className="text-sm text-gray-600 mt-2">Durante y después de la carrera</p>
              </div>

              <div className="bg-beige/30 p-6 rounded-lg text-center">
                <div className="text-4xl mb-3">🚻</div>
                <h3 className="font-bold text-verde-oscuro">Baños Públicos</h3>
                <p className="text-sm text-gray-600 mt-2">WC portátiles disponibles</p>
              </div>

              <div className="bg-verde-claro/20 p-6 rounded-lg text-center">
                <div className="text-4xl mb-3">ℹ️</div>
                <h3 className="font-bold text-verde-oscuro">Punto de Información</h3>
                <p className="text-sm text-gray-600 mt-2">Voluntarios para ayudarte</p>
              </div>

              <div className="bg-beige/30 p-6 rounded-lg text-center">
                <div className="text-4xl mb-3">📢</div>
                <h3 className="font-bold text-verde-oscuro">Speaker</h3>
                <p className="text-sm text-gray-600 mt-2">Animación y resultados en directo</p>
              </div>

              <div className="bg-verde-claro/20 p-6 rounded-lg text-center">
                <div className="text-4xl mb-3">🚑</div>
                <h3 className="font-bold text-verde-oscuro">Servicio Médico</h3>
                <p className="text-sm text-gray-600 mt-2">Ambulancia y personal sanitario</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Servicios al Corredor */}
      <section className="py-16 bg-beige/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-verde-oscuro text-center">
              Servicios para el Corredor
            </h2>

            <div className="space-y-6">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold mb-4 text-verde-oscuro flex items-center gap-2">
                  <span>📝</span> Pre-Evento
                </h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start gap-2">
                    <span className="text-verde-oscuro">•</span>
                    <span>Información del evento en la web</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-verde-oscuro">•</span>
                    <span>Comunicación por email con detalles y recordatorios</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold mb-4 text-verde-oscuro flex items-center gap-2">
                  <span>🏃</span> Durante la Carrera
                </h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start gap-2">
                    <span className="text-verde-oscuro">•</span>
                    <span>Avituallamiento en puntos estratégicos del circuito</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-verde-oscuro">•</span>
                    <span>Señalización clara y completa del recorrido</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-verde-oscuro">•</span>
                    <span>Voluntarios distribuidos por todo el circuito</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-verde-oscuro">•</span>
                    <span>Servicio médico con ambulancia disponible</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-verde-oscuro">•</span>
                    <span>Cronometraje profesional</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold mb-4 text-verde-oscuro flex items-center gap-2">
                  <span>🎉</span> Post-Carrera
                </h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start gap-2">
                    <span className="text-verde-oscuro">•</span>
                    <span>Degustación de migas extremeñas y productos locales</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-verde-oscuro">•</span>
                    <span>Entrega de premios y clasificaciones</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-verde-oscuro">•</span>
                    <span>Ambiente festivo y de convivencia</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Cómo Llegar */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-verde-oscuro text-center">
              Cómo Llegar
            </h2>
            <div className="bg-beige/30 p-8 rounded-lg mb-6">
              <h3 className="text-xl font-bold mb-4 text-verde-oscuro">
                Ubicación del Evento
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <p className="text-gray-700 mb-4">
                    <strong>Dehesa de Santibáñez</strong><br />
                    Santibáñez el Bajo, Cáceres<br />
                    Comarca Trasierra-Tierras de Granadilla
                  </p>
                  <div className="bg-white p-4 rounded mt-4">
                    <p className="text-gray-700">
                      <strong>Acceso:</strong> El evento se encuentra en la Dehesa de Santibáñez.
                      Habrá señalización desde el pueblo para llegar a la zona de salida.
                      Se recomienda llegar con antelación para aparcar cómodamente.
                    </p>
                  </div>
                </div>
                <div className="relative h-64 rounded-lg overflow-hidden shadow-lg">
                  <Image
                    src="/images/ayuntamiento.jpg"
                    alt="Ayuntamiento de Santibáñez el Bajo"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>

            <div className="bg-verde-claro/20 p-8 rounded-lg">
              <h3 className="text-xl font-bold mb-4 text-verde-oscuro">
                Recomendaciones de Transporte
              </h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-verde-oscuro font-bold">🚗</span>
                  <span>
                    <strong>En coche:</strong> Zona de aparcamiento habilitada cerca del evento.
                    Llegada recomendada con al menos 1 hora de antelación.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-verde-oscuro font-bold">🤝</span>
                  <span>
                    <strong>Compartir coche:</strong> Ideal para grupos y clubes de atletismo.
                    Contribuye a la sostenibilidad del evento.
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Alojamiento y Turismo */}
      <section className="py-16 bg-beige/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-verde-oscuro text-center">
              Alojamiento y Turismo
            </h2>
            <div className="bg-white p-8 rounded-lg shadow-md">
              <p className="text-gray-700 mb-6 text-lg">
                Aprovecha tu visita para descubrir la comarca Trasierra-Tierras de Granadilla.
                Santibáñez el Bajo y sus alrededores ofrecen múltiples opciones de alojamiento
                y actividades turísticas.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-beige/30 p-4 rounded">
                  <h4 className="font-bold text-verde-oscuro mb-2">🏨 Alojamiento</h4>
                  <p className="text-gray-600 text-sm">
                    Casas rurales, hoteles y alojamientos en la zona.
                    Consulta con el Ayuntamiento para recomendaciones.
                  </p>
                </div>
                <div className="bg-verde-claro/20 p-4 rounded">
                  <h4 className="font-bold text-verde-oscuro mb-2">🍽️ Gastronomía</h4>
                  <p className="text-gray-600 text-sm">
                    Disfruta de la gastronomía extremeña en los restaurantes locales.
                    Productos de la tierra de máxima calidad.
                  </p>
                </div>
                <div className="bg-verde-claro/20 p-4 rounded">
                  <h4 className="font-bold text-verde-oscuro mb-2">🏞️ Naturaleza</h4>
                  <p className="text-gray-600 text-sm">
                    Rutas de senderismo y espacios naturales para explorar
                    la belleza de la dehesa extremeña.
                  </p>
                </div>
                <div className="bg-beige/30 p-4 rounded">
                  <h4 className="font-bold text-verde-oscuro mb-2">🏛️ Patrimonio</h4>
                  <p className="text-gray-600 text-sm">
                    Descubre el patrimonio histórico y cultural de
                    Santibáñez el Bajo y la comarca.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Política de Sostenibilidad */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-verde-oscuro text-center">
              Compromiso con la Sostenibilidad
            </h2>
            <div className="bg-gradient-to-br from-verde-oscuro to-verde-claro text-white p-8 rounded-lg">
              <h3 className="text-2xl font-bold mb-4">Política Cero Residuos</h3>
              <p className="mb-6">
                El Cross Las Lagunas está comprometido con el respeto absoluto por el entorno natural.
                Implementamos medidas de sostenibilidad para minimizar nuestro impacto ambiental:
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <span>♻️</span>
                  <span>Balizado responsable y temporal que no daña la vegetación</span>
                </li>
                <li className="flex items-start gap-2">
                  <span>🌱</span>
                  <span>Contenedores de reciclaje en múltiples puntos</span>
                </li>
                <li className="flex items-start gap-2">
                  <span>🚮</span>
                  <span>Recogida completa de residuos post-evento</span>
                </li>
                <li className="flex items-start gap-2">
                  <span>💧</span>
                  <span>Uso responsable del agua en avituallamientos</span>
                </li>
              </ul>
              <p className="mt-6 text-sm italic">
                Pedimos la colaboración de todos los participantes para mantener la Dehesa limpia
                y preservar este entorno natural único.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-br from-verde-oscuro to-verde-claro text-white text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-6">¿Más Preguntas?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Estamos aquí para ayudarte. Contacta con nosotros
          </p>
          <a
            href="/contacto"
            className="inline-block bg-beige text-verde-oscuro px-8 py-4 rounded-lg font-bold text-lg hover:bg-white transition-colors shadow-lg"
          >
            Contactar
          </a>
        </div>
      </section>
    </>
  );
}
