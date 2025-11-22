export default function Contacto() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-verde-oscuro to-verde-claro text-white py-20 diagonal-pattern">
        <div className="container mx-auto px-4 text-center relative z-10">
          <h1 className="text-5xl font-bold mb-6">Contacto</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Estamos aquí para resolver todas tus dudas sobre el Cross Las Lagunas
          </p>
        </div>
      </section>

      {/* Información de Contacto */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Ayuntamiento */}
              <div className="bg-beige/30 p-8 rounded-lg">
                <h3 className="text-2xl font-bold mb-6 text-verde-oscuro">
                  Ayuntamiento de Santibáñez el Bajo
                </h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <span className="text-2xl">📍</span>
                    <div>
                      <p className="font-bold text-verde-oscuro">Dirección</p>
                      <p className="text-gray-700">
                        Pl. España, 1<br />
                        10666 Santibáñez el Bajo<br />
                        Cáceres, España
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <span className="text-2xl">📞</span>
                    <div>
                      <p className="font-bold text-verde-oscuro">Teléfonos</p>
                      <p className="text-gray-700">
                        <a href="tel:927670059" className="hover:text-verde-claro transition-colors">
                          927 67 00 59
                        </a>
                        <br />
                        <a href="tel:669297211" className="hover:text-verde-claro transition-colors">
                          669 29 72 11
                        </a>
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <span className="text-2xl">✉️</span>
                    <div>
                      <p className="font-bold text-verde-oscuro">Email</p>
                      <p className="text-gray-700">
                        <a
                          href="mailto:administracion@laspraderas.es"
                          className="hover:text-verde-claro transition-colors break-all"
                        >
                          administracion@laspraderas.es
                        </a>
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Horarios y Atención */}
              <div className="bg-verde-claro/20 p-8 rounded-lg">
                <h3 className="text-2xl font-bold mb-6 text-verde-oscuro">
                  Horarios de Atención
                </h3>
                <div className="space-y-4 text-gray-700">
                  <div>
                    <p className="font-bold text-verde-oscuro mb-2">Horario de Oficina</p>
                    <p>Consulta los horarios de atención del Ayuntamiento para inscripciones presenciales y dudas.</p>
                  </div>
                  <div>
                    <p className="font-bold text-verde-oscuro mb-2">Atención Online</p>
                    <p>Responderemos a tus emails en un plazo máximo de 48 horas laborables.</p>
                  </div>
                  <div>
                    <p className="font-bold text-verde-oscuro mb-2">Redes Sociales</p>
                    <p>Síguenos en Facebook para estar al día de todas las novedades del evento.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Preguntas Frecuentes */}
      <section className="py-16 bg-beige/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-verde-oscuro text-center">
              Preguntas Frecuentes
            </h2>
            <div className="space-y-4">
              <details className="bg-white p-6 rounded-lg shadow-md group">
                <summary className="font-bold text-verde-oscuro cursor-pointer flex justify-between items-center">
                  ¿Cuándo es el evento?
                  <span className="group-open:rotate-180 transition-transform">▼</span>
                </summary>
                <p className="mt-4 text-gray-700">
                  Las fechas exactas del I Cross Las Lagunas se anunciarán próximamente.
                  Suscríbete a nuestra newsletter o síguenos en redes sociales para estar al día.
                </p>
              </details>

              <details className="bg-white p-6 rounded-lg shadow-md group">
                <summary className="font-bold text-verde-oscuro cursor-pointer flex justify-between items-center">
                  ¿Puedo inscribirme el mismo día de la carrera?
                  <span className="group-open:rotate-180 transition-transform">▼</span>
                </summary>
                <p className="mt-4 text-gray-700">
                  Sí, habrá inscripciones disponibles el día del evento en el stand de entrega de dorsales.
                  Sin embargo, recomendamos inscribirte con antelación online o en el Ayuntamiento
                  para asegurar tu plaza y facilitar la organización.
                </p>
              </details>

              <details className="bg-white p-6 rounded-lg shadow-md group">
                <summary className="font-bold text-verde-oscuro cursor-pointer flex justify-between items-center">
                  ¿Los menores pueden participar?
                  <span className="group-open:rotate-180 transition-transform">▼</span>
                </summary>
                <p className="mt-4 text-gray-700">
                  Sí, tenemos categorías para todas las edades desde Chupetines (hasta 7 años) hasta Veteranos.
                  Los menores de edad necesitarán autorización firmada por padres o tutores legales.
                </p>
              </details>

              <details className="bg-white p-6 rounded-lg shadow-md group">
                <summary className="font-bold text-verde-oscuro cursor-pointer flex justify-between items-center">
                  ¿Qué incluye la inscripción?
                  <span className="group-open:rotate-180 transition-transform">▼</span>
                </summary>
                <p className="mt-4 text-gray-700">
                  La inscripción incluye: seguro de accidentes, cronometraje profesional, dorsal,
                  avituallamiento durante y después de la carrera (incluyendo las tradicionales migas extremeñas),
                  y servicio médico.
                </p>
              </details>

              <details className="bg-white p-6 rounded-lg shadow-md group">
                <summary className="font-bold text-verde-oscuro cursor-pointer flex justify-between items-center">
                  ¿Hay premios?
                  <span className="group-open:rotate-180 transition-transform">▼</span>
                </summary>
                <p className="mt-4 text-gray-700">
                  Sí, habrá premios para los primeros clasificados en las diferentes categorías.
                  Además, todos los participantes de la categoría Chupetines recibirán una medalla o regalo simbólico.
                  Los detalles de la premiación se anunciarán próximamente.
                </p>
              </details>

              <details className="bg-white p-6 rounded-lg shadow-md group">
                <summary className="font-bold text-verde-oscuro cursor-pointer flex justify-between items-center">
                  ¿Hay alojamiento disponible en la zona?
                  <span className="group-open:rotate-180 transition-transform">▼</span>
                </summary>
                <p className="mt-4 text-gray-700">
                  Sí, Santibáñez el Bajo y la comarca ofrecen diversas opciones de alojamiento:
                  casas rurales, hoteles y pensiones. Contacta con el Ayuntamiento para obtener
                  recomendaciones y facilitar tu reserva.
                </p>
              </details>

              <details className="bg-white p-6 rounded-lg shadow-md group">
                <summary className="font-bold text-verde-oscuro cursor-pointer flex justify-between items-center">
                  ¿El evento es sostenible?
                  <span className="group-open:rotate-180 transition-transform">▼</span>
                </summary>
                <p className="mt-4 text-gray-700">
                  Absolutamente. Implementamos una política Cero Residuos con reciclaje, balizado
                  respetuoso con el entorno y recogida completa de residuos. Pedimos la colaboración
                  de todos para preservar la belleza natural de la Dehesa.
                </p>
              </details>
            </div>
          </div>
        </div>
      </section>

      {/* Formulario de Contacto */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-verde-oscuro text-center">
              Envíanos un Mensaje
            </h2>
            <div className="bg-beige/30 p-8 rounded-lg">
              <p className="text-center text-gray-700 mb-6">
                Para cualquier consulta, no dudes en ponerte en contacto con nosotros a través de:
              </p>
              <div className="space-y-4 text-center">
                <div>
                  <p className="font-bold text-verde-oscuro mb-2">Email</p>
                  <a
                    href="mailto:administracion@laspraderas.es"
                    className="text-lg hover:text-verde-claro transition-colors"
                  >
                    administracion@laspraderas.es
                  </a>
                </div>
                <div>
                  <p className="font-bold text-verde-oscuro mb-2">Teléfonos</p>
                  <p>
                    <a href="tel:927670059" className="hover:text-verde-claro transition-colors">
                      927 67 00 59
                    </a>
                    {' / '}
                    <a href="tel:669297211" className="hover:text-verde-claro transition-colors">
                      669 29 72 11
                    </a>
                  </p>
                </div>
                <div>
                  <p className="font-bold text-verde-oscuro mb-2">Redes Sociales</p>
                  <a
                    href="https://facebook.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block bg-verde-oscuro text-white px-6 py-3 rounded-lg hover:bg-verde-claro transition-colors"
                  >
                    Síguenos en Facebook
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-br from-verde-oscuro to-verde-claro text-white text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-6">¿Listo para Unirte?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            No esperes más e inscríbete en el Cross Las Lagunas
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
