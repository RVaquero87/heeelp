 <img src="http://elpublicamaleon.com/images/logo-negro.svg" width="130">

### Descripción

---

Descubre el servicio que pone en contacto a personas que **necesitan ayuda** en tareas del día a día con personas que **están dispuestas a ayudar**.

### Guía de usuario

---

Existen disintos perfiles:

- **Usuario no registrado**: Pueden informarse sobre el objetivo, servicios y cualquier información adyacente que necesiten.
- **Helped**: Crean las peticiones de ayuda sobre **lavanderia**, **supermercado**, **parafarmacia**, **Tareas domésticas** y **Animales domésticos**
- **Helpers** Eligen a quien ayudar a través de distintos filtros.
- **Admin** Controla las reviews, los usuarios y los mensajes de contacto a través de un control de adminsitrador.

Además los usuarios podrán ponerse en contacto a través de mensajes, que les facilitará la realización de la petición en caso de haber algún problema.

 <img src="http://elpublicamaleon.com/images/web.jpg" width="100%">

[![ScreenShot](http://elpublicamaleon.com/images/intro-1.png)](https://youtu.be/0fbk8PHyA3s)

### Guía de instalación

---

Se debe diferenciar ente la parte del client o front realizada en **REACT** y la parte de la api o back donde usamos **express**.

#### API

Este proyecto consta de 7 colecciones creadas en MongoDB, que están relacionadas de la siguiente manera:

 <img src="http://elpublicamaleon.com/images/schema.jpg" width="100%">

Los package usados de Node son los siguientes:

- **axios**: "^0.19.2",
- **bcryptjs**: "^2.4.3",
- **body-parser**: "^1.18.3"
- **cloudinary**: "^1.21.0",
- **connect-mongo**: "^3.2.0",
- **cookie-parser**: "^1.4.3",
- **cors**: "^2.8.5",
- **dotenv**: "^6.0.0",
- **esm**: "^3.2.25",
- **express**: "^4.16.3",
- **express-session**: "^1.17.0",
- **lodash**: "^4.17.15",
- **mongoose**: "^5.2.10",
- **morgan**: "^1.9.0",
- **multer**: "^1.4.2",
- **multer-storage-cloudinary**: "^2.2.1",
- **nodemailer**: "^6.4.6",
- **passport**: "^0.4.1",
- **passport-local**: "^1.0.0"

#### Client

La parte front esta realizada en **REACT**, donde hemos creado la siguiente estructura:

- **components**: Econtramos los disintos componentes que se reutilizan en la web.
- **context**
- **layauts**
- **lib**: Las distinas funcionalidad y la protección de las rutas
- **pages**
- **services** El contacto con la API
- **styles** Realizados con [styled-components](https://styled-components.com/)

Los package usados en esta parte son los siguientes:

- **@babel/plugin-transform-runtime**: "^0.19.2",
- **aos**: "^2.3.4",
- **axios**: "^0.19.2",
- **parcel**: "^1.12.4",
- **public**: "^0.1.5",
- **react**: "^16.13.1",
- **react-accessible-accordion**: "^3.0.1", Para la realización del acordeón de FAQS [react-feather\*](https://www.npmjs.com/package/react-accessible-accordion)
- **react-dom**: "^16.13.1",
- **react-feather**: "^2.0.4", Fuente de iconos en svg [react-feather\*](https://www.npmjs.com/package/react-feather)
- **react-hook-form**: "^5.2.0", Para el control de los formularios [react-hook-form](https://react-hook-form.com/)
- **serve**: "^11.3.0",
- **styled-components**: "^5.0.1",

Además econtramos una carpeta **public** con las distintas imagenes y el reset.css

### Cómo contribuir

---

Toda aportación o comentario será recibido de buen gusto, ya que con ellos se podrá ayudar a crecer tanto la aplicación cómo ami como desarrollador.

Cualquier mejora será incluida tras una previa revisión a través de un **“pull requests”**. Se requiere un código ordenado y comentado.

Existen muchas **líneas de mejora**, algunas de ellas son:

- **Doble Check delete:** Doble seguridad a la hora de eliminar reviews, aid Requests, messages o notifications, a través de un lighbox.
- **Tamaño imagenes cloudinare:** Redimensionar las imagenes muy grandes para optimizar el peso de la web.
- **Registros:** Realizar registros usando Facebook, Gmail o Outlook entre otros.
- **Gráficas y medición en control Admin:** Creación de distintas gráficas para el control del uso de la web. (Chart.js)
- **Password:** Realizar la doble verificiación en el registro y la posibilidad de cambiarla.
- **PDF CREATE:** Creación de un PDF descargable de las páginas detalle de las Aid Requests, sobretodo de las listas de peticiones.
- **Menu Admin:** Creación de dos submenus que permitan acceder a las dintintas partes de la web como si de un usario Helper o Helped se tratease.
- **Chat + Chat video llamada:** Actualmente existe una comunicación a través de mensajería.
- **Pasarela Pago:** Incluir pasarela de pago.
- **Mapa - Geocalización - Filtro:** Actualmente trabajando en ello, el diseño sería el siguiente:

 <img src="http://elpublicamaleon.com/images/mapa.png" width="100%">

### Código de conducta

---

En el siguiente enlace se muestra el [Código de Conducta](https://github.com/RVaquero87/heeelp/blob/master/CODE_OF_CONDUCT.md).

### Autores

---

[Rubén Vaquero de la Torre](https://www.linkedin.com/in/rubenvaquero/)

### Licencia

---

Aquí se puede consultar la [Licencia](https://github.com/RVaquero87/heeelp/blob/master/LICENSE.md) para este repositorio.
