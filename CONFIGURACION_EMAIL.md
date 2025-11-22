# Configuración de Correos Electrónicos @crosslaslagunas.com

Esta guía te ayudará a configurar las cuentas de correo electrónico con tu dominio personalizado.

## Cuentas de Correo Recomendadas

Te recomiendo crear las siguientes cuentas de correo:

1. **info@crosslaslagunas.com** - Información general
2. **inscripciones@crosslaslagunas.com** - Gestión de inscripciones
3. **organizacion@crosslaslagunas.com** - Equipo organizador
4. **prensa@crosslaslagunas.com** - Contacto para medios
5. **contacto@crosslaslagunas.com** - Contacto general alternativo

## Opciones para Configurar el Correo

### Opción 1: Google Workspace (Recomendado para Profesionalidad)

**Ventajas:**
- Interfaz profesional de Gmail
- 30 GB de almacenamiento por usuario
- Integración con Google Drive, Calendar, Meet
- Excelente filtro anti-spam
- Soporte técnico de Google

**Precio:** Desde 6€/mes por usuario

**Pasos:**
1. Ir a [workspace.google.com](https://workspace.google.com)
2. Seleccionar "Comenzar" o "Iniciar prueba gratuita" (14 días)
3. Registrar el dominio `crosslaslagunas.com`
4. Verificar la propiedad del dominio mediante registros DNS
5. Crear las cuentas de correo necesarias

**Configuración DNS requerida:**
```
Tipo: MX
Prioridad: 1
Valor: ASPMX.L.GOOGLE.COM

Tipo: MX
Prioridad: 5
Valor: ALT1.ASPMX.L.GOOGLE.COM

Tipo: MX
Prioridad: 5
Valor: ALT2.ASPMX.L.GOOGLE.COM

Tipo: MX
Prioridad: 10
Valor: ALT3.ASPMX.L.GOOGLE.COM

Tipo: MX
Prioridad: 10
Valor: ALT4.ASPMX.L.GOOGLE.COM
```

### Opción 2: Microsoft 365

**Ventajas:**
- Interfaz de Outlook
- 50 GB de almacenamiento
- Office 365 incluido (Word, Excel, PowerPoint online)
- OneDrive 1TB

**Precio:** Desde 5.60€/mes por usuario

**Pasos:**
1. Ir a [microsoft365.com/business](https://www.microsoft365.com/business)
2. Seleccionar plan Business Basic
3. Registrar dominio y verificar
4. Configurar cuentas de correo

### Opción 3: Hosting con cPanel (Más Económico)

**Ventajas:**
- Más económico (incluido con la mayoría de hostings)
- Cuentas ilimitadas en muchos casos
- Acceso webmail

**Desventajas:**
- Interfaz menos moderna
- Menor capacidad de almacenamiento
- Filtros anti-spam menos efectivos

**Proveedores recomendados en España:**
- **Webempresa** - Desde 6€/mes (incluye emails ilimitados)
- **Raiola Networks** - Desde 5.95€/mes
- **SiteGround** - Desde 3.99€/mes
- **Hostinger** - Desde 2.99€/mes

**Pasos generales:**
1. Contratar hosting con cPanel
2. Acceder al panel de control (cPanel)
3. Ir a "Cuentas de correo"
4. Crear las cuentas necesarias
5. Configurar registros MX en tu proveedor de dominio

### Opción 4: Zoho Mail (Alternativa Económica y Profesional)

**Ventajas:**
- Plan gratuito para hasta 5 usuarios (con publicidad)
- Plan de pago desde 1€/mes por usuario
- Interfaz profesional
- Sin publicidad en planes de pago

**Pasos:**
1. Ir a [zoho.com/mail](https://www.zoho.com/mail)
2. Registrarse con el dominio crosslaslagunas.com
3. Verificar dominio
4. Crear cuentas de correo

## Configuración del Dominio

Independientemente de la opción que elijas, necesitarás configurar tu dominio. Deberás acceder al panel de control de tu registrador de dominios y añadir los registros DNS correspondientes.

### Registros DNS Básicos Requeridos:

**Para Google Workspace (ejemplo):**
```
Tipo: MX
Host: @
Valor: ASPMX.L.GOOGLE.COM
Prioridad: 1
TTL: 3600

(Añadir los 4 registros MX adicionales mencionados arriba)
```

**Registro SPF (Anti-spam):**
```
Tipo: TXT
Host: @
Valor: v=spf1 include:_spf.google.com ~all
TTL: 3600
```

**Registro DKIM (Autenticación):**
El proveedor te dará este registro tras la configuración inicial.

**Registro DMARC (Protección):**
```
Tipo: TXT
Host: _dmarc
Valor: v=DMARC1; p=none; rua=mailto:info@crosslaslagunas.com
TTL: 3600
```

## Recomendación Final

Para el Cross Las Lagunas, recomiendo:

**Si el presupuesto lo permite: Google Workspace**
- Mayor profesionalidad
- Mejor experiencia de usuario
- Integración perfecta con otros servicios

**Si el presupuesto es limitado: Zoho Mail o Hosting cPanel**
- Zoho Mail tiene plan gratuito para 5 usuarios
- cPanel viene incluido con la mayoría de hostings web

## Redirecciones de Correo

Puedes configurar que varios correos redirijan a una cuenta principal:

- info@crosslaslagunas.com → info@crosslaslagunas.com
- inscripciones@crosslaslagunas.com → info@crosslaslagunas.com
- contacto@crosslaslagunas.com → info@crosslaslagunas.com

Esto permite tener direcciones profesionales sin necesidad de revisar múltiples bandejas.

## Firma de Correo Profesional

Una vez configuradas las cuentas, crea una firma profesional:

```
---
[Tu Nombre]
Organización Cross Las Lagunas
I Cross Popular "Dehesa de Santibáñez"

📧 info@crosslaslagunas.com
📞 927 67 00 59 / 669 29 72 11
🌐 www.crosslaslagunas.com
📍 Santibáñez el Bajo, Cáceres

🌿 Un Cross con Alma de Dehesa y Sabor a Extremadura
```

## Soporte

Si necesitas ayuda con la configuración, contacta con:
- El soporte de tu proveedor de hosting/email
- Un técnico informático local
- El registrador de tu dominio

## Checklist de Configuración

- [ ] Contratar servicio de correo
- [ ] Verificar propiedad del dominio
- [ ] Configurar registros MX
- [ ] Configurar SPF
- [ ] Configurar DKIM
- [ ] Configurar DMARC
- [ ] Crear cuentas de correo
- [ ] Configurar firmas profesionales
- [ ] Probar envío y recepción
- [ ] Configurar redirecciones si es necesario
- [ ] Actualizar la web con las nuevas direcciones
