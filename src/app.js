import "bootstrap";
import "./style.css";

import "./assets/img/excuses.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {

  // La función auxiliar para seleccionar un elemento de un array
  function generarElementoAleatorio(array) {
    return array[Math.floor(Math.random() * array.length)];
  }

  let who = ['El perro', 'Mi abuela', 'El cartero', 'Mi pájaro', 'Un mapache', 'Mi gemelo malvado', 'Un ninja', 'El vecino de arriba', 'Un fantasma'];
  let action = ['se comió', 'orinó sobre', 'aplastó', 'rompió', 'robó', 'confiscó', 'lanzó por la ventana', 'usó de paracaídas', 'hizo explotar'];
  let what = ['mi tarea', 'mi teléfono', 'el coche', 'mi única neurona', 'el último rollo de papel higiénico', 'mi patineta voladora', 'mis ganas de vivir', 'un calcetín limpio'];
  let when = ['antes de la clase', 'mientras dormía', 'mientras hacía ejercicio', 'durante mi almuerzo', 'mientras rezaba', 'justo después de ver un OVNI', 'mientras hacía un live de TikTok', 'en el peor momento posible', 'después de beber mate caducado', 'al sonar mi alarma'];
  let where = ['en el techo de la casa', 'dentro del refrigerador', 'bajo la cama de mi perro', 'en la boca de un volcán', 'en la ferretería'];
  let how = ['usando telequinesis', 'con un baile ritual', 'disfrazado de payaso', 'con una cuchara oxidada', 'mientras gritaba "¡Libertad!"'];
  
  // Llamamos a la nueva función y asignamos el resultado al HTML
  document.getElementById("excuse").innerHTML = `${generarElementoAleatorio(who)} ${generarElementoAleatorio(action)} ${generarElementoAleatorio(what)} ${generarElementoAleatorio(when)} ${generarElementoAleatorio(where)} ${generarElementoAleatorio(how)}`;

};


