# 🧪 Technical Frontend Challenge - Mercado Libre

El equipo de Mercado Libre planteó como Challenge la creación de una pantalla previa a la confirmación de pedido, en la cual el usuario puede observar sus datos, en caso de tenerlos disponibles, y actualizarlos.

Como POC, la propuesta planteada consiste en un formulario con las siguientes características:

### Frontend

Construido en **React, Vite y TypeScript**.  
Los estilos fueron implementados con TailwindCSS. Se utilizó React Router Dom para el manejo de rutas, Axios para el consumo de APIs y la librería i18next para configurar la internacionalización.

### Backend

Construido con **Node.js + Express**.  
Para el ejercicio, se creó un backend sencillo para simular los endpoints **meli-countries** y **meli-users**, los cuales proporcionan la información referente a los países del formulario (GET) y los datos del usuario (GET/POST).

Debido a que se trata de un MVP, los archivos se escriben de forma temporal en el backend, pero no hay persistencia. En los archivos locales `meli-users.json` y `meli-countries.json` se almacena la información que responde la API. Los países mostrados son los 18 donde Mercado Libre opera, junto con 3 de sus principales regiones.

## 🚀 Performance

Para mejorar el rendimiento, se optimizó la carga inicial para evitar consultas innecesarias. Las llamadas a las APIs se ejecutan únicamente cuando son necesarias, evitando renderizados múltiples.

Se aplicó `useMemo` para evitar que la función se ejecute nuevamente al seleccionar el país y la región. Por otro lado, el formulario tiene pocas imágenes, las cuales tienen como atributo `loading="lazy"`. Las validaciones se realizan una vez el formulario es enviado, indicando los datos faltantes. La información ingresada es validada y guardada antes de la redirección al paso de confirmación de compra.

Para garantizar la legibilidad, escalabilidad y facilitar las pruebas unitarias a futuro, el formulario fue dividido en los principales componentes.

## 🧩 UX / UI

Para simular la experiencia de usuario en el MVP, se tomaron como referencia estilos propios de **Mercado Libre**, como la fuente Proxima Nova y los colores corporativos, que fueron almacenados como `ml-yellowLight`, `ml-blue`, `ml-black`, etc. Las páginas, aunque contenían colores vivos, procuraron tener pocos elementos, espacios amplios y bordes suaves.

Si bien el formulario no es completamente responsive, las pruebas en distintos dispositivos arrojaron buenos resultados. Si el usuario ya contaba con algunos campos almacenados, se utilizó el token de la URL para consultar la API `meli-users`; la información fue consultada y mostrada una vez el cliente accedió a la pantalla.

No se validó por completo el contenido de cada campo en esta fase inicial, pero en caso de faltar algún dato, el borde del input se resalta en rojo cuando el usuario intenta enviar el formulario.

Los campos nuevos sugeridos fueron: Región, Ciudad, Piso / Oficina / Apartamento, Tipo de domicilio. Se agregó un checkbox para aceptar el tratamiento de datos personales (de ser necesaria su actualización), el cual incluye el enlace correspondiente a cada país.

## 🌍 Internacionalización (i18n)

Se implementó la traducción a portugués y español. Para mostrarla de forma dinámica, se creó una landing page inicial donde se puede seleccionar el país desde el cual accede el usuario. La librería `react-i18next` permite configurar los idiomas de acuerdo con los subdominios `/ar`, `/br`, `/co`. En una implementación en producción, se podría ajustar de acuerdo con la URL oficial. No se requiere recarga para actualizar el idioma.

## ⚠️ No Script

Se agregó un bloque `<noscript>` que alerta al usuario que debe activar JavaScript para que el formulario funcione correctamente. Para generar confianza, se aplicó un estilo sencillo pero acorde con la identidad visual de Mercado Libre.

## 📝 Otras herramientas

Para garantizar la calidad del código y prevenir errores comunes en el desarrollo, se utilizó **Prettier** para el formateo automático, **ESLint** configurado para TypeScript y React, lo cual ayuda a detectar malas prácticas y errores de sintaxis. Adicionalmente, se emplearon `ts-node` y `nodemon` en el backend para facilitar la ejecución en desarrollo y el recargue automático de cambios.

## 📈 Próximos pasos

El MVP puede iterar y contar con mejoras, como una validación más precisa y visualmente más atractiva. A nivel técnico, ya se hace necesaria la conexión con bases de datos, autenticación y un manejo de errores más completo. Se podría adicionar un botón para seleccionar manualmente el idioma e incluir, por ejemplo, el inglés.

Para mejorar el rendimiento y no interrumpir la experiencia del usuario debido al CAPTCHA, existe la opción de reCAPTCHA v3, cuya viabilidad se puede analizar posteriormente.

## 👩‍💻 Autora

**Marianella Monroy Ortiz**  
📧 marianellamonroy@gmail.com  
🔗 [linkedin.com/in/marianellamonroyortiz](https://linkedin.com/in/marianellamonroyortiz)
