const tituloExamen = "04 - Ley del ISSFAM";

const preguntas = [
{
  art: "Art. 21",
  q: "Es la prestación económica vitalicia a que tienen derecho los militares retirados.",
  o: ["Pensión otorgada a familiares derechohabientes","Compensación pagada en una sola exhibición","Haber de retiro conforme a la Ley","Seguro colectivo por retiro voluntario"],
  a: 2
},
{
  art: "Art. 19",
  q: "Las Secretarías de la Defensa y de Marina tramitarán ante el Instituto:",
  o: ["La afiliación del personal en activo y retiro","Las promociones del personal militar","Las licencias ordinarias del servicio","Las comisiones fuera del país"],
  a: 0
},
{
  art: "Art. 30",
  q: "Los militares retirados podrán volver al activo cuando:",
  o: ["Lo soliciten mediante conducto regular","Exista vacante en su jerarquía","Cumplan determinado tiempo en retiro","Las necesidades de la Nación lo exijan"],
  a: 3
},
{
  art: "Art. 23",
  q: "La cuantía del haber de retiro y de la pensión:",
  o: ["Permanece fija durante el retiro","Se incrementará conforme aumenten los haberes del activo","Se revisa mediante acuerdo administrativo","Depende de la disponibilidad presupuestal"],
  a: 1
},
{
  art: "Art. 21",
  q: "Es la prestación económica a que tienen derecho los militares y sus familiares en una sola exhibición.",
  o: ["Pensión derivada del servicio activo","Haber de retiro por antigüedad","Seguro institucional de retiro","Compensación conforme a la Ley"],
  a: 3
},
{
  art: "Art. 24",
  q: "Es causa de retiro:",
  o: ["Llegar a la edad límite que fija la Ley","Cambio definitivo de adscripción","Asignación temporal de servicio","Licencia ordinaria autorizada"],
  a: 0
},
{
  art: "Art. 20",
  q: "El Instituto expedirá a los beneficiarios una:",
  o: ["Constancia administrativa de derechos","Credencial para servicios médicos","Cédula de Identificación correspondiente","Autorización temporal de afiliación"],
  a: 2
},
{
  art: "Art. 25",
  q: "La edad límite para permanecer en el activo depende de:",
  o: ["El tiempo total en el servicio","La jerarquía del militar","La unidad de adscripción","La especialidad desempeñada"],
  a: 1
},
{
  art: "Art. 32",
  q: "Los haberes de retiro, compensaciones y pensiones:",
  o: ["Podrán transferirse entre beneficiarios","Se otorgan de forma temporal","Quedan exentos de todo impuesto","Se determinan por acuerdo interno"],
  a: 2
},
{
  art: "Art. 51",
  q: "Los derechos a percibir beneficios de retiro se pierden por:",
  o: ["Cambio de situación administrativa","Licencia ilimitada del servicio","Actualización de datos personales","Sentencia ejecutoriada que origine la pérdida del beneficio"],
  a: 3
},
{
  art: "Art. 21",
  q: "Es la facultad que tiene el Estado para separar del activo a los militares.",
  o: ["Retiro conforme a la legislación militar","Haber de retiro por antigüedad","Compensación derivada del servicio","Pensión otorgada a familiares"],
  a: 0
},
{
  art: "Art. 41",
  q: "Si hubiere varios familiares con derecho a pensión:",
  o: ["Se asigna al familiar de mayor edad","Se divide por partes iguales entre ellos","El Instituto determina porcentajes","Se otorga únicamente al cónyuge"],
  a: 1
},
{
  art: "Art. 27",
  q: "Los militares que pasen a situación de retiro ascenderán:",
  o: ["Al grado superior permanente","Dos grados jerárquicos","Al grado inmediato únicamente para ese fin","Solo en caso de guerra"],
  a: 2
},
{
  art: "Art. 55",
  q: "Los Generales, Jefes y Oficiales tendrán derecho por gastos de sepelio a:",
  o: ["Diez días de haber correspondiente","Quince días de haber o retiro","Cuarenta días de haber integrado","Veinte días de haber o haber de retiro"],
  a: 3
},
{
  art: "Art. 24",
  q: "También es causa de retiro:",
  o: ["Quedar incapacitado en acción de armas","Cambio temporal de unidad","Licencia ordinaria autorizada","Permiso especial administrativo"],
  a: 0
},
{
  art: "Art. 29",
  q: "Los militares retirados y pensionistas tendrán obligación de:",
  o: ["Actualizar su grado militar","Pasar revista de supervivencia","Solicitar revisión médica periódica","Presentar informe anual"],
  a: 1
},
{
  art: "Art. 36",
  q: "Tienen derecho a compensación los militares que tengan:",
  o: ["Menos de cinco años de servicios","Más de veinticinco años efectivos","Cinco o más años sin llegar a veinte","Veinte años completos de servicio"],
  a: 2
},
{
  art: "Art. 31",
  q: "El haber de retiro, pensión o compensación se calcularán con base en:",
  o: ["Resolución administrativa del Instituto","Solicitud directa del militar","Acuerdo presidencial correspondiente","Tabuladores autorizados por la SHCP"],
  a: 3
},
{
  art: "Art. 18",
  q: "Las prestaciones que se otorgarán con arreglo a esta Ley incluyen:",
  o: ["Haber de retiro conforme a disposiciones legales","Contrato especial de servicios militares","Pago extraordinario por comisiones","Bonificación administrativa especial"],
  a: 0
},
{
  art: "Art. 48",
  q: "El derecho para recibir haber de retiro o compensación se origina por:",
  o: ["Solicitud presentada por el militar","Resolución definitiva del Instituto","Orden emitida por el mando","Dictamen médico administrativo"],
  a: 1
},
{
  art: "Art. 40",
  q: "Los familiares del militar muerto en actos del servicio tienen derecho a:",
  o: ["Compensación económica extraordinaria","Pago único por servicios prestados","Pensión equivalente al 100% del haber","Servicio médico institucional"],
  a: 2
},
{
  art: "Art. 57",
  q: "La ayuda para gastos de sepelio se cubrirá por:",
  o: ["La unidad militar correspondiente","Los familiares del militar fallecido","El mando territorial asignado","La Unidad Ejecutora de Pago o el Instituto"],
  a: 3
},
{
  art: "Art. 23",
  q: "Los haberes de retiro, compensaciones y pensiones se cubrirán con cargo al:",
  o: ["Erario federal conforme al presupuesto","Presupuesto estatal correspondiente","Fondo militar administrativo","Instituto de seguridad privada"],
  a: 0
},
{
  art: "Art. 19",
  q: "Es obligación del militar:",
  o: ["Solicitar ascenso por antigüedad","Mantener actualizada la afiliación y designación de beneficiarios","Autorizar pagos administrativos","Asignar beneficiarios institucionales"],
  a: 1
},
{
  art: "Art. 39",
  q: "Los familiares mencionados en cada fracción:",
  o: ["Se suman automáticamente en la pensión","Reciben igual porcentaje en todos los casos","Excluyen a los comprendidos en las siguientes","Determinan el reparto entre ellos"],
  a: 2
},
{
  art: "Art. 52",
  q: "Los derechos a pensión se pierden cuando el cónyuge supérstite:",
  o: ["Cambie de domicilio legal","Modifique su situación administrativa","Solicite revisión del beneficio","Contraiga matrimonio o viva en concubinato"],
  a: 3
},
{
  art: "Art. 45",
  q: "Las pensiones fijadas en esta Ley serán pagadas:",
  o: ["A partir del día siguiente de la muerte del militar","Al mes siguiente de la resolución","Después del trámite administrativo","Cuando lo autorice la autoridad fiscal"],
  a: 0
},
{
  art: "Art. 31",
  q: "Para integrar el haber de retiro se tomará como base:",
  o: ["El sueldo mínimo vigente","El haber del grado con que vayan a ser retirados","El promedio de percepciones","La antigüedad acumulada"],
  a: 1
},
{
  art: "Art. 38",
  q: "Se consideran familiares del militar:",
  o: ["Únicamente los hijos menores","Solo el cónyuge legal","La viuda o viudo solos o con los hijos","Los ascendientes directos"],
  a: 2
},
{
  art: "Art. 49",
  q: "El derecho para percibir pensión de familiares se origina por:",
  o: ["Solicitud presentada por familiares","Orden emitida por autoridad militar","Dictamen médico correspondiente","Resolución definitiva del Instituto sancionada por la SHCP"],
  a: 3
},
{
  art: "Art. 33",
  q: "Tienen derecho al 100% del haber para efectos de retiro:",
  o: ["Los militares incapacitados en acción de armas","Todo el personal retirado","Solo personal de mando","Personal con antigüedad mayor"],
  a: 0
},
{
  art: "Art. 50",
  q: "La baja en las Fuerzas Armadas, salvo excepciones:",
  o: ["Suspende temporalmente derechos","Extingue todo derecho a reclamar haber de retiro, compensación o pensión","Mantiene beneficios adquiridos","Solo afecta prestaciones médicas"],
  a: 1
},
{
  art: "Art. 36",
  q: "La compensación se cubrirá:",
  o: ["En pagos mensuales sucesivos","En forma anual acumulada","En una sola exhibición","En parcialidades autorizadas"],
  a: 2
},
{
  art: "Art. 31",
  q: "Los haberes de retiro solo podrán reducirse por:",
  o: ["Multas administrativas impuestas","Decisión del mando correspondiente","Solicitudes personales del militar","Adeudos contraídos con el Instituto o resolución judicial"],
  a: 3
},
{
  art: "Art. 55",
  q: "Quien acredite haber realizado los gastos de sepelio tendrá derecho a:",
  o: ["El equivalente a cuatro meses del haber","Un pago simbólico administrativo","Apoyo funerario institucional","Pago equivalente a un mes"],
  a: 0
},
{
  art: "Art. 23",
  q: "La cuantía del haber de retiro y pensión aumentará:",
  o: ["Cada ejercicio fiscal","En igual proporción que aumenten los haberes del activo","Mediante decreto presidencial","Por solicitud del beneficiario"],
  a: 1
},
{
  art: "Art. 22",
  q: "Tienen derecho a las prestaciones del capítulo de retiro:",
  o: ["Solo militares en activo","Solo personal retirado","Militares y familiares en los casos especificados","Únicamente oficiales superiores"],
  a: 2
},
{
  art: "Art. 31",
  q: "La pensión por fallecimiento fuera de actos del servicio se integrará conforme a:",
  o: ["Artículo 18 de la Ley","Artículo 22 correspondiente","Artículo 25 aplicable","Artículo 31 de la Ley"],
  a: 3
}
];
