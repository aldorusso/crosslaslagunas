export default function Inscripcion() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-verde-oscuro to-verde-claro text-white py-20 diagonal-pattern">
        <div className="container mx-auto px-4 text-center relative z-10">
          <h1 className="text-5xl font-bold mb-6">Inscripción</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Únete al I Cross Las Lagunas. Varias modalidades de inscripción disponibles para tu comodidad.
          </p>
        </div>
      </section>

      {/* Métodos de Inscripción */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-verde-oscuro text-center">
              Cómo Inscribirte
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              <div className="text-center p-6 bg-beige/30 rounded-lg">
                <div className="text-5xl mb-4">💻</div>
                <h3 className="text-xl font-bold mb-3 text-verde-oscuro">Inscripción Online</h3>
                <p className="text-gray-700 mb-4">
                  Completa el formulario de Google Forms de manera rápida y sencilla.
                </p>
              </div>

              <div className="text-center p-6 bg-verde-claro/20 rounded-lg">
                <div className="text-5xl mb-4">🏛️</div>
                <h3 className="text-xl font-bold mb-3 text-verde-oscuro">Presencial - Ayuntamiento</h3>
                <p className="text-gray-700 mb-4">
                  Los días previos a la carrera en el Ayuntamiento de Santibáñez el Bajo.
                </p>
              </div>

              <div className="text-center p-6 bg-beige/30 rounded-lg">
                <div className="text-5xl mb-4">📋</div>
                <h3 className="text-xl font-bold mb-3 text-verde-oscuro">Día de la Carrera</h3>
                <p className="text-gray-700 mb-4">
                  En el stand de entrega de dorsales el mismo día del evento.
                </p>
              </div>
            </div>

            {/* Formulario Online */}
            <div className="bg-gradient-to-br from-verde-oscuro to-verde-claro text-white p-8 rounded-lg mb-8">
              <h3 className="text-2xl font-bold mb-4">Inscripción Online</h3>
              <p className="mb-6">
                Completa tu inscripción a través de nuestro formulario online de Google Forms.
                Es rápido, seguro y recibirás confirmación inmediata.
              </p>
              <a
                href="https://forms.google.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-beige text-verde-oscuro px-8 py-4 rounded-lg font-bold hover:bg-white transition-colors"
              >
                Ir al Formulario de Inscripción
              </a>
            </div>

            {/* Métodos de Pago */}
            <div className="bg-beige/30 p-8 rounded-lg mb-8">
              <h3 className="text-2xl font-bold mb-6 text-verde-oscuro">Métodos de Pago</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="text-3xl">🏦</div>
                  <div className="flex-1">
                    <h4 className="text-xl font-bold mb-2 text-verde-oscuro">Transferencia Bancaria</h4>
                    <p className="text-gray-700 mb-2">
                      Realiza tu pago mediante transferencia bancaria a la cuenta indicada en el formulario.
                    </p>
                    <p className="text-sm text-gray-600">
                      <strong>Importante:</strong> Incluye tu nombre y categoría en el concepto de la transferencia.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="text-3xl">💵</div>
                  <div className="flex-1">
                    <h4 className="text-xl font-bold mb-2 text-verde-oscuro">Pago Presencial</h4>
                    <p className="text-gray-700">
                      Puedes pagar en efectivo en el Ayuntamiento durante los días previos o
                      en el stand de dorsales el día de la carrera.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Información Importante */}
            <div className="bg-verde-claro/20 p-8 rounded-lg">
              <h3 className="text-2xl font-bold mb-6 text-verde-oscuro">Información Importante</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start gap-3">
                  <span className="text-verde-oscuro font-bold">✓</span>
                  <span>Todos los participantes deben completar el formulario de inscripción</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-verde-oscuro font-bold">✓</span>
                  <span>Los menores de edad necesitan autorización de los padres o tutores</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-verde-oscuro font-bold">✓</span>
                  <span>Recibirás confirmación de inscripción por email</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-verde-oscuro font-bold">✓</span>
                  <span>Los dorsales se entregarán el día del evento</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-verde-oscuro font-bold">✓</span>
                  <span>La inscripción incluye seguro de accidentes, cronometraje y avituallamiento</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Ubicación */}
      <section className="py-16 bg-beige/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-verde-oscuro text-center">
              Dónde Inscribirte Presencialmente
            </h2>
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold mb-4 text-verde-oscuro">
                Ayuntamiento de Santibáñez el Bajo
              </h3>
              <div className="space-y-2 text-gray-700">
                <p className="flex items-center gap-2">
                  <span className="text-verde-oscuro">📍</span>
                  Pl. España, 1, 10666 Santibáñez el Bajo, Cáceres
                </p>
                <p className="flex items-center gap-2">
                  <span className="text-verde-oscuro">📞</span>
                  <a href="tel:927670059" className="hover:text-verde-claro transition-colors">
                    927 67 00 59
                  </a>
                </p>
                <p className="flex items-center gap-2">
                  <span className="text-verde-oscuro">📱</span>
                  <a href="tel:669297211" className="hover:text-verde-claro transition-colors">
                    669 29 72 11
                  </a>
                </p>
                <p className="flex items-center gap-2">
                  <span className="text-verde-oscuro">✉️</span>
                  <a href="mailto:info@crosslaslagunas.com" className="hover:text-verde-claro transition-colors">
                    info@crosslaslagunas.com
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-br from-verde-oscuro to-verde-claro text-white text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-6">¿Tienes Dudas sobre la Inscripción?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Contacta con nosotros y te ayudaremos con todo el proceso
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
