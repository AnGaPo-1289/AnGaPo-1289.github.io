const tituloExamen = "02 - Ley Federal de Armas de Fuego y Explosivos";

const preguntas = [
{
  art: "Art. 8o Bis",
  q: "¿Quién puede otorgar o negar permisos de adquisición y licencias de portación de armas automáticas calibre 7.62 mm?",
  o: ["La Defensa Nacional","La Guardia Nacional","La Secretaría","El Secretariado Ejecutivo del Sistema Nacional de Seguridad Pública"],
  a: 2
},
{
  art: "Art. 26",
  q: "¿Qué pasa si no se exhibe la licencia ante la autoridad?",
  o: ["Se hará acreedor a realizar trabajos sociales","Se hace acreedor a una multa de quince días de sueldo","Se presume que carece de autorización","Se otorga prórroga por quince días naturales"],
  a: 2
},
{
  art: "Art. 10",
  q: "¿Cuántas armas puede autorizar la Secretaría a personas que practican actividades de tiro y cacería inscritos en un club o asociación?",
  o: ["Hasta cinco armas","Hasta quince armas","Sin límite","Hasta diez armas"],
  a: 3
},
{
  art: "Art. 11 Ter",
  q: "¿Qué prohíbe el Artículo 11 Ter de esta Ley?",
  o: ["Que personas ajenas a la Fuerza Armada Permanente posean cargadores, municiones u otros accesorios","Usar o accionar armas en el domicilio particular","Convertir armas semiautomáticas en automáticas","Registrar armas deportivas de gas, aire comprimido o pistón superiores a cuarenta joules"],
  a: 2
},
{
  art: "Art. 14",
  q: "¿Qué debe hacerse en caso de extravío o robo de un arma?",
  o: ["Dar parte a la Región Militar más cercana al domicilio","Informar al Secretariado Ejecutivo del Sistema Nacional de Seguridad Pública","Dar aviso a la Secretaría y a la autoridad ministerial","Informar a la Secretaría de Guerra y Marina"],
  a: 2
},
{
  art: "Art. 30",
  q: "¿Qué autoridad expide y cancela licencias?",
  o: ["La Marina","La Secretaría de Guerra","La Secretaría","La Guardia Nacional"],
  a: 2
},
{
  art: "Art. 17",
  q: "¿Qué obligación tienen las personas físicas que adquieren un arma?",
  o: ["Registrarla por escrito ante la Secretaría en treinta días hábiles después de su compra","Manifestarla ante la Secretaría antes de los treinta días naturales posteriores a su adquisición","Solicitar ante la autoridad judicial el permiso de portación dentro de los primeros treinta días hábiles","Manifestarla ante la Secretaría en un término de treinta días naturales a partir de su adquisición"],
  a: 3
},
{
  art: "Art. 24",
  q: "¿Qué se requiere para portar armas legalmente?",
  o: ["Permiso de la Secretaría de Seguridad Pública","Constancia de la Secretaría de Seguridad Ciudadana","Licencia ordinaria","Licencia respectiva"],
  a: 3
},
{
  art: "Art. 8o Bis",
  q: "¿Qué requisito es necesario para autorizar armas automáticas al personal operativo de seguridad pública?",
  o: ["La evaluación y certificación establecida por el Poder Judicial","Sujetarse a los lineamientos que establece el apartado A de esta Ley","Opinión favorable del Secretariado Ejecutivo del Sistema Nacional de Seguridad Pública","Certificado único aprobado por la Secretaría de Guerra y Marina"],
  a: 2
},
{
  art: "Art. 24",
  q: "¿Qué se prohíbe a militares respecto a armas propias?",
  o: ["Portarlas en seguridad privada sin autorización de la Secretaría o Secretaría de Marina","Poseerlas en el domicilio sin el registro correspondiente","Registrarlas treinta días después de su adquisición","Transportarlas cargadas en vehículo particular"],
  a: 0
},
{
  art: "Art. 26",
  q: "¿Un requisito que deben cumplir las personas físicas para obtener licencia es?",
  o: ["Constancia de registro ante el SAT","No consumir drogas o enervantes","Ser mayor de dieciocho años sin excepción","Ser militar de cualquier rango"],
  a: 1
},
{
  art: "Art. 36",
  q: "¿Qué prohíbe el Artículo 36 de esta Ley?",
  o: ["Asistir armado a manifestaciones y celebraciones públicas","Portar armas en el domicilio particular","Registrar armas deportivas o de cacería arriba de ciento cuarenta joules","Asistir armado a sitios de prostitución"],
  a: 0
},
{
  art: "Art. 21",
  q: "¿Qué pueden poseer las personas físicas o morales, públicas o privadas?",
  o: ["Armas automáticas sin registro","Colecciones o museos de armas antiguas o modernas","Colecciones de armas activadas por CO₂","Colecciones sin permiso de la Secretaría"],
  a: 1
},
{
  art: "Art. 9o",
  q: "De conformidad con el artículo 9/o. de esta Ley, ¿qué calibre de revólver está permitido para posesión y portación por personas físicas?",
  o: [".357 Magnum o equivalentes","Hasta .357 Magnum","Hasta .380 Super","Hasta .38 Especial"],
  a: 3
},
{
  art: "Art. 9o",
  q: "¿Qué calibre máximo está permitido en pistolas semiautomáticas para particulares?",
  o: ["Solo calibre .40 y 9 mm","Calibre no superior al .380 y sus equivalentes","Calibre 9 mm Parabellum","Calibre .357 Magnum o 9 mm Kurz"],
  a: 1
},
{
  art: "Art. 18",
  q: "¿Quién debe manifestar armas en organismos de seguridad pública?",
  o: ["La Secretaría","La Defensa Nacional","El titular de la Suprema Corte de Justicia de la Nación","Los titulares de los organismos de seguridad pública"],
  a: 3
},
{
  art: "Art. 9o",
  q: "¿Dónde se pueden poseer armas para defensa legítima?",
  o: ["En las instalaciones de seguridad pública","En el domicilio del morador","En la casa o vehículo particular","En domicilio proporcionado ante la Secretaría de Seguridad Pública"],
  a: 1
},
{
  art: "Art. 9o",
  q: "¿Qué longitud mínima de cañón debe tener una escopeta permitida?",
  o: ["Cuatrocientos cincuenta milímetros","Setecientos milímetros","Seiscientos treinta y cinco milímetros (25 pulgadas)","Dieciocho punto cinco milímetros"],
  a: 2
},
{
  art: "Art. 11 Bis",
  q: "¿Qué está prohibido a personas ajenas a la Fuerza Armada Permanente?",
  o: ["Las armas de uso exclusivo de la Secretaría de Guerra y Marina","La compra de cartuchos 9 mm y .38","La posesión y uso de armas reservadas","La portación de diez o más armas deportivas"],
  a: 2
},
{
  art: "Art. 9o",
  q: "¿Dónde está permitida la posesión de armas de fuego para personas físicas, para seguridad y legítima defensa?",
  o: ["En zonas rurales con su respectivo registro","En instalaciones de la Secretaría de Guerra o Marina","En el domicilio declarado","En cualquier lugar público con aprobación de la Secretaría"],
  a: 2
},
{
  art: "Art. 7o",
  q: "¿Qué debe designar el titular al manifestar la posesión de un arma?",
  o: ["Una persona física responsable del trámite de destino final del arma","Un notario público","Un testigo de posesión","Un representante legal militar"],
  a: 0
},
{
  art: "Art. 25",
  q: "¿Cada cuánto se revalidan las licencias particulares individuales?",
  o: ["Cada dos años","Cada cinco años","No se revalidan","Cada año"],
  a: 3
},
{
  art: "Art. 9o",
  q: "¿Qué personas pueden portar rifle calibre .22 fuera de zonas urbanas?",
  o: ["Ejidatarios, comuneros y jornaleros del campo","Cualquier ciudadano","Defensas rurales y municipales","Integrantes de clubes de tiro y cacería"],
  a: 0
},
{
  art: "Art. 25",
  q: "¿Qué tipo de licencias existen para particulares?",
  o: ["Federales y judiciales","Temporales e individuales","Colectivas y empresariales","Individuales y colectivas"],
  a: 3
},
{
  art: "Art. 24",
  q: "¿Quiénes pueden portar armas sin licencia?",
  o: ["Generales, jefes y oficiales con acreditación vigente","Todo el personal militar con acreditación vigente","Policías retirados de alto rango","Todo el personal de la Guardia Nacional o Militar"],
  a: 0
},
{
  art: "Art. 19",
  q: "¿Quién autoriza cartuchos con características especiales para cacería?",
  o: ["El Estado","La Defensa Nacional","La Secretaría de Seguridad Pública","La Secretaría"],
  a: 3
},
{
  art: "Art. 8o Bis",
  q: "¿Qué sucede con las armas automáticas una vez cumplido el objetivo que originó la solicitud para su adquisición y portación?",
  o: ["Con aprobación de la Secretaría pueden ser vendidas a particulares","Deben transferirse por donación a la Secretaría o quedar bajo resguardo militar","Deben destruirse en la Dirección General de Armas de Fuego y Explosivos","Pasan a propiedad del país o a su destrucción en centros de canje"],
  a: 1
},
{
  art: "Art. 20",
  q: "¿Dónde deben registrarse los clubes o asociaciones de personas deportistas de tiro y cacería debidamente constituidas?",
  o: ["En las Secretarías de Seguridad y Defensa Nacional","En la Secretaría de Seguridad Pública y Defensa Nacional","En las Secretarías de Seguridad y Protección Ciudadana y de la Defensa Nacional","En la Secretaría"],
  a: 2
},
{
  art: "Art. 31",
  q: "¿Cuándo se cancelan las licencias de portación de armas?",
  o: ["Por portar identificación vencida","Por renovar tarde","Por mal uso del arma","Por cambio de empleo"],
  a: 2
},
{
  art: "Art. 10",
  q: "¿Qué autoridad autoriza armas para tiro y cacería?",
  o: ["La Defensa","La Guardia Nacional","El gobierno estatal","La Secretaría"],
  a: 3
},
{
  art: "Art. 11",
  q: "¿Qué armas están reservadas para uso exclusivo de la Fuerza Armada Permanente?",
  o: ["Las armas automáticas y calibres superiores señalados en el Artículo 10","Las armas automáticas y calibres superiores señalados en el Artículo 9","Las armas automáticas y calibres superiores señalados en el Artículo 11","Las armas automáticas y calibres superiores a 7.62 mm señalados en el Artículo 8"],
  a: 2
},
{
  art: "Art. 13",
  q: "¿Qué armas se permiten accionadas por gas, aire comprimido o pistón?",
  o: ["Las que por su apariencia constituyan réplicas","Las que no rebasen la longitud del cañón de 635 mm","Únicamente las deportivas registradas","Las no superiores a 140 joules"],
  a: 3
},
{
  art: "Art. 19",
  q: "¿Qué puede determinar la Secretaría respecto a armas de tiro y cacería?",
  o: ["Calibre y tipo de armamento","Cantidad de cartuchos y calibre","Cantidad, tipo y municiones autorizadas","Solo el calibre"],
  a: 2
},
{
  art: "Art. 8o",
  q: "¿Qué armas están prohibidas en posesión y portación según el Artículo 8?",
  o: ["Las armas antiguas de colección","Las reservadas para el uso exclusivo de la Fuerza Armada Permanente","Las armas automáticas calibre 7.62 mm","Las armas de aire comprimido"],
  a: 1
},
{
  art: "Art. 17",
  q: "¿Qué información debe incluir la manifestación del arma?",
  o: ["Tipo, calibre, empresa, matrícula y propietario","Tipo, calibre, marca, modelo, matrícula y uso","Tipo, medida, modelo, serie y utilidad","Tipo, longitud de cañón, marca, modelo, matrícula y uso"],
  a: 1
}
];
