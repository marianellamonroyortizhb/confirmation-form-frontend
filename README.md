# 🧪 Technical Frontend Challenge - Mercado Libre

El equipo de Mercado Libre planteó como Challenge la creación de una pantalla previa a la confimación de pedido, en la cual el usuario puede observar sus datos en caso de tenerlos disponibles y actualizarlos.

Como POC la propuesta planteada consiste en un formulario con las siguientes características:

### Frontend

Construido en **React, Vite y TypeScript**.
Los estilos fueron implementados en TailwindCSS, se usó React Router Dom el manejo de las rutas, Axios para el consumo de APIs y la librería i18next para configurar la internacionalización.

### Backend

Construido con **Node.js + Express**.
Para el ejercicio se creó un backend sencillo para simular los endpoints **meli-countries** y **meli-users** las cuales proporcionan la información referente a los países del formulario (GET) y los datos del usuario (GET/POST).

Debido a que se trata de un MVP, los archivos se escriben de forma temporal en el backend pero no hay persistencia. En los archivos locales meli-users.json y meli-countries.json es almacenada la información que responde la API. Los paises mostrados son los 18 donde Mercado Libre opera y 3 de sus principales regiones.

## 🚀 Performance

Para mejorar el performance, se optimizó la carga inicial para evitar consultas innecesarias, las llamadas a las APIs se ejecutan una vez cuando son necesarias, evitando de esta forma renderizar varias veces.

Se aplicó `useMemo` para evitar que las funcion se ejecute de nuevo cuando se selecciona el país y la región. Por otro lado, el formulario tiene pocas imágenes, las cuales tiene como atributo loading = lazy. Las validaciones se realizan una vez el formulario es enviado, indicando los datos faltantes. La información enviada al formulario es validada y guardada previo a la redirección al paso de confirmación de compra.

Para garantizar la legibilidad, escalabilidad y facilitar las pruebas unitarias a futuro el formulario fue divido en los principales componentes.

## 🧩 UX / UI

Para simular la experiencia de usuario en el MVP se tomaron como referencia estilos propios de **Mercado Libre**, como la fuente Proxima Nova, los colores corporativos que fueron almacenados como `ml-yellowLight`, `ml-blue`, `ml-black`, etc., las páginas aunque contenían colores vivos procuraron tener pocos elementos, espacios y bordes suaves. Si bien el formulario no es completamente responsive, las pruebas en distintos dispositivos tuvieron buenos resultados.
Si el usuario ya contaba con algunos campos almacenados, se usó el token de la url para la consulta en la api meli-users, la información fue consultada y mostrada una vez el cliente pasa a la pantalla.
No se validó por completo el contenido de cada campo en esta fase inicial, pero en caso de que algún dato se resalta en rojo el color del input cuando el usuario intenta enviar el formulario.

Los campos nuevos sugeridos fueron: Región, Ciudad, Piso / Oficina / Apartamento, Tipo de domicilio y se agregó un checkbox para aceptar el tratamiento de datos personales de ser necesaria su actulización, el cuál tiene el link correspondiente a cada país.

## 🌍 Internacionalización (i18n)

Se implementó la traducción a portugues y español. Para mostrarlo de forma dinámica, se creó una landing inicial donde se puede seleccionar el país desde el que accede el usuario. La librería `react-i18next` permite hacer la configuración de acuerdo con los subdominios /ar, /pt, /co. De implementarse en producción, se puede hacer el ajuste de acuerdo con la url oficial. Para actualizar el cambio de idioma no se requiere recarga.

## ⚠️ No Script

Se agregó un bloque `<noscript>` que alerta al usuario que debe activar Javascript para que el formulario funcione correctamente. Para dar confianza al usuario se aplicó un estilo sencillo pero acorde a Mercado Libre.

## 📝 Otras herramientas

Para garantizar la calidad del código y prevenir errores comunes en el desarrollo, se utilizó Prettier para el formateo automático, ESLint configurado para TypeScript y React que ayuda a detectar malas prácticas y errores de sintaxis. Adicionalmente, se emplearon ts-node y nodemon en el backend para facilitar la ejecución en desarrollo y el recargue automático de cambios.

## 📈 Próximos pasos

El MPV puede iterar y contar con mejoras como es el caso de la validación más precisa y visualmente más atractiva. A nivel técnico ya se hace necesaria la conexión con las bases de datos, autenticación y un manejo de errores más completo. Se podría adicionar un botón para seleccionar el cambio manual de idioma e incluir por ejemplo el inglés.

Para mejorar el rendimiento y no interrumpir la experiencia del usuario debido al CAPTCHA existe la opción de reCAPTCHA v3, la cual tocaría analizar posteriormente si es la opción adecuada.

## 👩‍💻 Autora:

**Marianella Monroy Ortiz**

📧 marianellamonroy@gmail.com

🔗 linkedin.com/in/marianellamonroyortiz
