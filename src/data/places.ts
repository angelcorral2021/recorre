export interface Place {
  id: string;
  name: { es: string; en: string };
  shortDesc: { es: string; en: string };
  longDesc: { es: string; en: string };
  tag: { es: string; en: string };
  img: string;
  address: string;
  hours: { es: string; en: string };
  price: { es: string; en: string };
}

export interface CategoryData {
  hero: {
    img: string;
    subtitle: { es: string; en: string };
  };
  events: {
    name: { es: string; en: string };
    date: { es: string; en: string };
    desc: { es: string; en: string };
    emoji: string;
  }[];
  places: Place[];
}

export const placesData: Record<string, CategoryData> = {
  'arte-cultura': {
    hero: {
      img: 'https://images.unsplash.com/photo-1531243269054-5ebf6f34081e?auto=format&fit=crop&q=80&w=1600',
      subtitle: {
        es: 'Santiago vibra con museos de clase mundial, murales que cuentan historias y una escena cultural en constante efervescencia.',
        en: 'Santiago thrives with world-class museums, murals that tell stories, and a cultural scene in constant ferment.',
      }
    },
    events: [
      {
        name: { es: 'Noche de Museos', en: 'Night of Museums' },
        date: { es: 'Noviembre · Anual', en: 'November · Annual' },
        desc: { es: 'Más de 80 museos abren sus puertas de noche en forma gratuita en una fiesta cultural única.', en: 'Over 80 museums open their doors at night for free in a unique cultural celebration.' },
        emoji: '🌙',
      },
      {
        name: { es: 'Festival Santiago a Mil', en: 'Santiago a Mil Festival' },
        date: { es: 'Enero · Anual', en: 'January · Annual' },
        desc: { es: 'El festival de artes escénicas más grande de América Latina con obras en espacios públicos y teatros.', en: 'The largest performing arts festival in Latin America with shows in public spaces and theatres.' },
        emoji: '🎪',
      },
      {
        name: { es: 'Feria del Libro de Santiago', en: 'Santiago Book Fair' },
        date: { es: 'Octubre · Anual', en: 'October · Annual' },
        desc: { es: 'La mayor feria editorial de Chile con autores nacionales e internacionales, presentaciones y talleres.', en: 'Chile\'s largest book fair with national and international authors, presentations and workshops.' },
        emoji: '📚',
      },
    ],
    places: [
      {
        id: 'museo-bellas-artes',
        name: { es: 'Museo Nacional de Bellas Artes', en: 'National Museum of Fine Arts' },
        shortDesc: { 
          es: 'El museo de arte más antiguo de Chile, inaugurado en 1880. Alberga más de 5.000 obras.', 
          en: 'Chile\'s oldest art museum, inaugurated in 1880. Houses over 5,000 works.' 
        },
        longDesc: {
          es: 'Una joya arquitectónica de estilo neoclásico y art nouveau ubicada en el corazón del Parque Forestal. Fundado en 1880, es el museo de arte más antiguo de Sudamérica. Su cúpula de vidrio belga ilumina el gran hall central donde se exhiben magistrales esculturas, mientras que sus alas laterales albergan una impresionante colección de pintura chilena e internacional desde la época colonial hasta nuestros días. Un imperdible para entender la historia visual del país.',
          en: 'A neoclassical and art nouveau architectural gem located in the heart of Parque Forestal. Founded in 1880, it is the oldest art museum in South America. Its Belgian glass dome illuminates the grand central hall where masterful sculptures are exhibited, while its side wings house an impressive collection of Chilean and international painting from colonial times to the present day. A must-see to understand the visual history of the country.'
        },
        tag: { es: 'Museo · Entrada gratuita', en: 'Museum · Free entry' },
        img: 'https://images.unsplash.com/photo-1580060839134-75a5edca2e99?auto=format&fit=crop&q=80&w=800',
        address: 'José Miguel de la Barra 650, Santiago',
        hours: { es: 'Martes a Domingo: 10:00 - 17:30', en: 'Tuesday to Sunday: 10:00 AM - 5:30 PM' },
        price: { es: 'Gratis', en: 'Free' }
      },
      {
        id: 'mac-forestal',
        name: { es: 'Museo de Arte Contemporáneo', en: 'Museum of Contemporary Art' },
        shortDesc: { 
          es: 'Ubicado en el Parque Forestal, el MAC exhibe las propuestas más vanguardistas.', 
          en: 'Located in Parque Forestal, the MAC showcases the most avant-garde proposals.' 
        },
        longDesc: {
          es: 'Compartiendo edificio con el Bellas Artes, pero con una entrada independiente, el MAC es el epicentro de la vanguardia chilena. Administrado por la Universidad de Chile, este espacio está dedicado exclusivamente al arte contemporáneo en todas sus formas: instalaciones, videoarte, fotografía y arte experimental. Sus exhibiciones rotativas siempre desafían las convenciones y ofrecen una mirada provocativa de la sociedad moderna.',
          en: 'Sharing a building with the Bellas Artes, but with an independent entrance, the MAC is the epicenter of the Chilean avant-garde. Administered by the University of Chile, this space is dedicated exclusively to contemporary art in all its forms: installations, video art, photography and experimental art. Its rotating exhibitions always challenge conventions and offer a provocative look at modern society.'
        },
        tag: { es: 'Arte contemporáneo', en: 'Contemporary art' },
        img: 'https://images.unsplash.com/photo-1518998053901-5348d3961a04?auto=format&fit=crop&q=80&w=800',
        address: 'Ismael Valdés Vergara 506, Santiago',
        hours: { es: 'Martes a Sábado: 11:00 - 17:30', en: 'Tuesday to Saturday: 11:00 AM - 5:30 PM' },
        price: { es: 'Aporte Voluntario', en: 'Voluntary Donation' }
      },
      {
        id: 'barrio-italia-murales',
        name: { es: 'Barrio Italia — Arte Urbano', en: 'Barrio Italia — Street Art' },
        shortDesc: { 
          es: 'Un barrio entero convertido en galería al aire libre. Decenas de murales decoran sus calles.', 
          en: 'An entire neighborhood turned into an open-air gallery. Dozens of murals decorate its streets.' 
        },
        longDesc: {
          es: 'Más allá de sus famosos anticuarios y restaurantes, el Barrio Italia se ha consolidado como un lienzo gigante para el arte urbano. Caminar por sus calles es descubrir murales de gran formato, intervenciones callejeras y grafitis hiperrealistas que llenan de color y mensaje social las antiguas fachadas del barrio. Cada esquina ofrece una oportunidad fotográfica única y una muestra de la vibrante cultura underground santiaguina.',
          en: 'Beyond its famous antique shops and restaurants, Barrio Italia has consolidated itself as a giant canvas for street art. Walking through its streets is to discover large-format murals, street interventions and hyper-realistic graffiti that fill the old facades of the neighborhood with color and social messages. Every corner offers a unique photographic opportunity and a sample of Santiago\'s vibrant underground culture.'
        },
        tag: { es: 'Arte urbano · Gratis', en: 'Street art · Free' },
        img: 'https://images.unsplash.com/photo-1578301978018-3005759f48f7?auto=format&fit=crop&q=80&w=800',
        address: 'Av. Italia y calles aledañas, Providencia',
        hours: { es: 'Abierto 24 horas', en: 'Open 24 hours' },
        price: { es: 'Gratis', en: 'Free' }
      },
      {
        id: 'teatro-municipal',
        name: { es: 'Teatro Municipal de Santiago', en: 'Santiago Municipal Theatre' },
        shortDesc: { 
          es: 'Desde 1857, el Teatro Municipal es la casa de la ópera, el ballet y la música clásica.', 
          en: 'Since 1857, the Municipal Theatre has been the home of opera, ballet and classical music.' 
        },
        longDesc: {
          es: 'El principal escenario de Chile para las artes clásicas. Inaugurado en 1857, este fastuoso teatro de estilo neoclásico francés cuenta con una acústica impecable y detalles arquitectónicos deslumbrantes. Es la sede de la Orquesta Filarmónica de Santiago, el Ballet de Santiago y el Coro del Municipal. Incluso si no asistes a una función, las visitas guiadas por sus salones dorados y lámparas de cristal valen absolutamente la pena.',
          en: 'Chile\'s main stage for classical arts. Inaugurated in 1857, this lavish French neoclassical theatre boasts impeccable acoustics and dazzling architectural details. It is home to the Santiago Philharmonic Orchestra, the Santiago Ballet, and the Municipal Choir. Even if you don\'t attend a performance, the guided tours through its gilded halls and crystal chandeliers are absolutely worth it.'
        },
        tag: { es: 'Ópera · Ballet', en: 'Opera · Ballet' },
        img: 'https://images.unsplash.com/photo-1507924538820-ede94a04019d?auto=format&fit=crop&q=80&w=800',
        address: 'Agustinas 794, Santiago',
        hours: { es: 'Visitas Guiadas: Jueves y Viernes 12:00', en: 'Guided Tours: Thursday & Friday 12:00 PM' },
        price: { es: 'Visitas desde $8.000 CLP', en: 'Tours from $8.000 CLP' }
      },
      {
        id: 'centro-cultural-la-moneda',
        name: { es: 'Centro Cultural La Moneda', en: 'La Moneda Cultural Centre' },
        shortDesc: { 
          es: 'Bajo la plaza, este centro alberga exposiciones temporales de patrimonio chileno.', 
          en: 'Beneath the plaza, this centre hosts temporary exhibitions of Chilean heritage.' 
        },
        longDesc: {
          es: 'Una maravilla arquitectónica subterránea ubicada justo debajo de la Plaza de la Ciudadanía, frente al Palacio de Gobierno. Con más de 7.000 m², acoge las exposiciones internacionales más importantes que llegan al país, además de dedicar salas al patrimonio, artesanía y diseño local. También cuenta con la Cineteca Nacional, donde se restauran y exhiben joyas del cine chileno antiguo y contemporáneo.',
          en: 'An underground architectural marvel located just beneath the Plaza de la Ciudadanía, facing the Government Palace. With over 7,000 m², it hosts the most important international exhibitions that arrive in the country, in addition to dedicating rooms to local heritage, crafts, and design. It also houses the National Cineteca, where gems of old and contemporary Chilean cinema are restored and exhibited.'
        },
        tag: { es: 'Exposiciones · Cine', en: 'Exhibitions · Cinema' },
        img: 'https://images.unsplash.com/photo-1582555172866-f73bb12a2ab3?auto=format&fit=crop&q=80&w=800',
        address: 'Plaza de la Ciudadanía 26, Santiago',
        hours: { es: 'Lunes a Domingo: 09:00 - 19:30', en: 'Monday to Sunday: 9:00 AM - 7:30 PM' },
        price: { es: 'Exposiciones principales: $3.000 CLP', en: 'Main exhibitions: $3.000 CLP' }
      },
      {
        id: 'museo-precolombino',
        name: { es: 'Museo Chileno de Arte Precolombino', en: 'Pre-Columbian Art Museum' },
        shortDesc: { 
          es: 'Una de las colecciones más importantes de América Latina con más de 3.000 piezas.', 
          en: 'One of the most important collections in Latin America with over 3,000 pieces.' 
        },
        longDesc: {
          es: 'Ampliamente considerado como uno de los mejores museos de toda Sudamérica. Custodia una asombrosa colección de arte, textiles y cerámica de los pueblos originarios de América, abarcando desde Mesoamérica hasta los Andes del Sur, con piezas de hasta 10.000 años de antigüedad. Destaca especialmente su sala "Chile Antes de Chile", con una museografía de clase mundial que sumerge al visitante en las raíces profundas del territorio.',
          en: 'Widely considered one of the best museums in all of South America. It safeguards an astonishing collection of art, textiles, and ceramics from the indigenous peoples of the Americas, ranging from Mesoamerica to the Southern Andes, with pieces up to 10,000 years old. Especially notable is its "Chile Before Chile" hall, featuring world-class museography that immerses visitors in the deep roots of the territory.'
        },
        tag: { es: 'Patrimonio · Historia', en: 'Heritage · History' },
        img: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?auto=format&fit=crop&q=80&w=800',
        address: 'Bandera 361, Santiago',
        hours: { es: 'Martes a Domingo: 10:00 - 18:00', en: 'Tuesday to Sunday: 10:00 AM - 6:00 PM' },
        price: { es: 'Extranjeros: $10.000 CLP / Chilenos: $2.000', en: 'Foreigners: $10.000 CLP / Locals: $2.000' }
      }
    ]
  },

  'gastronomia': {
    hero: {
      img: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&q=80&w=1600',
      subtitle: {
        es: 'Desde la cocina tradicional chilena hasta los mejores restaurantes de autor, Santiago es una fiesta para el paladar.',
        en: 'From traditional Chilean cuisine to the best signature restaurants, Santiago is a feast for the palate.'
      }
    },
    events: [
      {
        name: { es: 'Santiago Food Week', en: 'Santiago Food Week' },
        date: { es: 'Junio · Anual', en: 'June · Annual' },
        desc: { es: 'Los mejores restaurantes de la ciudad ofrecen menús de degustación a precios accesibles.', en: 'The city\'s best restaurants offer tasting menus at accessible prices.' },
        emoji: '🍽️'
      },
      {
        name: { es: 'Ruta del Vino — Valle del Maipo', en: 'Wine Route — Maipo Valley' },
        date: { es: 'Todo el año', en: 'All year round' },
        desc: { es: 'A solo 45 min de Santiago, el Valle produce los mejores Cabernet Sauvignon del mundo.', en: 'Just 45 min from Santiago, the Valley produces the world\'s best Cabernet Sauvignon.' },
        emoji: '🍷'
      }
    ],
    places: [
      {
        id: 'mercado-central',
        name: { es: 'Mercado Central de Santiago', en: 'Santiago Central Market' },
        shortDesc: { 
          es: 'El templo de los mariscos y el pescado fresco de Chile. Un mercado histórico del siglo XIX.', 
          en: 'The temple of Chilean seafood and fresh fish. A historic 19th-century market.' 
        },
        longDesc: {
          es: 'Inaugurado en 1872, su intrincada estructura de hierro fundido (traída de Escocia) lo convierte en un hito arquitectónico, pero su verdadera alma es la comida. Aquí encontrarás la mayor y más fresca variedad de pescados y mariscos del Océano Pacífico: locos, picorocos, centolla, erizos y congrio. Los pasillos están repletos de pequeños restaurantes o "picadas" donde preparan caldillos y ceviches frescos a la vista.',
          en: 'Inaugurated in 1872, its intricate cast-iron structure (brought from Scotland) makes it an architectural landmark, but its true soul is the food. Here you will find the largest and freshest variety of fish and seafood from the Pacific Ocean: locos, picorocos, king crab, sea urchins, and conger eel. The aisles are packed with small restaurants or "picadas" where they prepare fresh caldillos and ceviches in plain sight.'
        },
        tag: { es: 'Mariscos · Tradicional', en: 'Seafood · Traditional' },
        img: 'https://images.unsplash.com/photo-1534482421-64566f976cfa?auto=format&fit=crop&q=80&w=800',
        address: 'San Pablo 967, Santiago',
        hours: { es: 'Lunes a Domingo: 06:00 - 17:00', en: 'Monday to Sunday: 6:00 AM - 5:00 PM' },
        price: { es: 'Almuerzos desde $10.000 CLP', en: 'Lunches from $10.000 CLP' }
      },
      {
        id: 'barrio-lastarria-gastro',
        name: { es: 'Barrio Lastarria — Restaurantes', en: 'Lastarria District — Dining' },
        shortDesc: { 
          es: 'El epicentro gastronómico bohemio de Santiago. Terrazas al aire libre y coctelería.', 
          en: 'Santiago\'s bohemian gastronomic epicenter. Open-air terraces and cocktail bars.' 
        },
        longDesc: {
          es: 'Pasear por Lastarria al atardecer es una de las mejores experiencias culinarias de la ciudad. Sus calles empedradas están flanqueadas por restaurantes que rescatan los sabores indígenas y coloniales de Chile con técnicas de alta cocina. Es el lugar perfecto para probar desde sofisticados cortes de carne patagónica y empanadas gourmet de pino, hasta refinadas copas de Carmenère en terrazas llenas de estilo europeo.',
          en: 'Strolling through Lastarria at sunset is one of the best culinary experiences in the city. Its cobbled streets are flanked by restaurants that rescue the indigenous and colonial flavors of Chile with haute cuisine techniques. It is the perfect place to try everything from sophisticated cuts of Patagonian meat and gourmet pine empanadas, to refined glasses of Carmenère on terraces full of European style.'
        },
        tag: { es: 'Cocina contemporánea', en: 'Contemporary cuisine' },
        img: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&q=80&w=800',
        address: 'José Victorino Lastarria, Santiago',
        hours: { es: 'Activo desde las 12:00 hasta la medianoche', en: 'Active from 12:00 PM until midnight' },
        price: { es: 'Almuerzos/Cenas: $20.000 - $45.000 CLP', en: 'Lunch/Dinner: $20.000 - $45.000 CLP' }
      },
      {
        id: 'la-vega-central',
        name: { es: 'La Vega Central', en: 'La Vega Central' },
        shortDesc: { 
          es: 'El mercado popular más grande de Santiago. Frutas exóticas, especias y cocina local.', 
          en: 'Santiago\'s largest popular market. Exotic fruits, spices, and local cuisine.' 
        },
        longDesc: {
          es: 'El corazón palpitante de Santiago. La Vega no es un lugar turístico arreglado, es un mercado caótico, vibrante y ruidoso donde los chefs locales compran sus ingredientes cada madrugada. Además de montones de paltas, chirimoyas, choclos gigantes y papas chilotas, en la "Vega Chica" se esconden las mejores cocinerías para desayunar un sándwich de potito o una cazuela humeante que levantaría a un muerto.',
          en: 'The beating heart of Santiago. La Vega is not a manicured tourist spot, it is a chaotic, vibrant, and noisy market where local chefs buy their ingredients every dawn. In addition to piles of avocados, cherimoyas, giant corn, and Chilote potatoes, "La Vega Chica" hides the best food stalls for breakfasting on a potito sandwich or a steaming cazuela that would raise the dead.'
        },
        tag: { es: 'Mercado · Auténtico', en: 'Market · Authentic' },
        img: 'https://images.unsplash.com/photo-1488459716781-31db52582fe9?auto=format&fit=crop&q=80&w=800',
        address: 'Antonia López de Bello, Recoleta',
        hours: { es: 'Lunes a Domingo: 05:00 - 15:00', en: 'Monday to Sunday: 5:00 AM - 3:00 PM' },
        price: { es: 'Platos desde $5.000 CLP', en: 'Dishes from $5.000 CLP' }
      },
      {
        id: 'cafe-especialidad',
        name: { es: 'Cafeterías de Especialidad', en: 'Specialty Coffee Shops' },
        shortDesc: { 
          es: 'Santiago tiene una escena de café de especialidad de clase mundial con tostadores locales.', 
          en: 'Santiago has a world-class specialty coffee scene with local roasters.' 
        },
        longDesc: {
          es: 'En los últimos 10 años, Santiago ha vivido una revolución cafetera. Olvida el café instantáneo; hoy en barrios como Providencia y Ñuñoa, los baristas trabajan con granos de origen único, tostados localmente. Cafeterías de diseño brutalista o nórdico sirven espressos perfectos, cold brews y pastelería artesanal. Son refugios urbanos ideales para trabajar, leer o simplemente degustar los delicados perfiles de sabor de los granos andinos.',
          en: 'In the last 10 years, Santiago has experienced a coffee revolution. Forget instant coffee; today in neighborhoods like Providencia and Ñuñoa, baristas work with single-origin beans, roasted locally. Brutalist or Nordic design coffee shops serve perfect espressos, cold brews, and artisanal pastries. They are ideal urban refuges for working, reading, or simply tasting the delicate flavor profiles of Andean beans.'
        },
        tag: { es: 'Café · Especialidad', en: 'Coffee · Specialty' },
        img: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&q=80&w=800',
        address: 'Múltiples locaciones (Providencia, Ñuñoa)',
        hours: { es: 'Varía, usualmente 08:30 - 19:30', en: 'Varies, usually 8:30 AM - 7:30 PM' },
        price: { es: 'Café desde $3.000 CLP', en: 'Coffee from $3.000 CLP' }
      },
      {
        id: 'cocina-chilena',
        name: { es: 'Cocina Chilena Tradicional', en: 'Traditional Chilean Cuisine' },
        shortDesc: { 
          es: 'El pastel de choclo, la cazuela y el charquicán son el alma de la cocina santiaguina.', 
          en: 'Pastel de choclo, cazuela, and charquicán are the soul of Santiago cuisine.' 
        },
        longDesc: {
          es: 'La "comida típica" es reconfortante y generosa. El plato estrella del verano es el Pastel de Choclo, una deliciosa mezcla de pino (carne picada), pollo y aceitunas cubiertas con una capa dorada de maíz molido al horno. En invierno, manda la Cazuela de vacuno, un caldo robusto con trozos enteros de zapallo, papa y choclo. Para acompañar: infaltable el pebre (salsa de tomate, cilantro y ají) con crujiente pan marraqueta recién horneado.',
          en: 'The "typical food" is comforting and generous. The star summer dish is Pastel de Choclo, a delicious mix of pino (minced meat), chicken, and olives topped with a golden layer of baked mashed corn. In winter, Beef Cazuela rules, a robust broth with whole pieces of pumpkin, potato, and corn. To accompany: the ubiquitous pebre (tomato, cilantro, and chili salsa) with crispy, freshly baked marraqueta bread.'
        },
        tag: { es: 'Cocina tradicional', en: 'Traditional food' },
        img: 'https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?auto=format&fit=crop&q=80&w=800',
        address: 'Restaurantes como Galindo, El Hoyo',
        hours: { es: '13:00 - 16:00 / 19:00 - 23:00', en: '1:00 PM - 4:00 PM / 7:00 PM - 11:00 PM' },
        price: { es: 'Platos principales $8.000 - $15.000 CLP', en: 'Main dishes $8.000 - $15.000 CLP' }
      },
      {
        id: 'ruta-pisco-sour',
        name: { es: 'Ruta del Pisco Sour', en: 'Pisco Sour Route' },
        shortDesc: { 
          es: 'El pisco sour chileno es una religión. Desde bares clásicos hasta diseño en Vitacura.', 
          en: 'The Chilean pisco sour is a religion. From classic bars to design spots in Vitacura.' 
        },
        longDesc: {
          es: 'El Pisco (destilado de uva) es el rey de los destilados en Chile, y su versión "Sour", batida con jugo de limón de pica fresco, azúcar flor y hielo, es el aperitivo obligatorio de toda comida santiaguina. La nueva generación de mixólogos ha llevado esta bebida clásica a nuevas alturas, incorporando macerados con hierbas endémicas como el rico-rico o la muña. Una noche de bar-hopping probando sours de autor es imperdible.',
          en: 'Pisco (grape distillate) is the king of spirits in Chile, and its "Sour" version, shaken with fresh pica lemon juice, powdered sugar, and ice, is the mandatory aperitif for every Santiago meal. The new generation of mixologists has taken this classic drink to new heights, incorporating infusions with endemic herbs like rico-rico or muña. A night of bar-hopping trying signature sours is a must.'
        },
        tag: { es: 'Coctelería · Cultura', en: 'Cocktails · Culture' },
        img: 'https://images.unsplash.com/photo-1551024709-8f23befc6f87?auto=format&fit=crop&q=80&w=800',
        address: 'Barrios Vitacura, Providencia, Centro',
        hours: { es: 'Desde las 18:30', en: 'From 6:30 PM' },
        price: { es: 'Cócteles $6.000 - $12.000 CLP', en: 'Cocktails $6.000 - $12.000 CLP' }
      }
    ]
  },

  'naturaleza-aventura': {
    hero: {
      img: 'https://images.unsplash.com/photo-1501854140801-50d01698950b?auto=format&fit=crop&q=80&w=1600',
      subtitle: {
        es: 'La Cordillera de los Andes a tus espaldas, parques urbanos de ensueño y aventuras para todos los niveles.',
        en: 'The Andes mountains at your back, dreamy urban parks and adventures for all levels.'
      }
    },
    events: [
      {
        name: { es: 'Temporada de esquí', en: 'Ski Season' },
        date: { es: 'Junio – Septiembre', en: 'June – September' },
        desc: { es: 'La temporada de nieve transforma los Andes en un destino de clase mundial.', en: 'The snow season transforms the Andes into a world-class destination.' },
        emoji: '🏔️'
      }
    ],
    places: [
      {
        id: 'valle-nevado',
        name: { es: 'Valle Nevado — Esquí en los Andes', en: 'Valle Nevado — Skiing' },
        shortDesc: { 
          es: 'Uno de los centros de esquí más grandes de Sudamérica con más de 30 pistas.', 
          en: 'One of South America\'s largest ski resorts with over 30 runs.' 
        },
        longDesc: {
          es: 'Diseñado a semejanza de los resorts franceses, Valle Nevado está incrustado a 3.000 metros de altura en el corazón de la Cordillera de los Andes, a tan solo hora y media de la ciudad. Cuenta con la superficie esquiable más extensa de Sudamérica, nieve en polvo de calidad mundial gracias a su altura, y la posibilidad única de practicar heliesquí. Fuera de temporada de invierno, se transforma en un centro de mountain bike y trekking de altura.',
          en: 'Designed to resemble French resorts, Valle Nevado is nestled at 3,000 meters altitude in the heart of the Andes Mountains, just an hour and a half from the city. It boasts the largest skiable surface in South America, world-class powder snow thanks to its altitude, and the unique possibility of heliskiing. Outside the winter season, it transforms into a high-altitude mountain biking and trekking center.'
        },
        tag: { es: 'Invierno · Aventura', en: 'Winter · Adventure' },
        img: 'https://images.unsplash.com/photo-1551698618-1dfe5d97d256?auto=format&fit=crop&q=80&w=800',
        address: 'Camino Valle Nevado, Lo Barnechea',
        hours: { es: '09:00 - 17:00 (Temporada Invierno)', en: '9:00 AM - 5:00 PM (Winter Season)' },
        price: { es: 'Tickets desde $55.000 CLP', en: 'Tickets from $55.000 CLP' }
      },
      {
        id: 'cerro-san-cristobal',
        name: { es: 'Parque Metropolitano (Cerro San Cristóbal)', en: 'San Cristóbal Hill' },
        shortDesc: { 
          es: 'El pulmón verde de Santiago con vistas 360°, zoológico y piscinas.', 
          en: 'Santiago\'s green lung with 360° views, a zoo, and swimming pools.' 
        },
        longDesc: {
          es: 'El cuarto parque urbano más grande del mundo se levanta majestuoso en medio de la ciudad. Coronando su cima se encuentra la estatua de la Virgen de la Inmaculada Concepción. Puedes subir a pie, en bicicleta, o utilizando los históricos y restaurados Funicular (1925) y Teleférico. Arriba te esperan jardines japoneses, piscinas en lo alto de la colina y la mejor vista panorámica de la selva de asfalto contrastando con la inmensa cordillera.',
          en: 'The fourth largest urban park in the world rises majestically in the middle of the city. Crowning its summit is the statue of the Virgin of the Immaculate Conception. You can hike up, bike, or use the historic and restored Funicular (1925) and Cable Car. At the top, Japanese gardens, hilltop swimming pools, and the best panoramic view of the concrete jungle contrasting with the immense mountain range await you.'
        },
        tag: { es: 'Trekking · Vistas', en: 'Hiking · Views' },
        img: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&q=80&w=800',
        address: 'Pio Nono 450, Recoleta (Entrada Funicular)',
        hours: { es: 'Lunes a Domingo: 06:00 - 20:00', en: 'Monday to Sunday: 6:00 AM - 8:00 PM' },
        price: { es: 'Parque Gratis / Teleférico $3.500 CLP', en: 'Park Free / Cable car $3.500 CLP' }
      },
      {
        id: 'cajon-del-maipo',
        name: { es: 'Cajón del Maipo', en: 'Cajón del Maipo' },
        shortDesc: { 
          es: 'Rafting en el río Maipo, senderismo por glaciares y termas naturales.', 
          en: 'Rafting on the Maipo river, glacier hiking, and natural hot springs.' 
        },
        longDesc: {
          es: 'A pocos kilómetros al sureste de Santiago, el valle del río Maipo es un espectacular cañón andino donde los santiaguinos escapan a respirar aire puro. Sus atractivos son inagotables: puedes hacer rafting nivel III en las turbulentas aguas del río, bañarte en las piscinas naturales humeantes de las Termas del Plomo a los pies de un glaciar, o fotografiar el gigantesco Embalse El Yeso, cuyas aguas turquesas rodeadas de picos nevados quitan el aliento.',
          en: 'A few kilometers southeast of Santiago, the Maipo river valley is a spectacular Andean canyon where Santiago residents escape to breathe pure air. Its attractions are endless: you can go level III rafting in the turbulent river waters, bathe in the steaming natural pools of Termas del Plomo at the foot of a glacier, or photograph the gigantic El Yeso Reservoir, whose turquoise waters surrounded by snow-capped peaks are breathtaking.'
        },
        tag: { es: 'Rafting · Termas', en: 'Rafting · Hot springs' },
        img: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&q=80&w=800',
        address: 'San José de Maipo, Región Metropolitana',
        hours: { es: 'Todo el día', en: 'All day' },
        price: { es: 'Tours desde $40.000 CLP', en: 'Tours from $40.000 CLP' }
      },
      {
        id: 'cerro-manquehue',
        name: { es: 'Cerro Manquehue', en: 'Cerro Manquehue' },
        shortDesc: { 
          es: 'El cerro favorito de los santiaguinos para el deporte de montaña con vistas privilegiadas.', 
          en: 'The favorite hill for mountain sports with privileged views.' 
        },
        longDesc: {
          es: 'Para los amantes del trekking exigente sin alejarse de la civilización, la cumbre del Manquehue (que en mapudungún significa "lugar de cóndores") es el trofeo definitivo. Tras una subida empinada y rocosa de unas 2 horas entre vegetación esclerófila (quillayes y boldos), la recompensa es una vista inigualable desde 1.638 metros de altura hacia los modernos rascacielos del sector oriente (Sanhattan) de Santiago. Es un clásico de los fines de semana.',
          en: 'For lovers of demanding trekking without leaving civilization, the summit of Manquehue (which in Mapudungun means "place of condors") is the ultimate trophy. After a steep, rocky 2-hour climb through sclerophyllous vegetation (quillayes and boldos), the reward is an unparalleled view from 1,638 meters high towards the modern skyscrapers of Santiago\'s eastern sector (Sanhattan). It\'s a weekend classic.'
        },
        tag: { es: 'Mountain bike · Trekking', en: 'Mountain bike · Hiking' },
        img: 'https://images.unsplash.com/photo-1558981403-c5f9899a28bc?auto=format&fit=crop&q=80&w=800',
        address: 'Vía Roja, Vitacura',
        hours: { es: '08:00 - 18:00 (Acceso Recomendado)', en: '8:00 AM - 6:00 PM (Recommended Access)' },
        price: { es: 'Gratis', en: 'Free' }
      },
      {
        id: 'reserva-clarillo',
        name: { es: 'Parque Nacional Río Clarillo', en: 'Río Clarillo National Park' },
        shortDesc: { 
          es: 'Reserva de 10.000 hectáreas hogar del cóndor andino, puma y el guanaco.', 
          en: '10,000-hectare reserve home to the Andean condor, puma, and guanaco.' 
        },
        longDesc: {
          es: 'Un oasis ecológico a solo 45 km del bullicio urbano. Protege uno de los últimos relictos de bosque esclerófilo (bosque siempre verde adaptado a la sequía) de la región central. Las aguas cristalinas y heladas del Río Clarillo recorren senderos interpretativos bien diseñados bajo la sombra de litres y peumos centenarios. Es el lugar perfecto para el avistamiento de aves endémicas y para comprender la frágil pero resistente biodiversidad de la zona central de Chile.',
          en: 'An ecological oasis just 45 km from the urban bustle. It protects one of the last relicts of sclerophyllous forest (evergreen forest adapted to drought) in the central region. The crystal clear, icy waters of the Clarillo River flow along well-designed interpretive trails under the shade of century-old litres and peumos. It is the perfect place for spotting endemic birds and understanding the fragile but resilient biodiversity of central Chile.'
        },
        tag: { es: 'Naturaleza · Senderismo', en: 'Nature · Hiking' },
        img: 'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&q=80&w=800',
        address: 'Camino El Principal, Pirque',
        hours: { es: 'Martes a Domingo: 08:30 - 17:00 (Reserva previa)', en: 'Tuesday to Sunday: 8:30 AM - 5:00 PM (Reservation req.)' },
        price: { es: 'Entrada: $4.000 CLP', en: 'Entry: $4.000 CLP' }
      },
      {
        id: 'parapente-chicureo',
        name: { es: 'Parapente en Chicureo', en: 'Paragliding in Chicureo' },
        shortDesc: { 
          es: 'Lánzate desde las laderas precordilleranas y sobrevuela el Valle de Santiago.', 
          en: 'Launch from the pre-Andean slopes and fly over the Santiago Valley.' 
        },
        longDesc: {
          es: 'Las corrientes térmicas perfectas que se forman en las faldas de la precordillera de Chicureo han convertido esta zona en la meca del vuelo libre en la Región Metropolitana. Con instructores certificados que manejan vuelos tándem, no necesitas experiencia previa. Correr hacia el abismo y sentir que flotas mágicamente a cientos de metros sobre los exclusivos campos y valles, con la ciudad a un lado y los Andes al otro, genera una sobredosis de adrenalina y paz absoluta al mismo tiempo.',
          en: 'The perfect thermal currents that form on the slopes of the Chicureo pre-Andes have turned this area into the mecca of free flight in the Metropolitan Region. With certified instructors managing tandem flights, you need no prior experience. Running towards the abyss and feeling yourself magically floating hundreds of meters above exclusive fields and valleys, with the city on one side and the Andes on the other, generates an overdose of adrenaline and absolute peace at the same time.'
        },
        tag: { es: 'Adrenalina · Aventura', en: 'Adrenaline · Adventure' },
        img: 'https://images.unsplash.com/photo-1540497077202-7c8a3999166f?auto=format&fit=crop&q=80&w=800',
        address: 'Cerros de Chicureo, Colina',
        hours: { es: 'Vuelos matutinos o al atardecer', en: 'Morning or sunset flights' },
        price: { es: 'Vuelo Tándem: ~$60.000 CLP', en: 'Tandem Flight: ~$60.000 CLP' }
      }
    ]
  },

  'ocio-vida-nocturna': {
    hero: {
      img: 'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&q=80&w=1600',
      subtitle: {
        es: 'Desde rooftops con vista a los Andes hasta clubes underground, Santiago ofrece entretenimiento para todos los gustos.',
        en: 'From rooftops with Andes views to underground clubs, Santiago offers entertainment for every taste.'
      }
    },
    events: [
      {
        name: { es: 'Lollapalooza Chile', en: 'Lollapalooza Chile' },
        date: { es: 'Marzo · Anual', en: 'March · Annual' },
        desc: { es: 'Tres días con los mejores artistas internacionales y nacionales en Cerrillos.', en: 'Three days with the best international and national artists in Cerrillos.' },
        emoji: '🎸'
      }
    ],
    places: [
      {
        id: 'club-jazz-bellavista',
        name: { es: 'Clubes de Jazz — Bellavista', en: 'Jazz Clubs — Bellavista' },
        shortDesc: { 
          es: 'El Barrio Bellavista es el epicentro de la noche santiaguina. Jazz en vivo y bares de autor.', 
          en: 'Barrio Bellavista is the epicenter of Santiago nightlife. Live jazz and craft bars.' 
        },
        longDesc: {
          es: 'El Barrio Bellavista ha sido por décadas el refugio de poetas (como Pablo Neruda, cuya casa "La Chascona" está aquí), músicos y bohemios. Sus calles repletas de murales y grafitis son el preámbulo perfecto para una noche intensa. Los históricos clubes de jazz escondidos en sus callejones, junto con teatros alternativos, patios repletos de mesas al aire libre y discotecas que mezclan desde reggaetón hasta electrónica underground, aseguran que la fiesta no termine hasta el amanecer.',
          en: 'Barrio Bellavista has for decades been the refuge of poets (like Pablo Neruda, whose house "La Chascona" is here), musicians, and bohemians. Its streets full of murals and graffiti are the perfect prelude to an intense night. The historic jazz clubs hidden in its alleys, along with alternative theaters, patios full of outdoor tables, and nightclubs that mix everything from reggaeton to underground electronica, ensure that the party doesn\'t stop until dawn.'
        },
        tag: { es: 'Música en vivo', en: 'Live music' },
        img: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&q=80&w=800',
        address: 'Pio Nono y Constitución, Providencia/Recoleta',
        hours: { es: 'Bares abiertos de 18:00 a 04:00 am', en: 'Bars open 6:00 PM to 4:00 AM' },
        price: { es: 'Tragos desde $5.000 CLP', en: 'Drinks from $5.000 CLP' }
      },
      {
        id: 'sky-costanera',
        name: { es: 'Rooftops & Sky Costanera', en: 'Rooftops & Sky Costanera' },
        shortDesc: { 
          es: 'Mirador Sky Costanera, a 300 metros de altura con vistas 360°.', 
          en: 'Sky Costanera viewpoint, at 300 meters height with 360° views.' 
        },
        longDesc: {
          es: 'El edificio más alto de Iberoamérica no solo es un ícono corporativo. El ascensor te catapulta al piso 62 en 40 segundos, abriéndose al Mirador Sky Costanera. Observar cómo el sol se esconde tras la Cordillera de la Costa mientras las luces doradas de Santiago se encienden como un tapiz infinito a tus pies, es sobrecogedor. Tras la puesta de sol, la tendencia es bajar a los sofisticados bares rooftop en Vitacura (como Red2One) para comenzar la noche desde las alturas.',
          en: 'The tallest building in Ibero-America is not just a corporate icon. The elevator catapults you to the 62nd floor in 40 seconds, opening up to the Sky Costanera Viewpoint. Watching the sun set behind the Coastal Range as Santiago\'s golden lights turn on like an infinite tapestry at your feet is breathtaking. After sunset, the trend is to head down to sophisticated rooftop bars in Vitacura (like Red2One) to start the night from the heights.'
        },
        tag: { es: 'Mirador · Vistas', en: 'Viewpoint · Views' },
        img: 'https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?auto=format&fit=crop&q=80&w=800',
        address: 'Av. Andrés Bello 2425, Providencia',
        hours: { es: '10:00 - 22:00', en: '10:00 AM - 10:00 PM' },
        price: { es: 'Entrada al mirador: $18.000 CLP', en: 'Viewpoint Entry: $18.000 CLP' }
      },
      {
        id: 'casino-monticello',
        name: { es: 'Casinos de Juego', en: 'Gaming Casinos' },
        shortDesc: { 
          es: 'Juegos de mesa, tragamonedas y espectáculos de primer nivel.', 
          en: 'Table games, slots, and first-class shows.' 
        },
        longDesc: {
          es: 'Aunque los grandes resorts de casino se encuentran estrictamente fuera de los límites de la ciudad capital (a unos 45 minutos al sur en Sun Monticello o hacia la costa en Viña del Mar), son un imán gigantesco para la vida nocturna premium. Monticello es un complejo al estilo Las Vegas, iluminando el valle oscuro de Angostura. Con arenas de conciertos llenas de estrellas de la música latina, restaurantes de chefs famosos, spas y kilómetros de alfombras con ruidosas tragamonedas, es escapismo puro.',
          en: 'Although the large casino resorts are strictly outside the capital city limits (about 45 minutes south at Sun Monticello or towards the coast in Viña del Mar), they are a giant magnet for premium nightlife. Monticello is a Vegas-style complex, illuminating the dark Angostura valley. With concert arenas filled with Latin music stars, celebrity chef restaurants, spas, and miles of carpets with noisy slot machines, it\'s pure escapism.'
        },
        tag: { es: 'Casino · Shows', en: 'Casino · Shows' },
        img: 'https://images.unsplash.com/photo-1596838132731-3301c3fd4317?auto=format&fit=crop&q=80&w=800',
        address: 'San Francisco de Mostazal (a 45 min de STGO)',
        hours: { es: 'Abierto 24 horas', en: 'Open 24 hours' },
        price: { es: 'Entrada base ~$4.000 CLP', en: 'Base entry ~$4.000 CLP' }
      },
      {
        id: 'teatro-caupolican',
        name: { es: 'Teatro Caupolicán', en: 'Teatro Caupolicán' },
        shortDesc: { 
          es: 'La sala de conciertos más icónica de Santiago. Capacidad para 5.000 personas.', 
          en: 'Santiago\'s most iconic concert hall. Capacity for 5,000 people.' 
        },
        longDesc: {
          es: 'Inaugurado en 1936, este enorme recinto circular con graderías inclinadas de madera resuena con la historia de la música popular y la lucha cívica chilena. Hoy es el coliseo por excelencia para las giras de bandas de rock, metal, indie, k-pop y grandes raves electrónicas. El sonido crudo, el sudor del "cancha" (pista) y el rugido abrumador del público chileno —conocido mundialmente como uno de los más apasionados del planeta— hacen que presenciar un show en el Caupolicán sea inolvidable.',
          en: 'Inaugurated in 1936, this huge circular venue with sloping wooden bleachers resonates with the history of popular music and Chilean civic struggle. Today it is the premier coliseum for touring rock, metal, indie, k-pop bands, and massive electronic raves. The raw sound, the sweat of the "cancha" (pit), and the overwhelming roar of the Chilean public—known worldwide as one of the most passionate on the planet—make witnessing a show at the Caupolicán unforgettable.'
        },
        tag: { es: 'Conciertos · Espectáculos', en: 'Concerts · Shows' },
        img: 'https://images.unsplash.com/photo-1459749411175-04bf5292ceea?auto=format&fit=crop&q=80&w=800',
        address: 'San Diego 850, Santiago',
        hours: { es: 'Depende de la cartelera', en: 'Depends on the schedule' },
        price: { es: 'Tickets según evento', en: 'Tickets according to event' }
      },
      {
        id: 'barrio-italia-noche',
        name: { es: 'Barrio Italia de Noche', en: 'Barrio Italia at Night' },
        shortDesc: { 
          es: 'De día galería de diseño; de noche se transforma en bares y cervecerías artesanales.', 
          en: 'By day design gallery; by night transforms into bars and craft breweries.' 
        },
        longDesc: {
          es: 'A medida que cierran las tiendas de diseño de autor y los talleres de restauración de muebles antiguos, Barrio Italia cambia de piel. Sus patios interiores laberínticos, conocidos como "galerías", encienden guirnaldas de luces cálidas y revelan pizzerías a la leña, barras especializadas en ginebra, restobares veganos y cantinas de sangría. Es la alternativa más relajada, hipster e íntima comparada con la locura fiestera de Bellavista.',
          en: 'As the author design shops and antique furniture restoration workshops close, Barrio Italia sheds its skin. Its labyrinthine inner courtyards, known as "galerías", turn on warm string lights and reveal wood-fired pizzerias, specialized gin bars, vegan restobars, and sangria cantinas. It is the most relaxed, hipster, and intimate alternative compared to the partying madness of Bellavista.'
        },
        tag: { es: 'Bares · Ambiente', en: 'Bars · Atmosphere' },
        img: 'https://images.unsplash.com/photo-1470337458703-46ad1756a187?auto=format&fit=crop&q=80&w=800',
        address: 'Av. Italia y Santa Isabel, Providencia',
        hours: { es: 'Hasta las 02:00 am', en: 'Until 2:00 AM' },
        price: { es: 'Cena y tragos: ~$25.000 CLP', en: 'Dinner and drinks: ~$25.000 CLP' }
      },
      {
        id: 'fantasilandia',
        name: { es: 'Fantasilandia', en: 'Fantasilandia' },
        shortDesc: { 
          es: 'El parque de atracciones más grande de Chile con montañas rusas de primer nivel.', 
          en: 'Chile\'s largest amusement park with first-class roller coasters.' 
        },
        longDesc: {
          es: 'Ubicado dramáticamente en medio del inmenso y frondoso Parque O\'Higgins, Fantasilandia ha sido el corazón del entretenimiento familiar (y adolescente) desde 1978. Con montañas rusas invertidas (Raptor), caídas libres de vértigo y zonas terroríficas de excelente producción, el parque es de calidad internacional. Visitarlo al anochecer, cuando las luces de neón de los juegos mecánicos giran caóticamente contrastando con los rascacielos de fondo, tiene una magia cinematográfica.',
          en: 'Dramatically located in the middle of the immense and leafy O\'Higgins Park, Fantasilandia has been the heart of family (and teenage) entertainment since 1978. With inverted roller coasters (Raptor), dizzying free falls, and excellently produced terrifying zones, the park is of international quality. Visiting it at dusk, when the neon lights of the mechanical rides spin chaotically contrasting with the skyscrapers in the background, has a cinematic magic.'
        },
        tag: { es: 'Parque de diversiones', en: 'Amusement park' },
        img: 'https://images.unsplash.com/photo-1579546929518-9e396f3cc809?auto=format&fit=crop&q=80&w=800',
        address: 'Parque O\'Higgins, Santiago',
        hours: { es: 'Sáb, Dom y Festivos: 12:00 - 19:00', en: 'Sat, Sun & Holidays: 12:00 PM - 7:00 PM' },
        price: { es: 'Pase general: $19.990 CLP', en: 'General Pass: $19.990 CLP' }
      }
    ]
  }
};
