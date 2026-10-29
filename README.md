TypeScript - JavaScript
Proporcionan interactividad a las paginas web y moviles

TypeScript -> se transpila a JavaScript
JavaScript posee un motor de modelo en ejecuci+on donde se ejecuta el codigo

Transpilar: Conversión de código fuente de un lenguaje de alto nivel a otro, a mismo nivel de abstracción

El modelo de ejecución de Js es de un solo hilo principal (single-threaded): solo se puede ejectuar una instruccion a la vez en su hilo principal

Operaciones sincronas: Las tareas se ejecutan una tras otra.
Operaciones asincronas: Una tarea que se incia ahora, pero cuyo resultado se obtendra en el futuro

Call Stack, CallBack Queue y Microtask Queue, Entorno y Event Loop (Bucle de eventos)

1. CallBack (Llamada de retorno): Cuando una función que se pasa a otra como argumento con la intención de que la función receptora la invoque en algún momento de su propio cuerpo.

1. Declarar una función: Defimos que hace, pero aun no se ejecuta.
2. Invocar una funcion: Usamos parentesis para que corra ahora mismo.
3. Pasar como argumento una funcion: usamos el nombre de la función pero sin parentesis, ya que la entregamos a otra funcion para que ella decida cuando usarla

ECMAScript (ES6) 2015
Promesas (promise)
Es un objeto de JS, que representan la eventual finalización de una operación asíncrona y su valor resultante()