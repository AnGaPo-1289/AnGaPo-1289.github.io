/*
The original version of this file was taken from the MMPI-2 implementation
released by Kevin Timmerman under the GNU General Public License v3.0 in 2008.

Its contents are presumably copyrighted by the University of Minnesota and their
distribution rights owned by Pearson's Clinical Assessment Group.

It is herein used to the best of my conscience for a nonprofit, educational
purpose in the interest of the public.

As such, while the legal specifics of it may be questionable, it is incorporated
into this public domain work in good faith.
*/

questions=[
"Me gustan las revistas de mecánica.",
"Tengo buen apetito.",
"Me despierto descansado y renovado la mayoría de las mañanas.",
"Creo que disfrutaría el trabajo de bibliotecario.",
"Me despierto fácilmente con el ruido.",
"Mi padre es un buen hombre (o si su padre ha muerto) mi padre fue un buen hombre.",
"Me gusta leer artículos del periódico sobre crímenes.",
"Mis manos y pies suelen estar lo suficientemente calientes.",
"Mi vida diaria está llena de cosas que me mantienen interesado.",
"Soy tan capaz de trabajar como siempre lo he sido.",
"Parece que tengo un nudo en la garganta gran parte del tiempo.",
"Mi vida sexual es satisfactoria.",
"La gente debería tratar de entender sus sueños y guiarse o tomar advertencias de ellos.",
"Disfruto las historias de detectives o misterio.",
"Trabajo bajo mucha tensión.",
"De vez en cuando pienso en cosas demasiado malas para hablar de ellas.",
"Estoy seguro de que la vida me ha tratado injustamente.",
"Me molestan ataques de náuseas y vómitos.",
"Cuando empiezo un trabajo nuevo, me gusta saber con quién es importante llevarse bien.",
"Muy rara vez me molesta el estreñimiento.",
"A veces he querido mucho irme de casa.",
"Nadie parece entenderme.",
"A veces tengo ataques de risa y llanto que no puedo controlar.",
"A veces espíritus malignos me poseen.",
"Me gustaría ser cantante.",
"Creo que es mejor mantener la boca cerrada cuando estoy en problemas.",
"Cuando alguien me hace daño, siento que debería vengarme por principio.",
"Me molesta el malestar estomacal varias veces a la semana.",
"A veces tengo ganas de decir groserías.",
"Tengo pesadillas cada pocas noches.",
"Me cuesta mantener la mente concentrada en una tarea o trabajo.",
"He tenido experiencias muy extrañas y peculiares.",
"Rara vez me preocupo por mi salud.",
"Nunca he tenido problemas por mi conducta sexual.",
"A veces cuando era joven robé cosas.",
"Tengo tos la mayor parte del tiempo.",
"A veces siento ganas de romper cosas.",
"He tenido periodos de días, semanas o meses en los que no podía hacer nada porque no podía empezar.",
"Mi sueño es inquieto y perturbado.",
"Gran parte del tiempo me duele toda la cabeza.",
"No siempre digo la verdad.",
"Si la gente no me hubiera tenido en contra, habría tenido mucho más éxito.",
"Mi juicio es mejor que nunca.",
"Una vez a la semana (o más) siento de repente calor por todo el cuerpo sin razón.",
"Estoy en tan buena salud física como la mayoría de mis amigos.",
"Prefiero no saludar a antiguos compañeros de escuela o conocidos si ellos no me hablan primero.",
"Casi nunca me molestan dolores en el corazón o el pecho.",
"Muchas veces prefiero sentarme a soñar despierto que hacer cualquier otra cosa.",
"Soy una persona muy sociable.",
"A menudo he tenido que obedecer órdenes de alguien que sabía menos que yo.",
"No leo todos los editoriales del periódico todos los días.",
"No he llevado el tipo de vida correcto.",
"Partes de mi cuerpo a menudo sienten ardor, hormigueo o como si se durmieran.",
"A mi familia no le gusta el trabajo que he elegido (o pienso elegir).",
"A veces sigo insistiendo en algo hasta que los demás pierden la paciencia conmigo.",
"Ojalá pudiera ser tan feliz como parecen ser otras personas.",
"Casi nunca siento dolor en la parte posterior del cuello.",
"Creo que muchas personas exageran sus desgracias para obtener simpatía y ayuda.",
"Me molesta una sensación incómoda en el estómago cada pocos días.",
"Cuando estoy con gente, me molestan ruidos o cosas extrañas que escucho.",
"Cuando estoy con gente, a veces escucho cosas muy extrañas.",
"Soy una persona importante.",
"A menudo he deseado ser mujer. (o si eres mujer) Nunca he lamentado ser mujer.",
"Mis sentimientos no se lastiman fácilmente.",
"Disfruto leer historias de amor.",
"La mayor parte del tiempo me siento triste.",
"Sería mejor si casi todas las leyes fueran eliminadas.",
"Me gusta la poesía.",
"A veces molesto a los animales.",
"Creo que me gustaría el trabajo de guardabosques.",
"Me dejo vencer fácilmente en una discusión.",
"En estos días me resulta difícil no perder la esperanza de llegar a ser alguien importante.",
"A veces siento que mi alma abandona mi cuerpo.",
"Sin duda me falta confianza en mí mismo.",
"Me gustaría ser florista.",
"Generalmente siento que la vida vale la pena.",
"Se necesita mucha discusión para convencer a la mayoría de la gente de la verdad.",
"De vez en cuando dejo para mañana lo que debería hacer hoy.",
"A la mayoría de las personas que me conocen les caigo bien.",
"No me molesta que se burlen de mí.",
"Me gustaría ser enfermero(a).",
"Creo que la mayoría de las personas mentirían para salir adelante.",
"Hago muchas cosas de las que luego me arrepiento.",
"Tengo muy pocas discusiones con los miembros de mi familia.",
"Fui suspendido de la escuela una o más veces por mala conducta.",
"A veces tengo un fuerte impulso de hacer algo dañino o impactante.",
"Me gusta ir a fiestas y reuniones donde hay mucha diversión ruidosa.",
"He tenido problemas tan llenos de posibilidades que no he podido decidirme.",
"Creo que las mujeres deberían tener tanta libertad sexual como los hombres.",
"Mis batallas más difíciles son conmigo mismo.",
"Amo a mi padre, o (si ha muerto) amé a mi padre.",
"Casi no tengo problemas con espasmos o movimientos involuntarios de mis músculos.",
"No parece importarme lo que me suceda.",
"A veces, cuando no me siento bien, me pongo irritable.",
"Gran parte del tiempo siento como si hubiera hecho algo malo o perverso.",
"Soy feliz la mayor parte del tiempo.",
"Veo cosas, animales o personas que otros no ven.",
"Parece que tengo la cabeza o la nariz congestionadas la mayor parte del tiempo.",
"Algunas personas son tan mandonas que me dan ganas de hacer lo contrario de lo que piden, aunque tengan razón.",
"Alguien me tiene mala voluntad.",
"Nunca he hecho algo peligroso solo por emoción.",
"A menudo siento como si tuviera una banda apretada alrededor de la cabeza.",
"A veces me enojo.",
"Disfruto más una carrera o un juego cuando apuesto en él.",
"La mayoría de las personas son honestas principalmente porque temen ser atrapadas.",
"En la escuela a veces me enviaban con el director por mala conducta.",
"Mi manera de hablar es la misma de siempre (ni más rápida ni más lenta, sin arrastrar palabras ni ronquera).",
"Mis modales en la mesa no son tan buenos en casa como cuando estoy en compañía.",
"Cualquiera que esté dispuesto a trabajar duro tiene buenas posibilidades de triunfar.",
"Me considero tan capaz e inteligente como la mayoría de las personas que me rodean.",
"La mayoría de las personas usarían medios algo injustos para obtener ventaja o ganancias.",
"Tengo muchos problemas de estómago.",
"Me gusta el teatro o la actuación.",
"Sé quién es responsable de la mayoría de mis problemas.",
"A veces me siento fuertemente atraído por los objetos personales de otros (como zapatos o guantes) y quiero tocarlos o robarlos aunque no los necesite.",
"Ver sangre no me asusta ni me enferma.",
"A menudo no entiendo por qué he estado tan irritable o de mal humor.",
"Nunca he vomitado sangre ni he tosido sangre.",
"No me preocupa contraer enfermedades.",
"Me gusta coleccionar flores o cultivar plantas en casa.",
"Con frecuencia considero necesario defender lo que creo que es correcto.",
"Nunca he practicado conductas sexuales inusuales.",
"A veces mis pensamientos han ido tan rápido que no podía expresarlos con palabras.",
"Si pudiera entrar al cine sin pagar y estar seguro de que no me verían, probablemente lo haría.",
"A menudo me pregunto qué motivo oculto puede tener alguien para hacer algo amable por mí.",
"Creo que mi vida familiar es tan agradable como la de la mayoría de las personas que conozco.",
"Creo en el cumplimiento de la ley.",
"Las críticas o los regaños me lastiman mucho.",
"Me gusta cocinar.",
"Mi conducta está en gran parte influenciada por el comportamiento de quienes me rodean.",
"A veces ciertamente me siento inútil.",
"Cuando era niño pertenecí a un grupo de amigos que trataba de mantenerse unido en todo tipo de problemas.",
"Creo en la vida después de la muerte.",
"Me gustaría ser soldado.",
"A veces siento ganas de iniciar una pelea con alguien.",
"A menudo he perdido oportunidades porque no pude decidirme lo suficientemente rápido.",
"Me impacienta que la gente me pida consejo o me interrumpa cuando estoy trabajando en algo importante.",
"Solía llevar un diario.",
"Creo que alguien está conspirando contra mí.",
"Preferiría ganar que perder en un juego.",
"La mayoría de las noches me duermo sin pensamientos que me molesten.",
"Durante los últimos años he estado sano la mayor parte del tiempo.",
"Nunca he tenido convulsiones.",
"No estoy aumentando ni perdiendo peso.",
"Creo que me están siguiendo.",
"Siento que muchas veces he sido castigado sin motivo.",
"Lloro con facilidad.",
"No puedo entender lo que leo tan bien como antes.",
"Nunca me he sentido mejor en mi vida que ahora.",
"A veces siento sensible la parte superior de mi cabeza.",
"A veces siento que debo lastimarme a mí mismo o a alguien más.",
"Me molesta mucho que alguien me engañe de manera tan inteligente que tenga que admitir que fui engañado.",
"No me canso rápidamente.",
"Me gusta conocer personas importantes porque me hace sentir importante.",
"Tengo miedo cuando miro hacia abajo desde un lugar alto.",
"No me pondría nervioso si algún miembro de mi familia tuviera problemas con la ley.",
"Nunca soy feliz a menos que esté viajando o moviéndome de un lugar a otro.",
"Lo que otros piensen de mí no me molesta.",
"Me incomoda hacer algo llamativo en una fiesta aunque otros lo hagan.",
"Nunca me he desmayado.",
"Me gustaba la escuela.",
"Frecuentemente tengo que luchar contra mostrar que soy tímido.",
"Alguien ha estado tratando de envenenarme.",
"No tengo mucho miedo a las serpientes.",
"Rara vez o nunca tengo mareos.",
"Mi memoria parece estar bien.",
"Me preocupa el sexo.",
"Me resulta difícil conversar cuando conozco gente nueva.",
"He tenido periodos en los que hacía cosas sin recordar después lo que había hecho.",
"Cuando me aburro me gusta provocar algo de emoción.",
"Tengo miedo de perder la razón.",
"Estoy en contra de dar dinero a los mendigos.",
"A menudo noto que mi mano tiembla cuando intento hacer algo.",
"Puedo leer durante mucho tiempo sin cansar mis ojos.",
"Me gusta estudiar y leer sobre cosas relacionadas con mi trabajo.",
"Gran parte del tiempo me siento débil en todo el cuerpo.",
"Tengo muy pocos dolores de cabeza.",
"Mis manos no se han vuelto torpes.",
"A veces cuando me avergüenzo sudo mucho, lo cual me molesta bastante.",
"No he tenido dificultad para mantener el equilibrio al caminar.",
"Hay algo que anda mal con mi mente.",
"No tengo ataques de fiebre del heno ni de asma.",
"He tenido ataques en los que no podía controlar mis movimientos o mi habla, aunque sabía lo que ocurría a mi alrededor.",
"No me cae bien todo el mundo que conozco.",
"Rara vez sueño despierto.",
"Ojalá no fuera tan tímido.",
"No me da miedo manejar dinero.",
"Si fuera reportero, me gustaría informar sobre noticias del teatro.",
"Disfruto muchos tipos diferentes de juegos y recreación.",
"Me gusta coquetear.",
"Muchas personas me tratan más como a un niño que como a un adulto.",
"Me gustaría ser periodista.",
"Mi madre es una buena mujer (o si ha muerto) mi madre fue una buena mujer.",
"Cuando camino, tengo cuidado de no pisar las grietas de la banqueta.",
"Nunca he tenido erupciones en la piel que me hayan preocupado.",
"En mi familia hay muy poco amor y compañerismo comparado con otros hogares.",
"Con frecuencia me encuentro preocupado por algo.",
"Creo que me gustaría el trabajo de contratista de construcción.",
"A menudo escucho voces sin saber de dónde vienen.",
"Me gusta la ciencia.",
"No me resulta difícil pedir ayuda a mis amigos aunque no pueda devolver el favor.",
"Me gusta mucho cazar.",
"Mis padres solían oponerse al tipo de personas con las que me juntaba.",
"A veces chismeo un poco.",
"Mi audición parece tan buena como la de la mayoría de las personas.",
"Algunos miembros de mi familia tienen hábitos que me molestan mucho.",
"A veces siento que puedo tomar decisiones con una facilidad inusual.",
"Me gustaría pertenecer a varios clubes.",
"Casi nunca noto que mi corazón late fuerte ni me falta el aire.",
"Me gusta hablar sobre sexo.",
"Me gusta visitar lugares donde nunca he estado antes.",
"He sido inspirado por un programa de vida basado en el deber que desde entonces he seguido cuidadosamente.",
"A veces me he interpuesto en el camino de otras personas solo por cuestión de principio.",
"Me enojo fácilmente pero se me pasa pronto.",
"He sido bastante independiente y libre del control familiar.",
"Pienso demasiado en las cosas.",
"Alguien ha estado tratando de robarme.",
"Casi todos mis familiares están de acuerdo conmigo.",
"A veces tengo tanta inquietud que no puedo permanecer sentado mucho tiempo.",
"He tenido decepciones amorosas.",
"Nunca me preocupo por mi apariencia.",
"A menudo sueño con cosas que es mejor no contar.",
"A los niños se les deberían enseñar todos los hechos principales sobre el sexo.",
"Creo que no soy más nervioso que la mayoría de las personas.",
"Tengo pocos o ningún dolor.",
"Mi forma de hacer las cosas suele ser malinterpretada por los demás.",
"A veces, incluso cuando todo va bien, me siento extremadamente feliz o eufórico.",
"No culpo a las personas por intentar obtener todo lo que puedan en este mundo.",
"Hay personas que intentan robar mis pensamientos e ideas.",
"He tenido momentos en los que mi actividad se interrumpía y no sabía qué estaba pasando a mi alrededor.",
"Puedo ser amigable con personas que hacen cosas que considero incorrectas.",
"Me gusta estar con gente que se hace bromas entre sí.",
"A veces en las elecciones voto por personas sobre las que sé muy poco.",
"Tengo dificultad para empezar a hacer cosas.",
"Creo que soy una persona condenada.",
"Fui un estudiante lento en la escuela.",
"Si fuera artista, me gustaría dibujar flores.",
"No me molesta no ser más atractivo físicamente.",
"Sudo muy fácilmente, incluso en días frescos.",
"Tengo plena confianza en mí mismo.",
"A veces me ha sido imposible dejar de robar o tomar algo en una tienda.",
"Es más seguro no confiar en nadie.",
"Una vez a la semana o más me pongo muy excitado.",
"Cuando estoy en un grupo de personas me cuesta pensar qué decir.",
"Algo emocionante casi siempre logra sacarme de un estado de tristeza.",
"Cuando salgo de casa no me preocupa si la puerta está cerrada o las ventanas aseguradas.",
"Creo que mis pecados son imperdonables.",
"Tengo adormecimiento en una o más partes de mi piel.",
"No culpo a una persona por aprovecharse de alguien que deja la oportunidad abierta.",
"Mi vista es tan buena como lo ha sido durante años.",
"A veces me divierte tanto la astucia de algunos criminales que espero que logren escapar.",
"A menudo he sentido que los extraños me miran de forma crítica.",
"Todo me sabe igual.",
"Bebo una cantidad inusualmente grande de agua cada día.",
"La mayoría de las personas hacen amigos porque les pueden ser útiles.",
"No suelo notar zumbidos en mis oídos.",
"De vez en cuando siento odio hacia miembros de mi familia a quienes normalmente amo.",
"Si fuera reportero me gustaría informar sobre deportes.",
"Puedo dormir durante el día, pero no por la noche.",
"Estoy seguro de que hablan de mí.",
"A veces me río de chistes obscenos.",
"Tengo muy pocos miedos en comparación con mis amigos.",
"En un grupo de personas no me sentiría avergonzado de iniciar una discusión sobre algo que conozco bien.",
"Me disgusta cuando un criminal queda libre por los argumentos de un abogado astuto.",
"He consumido alcohol en exceso.",
"Suelo no hablar con las personas hasta que ellas me hablan primero.",
"Nunca he tenido problemas con la ley.",
"He tenido periodos en los que me siento extraordinariamente alegre sin razón especial.",
"Desearía no estar tan preocupado por pensamientos sobre el sexo.",
"Si varias personas se meten en problemas, lo mejor es ponerse de acuerdo en una historia y mantenerla.",
"No me molesta ver sufrir a los animales.",
"Creo que siento las cosas más intensamente que la mayoría de las personas.",
"Nunca hubo un momento en mi vida en que me gustara jugar con muñecas.",
"La vida es una carga para mí gran parte del tiempo.",
"Hay temas tan delicados para mí que no puedo hablar de ellos.",
"En la escuela me resultaba muy difícil hablar frente a la clase.",
"Amo a mi madre, o (si ha muerto) amé a mi madre.",
"Incluso cuando estoy con gente me siento solo gran parte del tiempo.",
"Recibo toda la simpatía que debería recibir.",
"Me niego a jugar algunos juegos porque no soy bueno en ellos.",
"Parece que hago amigos tan fácilmente como los demás.",
"No me gusta tener gente a mi alrededor.",
"Me han dicho que camino dormido.",
"La persona que deja objetos valiosos sin protección es tan culpable de su robo como quien los roba.",
"Creo que casi cualquiera mentiría para evitar problemas.",
"Soy más sensible que la mayoría de las personas.",
"La mayoría de las personas no quiere molestarse en ayudar a otros.",
"Muchos de mis sueños son sobre sexo.",
"Mis padres y mi familia me critican más de lo que deberían.",
"Me avergüenzo con facilidad.",
"Me preocupo por el dinero y los negocios.",
"Nunca he estado enamorado de nadie.",
"Algunas cosas que han hecho miembros de mi familia me han asustado.",
"Casi nunca sueño.",
"A menudo me salen manchas rojas en el cuello.",
"Nunca he estado paralizado ni he tenido debilidad inusual en mis músculos.",
"A veces mi voz desaparece o cambia aunque no tenga resfriado.",
"Mi madre o mi padre a menudo me obligaban a obedecer incluso cuando yo pensaba que no era razonable.",
"A veces percibo olores extraños.",
"No puedo concentrarme en una sola cosa.",
"Tengo razones para sentir celos de uno o más miembros de mi familia.",
"Siento ansiedad por algo o por alguien casi todo el tiempo.",
"Me impaciento fácilmente con las personas.",
"Gran parte del tiempo desearía estar muerto.",
"A veces me emociono tanto que me cuesta conciliar el sueño.",
"Sin duda he tenido más preocupaciones de las que me corresponden.",
"A nadie parece importarle mucho lo que me pase.",
"A veces oigo tan bien que me molesta.",
"Olvido rápidamente lo que la gente me dice.",
"Por lo general tengo que detenerme y pensar antes de actuar, incluso en cosas pequeñas.",
"A menudo cruzo la calle para evitar encontrarme con alguien.",
"A menudo siento como si las cosas no fueran reales.",
"La única parte interesante de los periódicos son las tiras cómicas.",
"Tengo el hábito de contar cosas sin importancia, como focos en letreros eléctricos y cosas por el estilo.",
"No tengo enemigos que realmente deseen hacerme daño.",
"Tiendo a estar alerta con personas que son más amistosas de lo que esperaba.",
"Tengo pensamientos extraños y peculiares.",
"Me pongo ansioso cuando tengo que hacer un viaje corto lejos de casa.",
"Generalmente espero tener éxito en lo que hago.",
"Escucho cosas extrañas cuando estoy solo.",
"He tenido miedo de cosas o personas que sabía que no podían hacerme daño.",
"No temo entrar solo a una habitación donde otras personas ya están reunidas y conversando.",
"Tengo miedo de los cuchillos o de cualquier cosa muy puntiaguda.",
"A veces disfruto lastimando a las personas que amo.",
"Puedo hacer que otras personas me tengan miedo fácilmente y a veces lo hago por diversión.",
"Tengo más dificultad para concentrarme que la mayoría de las personas.",
"Varias veces he dejado de hacer algo porque dudaba de mi capacidad.",
"Palabras malas, incluso terribles, vienen a mi mente y no puedo quitarlas.",
"A veces un pensamiento sin importancia se queda en mi mente durante días.",
"Casi todos los días sucede algo que me asusta.",
"A veces estoy lleno de energía.",
"Tiendo a tomarme las cosas muy a pecho.",
"A veces he disfrutado que alguien a quien amo me lastime.",
"La gente dice cosas insultantes y vulgares sobre mí.",
"Me siento incómodo cuando estoy dentro de edificios.",
"Por lo general no soy tímido ni consciente de mí mismo.",
"Alguien tiene control sobre mi mente.",
"En las fiestas es más probable que me quede sentado con una persona o solo que unirme al grupo.",
"La gente a menudo me decepciona.",
"A veces he sentido que los problemas se acumulaban tanto que no podía superarlos.",
"Me encanta ir a bailar.",
"En ocasiones mi mente parece funcionar más lentamente de lo normal.",
"Cuando viajo en trenes o autobuses a menudo hablo con desconocidos.",
"Me gustan los niños.",
"Me gusta apostar pequeñas cantidades de dinero.",
"Si tuviera la oportunidad podría hacer cosas que beneficiarían mucho al mundo.",
"He conocido muchas personas consideradas expertas que no eran mejores que yo.",
"Me siento como un fracasado cuando escucho del éxito de alguien que conozco.",
"A menudo pienso: “Ojalá pudiera volver a ser niño”.",
"Nunca soy más feliz que cuando estoy solo.",
"Si tuviera la oportunidad sería un buen líder de personas.",
"Me siento avergonzado con historias obscenas.",
"Las personas suelen exigir más respeto por sus propios derechos que el que dan a los demás.",
"Disfruto las reuniones sociales simplemente por estar con gente.",
"Me gusta recordar historias interesantes para contarlas a otros.",
"En algún momento de mi vida sentí que alguien me obligaba a hacer cosas mediante hipnosis.",
"Me resulta difícil dejar de hacer algo que he empezado, incluso por poco tiempo.",
"A menudo no participo en los chismes o conversaciones del grupo al que pertenezco.",
"Muchas veces he encontrado personas celosas de mis ideas porque no se les ocurrieron a ellas primero.",
"Disfruto la emoción de una multitud.",
"No me molesta conocer a extraños.",
"Alguien ha estado tratando de influir en mi mente.",
"Puedo recordar haber fingido estar enfermo para evitar hacer algo.",
"Mis preocupaciones parecen desaparecer cuando estoy con amigos animados.",
"Siento ganas de rendirme rápidamente cuando las cosas salen mal.",
"Me gusta que la gente sepa claramente cuál es mi posición sobre las cosas.",
"He tenido periodos en los que me sentía tan lleno de energía que no parecía necesitar dormir durante días.",
"Siempre que puedo evito estar entre multitudes.",
"Me cuesta enfrentar una crisis o dificultad.",
"A veces dejo de hacer algo que quiero porque los demás creen que no vale la pena.",
"Me gustan las fiestas y reuniones sociales.",
"A menudo he deseado ser del sexo opuesto.",
"No me enojo fácilmente.",
"He hecho cosas malas en el pasado que nunca le he contado a nadie.",
"La mayoría de las personas usarían medios algo injustos para salir adelante.",
"Me pone nervioso que la gente me haga preguntas personales.",
"No siento que pueda planear mi propio futuro.",
"No estoy satisfecho conmigo mismo tal como soy.",
"Me enojo cuando mis amigos o familiares me dicen cómo debería vivir mi vida.",
"Recibí muchas golpizas cuando era niño.",
"Me incomoda cuando la gente dice cosas buenas de mí.",
"No me gusta escuchar a otras personas dar sus opiniones sobre la vida.",
"A menudo tengo desacuerdos serios con personas cercanas a mí.",
"Cuando las cosas se ponen realmente mal, sé que puedo contar con mi familia.",
"Cuando era niño me gustaba jugar a la “casita”.",
"No tengo miedo al fuego.",
"A veces me he mantenido alejado de alguien por miedo a decir o hacer algo de lo que luego me arrepienta.",
"Solo puedo expresar mis verdaderos sentimientos cuando bebo alcohol.",
"Muy rara vez me siento triste.",
"A menudo dicen que tengo mal carácter.",
"Desearía poder dejar de preocuparme por cosas que dije y que pudieron haber herido a otros.",
"Siento que no puedo contarle a nadie todo sobre mí mismo.",
"Los relámpagos me dan miedo.",
"Me gusta mantener a la gente intrigada sobre lo que haré después.",
"Mis planes a menudo parecen tan difíciles que termino abandonándolos.",
"Tengo miedo de estar solo en la oscuridad.",
"A menudo me he sentido mal por ser malinterpretado cuando intentaba ayudar a alguien.",
"Las tormentas fuertes me asustan.",
"Con frecuencia pido consejo a otras personas.",
"El futuro es demasiado incierto para hacer planes serios.",
"A veces, aunque todo vaya bien, siento que nada me importa.",
"No tengo miedo al agua.",
"A menudo necesito dormir antes de decidir algo importante.",
"Muchas veces la gente ha malinterpretado mis intenciones cuando intentaba ayudar.",
"No tengo dificultad para tragar.",
"Generalmente soy tranquilo y no me altero fácilmente.",
"Me gustaría engañar a los criminales usando sus propios métodos.",
"Creo que merezco un castigo severo por mis pecados.",
"Tiendo a tomar las decepciones tan en serio que no puedo olvidarlas.",
"Me incomoda que alguien me observe mientras trabajo, aunque sé que lo hago bien.",
"A veces me enojo cuando alguien intenta colarse delante de mí en una fila.",
"A veces pienso que no valgo nada.",
"Cuando era joven a menudo faltaba a la escuela sin motivo.",
"Uno o más miembros de mi familia son muy nerviosos.",
"A veces he tenido que ser brusco con personas groseras o molestas.",
"Me preocupo mucho por posibles desgracias.",
"Tengo opiniones políticas fuertes.",
"Me gustaría ser piloto de carreras.",
"Está bien aprovechar vacíos de la ley si realmente no se rompe la ley.",
"Hay personas que me disgustan tanto que me alegra cuando les ocurre algo malo.",
"Me pone nervioso tener que esperar.",
"A veces dejo de hacer algo que quiero porque otros piensan que no lo estoy haciendo correctamente.",
"Cuando era joven me gustaba la emoción y la aventura.",
"A menudo hago todo lo posible por demostrar que tengo razón cuando alguien me contradice.",
"Me molestan las personas que me observan en la calle, en tiendas u otros lugares.",
"El hombre que más influyó en mi infancia (como mi padre o padrastro) era muy estricto conmigo.",
"Cuando era niño me gustaba jugar a la rayuela y saltar la cuerda.",
"Nunca he visto una visión.",
"Varias veces he cambiado de opinión sobre mi vocación o profesión.",
"A menos que un médico lo indique, nunca tomo medicamentos ni pastillas para dormir.",
"A menudo lamento ser tan irritable o de mal humor.",
"En la escuela mis calificaciones de conducta casi siempre eran malas.",
"Me fascina el fuego.",
"Cuando estoy en problemas digo solo la parte de la verdad que no me perjudica.",
"Si estuviera en problemas con varios amigos que fueran tan culpables como yo, preferiría asumir toda la culpa antes que delatarlos.",
"A menudo tengo miedo de la oscuridad.",
"Cuando un hombre está con una mujer generalmente piensa en cosas relacionadas con el sexo.",
"Suelo ser muy directo con las personas cuando intento corregirlas o mejorarlas.",
"Me da miedo pensar en un terremoto.",
"Me entusiasmo mucho cuando encuentro una buena idea.",
"Prefiero resolver las cosas por mí mismo en lugar de pedir ayuda.",
"Tengo miedo de quedar atrapado en un espacio pequeño o cerrado.",
"A veces me he preocupado excesivamente por cosas que en realidad no tenían importancia.",
"No trato de ocultar mi mala opinión o compasión por alguien para que no se dé cuenta.",
"Soy una persona muy nerviosa o tensa.",
"A menudo he trabajado con personas que se llevan el crédito por el trabajo bien hecho.",
"A veces me cuesta defender mis derechos porque soy reservado.",
"La suciedad me asusta o me repugna.",
"Tengo una vida de fantasía que no cuento a otras personas.",
"Algunos miembros de mi familia tienen mal carácter.",
"Siento que no puedo hacer nada bien.",
"A menudo me siento culpable porque aparento sentir más tristeza de la que realmente siento.",
"Normalmente defiendo firmemente mis propias opiniones.",
"No tengo miedo a las arañas.",
"El futuro me parece sin esperanza.",
"Los miembros de mi familia y parientes cercanos se llevan bien entre sí.",
"Me gustaría usar ropa cara.",
"Es fácil para otros hacerme cambiar de opinión.",
"Algunos animales me ponen nervioso.",
"Puedo soportar tanto dolor como la mayoría de las personas.",
"Varias veces he sido el último en rendirme al intentar hacer algo.",
"Me molesta que la gente me apresure.",
"No tengo miedo a los ratones.",
"Varias veces a la semana siento que algo terrible está por suceder.",
"Me siento cansado gran parte del tiempo.",
"Me gusta reparar cosas mecánicas, como un pestillo de puerta.",
"A veces estoy seguro de que otras personas pueden saber lo que estoy pensando.",
"Me gusta leer sobre ciencia.",
"Tengo miedo de estar solo en un lugar abierto y amplio.",
"A veces siento que estoy a punto de perder el control.",
"Muchas personas son culpables de mala conducta sexual.",
"A menudo me he despertado asustado en medio de la noche.",
"Me molesta mucho olvidar dónde pongo las cosas.",
"La persona a la que más admiraba cuando era niño era una mujer (madre, hermana, tía u otra mujer).",
"Prefiero las historias de aventuras a las románticas.",
"A menudo me confundo y olvido lo que iba a decir.",
"Soy muy torpe o descoordinado.",
"Me gusta practicar deportes como fútbol o soccer.",
"Odio a toda mi familia.",
"Algunas personas piensan que es difícil conocerme bien.",
"Paso la mayor parte de mi tiempo libre solo.",
"Cuando alguien hace algo que me enoja, le digo cómo me siento.",
"Generalmente me cuesta decidir qué hacer.",
"La gente no me considera atractivo.",
"La gente no es muy amable conmigo.",
"A menudo siento que no soy tan bueno como otras personas.",
"Soy muy terco.",
"He disfrutado consumir marihuana.",
"La enfermedad mental es un signo de debilidad.",
"Tengo problemas con las drogas o el alcohol.",
"Los fantasmas o espíritus pueden influir en las personas para bien o para mal.",
"Me siento indefenso cuando tengo que tomar decisiones importantes.",
"Siempre trato de ser agradable incluso cuando otros están molestos o me critican.",
"Cuando tengo un problema me ayuda hablarlo con alguien.",
"Mis metas principales en la vida están a mi alcance.",
"Creo que las personas deberían guardar sus problemas personales para sí mismas.",
"No siento mucha presión o estrés en estos días.",
"Me preocupa mucho tener que hacer cambios en mi vida.",
"Mis mayores problemas son causados por el comportamiento de alguien cercano a mí.",
"Odio ir al médico, incluso cuando estoy enfermo.",
"Aunque no estoy satisfecho con mi vida, no hay nada que pueda hacer al respecto.",
"Hablar de los problemas con alguien suele ayudar más que tomar medicamentos.",
"Tengo hábitos que realmente son perjudiciales.",
"Cuando hay que resolver problemas, normalmente dejo que otros tomen el control.",
"Reconozco varios defectos en mí mismo que probablemente nunca cambiarán.",
"Estoy tan cansado de lo que tengo que hacer cada día que quisiera escaparme de todo.",
"Recientemente he pensado en suicidarme.",
"A menudo me irrito mucho cuando interrumpen mi trabajo.",
"A veces siento que puedo leer la mente de otras personas.",
"Tener que tomar decisiones importantes me pone nervioso.",
"Otros dicen que como demasiado rápido.",
"Una vez a la semana o más me emborracho o me drogo.",
"He sufrido una pérdida trágica que nunca podré superar.",
"A veces me enojo tanto que no sé qué me pasa.",
"Cuando alguien me pide algo me cuesta decir que no.",
"Nunca soy más feliz que cuando estoy solo.",
"Mi vida es vacía y sin sentido.",
"Me resulta difícil mantener un trabajo.",
"He cometido muchos errores graves en mi vida.",
"Me enojo conmigo mismo por ceder demasiado ante los demás.",
"Últimamente he pensado mucho en quitarme la vida.",
"Me gusta tomar decisiones y asignar tareas a otros.",
"Incluso sin mi familia sé que siempre habrá alguien que cuide de mí.",
"En lugares públicos odio tener que hacer fila.",
"Nadie lo sabe, pero he intentado suicidarme.",
"Todo parece ir demasiado rápido a mi alrededor.",
"Sé que soy una carga para los demás.",
"Después de un mal día necesito beber algo para relajarme.",
"Gran parte de mis problemas se deben a la mala suerte.",
"A veces no puedo dejar de hablar.",
"A veces me lastimo a mí mismo sin saber por qué.",
"Trabajo muchas horas incluso cuando mi trabajo no lo requiere.",
"Normalmente me siento mejor después de llorar.",
"A menudo olvido dónde dejo las cosas.",
"Si pudiera vivir mi vida otra vez no cambiaría mucho.",
"Me irrito cuando las personas de las que dependo no cumplen con su trabajo.",
"Si me altero, casi siempre me duele la cabeza.",
"Me gusta negociar con firmeza.",
"La mayoría de los hombres son infieles a sus esposas alguna vez.",
"Últimamente he perdido el deseo de resolver mis problemas.",
"Me he enojado tanto que he roto cosas cuando estaba bebiendo.",
"Trabajo mejor cuando tengo una fecha límite.",
"A veces me enojo tanto con alguien que siento que voy a explotar.",
"A veces tengo pensamientos terribles sobre mi familia.",
"Algunas personas dicen que tengo problemas con el alcohol, pero no estoy de acuerdo.",
"Siempre tengo muy poco tiempo para hacer todo lo que debo hacer.",
"Últimamente pienso mucho en la muerte y en lo que viene después.",
"A menudo guardo cosas que probablemente nunca usaré.",
"Algunas veces he estado tan enojado que he golpeado a alguien.",
"En todo lo que hago últimamente siento que estoy siendo puesto a prueba.",
"Tengo muy poco contacto con mis familiares ahora.",
"A veces parece que escucho mis pensamientos en voz alta.",
"Cuando estoy triste, hablar con amigos puede animarme.",
"Muchas cosas que me pasan ahora siento que ya me han pasado antes.",
"Cuando la vida se vuelve difícil siento ganas de rendirme.",
"No puedo entrar solo a una habitación oscura.",
"Me preocupo mucho por el dinero.",
"El hombre debería ser el jefe de la familia.",
"El único lugar donde realmente me siento relajado es en mi casa.",
"Las personas con las que trabajo no comprenden mis problemas.",
"Estoy satisfecho con el dinero que gano.",
"Normalmente tengo suficiente energía para hacer mi trabajo.",
"Me cuesta aceptar cumplidos.",
"En la mayoría de los matrimonios uno o ambos miembros son infelices.",
"Casi nunca pierdo el control de mí mismo.",
"Me cuesta mucho recordar lo que la gente me dice últimamente.",
"Cuando me siento triste o deprimido, mi trabajo se ve afectado."	
];

// VRIN and TRIN
rin=[
	[
		// Name, Description, Base score
		["VRIN","Variable Response Inconsistency",0],
		// Question pairs and score
		[
			[3,"T",39,"T",1],
			[6,"T",90,"F",1],
			[6,"F",90,"T",1],
			[9,"F",56,"F",1],
			[28,"T",59,"F",1],
			[31,"T",299,"F",1],
			[32,"F",316,"T",1],
			[40,"T",176,"T",1],
			[46,"T",265,"F",1],
			[48,"T",184,"T",1],
			[49,"T",280,"F",1],
			[73,"T",377,"F",1],
			[81,"T",284,"F",1],
			[81,"F",284,"T",1],
			[83,"T",288,"T",1],
			[84,"T",105,"F",1],
			[86,"T",359,"F",1],
			[95,"F",388,"T",1],
			[99,"F",138,"T",1],
			[103,"T",344,"F",1],
			[110,"T",374,"F",1],
			[125,"F",195,"F",1],
			[135,"F",482,"T",1],
			[136,"T",507,"F",1],
			[136,"F",507,"T",1],
			[152,"F",464,"F",1],
			[161,"T",185,"F",1],
			[161,"F",185,"T",1],
			[165,"F",565,"F",1],
			[166,"T",268,"F",1],
			[166,"F",268,"T",1],
			[167,"T",243,"F",1],
			[167,"F",243,"T",1],
			[196,"F",415,"T",1],
			[199,"T",467,"F",1],
			[199,"F",467,"T",1],
			[226,"T",267,"F",1],
			[259,"F",333,"T",1],
			[262,"F",275,"F",1],
			[290,"T",556,"F",1],
			[290,"F",556,"T",1],
			[339,"F",394,"T",1],
			[349,"T",515,"F",1],
			[349,"F",515,"T",1],
			[350,"F",521,"T",1],
			[353,"T",370,"F",1],
			[353,"F",370,"T",1],
			[364,"F",554,"T",1],
			[369,"F",421,"T",1],
			[372,"T",405,"F",1],
			[372,"F",405,"T",1],
			[380,"T",562,"F",1],
			[395,"T",435,"F",1],
			[395,"F",435,"T",1],
			[396,"T",403,"F",1],
			[396,"F",403,"T",1],
			[411,"T",485,"F",1],
			[414,"F",485,"T",1],
			[472,"T",533,"F",1],
			[472,"F",533,"T",1],
			[491,"T",509,"F",1],
			[506,"T",520,"F",1],
			[506,"F",520,"T",1],
			[513,"T",542,"F",1]
		],
		// Male T scale
		[31,34,38,42,46,50,54,57,61,65,69,73,76,80,84,88,92,96,99,103,107,111,115,118,120],
		// Female T scale
		[30,34,38,42,46,50,54,58,62,66,70,74,78,82,86,90,94,98,102,106,110,114,118,120]
	],[
		["TRIN","True Reponse Inconsistency",9],
		[
			[3,"T",39,"T",1],
			[12,"T",166,"T",1],
			[40,"T",176,"T",1],
			[48,"T",184,"T",1],
			[63,"T",27,"T",1],
			[65,"T",95,"T",1],
			[73,"T",239,"T",1],
			[83,"T",288,"T",1],
			[99,"T",314,"T",1],
			[125,"T",195,"T",1],
			[209,"T",351,"T",1],
			[359,"T",367,"T",1],
			[377,"T",534,"T",1],
			[556,"T",560,"T",1],
			[9,"F",56,"F",-1],
			[65,"F",95,"F",-1],
			[125,"F",195,"F",-1],
			[140,"F",196,"F",-1],
			[152,"F",464,"F",-1],
			[265,"F",360,"F",-1],
			[359,"F",367,"F",-1]
		],
		["114F","107F","99F","92F","85F","78F","71F","64F","57F","50","57T","65T","72T","79T","86T","93T","100T","107T","114T","120T"],
		["118F","111F","103F","95F","88F","80F","73F","65F","58F","50","58T","65T","73T","80T","88T","95T","103T","111T","118T","120T"]
	]
];

// Scales and Critical Items
scales=[
	[
		// Welsch Code, Scale Name, Scale Description
		["F","F","Infrequency"],
		// True questions
		[18,24,30,36,42,48,54,60,66,72,84,96,114,138,144,150,156,162,168,180,198,216,228,234,240,246,252,258,264,270,282,288,294,300,306,312,324,336,349,355,361],
		// False questions
		[6,12,78,90,102,108,120,126,132,174,186,192,204,210,222,276,318,330,343],
		// Male T scale
		[,36,39,42,45,48,51,55,58,61,64,67,70,73,76,79,82,85,89,92,95,98,101,104,107,110,113,116,119,120],
		// Female T scale
		[,37,41,44,48,51,55,58,61,65,68,72,75,79,82,85,89,92,96,99,103,106,109,113,116,120]
	],[
		[,"Fb","Backside F"],
		[281,291,303,311,317,319,322,323,329,332,333,334,387,395,407,431,450,454,463,468,476,478,484,489,506,516,517,520,524,525,526,528,530,539,540,544,555],
		[383,404,501],
		[,42,46,51,55,59,63,67,71,75,79,83,87,92,96,100,104,108,112,116,120],
		[,42,46,50,54,58,62,66,70,74,77,81,85,89,93,97,101,105,108,112,116,120]
	],[
		[,"Fp","Infrequency Psychopathology"],
		[66,114,162,193,216,228,252,270,282,291,294,322,323,336,371,387,478,555],
		[51,77,90,93,102,126,192,276,501],
		[,41,48,56,63,70,77,80,94,99,106,113,120],
		[,41,49,57,65,73,81,89,97,105,113,120]
	],[
		["L","L","Lie"],
		[],
		[16,29,41,51,77,93,102,107,123,139,153,183,203,232,260],
		[,35,39,43,48,52,56,61,65,70,74,78,83,87,91,96,100],
		[,33,38,42,47,52,57,62,66,71,76,81,86,90,95,100,105]
	],[
		["K","K","Correction"],
		[83],
		[29,37,58,76,110,116,122,127,130,136,148,157,158,167,171,196,213,243,267,284,290,330,338,339,341,346,348,356,365],
		[,,,,,,,30,33,35,37,39,41,43,45,47,49,51,54,56,58,60,62,64,66,68,70,72,75,77,79,81],
		[,,,,,,,30,32,35,37,39,41,43,46,48,50,52,54,56,59,61,63,65,67,70,72,74,76,78,81,83]
	],[
		[,"S","Superlative Self-Presentation"],
		[121,148,184,194,534,560],
		[15,50,58,76,81,87,89,104,110,120,123,154,196,205,213,225,264,279,284,290,302,337,341,346,352,373,374,403,420,423,428,430,433,442,445,449,461,486,487,523,538,542,545,547],
		[,,,,,,,,,30,32,33,34,35,36,37,38,40,41,42,43,44,45,47,48,49,50,51,52,53,55,56,57,58,59,60,61,63,64,65,66,67,68,70,71,72,73,74,75,76,78,79],
		[,,,,,,,,,,30,31,33,34,35,36,37,39,40,41,42,43,45,46,47,48,49,51,52,53,54,55,57,58,59,60,61,63,64,65,66,68,69,70,71,72,74,75,76,77,78,80]
	],[
		["1","Hs","Hypochondriasis"],
		[18,28,39,53,59,97,101,111,149,175,247],
		[2,3,8,10,20,45,47,57,91,117,141,143,152,164,173,176,179,208,224,249,255],
		[0.5,,,30,31,31,32,33,35,37,39,42,45,48,51,54,57,59,62,64,66,68,70,73,75,77,79,81,84,86,88,90,92,94,97,99,101,103,105,108,110,112,114,116,119,120],
		[0.5,,,,,,,30,33,35,38,40,43,46,49,51,54,56,59,61,63,65,67,69,71,73,76,78,80,82,84,86,88,90,92,94,97,99,101,103,105,107,109,111,113,115,117,120]
	],[
		["2","D","Depression"],
		[5,15,18,31,38,39,46,56,73,92,117,127,130,146,147,170,175,181,215,233],
		[2,9,10,20,29,33,37,43,45,49,55,68,75,76,95,109,118,134,140,141,142,143,148,165,178,188,189,212,221,223,226,238,245,248,260,267,330],
		[,,,,,,,,,,30,32,34,36,38,40,42,45,47,50,52,54,57,59,61,62,64,66,68,70,72,74,76,78,80,81,83,85,87,89,91,93,95,97,98,100,102,104,106,108,110,112,114,115,117,119,120],
		[,,,,,,,,,,,30,32,34,36,38,40,42,44,46,47,49,51,53,55,57,59,62,64,66,68,70,72,75,77,79,81,83,86,88,90,92,94,96,99,101,103,105,107,109,112,114,116,118,120]
	],[
		["3","Hy","Hysteria"],
		[11,18,31,39,40,44,65,101,166,172,175,218,230],
		[2,3,7,8,9,10,14,26,29,45,47,58,76,81,91,95,98,110,115,116,124,125,129,135,141,148,151,152,157,159,161,164,167,173,176,179,185,193,208,213,224,241,243,249,253,263,265],
		[,,,,,,,,,30,31,32,33,34,35,37,39,40,42,43,45,47,50,52,54,57,59,61,64,66,69,71,74,76,79,81,84,86,89,91,94,96,99,101,104,106,109,111,114,116,119,120],
		[,,,,,,,,,,30,31,32,32,34,35,36,38,39,41,43,45,47,49,51,54,56,58,61,63,65,68,70,73,75,77,80,82,84,87,89,90,92,94,96,99,101,104,106,108,111,113,115,118,120]
	],[
		["4","Pd","Psychopathic Deviate"],
		[17,21,22,31,32,35,42,52,54,56,71,82,89,94,99,105,113,195,202,219,225,259,264,288],
		[9,12,34,70,79,83,95,122,125,129,143,157,158,160,167,171,185,209,214,217,226,243,261,263,266,267],
		[0.4,,,,,,,,,,,,30,31,33,34,35,37,39,40,42,44,46,48,50,52,54,57,59,62,64,67,69,72,74,77,79,82,84,87,90,92,95,97,100,102,105,107,110,112,115,117,120],
		[0.4,,,,,,,,,,,,,30,32,34,36,37,39,41,43,45,47,49,51,53,55,58,60,63,66,68,71,73,76,79,81,84,87,89,92,94,97,100,102,105,107,110,113,115,118,120]
	],[
		["5","Mf","Masculinity-Femininity - Male"],
		[4,25,62,64,67,74,80,112,119,122,128,137,166,177,187,191,196,205,209,219,236,251,256,268,271],
		[1,19,26,27,63,68,69,76,86,103,104,107,120,121,132,133,163,184,193,194,197,199,201,207,231,235,237,239,254,257,272],
		[,,,,,,,,,,,,,,,,,30,32,34,36,38,40,42,44,46,48,50,52,54,56,58,60,62,64,666,68,70,72,72,76,78,79,81,83,85,87,89,91,93,95,97,99,101,103,105,107,109],
		[],
	],[
		["5","Mf","Masculinity-Femininity - Female"],
		[4,25,62,64,67,74,80,112,119,121,122,128,137,177,187,191,196,205,219,236,251,256,271],
		[1,19,26,27,63,68,69,76,86,103,104,107,120,132,133,163,166,184,193,194,197,199,201,207,209,231,235,237,239,254,257,268,272],
		[],
		[,,,,,,,,120,118,116,114,111,109,106,104,101,99,96,94,92,89,87,84,82,79,77,74,72,69,67,65,62,60,57,55,52,50,47,45,43,40,38,35,33,30]
	],[
		["6","Pa","Paranoia"],
		[16,17,22,23,24,42,99,113,138,144,145,146,162,234,259,271,277,285,305,307,333,334,336,355,361],
		[81,95,98,100,104,110,244,255,266,283,284,286,297,314,315],
		[,,,30,31,32,34,37,39,42,46,49,53,57,61,64,68,72,75,79,83,86,90,94,97,101,105,108,112,116,119,120],
		[,,,30,31,32,34,37,39,42,45,49,52,56,59,63,67,70,74,78,81,85,89,92,96,100,103,107,111,114,118,120]
	],[
		["7","Pt","Psychathenia"],
		[11,16,23,31,38,56,65,73,82,89,94,130,147,170,175,196,218,242,273,275,277,285,289,301,302,304,308,309,310,313,316,317,320,325,326,327,328,329,331],
		[3,9,33,109,140,165,174,293,321],
		[1.0,,,,,,,,,,,,,,,30,31,32,33,34,36,37,39,41,43,44,47,49,51,53,55,57,59,62,64,66,68,70,72,74,77,79,81,93,85,87,89,91,94,96,98,100,102,104,106,109,111,113,115,117,119,120],
		[1.0,,,,,,,,,,,,,,,,,30,31,32,33,35,37,38,40,42,44,47,49,51,53,55,57,59,61,62,64,66,68,70,72,73,75,77,79,81,83,84,86,88,90,92,94,95,97,99,101,103,105,106,108,110,112,114,116,117,119,120]
	],[
		["8","Sc","Schizophrenia"],
		[16,17,21,22,23,31,32,35,38,42,44,46,48,65,85,92,138,145,147,166,168,170,180,182,190,218,221,229,233,234,242,247,252,256,268,273,274,277,279,281,287,291,292,296,298,299,303,307,311,316,319,320,322,323,325,329,332,333,355],
		[6,9,12,34,90,91,106,165,177,179,192,210,255,276,278,280,290,295,343],
		[1.0,,,,,,,,,,,,,30,31,32,33,34,35,36,37,39,4,42,44,45,47,49,51,53,55,56,58,60,62,63,65,67,69,70,72,74,75,77,79,81,82,84,86,87,89,91,93,94,96,98,99,101,103,105,106,108,110,111,113,115,117,118,120],
		[1.0,,,,,,,,,,,,,,30,31,32,33,34,36,37,39,41,42,44,46,48,50,52,53,55,57,59,60,62,63,65,66,67,69,70,72,73,75,76,78,79,81,82,84,85,87,88,90,91,93,94,96,97,99,100,102,103,105,106,108,109,111,112,114,115,116,118,119,120]
	],[
		["9","Ma","Hypomania"],
		[13,15,21,23,50,55,61,85,87,98,113,122,131,145,155,168,169,182,190,200,205,206,211,212,218,220,227,229,238,242,244,248,250,253,269],
		[88,93,100,106,107,136,154,158,167,243,263],
		[0.2,,,,,,,,,,30,31,33,35,36,38,39,41,43,45,47,49,51,53,56,59,62,65,59,72,75,78,81,82,88,91,94,98,101,104,107,110,114,117,120],
		[0.2,,,,,,,,,,30,31,33,35,37,39,41,43,45,47,49,51,53,56,59,62,65,68,71,74,76,79,82,85,88,91,94,97,100,103,106,109,112,115,118,120]
	],[
		["0","Si","Social Introversion"],
		[31,56,70,100,104,110,127,135,158,161,167,185,215,243,251,265,275,284,289,296,302,308,326,337,338,347,348,351,352,357,364,367,368,369],
		[25,32,49,79,86,106,112,131,181,189,207,209,231,237,255,262,267,280,321,328,335,340,342,344,345,350,353,354,358,359,360,362,363,366,370],
		[,,,,,,,,,,30,31,33,34,35,36,37,38,40,41,42,43,44,45,47,48,49,50,51,52,54,55,56,57,58,59,61,62,63,64,65,66,68,69,70,71,72,73,75,76,77,78,79,80,82,83,84,85,86,87,89,90,91,92,93,94,96,97,98,99,100],
		[,,,,,,,,,30,31,32,33,34,35,36,37,38,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,77,78,79,80,81,82,83,84,85,86,87,88,89,90,91,92,93,95]
	],[
		[,"D1","Subjective Depression"],
		[31,38,39,46,56,73,92,127,130,146,147,170,175,215,223],
		[2,9,43,49,75,95,109,118,140,148,178,188,189,223,260,267,330],
		[,32,35,37,40,42,45,48,50,53,56,58,61,64,66,69,71,74,77,79,82,85,87,90,93,95,98,100,103,106,108,111,114,116],
		[,32,34,37,39,41,44,46,48,51,53,56,58,60,63,65,67,70,72,75,77,79,82,84,86,89,91,94,96,98,101,103,105,108]
	],[
		[,"D2","Psychomotor Retardation"],
		[38,46,170,233],
		[9,29,37,49,55,76,134,188,189,212],
		[,,30,32,37,43,48,54,59,65,70,76,81,87,92,98],
		[,,,30,35,41,46,51,57,62,68,73,79,84,90,95]
	],[
		[,"D3","Physical Malfunctioning"],
		[18,117,175,181],
		[2,20,45,141,142,143,148],
		[,30,35,43,51,59,67,75,83,91,100,108,116],
		[,30,34,41,48,56,63,70,78,85,93,100,107]
	],[
		[,"D4","Mental Dullness"],
		[15,31,38,73,92,147,170,233],
		[9,10,43,75,109,165,188],
		[,38,43,48,53,58,62,67,72,77,82,86,91,96,101,105,110],
		[,38,43,48,52,57,61,66,70,75,79,84,88,93,97,102,106]
	],[
		[,"D5","Brooding"],
		[38,56,92,127,130,146,170,215],
		[75,95],
		[,40,45,51,57,62,68,74,79,85,91,96],
		[,37,42,47,53,58,63,68,73,78,83,89]
	],[
		[,"Hy1","Denial of Social Anxiety"],
		[],
		[129,161,167,185,243,265],
		[,30,34,40,45,51,56,61],
		[,30,35,40,45,51,56,61]
	],[
		[,"Hy2","Need for Affection"],
		[230],
		[26,58,76,81,98,110,124,151,213,241,263],
		[,,30,32,36,40,43,47,51,55,59,63,67,71],
		[,,,30,34,38,42,46,50,55,59,63,67,71]
	],[
		[,"Hy3","Lassitude-malaise"],
		[31,39,65,175,218],
		[2,3,9,10,45,95,125,141,148,152],
		[,38,43,48,52,57,61,66,70,75,79,84,88,93,97,102,106],
		[,39,43,47,51,55,59,63,67,71,75,79,83,87,91,95,99]
	],[
		[,"Hy4","Somatic Complaints"],
		[11,18,40,44,101,172],
		[8,47,91,159,164,173,176,179,208,224,249],
		[,38,43,48,52,57,62,67,72,77,82,86,91,96,101,106,111,115,120],
		[,37,41,45,49,53,57,61,65,69,73,77,81,85,89,93,97,101,105]
	],[
		[,"Hy5","Inhibition of Aggression"],
		[],
		[7,14,29,115,116,135,157],
		[,30,33,40,48,55,63,71,78],
		[,30,31,39,46,54,62,70,77]
	],[
		[,"Pd1","Familial Discord"],
		[21,54,195,202,288],
		[83,125,214,217],
		[,38,45,51,58,65,71,78,84,91,98],
		[,38,44,50,56,62,68,74,80,86,92]
	],[
		[,"Pd2","Authority Problems"],
		[35,105],
		[34,70,129,160,263,266],
		[,30,35,42,48,55,61,68,74,81],
		[,30,38,46,53,61,69,77,84,92]
	],[
		[,"Pd3","Social Imperturbability"],
		[],
		[70,129,158,167,185,243],
		[,30,35,40,46,52,58,64],
		[,30,35,41,47,52,58,64]
	],[
		[,"Pd4","Social Alienation"],
		[17,22,42,56,82,99,113,219,225,259],
		[12,129,157],
		[,30,36,41,46,51,57,62,67,73,78,83,88,94,99],
		[,30,33,38,44,49,54,60,65,70,75,81,86,91,97]
	],[
		[,"Pd5","Self-alienation"],
		[31,32,52,56,71,82,89,94,113,264],
		[9,95],
		[,34,38,43,48,53,58,63,67,72,77,82,87,91],
		[,34,39,43,48,53,58,63,68,72,77,82,87,92]
	],[
		[,"Pa1","Persecutory Ideas"],
		[17,22,42,99,113,138,144,145,162,234,259,305,333,336,355,361],
		[314],
		[,40,46,52,58,64,70,76,82,88,94,100,106,112,118,120],
		[,39,45,51,57,63,69,75,81,87,93,99,105,111,117,120]
	],[
		[,"Pa2","Poignancy"],
		[22,146,271,277,285,307,334],
		[100,244],
		[,34,41,48,55,62,69,76,82,89,96],
		[,34,40,46,53,59,65,72,78,84,91]
	],[
		[,"Pa3","Naivete"],
		[16],
		[81,98,104,110,283,284,286,315],
		[,30,32,36,41,46,51,56,60,65,70],
		[,30,31,36,41,45,50,55,60,65,69]
	],[
		[,"Sc1","Social Alienation"],
		[17,21,22,42,46,138,145,190,221,256,277,281,291,292,320,333],
		[90,276,278,280,343],
		[,39,43,47,51,55,59,64,68,72,76,80,84,88,92,97,101,105,109,113,117,120],
		[,38,42,46,50,53,57,61,65,69,73,77,81,84,88,92,96,100,104,108,111,115,119]
	],[
		[,"Sc2","Emotional Alienation"],
		[65,92,234,273,303,323,329,332],
		[9,210,290],
		[,40,50,59,69,78,88,98,107,117,120],
		[,40,49,58,67,76,86,95,104,113,120]
	],[
		[,"Sc3","Lack of Ego Mastery, Cognitive"],
		[31,32,147,170,180,299,311,316,325],
		[165],
		[,42,48,54,60,66,72,78,84,90,96,103],
		[,43,49,55,61,67,74,80,86,92,98,104]
	],[
		[,"Sc4","Lack of Ego Mastery, Conative"],
		[31,38,48,65,92,233,234,273,299,303,325],
		[9,210,290],
		[,39,44,49,55,60,65,71,76,82,87,92,98,103,109,114],
		[,39,44,49,54,59,65,40,75,80,85,90,95,100,106,111]
	],[
		[,"Sc5","Lack of Ego Mastery, Defective Inhibition"],
		[23,85,168,182,218,242,274,320,322,329,355],
		[],
		[,40,47,54,61,68,75,82,89,96,103,110,117],
		[,40,46,53,59,65,72,78,85,91,97,104,110]
	],[
		[,"Sc6","Bizarre Sensory Experiences"],
		[23,32,44,168,182,229,247,252,296,298,307,311,319,355],
		[91,106,177,179,255,295],
		[,41,46,51,55,60,65,70,75,80,85,90,95,99,104,109,114,119,120],
		[,41,45,50,54,59,63,68,72,77,81,86,91,95,100,104,109,113,118,120]
	],[
		[,"Ma1","Amorality"],
		[131,227,248,250,269],
		[263],
		[,35,42,50,58,66,74,81],
		[,37,45,54,62,70,79,87]
	],[
		[,"Ma2","Psychomotor Acceleration"],
		[15,85,87,122,169,206,218,242,244],
		[100,106],
		[,,30,34,39,44,49,53,58,63,68,73,78],
		[,,30,35,40,45,50,55,60,65,70,75,80]
	],[
		[,"Ma3","Imperturbability"],
		[155,200,220],
		[93,136,158,167,243],
		[,30,35,41,47,53,59,65,71,77],
		[,30,37,43,50,56,62,69,75,82]
	],[
		[,"Ma4","Ego Inflation"],
		[13,50,55,61,98,145,190,211,212],
		[],
		[,30,37,43,50,56,63,69,76,82,89],
		[,31,37,43,49,56,62,68,74,80,86]
	],[
		[,"Si1","Shyness/Self-Consciousness"],
		[158,161,167,185,243,265,275,289],
		[49,262,280,321,342,360],
		[,36,39,42,45,48,51,53,56,59,62,65,68,71,74,77],
		[,36,38,41,44,46,49,52,55,57,60,63,65,68,71,74]
	],[
		[,"Si2","Social Avoidance"],
		[337,367],
		[86,340,353,359,363,370],
		[,37,41,45,49,54,58,62,67,71],
		[,37,42,47,51,56,60,65,69,74]
	],[
		[,"Si3","Self/Other Alienation"],
		[31,56,104,110,135,284,302,308,326,328,338,347,348,358,364,368,369],
		[],
		[,35,38,41,44,47,50,53,56,59,62,65,68,71,74,77,80,83,86],
		[,35,38,41,44,47,49,52,55,58,61,63,66,69,72,74,77,80,83]
	],[
		[,"ANX","Anxiety"],
		[15,30,31,39,170,196,273,290,299,301,305,339,408,415,463,469,509,556],
		[140,208,223,405,496],
		[,35,39,42,45,47,50,52,53,55,57,60,62,65,67,70,72,75,77,80,82,85,87,90,92],
		[,34,37,40,43,45,47,49,51,53,55,56,59,61,64,66,69,71,74,76,79,81,84,86,89]
	],[
		[,"FRS","Fears"],
		[154,317,322,329,334,392,395,397,435,438,441,447,458,468,471,555],
		[115,163,186,385,401,453,462],
		[,35,41,45,48,51,54,57,60,64,67,70,74,77,80,84,87,90,93,97,100,103,107,110,113],
		[,31,35,38,41,43,46,48,51,53,56,59,62,65,68,72,75,78,81,85,88,91,94,98,101]
	],[
		[,"OBS","Obsessivness"],
		[55,87,135,196,309,313,327,328,394,442,482,491,497,509,547,553],
		[],
		[,33,37,41,44,47,50,53,56,59,63,66,70,73,77,80,84,87],
		[,32,37,41,44,46,48,50,53,56,59,63,67,71,75,79,83,87]
	],[
		[,"DEP","Depression"],
		[38,52,56,65,71,82,92,130,146,215,234,246,277,303,306,331,377,399,400,411,454,506,512,516,520,539,546,554],
		[3,9,75,95,388],
		[,36,41,45,48,51,53,55,56,58,59,61,63,65,66,68,70,71,73,75,77,78,80,82,83,85,87,88,90,92,94,95,97,99,100],
		[,34,39,42,45,48,50,52,54,55,57,58,60,62,63,65,67,68,70,72,73,75,77,78,80,82,83,85,87,88,90,92,93,95,97]
	],[
		[,"HEA","Health Concerns"],
		[11,18,28,36,40,44,53,59,97,101,111,149,175,247],
		[20,33,45,47,57,91,117,118,141,142,159,164,176,179,181,194,204,224,249,255,295,404],
		[,33,37,41,44,48,51,53,56,58,60,62,64,66,68,70,72,74,76,78,80,81,83,85,87,89,91,93,95,97,99,101,103,105,106,108,110,112],
		[,32,36,40,43,46,49,51,53,55,57,59,61,63,64,66,68,70,72,74,76,77,79,81,83,85,87,89,90,92,94,96,98,100,101,103,105,107]
	],[
		[,"BIZ","Bizarre Mentation"],
		[24,32,60,96,138,162,198,228,259,298,311,316,319,333,336,355,361,466,490,508,543,551],
		[427],
		[,39,46,51,54,57,60,63,67,70,74,77,81,84,88,91,94,98,101,105,108,112,115,119,120],
		[,39,47,52,56,58,61,64,67,70,73,76,79,81,84,87,90,93,96,99,102,105,108,110,113]
	],[
		[,"ANG","Anger"],
		[29,37,116,134,302,389,410,414,430,461,486,513,540,542,548],
		[564],
		[,32,36,40,43,46,48,50,53,56,59,63,67,70,74,78,82,86],
		[,31,36,39,42,45,47,50,53,56,60,64,68,72,76,80,84,88]
	],[
		[,"CYN","Cynicism"],
		[50,58,76,81,104,110,124,225,241,254,283,284,286,315,346,352,358,374,399,403,445,470,538],
		[],
		[,32,35,38,40,41,43,44,46,47,48,49,51,52,54,56,59,62,65,68,71,74,77,80,83],
		[,32,35,38,40,42,44,46,47,48,50,51,53,54,56,58,61,64,67,69,72,75,77,80,83]
	],[
		[,"ASP","Antisocial Practices"],
		[26,35,66,81,84,104,105,110,123,227,240,248,250,254,269,283,284,374,412,418,419],
		[266],
		[,30,34,37,40,42,44,46,47,49,51,53,55,58,62,65,69,72,76,79,83,87,90,94],
		[,33,36,39,42,45,47,49,42,54,56,59,63,66,69,72,75,79,82,85,88,91,94,98]
	],[
		[,"TPA","Type A"],
		[27,136,151,212,302,358,414,419,420,423,430,437,507,510,523,531,535,541,545],
		[],
		[,30,32,36,38,41,43,44,46,48,50,53,56,60,64,68,72,77,81,85,89],
		[,30,33,36,38,41,43,45,48,50,53,56,60,64,69,73,77,81,85,90,94]
	],[
		[,"LSE","Low Self-esteem"],
		[70,73,130,235,326,369,376,380,411,421,450,457,475,476,483,485,503,504,519,526,562],
		[61,78,109],
		[,35,41,45,48,51,53,55,57,59,62,64,67,70,72,75,77,80,83,85,88,91,93,96,98,101],
		[,35,40,44,47,49,51,52,54,55,57,60,62,65,68,70,73,76,78,81,84,86,89,92,94,97]
	],[
		[,"SOD","Social Discomfort"],
		[46,158,167,185,265,275,281,337,349,367,479,480,515],
		[49,86,262,280,321,340,353,359,360,363,370],
		[,32,35,39,41,43,45,47,49,50,52,54,55,58,60,63,65,68,71,73,76,78,81,84,86,89],
		[,32,35,39,41,44,46,48,49,51,52,54,56,58,60,63,65,68,70,72,75,77,80,82,84,87]
	],[
		[,"FAM","Family Problems"],
		[21,54,145,190,195,205,256,292,300,323,378,379,382,413,449,478,543,550,563,567],
		[83,125,217,383,455],
		[,33,37,41,44,47,50,52,55,57,60,63,66,68,71,74,77,80,82,85,88,91,94,97,99,102,105],
		[,32,36,39,42,45,47,50,52,55,57,60,62,65,68,70,73,75,78,81,83,86,89,91,94,96,99]
	],[
		[,"WRK","Work Interference"],
		[15,17,31,54,73,98,135,233,243,299,302,339,364,368,394,409,428,445,464,491,505,509,517,525,545,554,559,566],
		[10,108,318,521,561],
		[,33,36,39,41,44,46,48,50,52,54,56,57,59,61,63,65,67,68,70,72,74,76,78,79,81,83,85,87,89,90,92,94,96,98],
		[,31,34,37,40,43,45,46,48,50,51,52,54,55,57,59,61,63,65,67,69,70,73,76,78,80,82,84,86,88,90,92,95,97,99]
	],[
		[,"TRT","Negative Treatment Indicators"],
		[22,92,274,306,364,368,373,375,376,377,391,399,482,488,491,495,497,499,500,504,528,539,554],
		[493,494,501],
		[,35,39,43,47,49,52,54,56,59,61,64,66,69,71,74,76,79,81,84,86,89,91,94,96,99,101,104],
		[,35,39,43,46,49,51,53,55,57,59,61,64,67,69,72,74,77,79,82,84,87,89,92,95,97,100,102]
	],[
		[,"A","Anxiety"],
		[31,38,56,65,82,127,135,215,233,243,251,273,277,289,301,309,310,311,325,328,338,339,341,347,390,391,394,400,408,411,415,421,428,442,448,451,464,469],
		[388],
		[,36,37,39,40,42,43,44,46,47,49,50,51,53,54,56,57,58,60,61,63,64,65,67,68,70,71,73,74,75,77,78,80,81,82,84,85,87,88,89,91],
		[,35,37,38,39,40,42,43,44,45,47,48,49,50,52,53,54,56,57,58,59,61,62,63,64,66,67,68,69,71,72,73,74,76,77,76,80,81,82,83,85]
	],[
		[,"R","Repression"],
		[],
		[1,7,10,14,37,45,69,112,118,120,128,134,142,168,178,189,197,199,248,255,256,297,330,346,350,353,354,359,363,365,422,423,430,432,449,456,465],
		[,,,,,,,30,32,34,36,39,41,43,45,47,50,52,54,56,58,61,63,65,67,69,72,74,76,81,83,85,87,89,92,94,96,98],
		[,,,,,,,,,30,31,33,36,39,41,44,46,49,52,54,57,60,62,65,67,70,73,75,78,81,83,86,88,91,94,96,99,102,104]
	],[
		[,"Es","Ego Strength"],
		[2,33,45,98,141,159,169,177,179,189,199,209,213,230,245,325,385,406,413,425],
		[23,31,32,36,39,53,60,70,82,87,119,128,175,196,215,221,225,229,236,246,307,310,316,328,391,394,441,447,458,464,469,471],
		[,,,,,,,,,,,,,,,,,,,,,,,,,,,,,30,31,34,36,38,40,42,45,47,49,51,54,56,58,60,63,65,67,69,72,74,76,78,81,83],
		[,,,,,,,,,,,,,,,,,,,,,,,,,30,31,33,35,37,39,41,43,45,47,49,51,53,55,57,59,61,64,66,68,70,72,74,76,78,80,82,84,86]
	],[
		[,"MAC-R","MacAndrew Alcoholism Scale-Revised"],
		[7,24,36,49,52,69,72,82,84,103,105,113,115,128,168,172,202,214,224,229,238,257,280,342,344,407,412,414,422,434,439,445,456,473,502,506,549],
		[73,107,117,137,160,166,251,266,287,299,325,387],
		[,,,,,,,,,,,,,,30,32,34,37,39,41,44,46,48,51,53,55,58,60,62,64,67,69,72,74,76,78,81,83,85,88,90,92,95,97,99,102,104,106,109,111,113],
		[,,,,,,,,,,,,30,31,34,37,40,42,45,48,50,53,56,59,61,64,67,69,72,75,78,80,83,86,88,91,94,96,99,102,105,107,110,113,115,116,120]
	],[
		[,"AAS","Addiction Acknowledgement"],
		[172,264,288,362,387,487,489,511,527,544],
		[266,429,501],
		[,36,41,46,51,56,60,65,70,75,80,85,90,95,100],
		[,39,44,50,56,61,67,7,78,84,90,95,101,107,113]
	],[
		[,"APS","Addiction Potential"],
		[7,29,41,89,103,113,120,168,183,189,196,217,242,260,267,341,342,344,377,422,502,523,540],
		[4,43,76,104,137,157,220,239,306,312,349,440,495,496,500,504],
		[,,,,,,,,,,,,,,,,,30,33,35,38,41,44,46,49,52,54,57,60,63,65,68,71,73,76,79,82,84,87,90,92],
		[,,,,,,,,,,,,,,,,30,31,33,36,39,42,44,47,50,52,55,58,60,63,66,69,71,74,77,79,82,85,87,90,93]
	],[
		[,"MDS","Marital Distress"],
		[21,22,135,195,219,382,484,563],
		[12,83,95,125,493,494],
		[,37,42,46,51,56,60,65,69,74,79,83,88,92,97,102],
		[,38,42,46,50,55,59,63,68,72,76,80,85,89,93,98]
	],[
		[,"Ho","Hostility"],
		[19,27,46,50,58,76,81,99,104,110,124,136,145,171,205,225,227,241,248,251,254,259,265,286,306,315,338,346,347,352,357,358,386,393,398,406,414,419,423,425,436,443,445,452,457,466,470],
		[217,230,372],
		[,,30,31,32,33,34,35,36,38,39,40,41,42,44,45,46,47,48,50,51,52,53,54,56,57,58,59,60,62,63,64,65,66,67,69,70,71,72,73,75,76,77,78,79,81,82,83,84,85,87,88],
		[,,30,31,32,34,35,36,37,39,40,41,42,44,45,46,47,49,50,51,52,54,55,56,58,59,60,61,63,64,65,66,68,69,70,71,73,74,75,76,78,79,80,82,83,84,85,87,88,89,90,92]
	],[
		[,"O-H","Overcontrolled Hostility"],
		[67,79,207,286,305,398,471],
		[1,15,29,69,77,89,98,116,117,129,153,169,171,293,344,390,400,420,433,440,460],
		[,,,,,,,30,31,35,38,41,45,48,52,55,59,62,65,69,72,76,79,82,86,89,93,96,99,103],
		[,,,,,,,,,30,33,37,41,44,48,52,55,59,63,66,70,74,77,81,85,88,92,96,99,103]
	],[
		[,"Do","Dominance"],
		[55,207,232,245,386,416],
		[31,52,70,73,82,172,201,202,220,227,243,244,275,309,325,399,412,470,473],
		[,,,,,,,,,,,30,31,34,38,41,45,48,51,55,58,61,65,68,72,75,78],
		[,,,,,,,,,,,30,32,35,39,42,46,49,53,56,59,63,66,70,73,77,80]
	],[
		[,"Re","Social Responsibility"],
		[100,160,199,266,440,467],
		[7,27,29,32,84,103,105,145,164,169,201,202,235,275,358,412,417,418,430,431,432,456,468,470],
		[,,,,,,,,,,,,,30,32,34,37,39,42,45,47,50,52,55,57,60,63,65,68,70,73,76],
		[,,,,,,,,,,,,,,,30,32,35,38,41,44,47,50,53,56,59,62,65,68,71,74,77]
	],[
		[,"Mt","College Maladjustment"],
		[15,16,28,31,38,71,73,81,82,110,130,215,218,233,269,273,299,302,325,331,339,357,408,411,449,464,469,472],
		[2,3,9,10,20,43,95,131,140,148,152,223,405],
		[,32,34,36,37,39,40,42,43,45,46,48,50,51,53,54,56,57,59,60,62,64,65,67,68,70,71,73,74,76,77,79,81,82,84,85,87,88,30,31,93,95,96],
		[,32,34,35,37,38,40,41,42,44,45,47,48,50,51,52,54,55,57,58,60,61,62,64,65,67,68,70,71,72,74,75,77,78,80,81,82,84,85,87,88,90,91]
	],[
		[,"GM","Masculine Gender Role"],
		[8,20,143,152,159,163,176,199,214,237,321,331,350,385,388,401,440,462,467,474],
		[4,23,44,64,70,73,74,80,100,137,146,187,289,351,364,392,395,435,438,441,469,471,498,509,519,532,536],
		[,,,,,,,,,,,,,,,,,,,,,,,,,,,,,30,31,34,36,38,40,42,45,47,49,51,53,56,58,60,62,64,66,69,71],
		[,,,,,,,,,,,,,,,,,30,32,33,35,36,38,40,41,43,44,46,47,49,50,52,53,55,56,58,59,61,63,64,66,67,69,70,72,73,75,76,78]
	],[
		[,"GF","Feminine Gender Role"],
		[62,67,119,121,128,263,266,353,384,426,449,456,475,552],
		[1,27,63,68,79,84,105,123,133,155,197,201,203,220,231,238,239,250,257,264,272,287,406,417,465,477,487,510,511,537,548,550],
		[,,,,,,,,,,,,,,,,,,,30,32,34,37,39,41,43,45,47,49,51,54,56,58,60,62,64,66,68,71,73,75,77,79,81,83,85,88,90],
		[,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,30,33,35,38,40,43,46,48,51,53,56,59,61,64,66,69,71]
	],[
		[,"PK","Post-traumatic Stress Disorder"],
		[16,17,22,23,30,31,32,37,39,48,52,56,59,65,82,85,92,94,101,135,150,168,170,196,221,274,277,302,303,305,316,319,327,328,339,347,349,367],
		[2,3,9,49,75,95,125,140],
		[,37,38,40,42,43,45,47,48,50,52,53,55,57,58,60,62,63,65,67,68,70,72,73,75,77,78,80,82,83,85,87,88,90,92,93,95,97,98,100,102,103,105,107,108,110,112,113],
		[,37,39,40,42,43,45,46,48,49,51,52,54,55,57,58,60,61,63,64,66,67,69,71,72,74,75,77,78,80,81,83,84,86,87389,90,92,93,95,96,98,99,101,103,104,106,107]
	],[
		[,"PS","Post-traumatic Stress Disorder"],
		[17,21,22,31,32,37,38,44,48,56,59,65,85,94,116,135,145,150,168,170,180,218,221,273,274,277,299,301,304,305,311,316,319,325,328,377,386,400,463,464,469,471,475,479,515,516,565],
		[3,9,45,75,95,141,165,208,223,280,372,405,564],
		[,37,38,39,41,42,43,44,46,47,48,49,51,52,53,54,56,57,58,59,61,62,63,64,66,67,68,69,71,72,73,74,76,77,78,79,81,82,83,84,86,87,88,89,91,92,93,94,96,97,98,99,101,102,103,104,106,107,108,110,111,112],
		[,37,38,39,40,41,42,43,45,46,47,48,49,50,51,52,54,55,56,57,58,59,60,61,62,63,64,66,68,69,70,71,73,74,75,76,77,78,79,80,81,83,84,85,86,87,88,89,90,92,93,94,95,97,98,99,100,102,103,104]
	],[
		[,"D-O","Depression, Obvious"],
		[15,18,31,38,39,46,56,73,92,127,130,146,147,170,175,215,233],
		[2,9,10,20,33,43,45,49,75,95,109,118,140,141,142,165,188,223,245,248,260,330],
		[,32,34,37,39,41,44,46,48,51,53,55,58,60,62,65,67,69,72,74,76,79,81,83,86,88,90,93,95,97,100,102,104,107,109,111,114,116,118,120],
		[,32,34,36,38,40,42,44,46,48,51,53,55,57,59,61,63,65,67,69,71,73,75,77,79,81,83,85,87,89,92,94,96,98,100,102,104,106,108,110,112]
	],[
		[,"D-S","Depression, Subtle"],
		[5,117,282],
		[29,37,55,68,76,134,143,148,178,189,212,221,226,238,267],
		[,,,,,,,32,36,40,44,48,52,55,59,63,67,71,75,78],
		[,,,,,,,,32,36,40,44,48,53,57,61,65,69,73,77]
	],[
		[,"Hy-O","Hysteria, Obvious"],
		[11,18,31,39,40,44,65,101,166,172,175,218],
		[2,3,8,9,10,45,47,91,95,115,125,141,152,159,164,173,179,208,224,249],
		[,37,40,42,45,48,51,53,56,59,62,64,67,70,73,76,78,81,84,87,89,92,95,98,100,103,106,109,111,114,117,120],
		[,37,39,41,44,46,48,51,53,56,58,60,63,65,67,70,72,75,77,79,82,84,86,89,91,93,96,98,101,103,105,108,110,112]
	],[
		[,"Hy-S","Hysteria, Subtle"],
		[230],
		[7,14,26,29,58,76,81,98,110,116,124,129,135,148,151,157,161,167,176,185,193,213,241,243,253,263,265],
		[,,,,,,,,,31,34,36,38,41,43,45,47,50,52,54,57,59,61,64,66,68,71,73,75,78],
		[,,,,,,,,,,32,34,37,39,42,44,47,49,51,54,56,59,61,64,66,69,71,73,76,78]
	],[
		[,"Pd-O","Psychopathic Deviate, Obvious"],
		[17,22,31,32,35,42,52,54,56,71,82,94,99,105,195,202,225,259,264,288],
		[9,12,34,79,95,125,261,266],
		[,34,36,39,42,44,47,50,52,55,58,60,63,66,68,71,74,76,79,82,84,87,90,92,95,98,100,103,106,108],
		[,35,38,41,44,46,49,52,54,57,60,62,65,68,70,73,76,79,81,84,87,89,92,95,97,100,103,105,108,111]
	],[
		[,"Pd-S","Psychopathic Deviate, Subtle"],
		[21,89,113,219],
		[70,83,122,129,143,157,158,160,167,171,185,209,214,217,226,243,263,267],
		[,,,,,,,33,37,41,45,48,52,56,60,64,68,72,76,79,83,87,91,95],
		[,,,,,,,31,35,39,43,47,51,55,59,63,67,71,75,79,83,87,91,95]
	],[
		[,"Pa-O","Paranoia, Obvious"],
		[17,22,23,24,42,99,138,144,146,162,234,259,277,285,305,307,333,336,355,361],
		[255,266,314],
		[,38,43,47,52,57,61,66,70,75,80,84,89,93,98,102,107,112,116],
		[,38,42,47,51,55,60,64,68,72,77,81,85,90,94,98,103,107,111,115,120]
	],[
		[,"Pa-S","Paranoia, Subtle"],
		[16,113,145,271,334],
		[81,95,98,100,104,110,244,283,284,286,297,315],
		[,,,,31,35,39,43,48,52,56,60,65,69,73,77,82,86,90],
		[,,,,31,35,39,44,48,52,57,61,65,69,74,78,82,87,91]
	],[
		[,"Ma-O","Hypomania, Obvoius"],
		[15,23,50,61,85,87,145,155,168,182,190,205,218,227,229,238,242,250,253,269],
		[100,106,107],
		[,,30,34,37,40,44,47,51,54,57,61,64,67,71,74,78,81,84,88,91,95,98,101,105],
		[,,32,35,39,42,45,49,52,55,59,62,66,69,72,76,79,82,86,89,92,96,99,103,106]
	],[
		[,"Ma-S","Hypomania, Subtle"],
		[13,21,55,98,113,122,131,169,200,206,211,212,220,244,248],
		[88,93,136,154,158,167,243,263],
		[,,,,,,31,35,39,42,46,50,54,57,61,65,69,72,76,80,83,87,91,95,98],
		[,,,,,,32,36,40,44,47,51,55,59,63,67,70,74,78,82,86,90,93,97,101]
	],[
		["RCd","dem","Demoralization"],
		[31,56,64,73,82,94,130,180,215,233,273,277,339,400,411,464,469,482,485,491,505,554],
		[95,388],
		[,37,42,47,50,52,54,56,57,58,60,62,64,66,68,70,71,73,75,77,79,81,83,85,86,88],
		[,36,41,45,48,50,52,53,54,55,56,58,60,61,63,65,67,69,71,73,75,77,79,81,83,85]
	],[
		["RC1","som","Somatic Complaints"],
		[11,18,28,40,97,101,111,149,172,247,536],
		[2,8,20,47,57,91,106,141,164,176,177,179,208,224,255,295],
		[,37,43,48,52,55,58,60,63,65,68,71,73,76,79,81,84,86,89,92,94,97,100],
		[,36,41,45,49,52,55,57,59,62,64,66,68,70,72,74,76,78,80,82,85,87,89,91,93,95,97,99,100]
	],[
		["RC2","lpe","Low Positive Emotions"],
		[],
		[9,10,49,61,75,109,148,188,206,239,244,280,318,330,494,521,552],
		[,34,39,43,46,50,53,57,60,64,68,72,75,79,83,86,90,94,97],
		[,33,38,42,46,50,54,58,62,66,70,74,79,83,87,91,95,99,100]
	],[
		["RC3","cyn","Cynicism"],
		[58,76,81,104,110,241,254,284,286,352,436,445,538,563,567],
		[],
		[,34,38,41,43,45,47,48,50,53,56,60,64,69,74,78,83],
		[,33,38,41,44,46,48,50,52,55,58,62,66,70,74,78,82]
	],[
		["RC4","asb","Antisocial Behavior"],
		[21,35,84,105,202,240,264,362,379,412,431,487,489,511,540,548],
		[34,83,160,266,429,455],
		[,33,37,41,44,47,49,52,54,57,59,62,65,68,71,74,77,80,83,86,89,92,95,98],
		[,35,40,44,48,52,55,58,60,63,66,69,71,74,77,80,83,85,88,91,94,96,99,100]
	],[
		["RC6","per","Ideas of Persecution"],
		[24,42,99,138,144,145,162,216,228,259,333,336,355,361,484,490],
		[314],
		[,41,56,62,65,67,70,73,76,79,82,85,88,90,93,96,99,100],
		[,43,58,64,67,70,73,76,79,82,85,88,91,94,97,99,100]
	],[
		["RC7","dne","Dysfunctional Negative Emotions"],
		[37,127,161,251,274,289,301,302,310,320,327,328,329,390,421,424,430,442,451,463,471,507,513,519],
		[],
		[,34,38,42,45,47,49,52,54,56,58,60,63,65,67,70,72,75,77,80,82,85,87,90,92,95],
		[,32,36,40,42,45,47,49,50,52,54,55,58,60,63,65,68,71,74,76,79,82,84,87,90,92]
	],[
		["RC8","abx","Aberrant Experiences"],
		[32,60,72,96,168,182,198,229,296,298,307,311,316,319,466,508,551],
		[427],
		[,39,47,52,56,59,63,66,70,73,76,80,83,87,90,93,97,100],
		[,39,47,52,56,60,63,66,69,73,76,79,82,85,89,92,95,98,100]
	],[
		["RC9","hpm","Hypomanic Activation"],
		[27,50,55,86,122,134,153,169,189,209,212,213,226,242,250,267,304,324,345,346,366,389,393,406,414,423,542],
		[100],
		[,30,30,31,33,36,38,39,41,42,44,45,47,48,50,51,53,56,58,61,64,67,70,73,76,79,82,85,88,91],
		[,30,30,32,34,37,38,40,42,44,46,48,49,51,53,56,58,61,64,66,69,72,74,77,80,83,85,88,91,94]
	],[
		[,"AGGR","Aggressiveness"],
		[27,50,85,134,239,323,324,346,350,358,414,423,452,521,548],
		[70,446,503],
		[,,30,33,36,38,40,43,45,48,51,54,59,64,69,74,79,84,89,94],
		[,30,32,35,38,41,44,46,49,53,57,61,66,71,76,81,86,91,96,101]
	],[
		[,"PSYC","Psychoticism"],
		[24,42,48,72,96,99,138,144,198,241,259,315,319,336,355,361,374,448,466,490,508,549,551],
		[184,427],
		[,35,40,45,49,52,56,59,62,65,68,72,75,78,81,84,88,91,94,97,101,104,107,110,114,117,120],
		[,35,41,46,50,53,56,60,63,66,69,72,75,78,81,84,87,90,93,96,99,103,106,109,112,115,118]
	],[
		[,"DISC","Disconstraint"],
		[35,84,88,103,105,123,209,222,250,284,344,362,385,412,417,418,431,477],
		[34,100,121,126,154,263,266,309,351,402,497],
		[,,,,,30,31,33,35,37,39,41,42,44,46,49,51,54,57,60,64,67,71,75,78,82,82,89,93,96,100],
		[,,,30,31,34,37,39,42,44,46,49,51,54,56,60,63,66,69,73,76,79,83,86,89,93,96,99,102,106,109]
	],[
		[,"NEGE","Negative Emotionality / Neuroticism"],
		[37,52,82,93,116,166,196,213,290,301,305,329,375,389,390,395,397,407,409,415,435,442,444,451,513,542,556],
		[63,223,372,405,496,564],
		[,31,34,36,39,41,43,44,46,48,49,51,52,54,56,57,59,61,64,66,68,70,72,74,76,78,80,82,84,86,89,91,93,95,97],
		[,30,31,34,36,38,40,42,44,45,46,48,49,50,52,53,55,57,59,61,63,66,68,70,72,75,77,79,81384,86,88,90,93,95]
	],[
		[,"INTR","Introversion / Low Positive Emotionality"],
		[38,56,233,515,517],
		[9,49,61,75,78,86,95,109,131,174,188,189,207,226,231,244,267,318,330,340,342,343,353,356,359,370,460,531,534],
		[,,30,31,33,35,37,39,41,43,45,48,50,52,54,56,59,61,64,66,68,71,73,76,78,80,83,85,88,90,92,95,97,100,102,105],
		[,,,30,32,34,37,39,42,44,46,48,50,53,55,57,60,63,65,68,70,73,76,78,81,83,86,89,91,94,96,99,102,104,107,109]
	],[
		[,"FRS1","Generalized Fearfulness"],
		[317,322,329,334,395,435,441,447,468,471,555],
		[186],
		[,44,53,62,71,80,89,98,107,113,120],
		[,42,48,55,61,68,74,81,88,94,101,107]
	],[
		[,"FRS2","Multiple Fears"],
		[154,392,438,458],
		[115,163,385,401,453,462],
		[,37,41,45,50,54,59,63,67,72,76,81],
		[,30,33,37,41,45,49,53,58,62,66,70]
	],[
		[,"DEP1","Lack of Drive"],
		[38,71,92,399,400,512,516,539,554],
		[3,9,75],
		[,40,46,51,57,62,68,73,79,84,89,95,100,106],
		[,40,45,50,55,60,65,70,75,80,85,90,95,100]
	],[
		[,"DEP2","Dysphoria"],
		[56,65,146,215],
		[95,388],
		[,42,50,58,66,74,82,90],
		[,40,47,53,60,66,73,79]
	],[
		[,"DEP3","Self-Depreciation"],
		[52,82,130,234,246,377,411],
		[],
		[,41,48,55,62,69,76,83,91],
		[,40,47,54,61,68,75,82,89]
	],[
		[,"DEP4","Suicidal Ideation"],
		[303,454,506,520,546],
		[],
		[,45,62,79,95,112,120],
		[,45,61,77,93,109,120]
	],[
		[,"HEA1","Gastrointestinal Symptoms"],
		[18,59,111],
		[20,47],
		[,44,57,70,83,96,109],
		[,43,54,64,75,86,97]
	],[
		[,"HEA2","Neurological Symtoms"],
		[44,53,101,149,247],
		[91,142,159,164,179,255,295],
		[,40,47,54,60,67,74,80,87,94,100,107,114,120],
		[,39,45,50,56,61,67,72,78,83,89,94,99,105]
	],[
		[,"HEA3","General Health Concerns"],
		[175],
		[33,45,118,141,224],
		[,40,48,56,64,72,81,89],
		[,40,48,56,64,71,79,87]
	],[
		[,"BIZ1","Psychotic Symptomatology"],
		[24,60,96,138,162,228,336,355,361,508,551],
		[],
		[,44,54,64,74,84,94,104,114,120],
		[,44,54,65,76,86,97,108,118,120]
	],[
		[,"BIZ2","Schizotypal Characteristics"],
		[32,259,298,311,316,319,333,466,543],
		[],
		[,41,47,54,60,67,73,80,86,93,99],
		[,41,47,54,60,66,72,79,85,91,97]
	],[
		[,"ANG1","Explosive Behavior"],
		[37,134,389,414,540,548],
		[564],
		[,39,45,52,58,64,71,77,83],
		[,39,47,54,61,69,76,84,91]
	],[
		[,"ANG2","Irritability"],
		[116,302,430,461,486,513,542],
		[],
		[,35,41,46,51,56,61,67,72],
		[,33,39,44,49,54,59,65,70]
	],[
		[,"CYN1","Misanthropic Beliefs"],
		[58,76,81,104,110,241,254,283,284,286,352,374,399,470,538],
		[],
		[,33,36,39,41,44,47,50,52,55,58,60,63,66,69,71,74],
		[,34,37,40,42,45,48,51,54,56,59,62,65,68,70,73,76]
	],[
		[,"CYN2","Interpersonal Suspiciousness"],
		[50,124,225,315,346,358,403,445],
		[],
		[,34,39,43,48,53,57,62,66,71],
		[,35,40,45,49,54,59,64,68,73]
	],[
		[,"ASP1","Antisocial Attitudes"],
		[26,66,81,104,110,123,227,248,250,254,269,283,284,374,418,419],
		[],
		[,32,35,37,40,43,46,49,52,55,57,60,63,66,69,72,75,79],
		[,33,36,39,42,45,48,52,55,58,61,64,67,70,73,76,79,82]
	],[
		[,"ASP2","Antisocial Behavior"],
		[35,84,105,412],
		[266],
		[,38,45,52,59,67,74],
		[,42,51,61,71,81,90]
	],[
		[,"TPA1","Impatience"],
		[302,420,430,507,523,535],
		[],
		[,34,39,45,51,57,63,68],
		[,34,40,46,52,58,64,70]
	],[
		[,"TPA2","Competitive Drive"],
		[27,151,212,358,419,423,510,531,545],
		[],
		[,33,39,44,50,55,60,66,71,77,82],
		[,34,40,46,52,58,64,70,76,82,89]
	],[
		[,"LSE1","Self-Doubt"],
		[73,130,326,411,450,483,485,504],
		[61,78,109],
		[,39,44,49,54,59,64,70,75,80,85,90,95],
		[,39,43,48,53,57,62,66,71,75,80,85,89]
	],[
		[,"LSE2","Submissiveness"],
		[70,369,421,457,503,519],
		[],
		[,41,48,55,62,69,76,83],
		[,39,45,51,57,63,69,75]
	],[
		[,"SOD1","Introversion"],
		[46,265,281,337,349,367,480,515],
		[49,86,280,340,353,359,363,370],
		[,36,39,42,45,47,50,53,56,59,62,65,68,71,73,76,79,82],
		[,37,40,43,46,49,52,55,58,61,64,67,70,73,76,79,82,85]
	],[
		[,"SOD2","Shyness"],
		[158,167,185,275],
		[262,321,360],
		[,36,41,47,52,58,63,68,74],
		[,35,40,45,50,55,60,65,69]
	],[
		[,"FAM1","Family Discord"],
		[21,54,190,205,256,323,378,382,449,478,563],
		[83],
		[,35,40,45,50,55,60,65,70,75,80,85,90,95],
		[,33,38,42,47,52,57,62,67,71,76,81,86,91]
	],[
		[,"FAM2","Familial Alienation"],
		[195,550],
		[217,383,455],
		[,40,49,58,67,76,84],
		[,41,50,59,68,77,86]
	],[
		[,"TRT1","Low Motivation"],
		[92,364,368,376,491,497,500,528,539,554],
		[494],
		[,42,48,54,60,66,71,77,83,89,95,101,107],
		[,41,46,51,56,61,66,71,76,81,86,91,96]
	],[
		[,"TRT2","Inability to Disclose"],
		[274,373,375,391,495],
		[],
		[,37,45,52,60,68,75],
		[,38,46,53,60,68,75]
	],[
		// Unused, Scale Name, Scale Description
		[,"KB1","Koss-Butcher Critical Items - Acute Anxiety Scale"],
		// True questions
		[5,15,28,39,59,172,218,301,444,463,469],
		// False questions
		[2,3,10,140,208,223],
		// T scales are undefined to flag this as a critical item
		,
		,
	],[
		[,"KB2","Koss-Butcher Critical Items - Depressed Suicidal Ideation"],
		[38,65,71,92,130,146,215,233,273,303,306,411,454,485,506,518,520,524],
		[9,75,95,388],
		,
		,
	],[
		[,"KB3","Koss-Butcher Critical Items - Threatened Assault"],
		[37,85,134,213,389],
		[],
		,
		,
	],[
		[,"KB4","Koss-Butcher Critical Items - Situational Stress Due to Alcoholism"],
		[264,487,489,502,511,518],
		[125],
		,
		,
	],[
		[,"KB5","Koss-Butcher Critical Items - Mental Confusion"],
		[24,31,32,72,96,180,198,299,311,316,325],
		[],
		,
		,
	],[
		[,"KB6","Koss-Butcher Critical Items - Persecutory Ideas"],
		[17,42,99,124,138,144,145,162,216,228,241,251,259,333,361],
		[314],
		,
		,
	],[
		[,"LW1","Lachar-Wrobel Critical Items - Anxiety and Tension"],
		[15,17,172,218,299,301,320,463],
		[223,261,405],
		,
		,
	],[
		[,"LW2","Lachar-Wrobel Critical Items - Depression and Worry"],
		[65,73,130,150,180,273,303,339,411,415,454],
		[2,3,10,75,165],
		,
		,
	],[
		[,"LW3","Lachar-Wrobel Critical Items - Sleep Disturbance"],
		[5,30,39,328,471],
		[140],
		,
		,
	],[
		[,"LW4","Lachar-Wrobel Critical Items - Deviant Beliefs"],
		[42,99,138,144,162,216,228,259,333,336,355,466],
		[106,314],
		,
		,
	],[
		[,"LW5","Lachar-Wrobel Critical Items - Deviant Thinking and Experiences"],
		[32,60,96,122,198,298,307,316,319,427],
		[],
		,
		,
	],[
		[,"LW6","Lachar-Wrobel Critical Items - Substance Abuse"],
		[168,264],
		[429],
		,
		,
	],[
		[,"LW7","Lachar-Wrobel Critical Items - Antisocial Attitude"],
		[27,35,84,105,227,240,254,324],
		[266],
		,
		,
	],[
		[,"LW8","Lachar-Wrobel Critical Items - Family Conflict"],
		[21,288],
		[83,125],
		,
		,
	],[
		[,"LW9","Lachar-Wrobel Critical Items - Problematic Anger"],
		[85,134,213,389],
		[],
		,
		,
	],[
		[,"LW10","Lachar-Wrobel Critical Items - Sexual Concern and Deviation"],
		[62,166,268],
		[12,34,121],
		,
		,
	],[
		[,"LW11","Lachar-Wrobel Critical Items - Somatic Symptoms"],
		[18,28,40,44,53,57,59,101,111,175,182,229,247,464],
		[33,47,142,159,164,176,224,255,295],
		,
		,
	]
];

var escalas = scales
