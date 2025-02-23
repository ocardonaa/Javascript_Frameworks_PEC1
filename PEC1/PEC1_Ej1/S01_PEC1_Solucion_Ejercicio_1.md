## Ejercicio 1

● **¿Cuál es la ventaja del uso de etiquetas semánticas? Nombra y explica al menos 3 de estas ventajas.**
- Proporcionan significado a la página web.
- Permiten organizar distintos elementos de la página web y que los motores de búsqueda entiendan el contenido y la estructura de la página web.
- Se pueden modificar con CSS permitiendo darle un mejor aspecto a nuestra página

● **Cita al menos 3 APIs HTML5 y explica brevemente su funcionalidad.**
- Geolocalization: permite obtener la ubicación del usuario para situarlo en un mapa.
- Canvas: permite crear un lienzo en blanco ya sea en 2D o en 3D con el que se pueden crear gráficos.
- File API: Permite a las aplicaciones web crear, leer, explorar y editar una sección de prueba del sistema de archivos local del usuario.

● **Cita qué opción ofrece CSS3 para conseguir que se apliquen diferentes estilos CSS sobre el mismo elemento en su visualización en diferentes dispositivos (diferentes tamaños de pantalla).**
- Ofrece los media queries, con los que con una condición especifica (en nuestro caso establecer que la ventana del navegador que estamos usando tiene X pixeles) pueda tener un estilo u otro dependiendo del dispositivo.

● **Cita al menos 4 de las características principales de TypeScript (importante superset de JavaScript que trataremos en el siguiente capítulo).**
- OOP: TypeScript ofrece características típicas de la programación orientada a objetos tales como clases, interfaces o herencia, no nativas en JS.
- Tipado estático: TypeScript permite al programador especificar el tipo de variable o función o propiedad, lo que ayuda a detectar errores.
- Compilación a JS: TypeScript se compila a JavaScript, por lo que se puede ejecutar en cualquier navegador o entorno que admita JS.
- Compatibilidad con JS: al ser un superset de JS, todo código de JS válido es válido en TypeScript, por lo que una migración haria que no se tuviera que reescribir todo el código desde 0.

El lenguaje CSS es muy rígido, poco práctico y ordenado a la hora de programar. Para evitar este problema se han creado los preprocesadores CSS, que ofrecen evidentes ventajas (0.5 puntos)
● **Cita al menos 2 de estos preprocesadores.**
- Dos de los preprocesadores más importantes son SaSS y Less.
● **Cita al menos 4 ventajas que ofrecen estos preprocesadores.**
- Usar variables para evitar la repetición de valores.
- Anidar selectores para mejorar la legibilidad y mantenibilidad del código.
- Utilizar funciones y mixins para reutulizar código.
- La hoja de CSS queda mucho más limpia.
● **Explica brevemente en qué consisten los sourcemaps.**
- Los sourcemaps permiten que el CSS generado por preprocesadores vuelva a su código original.
● **Explica qué es un transpilador.**
- Es un tipo de compilador que traduce el código de un lenguaje de programación a otro el cual tiene un nivel de abstración similar.
Este puede parecer similar a un procesador ya que extiende algunas de las funcionalidades de CSS pero, mientras que este pretende traducir como principal objetivo, el preprocesador busca optimizar.

El flujo de trabajo profesional en front-end hace indispensable el uso de herramientas como controles de versiones y herramientas de gestión de módulos (0.75 puntos).
● **Cita al menos dos sistemas de control de versiones y dos herramientas de gestión de módulos.**
Dos sistemas muy populares de control de versiones son Git y Subversion. Dos herramientas de gestión de módulos son Github y Mercurial
● **Cita y explica al menos 3 comandos de Git.**
- git add: comando usado para añadir los archivos a un posible commit de tu rama
- git commit: comando para guardar los cambios en tu repositorio local, listo para subirse a la rama.
- git push: comando para subir el contenido a la rama, la cual está en remoto.
● **Cita y explica brevemente las características más definitorias de WebPack.**
- Empaquetado de módulos: toma módulos con dependencias y genera archivos estáticos que representan estos mismos.
- Minificación y comprensión: permite reducir el tamaño de los archivos generados para mejorar el rendimiento.
- Transpilación de código: permite convertir código de un lenguaje a otro, como por ejemplo convertir código ES6 o ES7 a versiones compatibles con todos los navegadores.
- Manejo de estilos: webpack puede procesar y empaquetar archivos CSS incluso escritos por SaSS.
- Plugins: permite extender las funcionalidades de webpack.
- Configuración personalizable: con un archivo se pueden definir reglas, plugins y otros parámetros para el proyecto.