# Cross Las Lagunas - Website

Web oficial del I Cross Popular "Dehesa de Santibáñez" - Cross Las Lagunas

## Descripción

Sitio web desarrollado en Next.js 14 para el Cross Las Lagunas, una carrera de campo a través que se celebra en la Dehesa de Santibáñez el Bajo, Cáceres.

## Características

- **Diseño Responsivo**: Optimizado para dispositivos móviles, tablets y escritorio
- **Paleta de Colores**: Verde oscuro (#2d5016), Verde claro (#7a9d54), Beige (#e8dcc4)
- **Secciones Principales**:
  - Inicio con información del evento
  - Categorías y distancias
  - Inscripción
  - Información útil
  - Contacto
  - Páginas legales (Aviso Legal, Privacidad, Cookies)

## Tecnologías

- Next.js 14
- React 18
- TypeScript
- Tailwind CSS
- Docker

## Instalación

### Desarrollo Local

```bash
# Instalar dependencias
npm install

# Ejecutar en modo desarrollo
npm run dev

# Compilar para producción
npm run build

# Ejecutar en modo producción
npm start
```

El sitio estará disponible en [http://localhost:3000](http://localhost:3000)

### Docker

```bash
# Construir la imagen
docker build -t cross-las-lagunas .

# Ejecutar con Docker Compose
docker-compose up -d

# Detener contenedor
docker-compose down
```

## Estructura del Proyecto

```
cross-las-lagunas/
├── app/
│   ├── categorias/          # Página de categorías
│   ├── contacto/            # Página de contacto
│   ├── informacion/         # Información útil
│   ├── inscripcion/         # Página de inscripción
│   ├── aviso-legal/         # Aviso legal
│   ├── privacidad/          # Política de privacidad
│   ├── cookies/             # Política de cookies
│   ├── layout.tsx           # Layout principal
│   ├── page.tsx             # Página de inicio
│   └── globals.css          # Estilos globales
├── components/
│   ├── Navbar.tsx           # Barra de navegación
│   └── Footer.tsx           # Pie de página
├── public/
│   └── images/              # Imágenes del sitio
├── Dockerfile               # Configuración Docker
├── docker-compose.yml       # Orquestación Docker
└── tailwind.config.ts       # Configuración Tailwind
```

## Contacto

- **Email**: administracion@laspraderas.es
- **Teléfono**: 927 67 00 59 / 669 29 72 11
- **Dirección**: Pl. España, 1, 10666 Santibáñez el Bajo, Cáceres

## Licencia

© 2025 Cross Las Lagunas - Todos los derechos reservados
