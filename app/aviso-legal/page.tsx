export default function AvisoLegal() {
  return (
    <div className="py-20 bg-white">
      <div className="container mx-auto px-4 max-w-4xl">
        <h1 className="text-4xl font-bold mb-8 text-verde-oscuro">Aviso Legal</h1>

        <div className="prose max-w-none text-gray-700 space-y-6">
          <section>
            <h2 className="text-2xl font-bold text-verde-oscuro mb-4">1. Información General</h2>
            <p>
              En cumplimiento con el deber de información recogido en artículo 10 de la Ley 34/2002,
              de 11 de julio, de Servicios de la Sociedad de la Información y del Comercio Electrónico,
              a continuación se reflejan los siguientes datos:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Titular: Ayuntamiento de Santibáñez el Bajo</li>
              <li>Dirección: Pl. España, 1, 10666 Santibáñez el Bajo, Cáceres</li>
              <li>Teléfono: 927 67 00 59</li>
              <li>Email: info@crosslaslagunas.com</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-verde-oscuro mb-4">2. Objeto</h2>
            <p>
              El presente aviso legal regula el uso y utilización del sitio web crosslaslagunas.es
              del que es titular el Ayuntamiento de Santibáñez el Bajo.
            </p>
            <p>
              La navegación por el sitio web atribuye la condición de usuario del mismo e implica la
              aceptación plena y sin reservas de todas y cada una de las disposiciones incluidas en este
              Aviso Legal.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-verde-oscuro mb-4">3. Propiedad Intelectual</h2>
            <p>
              Todos los contenidos del sitio web, incluyendo pero no limitándose a textos, fotografías,
              gráficos, imágenes, iconos, tecnología, software, así como su diseño gráfico y códigos fuente,
              constituyen una obra cuya propiedad pertenece al Ayuntamiento de Santibáñez el Bajo.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-verde-oscuro mb-4">4. Responsabilidad</h2>
            <p>
              El Ayuntamiento de Santibáñez el Bajo se reserva el derecho a modificar cualquier tipo de
              información que pudiera aparecer en el sitio web, sin que exista obligación de preavisar
              o poner en conocimiento de los usuarios dichas obligaciones.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-verde-oscuro mb-4">5. Legislación Aplicable</h2>
            <p>
              El presente Aviso Legal se rige en todos y cada uno de sus extremos por la ley española.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
