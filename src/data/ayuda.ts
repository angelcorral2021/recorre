export interface InfoCard {
  icon: string;
  title: { es: string; en: string };
  desc: { es: string; en: string };
}

export interface FAQ {
  q: { es: string; en: string };
  a: { es: string; en: string };
}

export interface AyudaData {
  'info-util': InfoCard[];
  'seguridad': InfoCard[];
  'faqs': FAQ[];
}

export const ayudaData: AyudaData = {
  'info-util': [
    {
      icon: '<svg width="48" height="48" viewBox="0 0 48 48"><rect x="8" y="12" width="32" height="24" fill="#005B9F"/><circle cx="24" cy="24" r="8" fill="#F2B705"/><rect x="12" y="16" width="6" height="4" fill="#E03C31"/></svg>',
      title: { es: 'Moneda Oficial', en: 'Official Currency' },
      desc: {
        es: 'La moneda oficial es el Peso Chileno (CLP). Las tarjetas de crédito y débito (Visa, Mastercard) son ampliamente aceptadas en casi todos los comercios mediante el sistema "Transbank" o pago sin contacto. Aún así, es útil tener algo de efectivo para ferias libres o propinas.',
        en: 'The official currency is the Chilean Peso (CLP). Credit and debit cards (Visa, Mastercard) are widely accepted in almost all shops through the "Transbank" system or contactless payment. Still, it\'s useful to have some cash for street markets or tips.'
      }
    },
    {
      icon: '<svg width="48" height="48" viewBox="0 0 48 48"><rect x="12" y="8" width="24" height="32" fill="#005B9F"/><polygon points="24,8 36,24 12,24" fill="#F2B705"/></svg>',
      title: { es: 'Transporte Público (Tarjeta Bip!)', en: 'Public Transport (Bip! Card)' },
      desc: {
        es: 'Para usar el Metro de Santiago y los buses públicos (Red) necesitas una "Tarjeta Bip!". Se puede comprar y recargar en cualquier estación de Metro. Alternativamente, puedes pagar directamente escaneando un código QR con la app oficial de Red Movilidad.',
        en: 'To use the Santiago Metro and public buses (Red) you need a "Bip! Card". It can be purchased and recharged at any Metro station. Alternatively, you can pay directly by scanning a QR code with the official Red Movilidad app.'
      }
    },
    {
      icon: '<svg width="48" height="48" viewBox="0 0 48 48"><circle cx="24" cy="24" r="12" fill="#F2B705"/><polygon points="24,4 28,10 20,10" fill="#E03C31"/><polygon points="24,44 28,38 20,38" fill="#E03C31"/><polygon points="4,24 10,20 10,28" fill="#005B9F"/><polygon points="44,24 38,20 38,28" fill="#005B9F"/></svg>',
      title: { es: 'Clima y Estaciones', en: 'Weather & Seasons' },
      desc: {
        es: 'Santiago tiene un clima mediterráneo. Los veranos (Dic-Mar) son calurosos y secos (hasta 35°C). Los inviernos (Jun-Sep) son fríos (0°C a 15°C) y es cuando suele llover. La primavera y el otoño son las mejores épocas para visitar con un clima muy agradable.',
        en: 'Santiago has a Mediterranean climate. Summers (Dec-Mar) are hot and dry (up to 35°C / 95°F). Winters (Jun-Sep) are cold (0°C to 15°C / 32°F to 59°F) and it is when it usually rains. Spring and autumn are the best times to visit with very pleasant weather.'
      }
    },
    {
      icon: '<svg width="48" height="48" viewBox="0 0 48 48"><circle cx="24" cy="24" r="16" fill="#005B9F"/><circle cx="18" cy="24" r="4" fill="#F2B705"/><circle cx="30" cy="24" r="4" fill="#F2B705"/><rect x="22" y="8" width="4" height="8" fill="#E03C31"/></svg>',
      title: { es: 'Voltaje y Enchufes', en: 'Voltage & Plugs' },
      desc: {
        es: 'El voltaje en Chile es de 220V. Los enchufes utilizan clavijas tipo C (dos redondas, estilo europeo) o tipo L (tres redondas en línea). Se recomienda traer un adaptador universal si tus equipos usan 110V o enchufes planos.',
        en: 'The voltage in Chile is 220V. Plugs use type C (two round pins, European style) or type L (three round pins in a line). It is recommended to bring a universal adapter if your devices use 110V or flat plugs.'
      }
    },
    {
      icon: '<svg width="48" height="48" viewBox="0 0 48 48"><circle cx="24" cy="40" r="4" fill="#E03C31"/><path d="M 16 32 Q 24 24 32 32" fill="none" stroke="#F2B705" stroke-width="4"/><path d="M 8 24 Q 24 8 40 24" fill="none" stroke="#005B9F" stroke-width="4"/></svg>',
      title: { es: 'Conectividad y WiFi', en: 'Connectivity & WiFi' },
      desc: {
        es: 'El internet en Chile es uno de los más rápidos del mundo. Encontrarás WiFi gratuito en aeropuertos, centros comerciales y cafés. Si necesitas datos móviles, puedes comprar un chip (SIM card) prepago en cualquier kiosco o farmacia (Entel, WOM, Claro, Movistar).',
        en: 'Internet in Chile is among the fastest in the world. You will find free WiFi in airports, malls, and cafes. If you need mobile data, you can buy a prepaid SIM card at any kiosk or pharmacy (Entel, WOM, Claro, Movistar).'
      }
    }
  ],
  
  'seguridad': [
    {
      icon: '<svg width="48" height="48" viewBox="0 0 48 48"><polygon points="24,8 40,40 8,40" fill="#E03C31"/><rect x="22" y="20" width="4" height="12" fill="#FFFFFF"/><circle cx="24" cy="36" r="2" fill="#FFFFFF"/></svg>',
      title: { es: 'Números de Emergencia', en: 'Emergency Numbers' },
      desc: {
        es: 'Memoriza el "ABC" de las emergencias en Chile: 131 para Ambulancia (SAMU), 132 para Bomberos, y 133 para Carabineros (Policía).',
        en: 'Memorize the "ABC" of emergencies in Chile: 131 for Ambulance (SAMU), 132 for Firefighters (Bomberos), and 133 for Police (Carabineros).'
      }
    },
    {
      icon: '<svg width="48" height="48" viewBox="0 0 48 48"><path d="M 4 24 Q 24 4 44 24 Q 24 44 4 24" fill="#005B9F"/><circle cx="24" cy="24" r="8" fill="#F2B705"/><circle cx="24" cy="24" r="4" fill="#E03C31"/></svg>',
      title: { es: 'Precauciones Generales', en: 'General Precautions' },
      desc: {
        es: 'Santiago es relativamente segura, pero como en toda gran capital, debes estar atento a los carteristas ("lanzazos") en lugares concurridos como el transporte público o mercados. No uses el celular cerca de las puertas del Metro y mantén tu mochila a la vista.',
        en: 'Santiago is relatively safe, but as in any major capital, you should watch out for pickpockets in crowded places like public transport or markets. Avoid using your phone near Metro doors and keep your backpack in sight.'
      }
    },
    {
      icon: '<svg width="48" height="48" viewBox="0 0 48 48"><rect x="8" y="12" width="10" height="24" fill="#005B9F"/><rect x="18" y="8" width="12" height="24" fill="#F2B705"/><rect x="30" y="16" width="10" height="24" fill="#E03C31"/></svg>',
      title: { es: 'Zonas Recomendadas', en: 'Recommended Areas' },
      desc: {
        es: 'Los barrios turísticos como Providencia, Las Condes, Vitacura y el sector de Lastarria/Bellas Artes son muy seguros para caminar. Durante la noche, se recomienda moverse en taxis de aplicaciones (Uber, Cabify) si te alejas de estas zonas.',
        en: 'Tourist neighborhoods like Providencia, Las Condes, Vitacura, and the Lastarria/Bellas Artes area are very safe for walking. During the night, it is recommended to move around using ride-hailing apps (Uber, Cabify) if you leave these areas.'
      }
    },
    {
      icon: '<svg width="48" height="48" viewBox="0 0 48 48"><rect x="8" y="20" width="32" height="12" fill="#F2B705"/><rect x="16" y="12" width="16" height="8" fill="#E03C31"/><circle cx="16" cy="36" r="4" fill="#005B9F"/><circle cx="32" cy="36" r="4" fill="#005B9F"/></svg>',
      title: { es: 'Transporte Seguro', en: 'Safe Transportation' },
      desc: {
        es: 'Desde el aeropuerto, usa siempre el transporte oficial (buses Centropuerto/Turbus) o taxis autorizados en los counters del interior. Evita a las personas que ofrecen transporte informal en las puertas de salida.',
        en: 'From the airport, always use official transport (Centropuerto/Turbus buses) or authorized taxis at the indoor counters. Avoid people offering informal transport at the exit doors.'
      }
    }
  ],

  'faqs': [
    {
      q: { es: '¿Es el agua del grifo segura para beber?', en: 'Is tap water safe to drink?' },
      a: { 
        es: 'Sí, el agua potable en Santiago y en la mayor parte de Chile es completamente segura para beber. Tiene un alto contenido de minerales, por lo que su sabor puede parecer distinto, pero no causará problemas de salud.', 
        en: 'Yes, tap water in Santiago and most of Chile is completely safe to drink. It has a high mineral content, so its taste might seem different, but it will not cause health issues.' 
      }
    },
    {
      q: { es: '¿Es obligatorio dejar propina?', en: 'Is tipping mandatory?' },
      a: { 
        es: 'No es obligatoria, pero es la norma cultural. En restaurantes y bares siempre se sugerirá agregar un 10% de propina a la cuenta. Es costumbre aceptarla a menos que el servicio haya sido deficiente.', 
        en: 'It is not mandatory, but it is the cultural norm. In restaurants and bars, they will always suggest adding a 10% tip to the bill. It is customary to accept it unless the service was poor.' 
      }
    },
    {
      q: { es: '¿Funcionan Uber y otras aplicaciones de transporte?', en: 'Do Uber and other ride apps work?' },
      a: { 
        es: 'Sí, Uber, Cabify y DiDi funcionan perfectamente y son muy utilizados por los locales. Son una alternativa segura y económica, aunque operan en un área legal gris en Chile.', 
        en: 'Yes, Uber, Cabify, and DiDi work perfectly and are widely used by locals. They are a safe and affordable alternative, although they operate in a legal gray area in Chile.' 
      }
    },
    {
      q: { es: '¿Necesito visa para visitar Chile?', en: 'Do I need a visa to visit Chile?' },
      a: { 
        es: 'Los ciudadanos de muchos países (como EE. UU., UE, Reino Unido y la mayoría de Latinoamérica) no necesitan visa para estancias turísticas de hasta 90 días, pero al llegar a PDI (Inmigración) te darán un papel llamado "Tarjeta de Turismo". ¡No la pierdas, la necesitarás para salir del país y para eximir el IVA en los hoteles!', 
        en: 'Citizens of many countries (such as USA, EU, UK, and most of Latin America) do not need a visa for tourist stays up to 90 days, but upon arrival at PDI (Immigration) you will be given a paper called a "Tourist Card". Do not lose it, you will need it to leave the country and to waive the VAT at hotels!' 
      }
    },
    {
      q: { es: '¿Cuál es el mejor mes para visitar Santiago?', en: 'What is the best month to visit Santiago?' },
      a: { 
        es: 'Primavera (Octubre a Noviembre) y Otoño (Marzo a Mayo) son los meses ideales por el clima templado y los cielos despejados. Sin embargo, si vienes a esquiar, Julio y Agosto son los meses de invierno óptimos.', 
        en: 'Spring (October to November) and Autumn (March to May) are the ideal months due to mild weather and clear skies. However, if you are coming to ski, July and August are the optimal winter months.' 
      }
    }
  ]
};
