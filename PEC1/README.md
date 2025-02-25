# README.md
## Login UOC
ocardonaa

## Nombre y apellidos
Oriol Cardona Alsina

## Dificultades y ejercicios realizados en esta PEC
Dudas sobre algunos conceptos de Git, como git rebase, git revert pero nada realmente complicado, revisandolo mejor y comprovando la documentación oficial es viable.

Realizando el ejercicio 1, las 4 primeras preguntas consulté las características de TypeScript, ya que no tengo experiencia con este y descubrí nuevas APIs que no conocia mirando foros y páginas web.

Continuando con la realización del ejercicio 1 pude aprender mucho sobre los preprocesadores, sourcemaps y transpiladores.

Para acabar el ejercicio 1, en la última parte pude ver algunos productos que son competencia de Github, ya que yo mayoritariamente he trabajado con este. También me costó pillar la parte de cita 2 módulos pero al final lo pude entender bien. Y aprendí sobre WebPack.

Ya en el ejercicio 2 con el Form pude refrescar mucho contenido sobre como hacer forms en html y css y repasar tambien el método getElementById y sus utilidades. La parte más compleja fue encontrar un buen regex definitivo para comprovar la validez del email.

Haciendo la comprovación de la edad tuve que asegurarme que no se introduce algo que no es un número y convertirlo correctamente a número y gestionar si la conversión a número no ha funcionado (dando un NaN porque se ha introducido texto) o si ha sido satisfactoria y hemos de comprovar si la edad está comprendida entre 0 y 1000 años. El segundo problema es que convertir el string vacío (''), provoca que sea un 0, por lo que no introducir nada es válido pero no queremos eso, por lo que hay que volver a comprovar el campo input.value !== ''

Para hacer la comprovación de la contraseña con los criterios necesarios habia el problema de encontrar un regex que funcionara y que si hacia la comprovación de el tamaño correcto o mayúscula, minúscula, número y carácter especial, las funciones ya transformaban el contorno de color verde.
Se tuvo que refactorizar usando una nueva función con un regex que engloba todas las comprovaciones necesarias para la contraseña.

Para el ejercicio de los exchange rates tuve que hacer un par de refactors y cambios al código original de O'Reilly y jugar con las propiedades CSS desde script.js (para hacer el hidden del texto de espera).
También tuve que refrescar e investigar para el manejo de errores, pero no hubo nada especialmente díficil.
Que los números fueran positivos fue fácil.
