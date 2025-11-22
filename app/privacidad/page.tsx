export default function Privacidad() {
  return (
    <div className="py-20 bg-white">
      <div className="container mx-auto px-4 max-w-4xl">
        <h1 className="text-4xl font-bold mb-8 text-verde-oscuro">Política de Privacidad</h1>

        <div className="prose max-w-none text-gray-700 space-y-6">
          <section>
            <h2 className="text-2xl font-bold text-verde-oscuro mb-4">1. Responsable del Tratamiento</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Responsable: Ayuntamiento de Santibáñez el Bajo</li>
              <li>Dirección: Pl. España, 1, 10666 Santibáñez el Bajo, Cáceres</li>
              <li>Teléfono: 927 67 00 59</li>
              <li>Email: info@crosslaslagunas.com</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-verde-oscuro mb-4">2. Datos Recopilados</h2>
            <p>
              Los datos personales que se pueden solicitar a través de este sitio web son:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Nombre y apellidos</li>
              <li>DNI/NIE</li>
              <li>Fecha de nacimiento</li>
              <li>Dirección de correo electrónico</li>
              <li>Teléfono de contacto</li>
              <li>Categoría de participación</li>
              <li>Club/Federación (si aplica)</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-verde-oscuro mb-4">3. Finalidad del Tratamiento</h2>
            <p>
              Los datos personales proporcionados serán tratados con las siguientes finalidades:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Gestión de inscripciones al Cross Las Lagunas</li>
              <li>Comunicación de información relacionada con el evento</li>
              <li>Contratación de seguros de accidentes</li>
              <li>Elaboración de clasificaciones y resultados</li>
              <li>Cumplimiento de obligaciones legales</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-verde-oscuro mb-4">4. Legitimación</h2>
            <p>
              La base legal para el tratamiento de sus datos es el consentimiento del interesado
              al inscribirse en el evento, así como el cumplimiento de obligaciones legales.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-verde-oscuro mb-4">5. Conservación de Datos</h2>
            <p>
              Los datos personales se conservarán durante el tiempo necesario para la gestión del evento
              y las obligaciones legales derivadas del mismo.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-verde-oscuro mb-4">6. Derechos de los Interesados</h2>
            <p>
              Los usuarios tienen derecho a:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Acceder a sus datos personales</li>
              <li>Solicitar la rectificación de datos inexactos</li>
              <li>Solicitar la supresión de sus datos</li>
              <li>Solicitar la limitación del tratamiento de sus datos</li>
              <li>Oponerse al tratamiento de sus datos</li>
              <li>Solicitar la portabilidad de sus datos</li>
            </ul>
            <p className="mt-4">
              Para ejercer estos derechos, puede dirigirse a: info@crosslaslagunas.com
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-verde-oscuro mb-4">7. Seguridad</h2>
            <p>
              El Ayuntamiento de Santibáñez el Bajo ha adoptado las medidas de seguridad apropiadas
              para proteger los datos personales contra el acceso no autorizado, la alteración,
              divulgación o destrucción de los datos.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-verde-oscuro mb-4">8. Modificaciones</h2>
            <p>
              El Ayuntamiento de Santibáñez el Bajo se reserva el derecho a modificar la presente
              Política de Privacidad para adaptarla a novedades legislativas o jurisprudenciales.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
