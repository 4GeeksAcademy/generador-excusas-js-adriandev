import "bootstrap";
import "./style.css";

import "./assets/img/excuses.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {

  let who = ['El perro', 'Mi abuela', 'El cartero', 'Mi pájaro', 'Un mapache', 'Mi gemelo malvado', 'Un ninja', 'El vecino de arriba', 'Un fantasma'];
  let action = ['se comió', 'orinó sobre', 'aplastó', 'rompió', 'robó', 'confiscó', 'lanzó por la ventana', 'usó de paracaídas', 'hizo explotar'];
  let what = ['mi tarea', 'mi teléfono', 'el coche', 'mi única neurona', 'el último rollo de papel higiénico', 'mi patineta voladora', 'mis ganas de vivir', 'un calcetín limpio'];
  let when = ['antes de la clase', 'mientras dormía', 'mientras hacía ejercicio', 'durante mi almuerzo', 'mientras rezaba', 'justo después de ver un OVNI', 'mientras hacía un live de TikTok', 'en el peor momento posible', 'después de beber mate caducado', 'al sonar mi alarma'];
  let where = ['en el techo de la casa', 'dentro del refrigerador', 'bajo la cama de mi perro', 'en la boca de un volcán', 'en la ferretería'];
  let how = ['usando telequinesis', 'con un baile ritual', 'disfrazado de payaso', 'con una cuchara oxidada', 'mientras gritaba "¡Libertad!"'];

  let randomWho = who[Math.floor(Math.random() * who.length)];
  let randomAction = action[Math.floor(Math.random() * action.length)];
  let randomWhat = what[Math.floor(Math.random() * what.length)];
  let randomWhen = when[Math.floor(Math.random() * when.length)];
  let randomWhere = where[Math.floor(Math.random() * where.length)];
  let randomHow = how[Math.floor(Math.random() * how.length)];

  let excuse = randomWho + " " + randomAction + " " + randomWhat + " " + randomWhen + " " + randomWhere + " " + randomHow;

  document.getElementById("excuse").innerHTML = excuse;

};


