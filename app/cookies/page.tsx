export default function Cookies() {
  return (
    <div className="py-20 bg-white">
      <div className="container mx-auto px-4 max-w-4xl">
        <h1 className="text-4xl font-bold mb-8 text-verde-oscuro">Política de Cookies</h1>

        <div className="prose max-w-none text-gray-700 space-y-6">
          <section>
            <h2 className="text-2xl font-bold text-verde-oscuro mb-4">¿Qué son las Cookies?</h2>
            <p>
              Las cookies son pequeños archivos de texto que se almacenan en su dispositivo cuando visita
              un sitio web. Se utilizan ampliamente para que los sitios web funcionen de manera más eficiente
              y para proporcionar información a los propietarios del sitio.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-verde-oscuro mb-4">Cookies que Utilizamos</h2>
            <p>
              Este sitio web utiliza las siguientes categorías de cookies:
            </p>

            <div className="space-y-4 mt-4">
              <div className="bg-beige/30 p-4 rounded-lg">
                <h3 className="font-bold text-verde-oscuro mb-2">Cookies Estrictamente Necesarias</h3>
                <p className="text-sm">
                  Estas cookies son esenciales para que pueda navegar por el sitio web y utilizar sus
                  funciones. Sin estas cookies, los servicios que ha solicitado no se pueden proporcionar.
                </p>
              </div>

              <div className="bg-verde-claro/20 p-4 rounded-lg">
                <h3 className="font-bold text-verde-oscuro mb-2">Cookies de Rendimiento</h3>
                <p className="text-sm">
                  Estas cookies recopilan información sobre cómo los visitantes utilizan el sitio web,
                  por ejemplo, qué páginas visitan con más frecuencia. Estos datos se utilizan para
                  optimizar el sitio web y facilitar la navegación.
                </p>
              </div>

              <div className="bg-beige/30 p-4 rounded-lg">
                <h3 className="font-bold text-verde-oscuro mb-2">Cookies Funcionales</h3>
                <p className="text-sm">
                  Estas cookies permiten que el sitio web recuerde las elecciones que hace (como su
                  nombre de usuario, idioma o región) y proporcione características mejoradas y más personales.
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-verde-oscuro mb-4">Cookies de Terceros</h2>
            <p>
              Este sitio web puede utilizar servicios de terceros que establecen cookies en su dispositivo.
              Estas cookies están sujetas a las políticas de privacidad de los respectivos terceros:
            </p>
            <ul className="list-disc pl-6 space-y-2 mt-4">
              <li>Google Analytics: para analizar el uso del sitio web</li>
              <li>Google Forms: para la gestión de inscripciones</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-verde-oscuro mb-4">Gestión de Cookies</h2>
            <p>
              Puede controlar y/o eliminar las cookies como desee. Puede eliminar todas las cookies
              que ya están en su ordenador y puede configurar la mayoría de los navegadores para evitar
              que se coloquen cookies.
            </p>
            <p className="mt-4">
              Para gestionar las cookies en su navegador:
            </p>
            <ul className="list-disc pl-6 space-y-2 mt-2">
              <li>Chrome: Configuración &gt; Privacidad y seguridad &gt; Cookies</li>
              <li>Firefox: Opciones &gt; Privacidad &gt; Cookies y datos del sitio</li>
              <li>Safari: Preferencias &gt; Privacidad &gt; Cookies</li>
              <li>Edge: Configuración &gt; Privacidad, búsqueda y servicios &gt; Cookies</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-verde-oscuro mb-4">Consentimiento</h2>
            <p>
              Al utilizar este sitio web, acepta el uso de cookies de acuerdo con esta Política de Cookies.
              Si no está de acuerdo con el uso de cookies, debe ajustar la configuración de su navegador o
              no utilizar este sitio web.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-verde-oscuro mb-4">Más Información</h2>
            <p>
              Si tiene alguna pregunta sobre nuestra Política de Cookies, puede contactarnos en:
            </p>
            <p className="mt-2">
              <strong>Email:</strong> info@crosslaslagunas.com<br />
              <strong>Teléfono:</strong> 927 67 00 59
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-verde-oscuro mb-4">Actualizaciones</h2>
            <p>
              Esta Política de Cookies puede actualizarse periódicamente. La fecha de la última
              actualización se mostrará al final de esta política.
            </p>
            <p className="mt-4 text-sm text-gray-600">
              <strong>Última actualización:</strong> Enero 2025
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
