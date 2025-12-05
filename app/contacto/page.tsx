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
                      <p className="text-gray-700">
                        <strong>📍Dirección:</strong> Pl. España, 1, 10666 Santibáñez el Bajo, Cáceres
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <span className="text-2xl">📱</span>
                    <div>
                      <p className="text-gray-700">
                        <strong>📱 Teléfono:</strong> <a href="tel:636499798" className="hover:text-verde-claro transition-colors">
                          636 499 798
                        </a>
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <span className="text-2xl">📱</span>
                    <div>
                      <p className="text-gray-700">
                        <strong>📱 Teléfono:</strong> <a href="tel:661083727" className="hover:text-verde-claro transition-colors">
                          661 083 727
                        </a>
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <span className="text-2xl">✉️</span>
                    <div>
                      <p className="text-gray-700">
                        <strong>✉️Email:</strong> <a
                          href="mailto:info@crosslaslagunas.es"
                          className="hover:text-verde-claro transition-colors break-all"
                        >
                          info@crosslaslagunas.es
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
                  ¿Cuándo es el evento?▼
                </summary>
                <p className="mt-4 text-gray-700">
                  Domingo 28 de Diciembre de 2025 a partir de las 10:00 Hrs.
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
                  ¿Los menores pueden participar?▼
                </summary>
                <p className="mt-4 text-gray-700">
                  Sí, tenemos categorías para todas las edades desde promoción (de 4 a 7 años) hasta Veteranos. Los menores de edad necesitarán autorización firmada por padres o tutores legales.
                </p>
              </details>

              <details className="bg-white p-6 rounded-lg shadow-md group">
                <summary className="font-bold text-verde-oscuro cursor-pointer flex justify-between items-center">
                  ¿Qué incluye la inscripción?▼
                </summary>
                <p className="mt-4 text-gray-700">
                  La inscripción incluye: bolsa del corredor, seguro de accidentes, guardarropa, dorsal, avituallamiento durante y después de la carrera.
                </p>
              </details>

              <details className="bg-white p-6 rounded-lg shadow-md group">
                <summary className="font-bold text-verde-oscuro cursor-pointer flex justify-between items-center">
                  ¿Hay premios?▼
                </summary>
                <p className="mt-4 text-gray-700">
                  Sí, habrá premios para los primeros clasificados en las diferentes categorías. Además, todos los participantes de las categorías inferiores recibirán una medalla o regalo simbólico.
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
              <div className="space-y-4">
                <div>
                  <p className="font-bold text-verde-oscuro mb-2">Email</p>
                  <a
                    href="mailto:info@crosslaslagunas.es"
                    className="text-lg hover:text-verde-claro transition-colors"
                  >
                    info@crosslaslagunas.es
                  </a>
                </div>
                <div>
                  <p className="font-bold text-verde-oscuro mb-2">Teléfonos</p>
                  <p>
                    <a href="tel:636499798" className="hover:text-verde-claro transition-colors">
                      636 49 97 98
                    </a>
                    {' / '}
                    <a href="tel:661083727" className="hover:text-verde-claro transition-colors">
                      661 083 727
                    </a>
                  </p>
                </div>
                <div>
                  <p className="font-bold text-verde-oscuro mb-2">Redes Sociales</p>
                  <p className="mb-2">Síguenos en Facebook</p>
                  <p>instagram de desconectatrail</p>
                </div>
                <div className="bg-white p-4 rounded">
                  <h4 className="font-bold text-verde-oscuro mb-2">Contacto</h4>
                  <p className="text-gray-700 text-sm">
                    Ayuntamiento de Santibáñez el Bajo<br/>
                    Pl. España, 1<br/>
                    10666 Santibáñez el Bajo, Cáceres<br/>
                    Tel: 636 499 798<br/>
                    Tel: 661 083 727<br/>
                    info@crosslaslagunas.es
                  </p>
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
            href="https://forms.gle/L5XcTks6wJCRnVCW7"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-beige text-verde-oscuro px-8 py-4 rounded-lg font-bold text-lg hover:bg-white transition-colors shadow-lg"
          >
            Inscríbete Ahora
          </a>
        </div>
      </section>
    </>
  );
}
