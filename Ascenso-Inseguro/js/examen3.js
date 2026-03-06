const tituloExamen = "03 - Ley Orgánica del Ejército y F.A.M.";

const preguntas = [
{
  art: "Art. 71",
  q: "Serán los asesores en los escalones correspondientes de los mandos, de los Edos. Mayores y de los Gpos. de Comando para el adecuado empleo de sus respectivos servicios.",
  o: ["Los directores y jefes de los servicios","Los comandantes de batallón","Los comandantes de brigada","Los comandantes de región y zona"],
  a: 0
},
{
  art: "Art. 6/o",
  q: "Los mexicanos que decidan prestar sus servicios en las Instituciones Armadas de tierra y aire, en forma voluntaria, firmarán un...",
  o: ["Convenio","Tratado","Contrato","Acuerdo"],
  a: 2
},
{
  art: "Art. 57",
  q: "Se constituyen con Mando y órganos de Mando, Unidades de dos o más Armas y de los Servicios que se requieran.",
  o: ["Las grandes Unidades","Las pequeñas Unidades","Las armas del Ejército","Las armas del Ejército"],
  a: 0
},
{
  art: "Art. 59",
  q: "Se compone de Unidades organizadas, equipadas y adiestradas para las operaciones militares aéreas.",
  o: ["La Región Militar Aérea","Los escuadrones Aéreos","La Fuerza Aérea Mexicana","La Base Aérea Militar"],
  a: 2
},
{
  art: "Art. 53",
  q: "Desarrollan sus acciones de Defensa Nacional en forma conjunta y se mantienen unidas en una sola Dependencia.",
  o: ["El Ejército y la Marina","El Ejército y F.A.M.","El Ejército y Guardia Nacional","La Guardia Nacional y la S.S.C."],
  a: 1
},
{
  art: "Art. 64",
  q: "Las grandes unidades de vuelo, son...",
  o: ["Las Zonas y Regiones","Las bases y escuadrones","Los grupos, las alas y las divisiones","Las escuadrillas y escuadrones"],
  a: 2
},
{
  art: "Art. 57",
  q: "Se organizarán en Unidades, las que se clasifican en pequeñas y grandes Unidades.",
  o: ["Las Regiones Militares","Las dependencias","Las Armas del Ejército","Las Brigadas"],
  a: 2
},
{
  art: "Art. 63",
  q: "Son los componentes de la Fuerza Aérea cuya misión principal es el combate aéreo, así como la ejecución de operaciones aéreas militares en tiempo de paz y de guerra.",
  o: ["Las Bases Aéreas Militares","Las Zonas Aéreas Militares","Los Escuadrones Aéreos","Las Unidades de Vuelo"],
  a: 3
},
{
  art: "Art. 57",
  q: "Se constituyen con mando y órganos de mando, elementos o unidades de una sola Arma y de los Servicios que le sean necesarios según proceda.",
  o: ["Las Zonas Militares","Las pequeñas Unidades","Las grandes Unidades","Las Brigadas"],
  a: 1
},
{
  art: "Art. 67",
  q: "Son componentes del Ejército y Fuerza Aérea, que tienen como misión principal satisfacer necesidades de vida y operación por medio del apoyo administrativo y logístico.",
  o: ["La Moral","Las armas","Las comisiones","Los Servicios"],
  a: 3
},
{
  art: "Art. 64",
  q: "Las pequeñas unidades de vuelo son...",
  o: ["Las escuadrillas y los escuadrones","Las baterías y escalones","Las bases y escuadrones","Aviones"],
  a: 0
},
{
  art: "Art. 57",
  q: "Son Brigadas, Divisiones y Cuerpos de Ejército.",
  o: ["Las pequeñas Unidades","Las armas del Ejército","Las Unidades del Ejército","Las grandes Unidades"],
  a: 3
},
{
  art: "Art. 7/o",
  q: "Durante su permanencia en el activo de las Fuerzas Armadas, quedarán sujetos a las Leyes, Reglamentos y disposiciones militares.",
  o: ["Los militares nacidos de padres mexicanos","Los mexicanos que integran el Servicio Militar Nacional","Personal perteneciente a la Secretaría de la Defensa Nacional","El personal retirado y reservista"],
  a: 1
},
{
  art: "Art. 5/o",
  q: "Por norma Constitucional pertenecen al Servicio Militar Voluntario o al Servicio Militar Nacional.",
  o: ["Los miembros del SMN","Los miembros del Ejto. y F.A.M.","La totalidad del personal de Soldados","El personal Reservista"],
  a: 1
},
{
  art: "Art. 3/o",
  q: "Deben ser organizados, adiestrados y equipados conforme a los requerimientos que reclame el cumplimiento de sus misiones.",
  o: ["El Ejército y Fuerza Aérea Mexicanos","La Guardia Nacional","El personal Militar","El personal Reservista"],
  a: 0
},
{
  art: "Art. 2/o Bis",
  q: "Podrá efectuar operaciones de apoyo a las instituciones de seguridad pública en los términos que señale el marco jurídico aplicable.",
  o: ["La Guardia Nacional","El personal del SMN","La Marina","El personal militar"],
  a: 3
},
{
  art: "Art. 57",
  q: "Son Escuadras; Pelotones; Secciones; Compañías, Escuadrones o Baterías; Grupos; y Batallones o Regimientos.",
  o: ["La orgánica del Ejército","Las pequeñas Unidades","Las grandes Unidades","Las armas del Ejército"],
  a: 1
},
{
  art: "Art. 64",
  q: "Dotadas del material aéreo apropiado para realizar las actividades de localización, hallazgo y retorno a la seguridad.",
  o: ["Escuadrones Aéreos","Grupos de Control y Alarma Avanzada","Unidades Controladoras de Tráfico Aéreo","Unidades de búsqueda y rescate"],
  a: 3
},
{
  art: "Art. 9/o",
  q: "Están destinados para que en ellos se lleven a cabo funciones de administración y organización, así como para el alojamiento, preparación y operación de las tropas.",
  o: ["Los batallones","Los centros de adiestramiento","Los edificios e instalaciones","Las brigadas"],
  a: 2
},
{
  art: "Art. 63 Bis",
  q: "Son el componente humano de la Fuerza Aérea formado, capacitado y entrenado para la conducción de los organismos aéreos y de las aeronaves.",
  o: ["Pilotos Aéreos","Pilotos Aviadores","Capitanes Aviadores","Tropas Aéreas"],
  a: 1
},
{
  art: "Art. 54 Ter",
  q: "Es el órgano técnico operativo, colaborador inmediato del Comandante del Ejército, que auxilia en la planeación y coordinación de los asuntos de su competencia.",
  o: ["Estado Mayor Conjunto","Centro de Operaciones del Ciberespacio","Estado Mayor del Ejército","Estado Mayor Presidencial"],
  a: 2
},
{
  art: "Art. 54 Bis",
  q: "Será responsable de la operación y administración del ejército así como del empleo de sus Unidades, de conformidad con las disposiciones del Alto Mando.",
  o: ["El Comandante del Ejército","El Secretario de la Defensa","El Oficial Mayor","El presidente de la República"],
  a: 0
}
];
