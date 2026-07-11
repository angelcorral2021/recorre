export interface MultiLangString {
  es: string;
  en: string;
  pt: string;
}

export interface PlanificaItem {
  slug: string;
  icon: string;
  title: MultiLangString;
  desc: MultiLangString;
  content: MultiLangString;
}

export interface PlanificaSection {
  title: MultiLangString;
  items: PlanificaItem[];
}

export interface PlanificaCategory {
  id: string;
  heroImg: string;
  sections: PlanificaSection[];
}

export const planificaData: PlanificaCategory[] = [
  {
    id: 'como-llegar',
    heroImg: 'https://images.unsplash.com/photo-1570710891163-6d246603bb97?auto=format&fit=crop&q=80&w=1200',
    sections: [
      {
        title: { es: 'Llegando a Santiago', en: 'Arriving in Santiago', pt: 'Chegando em Santiago' },
        items: [
          {
            slug: 'aeropuerto-scl',
            icon: '<svg width="48" height="48" viewBox="0 0 48 48"><polygon points="8,8 40,24 8,40" fill="#E03C31"/><rect x="8" y="20" width="16" height="8" fill="#005B9F"/></svg>',
            title: { es: 'Aeropuerto SCL', en: 'SCL Airport', pt: 'Aeroporto SCL' },
            desc: { 
              es: 'El Aeropuerto Internacional Arturo Merino Benítez es el principal punto de entrada. Se ubica a 30 minutos del centro de la ciudad.', 
              en: 'Arturo Merino Benitez International Airport is the main entry point. It is located 30 minutes from the city center.', 
              pt: 'O Aeroporto Internacional Arturo Merino Benítez é o principal ponto de entrada. Está localizado a 30 minutos do centro da cidade.' 
            },
            content: {
              es: `
                <p>El <strong>Aeropuerto Internacional Arturo Merino Benítez (SCL)</strong>, también conocido como Nuevo Pudahuel, es la principal puerta de entrada internacional a Chile. Está ubicado a unos 15 kilómetros al noroeste del centro de Santiago.</p>
                <h3>Terminales</h3>
                <p>El aeropuerto cuenta con dos terminales principales separadas por un paseo peatonal de 5 minutos:</p>
                <ul>
                  <li><strong>Terminal 1 (T1):</strong> Dedicada exclusivamente a vuelos nacionales dentro de Chile.</li>
                  <li><strong>Terminal 2 (T2):</strong> La nueva y moderna terminal internacional, inaugurada recientemente para vuelos al extranjero.</li>
                </ul>
                <h3>Servicios disponibles</h3>
                <p>El aeropuerto ofrece Wi-Fi gratuito de alta velocidad, casas de cambio, cajeros automáticos (ATMs) compatibles con redes internacionales, salas VIP y una amplia variedad de opciones gastronómicas 24/7.</p>
                <div class="tip-box">
                  <h4>💡 Consejo de Seguridad</h4>
                  <p>Al salir de aduanas, es común encontrar personas ofreciendo "taxis oficiales". <strong>Nunca aceptes</strong> transporte de personas en los pasillos. Dirígete siempre a los mostradores oficiales ("Vía Controlada") dentro del terminal antes de las puertas de salida.</p>
                </div>
              `,
              en: `
                <p><strong>Arturo Merino Benitez International Airport (SCL)</strong>, also known as Nuevo Pudahuel, is the main international gateway to Chile. It is located about 15 kilometers northwest of downtown Santiago.</p>
                <h3>Terminals</h3>
                <p>The airport has two main terminals separated by a 5-minute pedestrian walkway:</p>
                <ul>
                  <li><strong>Terminal 1 (T1):</strong> Dedicated exclusively to domestic flights within Chile.</li>
                  <li><strong>Terminal 2 (T2):</strong> The new and modern international terminal, recently opened for outbound flights.</li>
                </ul>
                <h3>Available Services</h3>
                <p>The airport offers free high-speed Wi-Fi, currency exchange, ATMs compatible with international networks, VIP lounges, and a wide variety of 24/7 dining options.</p>
                <div class="tip-box">
                  <h4>💡 Security Tip</h4>
                  <p>When exiting customs, it is common to find people offering "official taxis". <strong>Never accept</strong> transportation from people in the hallways. Always go to the official counters ("Vía Controlada") inside the terminal before the exit doors.</p>
                </div>
              `,
              pt: `
                <p>O <strong>Aeroporto Internacional Arturo Merino Benítez (SCL)</strong>, também conhecido como Nuevo Pudahuel, é a principal porta de entrada internacional para o Chile. Está localizado a cerca de 15 quilômetros a noroeste do centro de Santiago.</p>
                <h3>Terminais</h3>
                <p>O aeroporto possui dois terminais principais separados por uma passarela de pedestres de 5 minutos:</p>
                <ul>
                  <li><strong>Terminal 1 (T1):</strong> Dedicado exclusivamente a voos domésticos dentro do Chile.</li>
                  <li><strong>Terminal 2 (T2):</strong> O novo e moderno terminal internacional, inaugurado recentemente para voos ao exterior.</li>
                </ul>
                <h3>Serviços Disponíveis</h3>
                <p>O aeroporto oferece Wi-Fi gratuito de alta velocidade, casas de câmbio, caixas eletrônicos (ATMs) compatíveis com redes internacionais, salas VIP e uma ampla variedade de opções gastronômicas 24/7.</p>
                <div class="tip-box">
                  <h4>💡 Dica de Segurança</h4>
                  <p>Ao sair da alfândega, é comum encontrar pessoas oferecendo "táxis oficiais". <strong>Nunca aceite</strong> transporte de pessoas nos corredores. Dirija-se sempre aos balcões oficiais ("Vía Controlada") dentro do terminal antes das portas de saída.</p>
                </div>
              `
            }
          },
          {
            slug: 'buses-aeropuerto',
            icon: '<svg width="48" height="48" viewBox="0 0 48 48"><rect x="8" y="16" width="32" height="16" fill="#F2B705"/><circle cx="16" cy="36" r="6" fill="#E03C31"/><circle cx="32" cy="36" r="6" fill="#E03C31"/></svg>',
            title: { es: 'Buses desde el Aeropuerto', en: 'Airport Buses', pt: 'Ônibus do Aeroporto' },
            desc: { 
              es: 'Empresas como Centropuerto y TurBus ofrecen traslados económicos cada 10-15 minutos hacia estaciones de metro centrales.', 
              en: 'Companies like Centropuerto and TurBus offer affordable transfers every 10-15 minutes to central subway stations.', 
              pt: 'Empresas como Centropuerto e TurBus oferecem traslados econômicos a cada 10-15 minutos para as estações centrais de metrô.' 
            },
            content: {
              es: `
                <p>Moverse desde y hacia el aeropuerto usando buses es la opción más económica y muy confiable. Dos compañías operan este servicio: <strong>Centropuerto</strong> y <strong>TurBus Aeropuerto</strong>.</p>
                <h3>Frecuencias y Precios</h3>
                <p>Los buses salen cada 10 a 15 minutos directamente desde los andenes ubicados fuera del primer piso (llegadas) en ambos terminales. Un pasaje de ida cuesta aproximadamente <strong>$2.000 CLP (unos $2.5 USD)</strong> y puedes comprar el ticket en las boleterías ubicadas junto a las paradas.</p>
                <h3>Estaciones de Destino</h3>
                <ul>
                  <li><strong>Centropuerto:</strong> Termina su recorrido en la estación de Metro Los Héroes (Línea 1).</li>
                  <li><strong>TurBus:</strong> Termina en el Terminal de Buses Alameda, junto a la estación de Metro Universidad de Santiago (Línea 1).</li>
                </ul>
                <div class="tip-box">
                  <h4>💡 ¿Cuál elegir?</h4>
                  <p>Ambas compañías son igual de buenas. Si tu alojamiento está en el centro o Providencia, ambas líneas te dejarán a pasos de la Línea 1 del Metro, la cual conecta con casi todos los sectores turísticos.</p>
                </div>
              `,
              en: `
                <p>Moving to and from the airport using buses is the most economical and very reliable option. Two companies operate this service: <strong>Centropuerto</strong> and <strong>TurBus Aeropuerto</strong>.</p>
                <h3>Frequencies and Prices</h3>
                <p>Buses leave every 10 to 15 minutes directly from the platforms located outside the first floor (arrivals) in both terminals. A one-way ticket costs approximately <strong>$2,000 CLP (about $2.5 USD)</strong> and you can buy the ticket at the ticket offices located next to the stops.</p>
                <h3>Destination Stations</h3>
                <ul>
                  <li><strong>Centropuerto:</strong> Ends its route at the Los Héroes Metro station (Line 1).</li>
                  <li><strong>TurBus:</strong> Ends at the Alameda Bus Terminal, next to the Universidad de Santiago Metro station (Line 1).</li>
                </ul>
                <div class="tip-box">
                  <h4>💡 Which one to choose?</h4>
                  <p>Both companies are equally good. If your accommodation is in the center or Providencia, both lines will drop you off steps from Metro Line 1, which connects with almost all tourist sectors.</p>
                </div>
              `,
              pt: `
                <p>Mover-se de e para o aeroporto usando ônibus é a opção mais econômica e muito confiável. Duas empresas operam este serviço: <strong>Centropuerto</strong> e <strong>TurBus Aeropuerto</strong>.</p>
                <h3>Frequências e Preços</h3>
                <p>Os ônibus partem a cada 10 a 15 minutos diretamente das plataformas localizadas no primeiro andar (chegadas) em ambos os terminais. Uma passagem só de ida custa aproximadamente <strong>$2.000 CLP (cerca de $2,5 USD)</strong> e você pode comprar o bilhete nas bilheterias localizadas perto das paradas.</p>
                <h3>Estações de Destino</h3>
                <ul>
                  <li><strong>Centropuerto:</strong> Termina a sua rota na estação de Metrô Los Héroes (Linha 1).</li>
                  <li><strong>TurBus:</strong> Termina no Terminal de Ônibus Alameda, próximo à estação de Metrô Universidad de Santiago (Linha 1).</li>
                </ul>
                <div class="tip-box">
                  <h4>💡 Qual escolher?</h4>
                  <p>Ambas as empresas são igualmente boas. Se a sua acomodação for no centro ou em Providência, ambas as linhas deixarão você a poucos passos da Linha 1 do Metrô, que se conecta com quase todos os setores turísticos.</p>
                </div>
              `
            }
          }
        ]
      },
      {
        title: { es: 'Moverse por la ciudad', en: 'Getting around the city', pt: 'Movendo-se pela cidade' },
        items: [
          {
            slug: 'metro',
            icon: '<svg width="48" height="48" viewBox="0 0 48 48"><rect x="12" y="8" width="24" height="32" fill="#005B9F"/><polygon points="24,8 36,24 12,24" fill="#F2B705"/></svg>',
            title: { es: 'Metro de Santiago', en: 'Santiago Subway', pt: 'Metrô de Santiago' },
            desc: { 
              es: 'Es el sistema de transporte más rápido y extenso de Sudamérica. Necesitarás una Tarjeta Bip! para viajar.', 
              en: 'It is the fastest and most extensive transport system in South America. You will need a Bip! Card to travel.', 
              pt: 'É o sistema de transporte mais rápido e extenso da América do Sul. Você precisará de um Cartão Bip! para viajar.' 
            },
            content: {
              es: `
                <p>El <strong>Metro de Santiago</strong> es considerado uno de los sistemas de transporte subterráneo más modernos, limpios y eficientes de toda América Latina.</p>
                <h3>Líneas y Cobertura</h3>
                <p>Cuenta con múltiples líneas identificadas por colores. Las más útiles para los turistas son la <strong>Línea 1 (Roja)</strong>, que atraviesa toda la ciudad por el eje central conectando el centro histórico con el distrito financiero, y la <strong>Línea 5 (Verde)</strong> para ir al barrio Bellavista o al Museo de la Memoria.</p>
                <h3>Tarifas y Tarjeta Bip!</h3>
                <p>No se vende efectivo ni boletos de papel. Necesitas comprar una <strong>Tarjeta Bip!</strong> en las boleterías (tiene un costo por el plástico) y cargarla con dinero. Un pasaje varía según la hora del día, costando en promedio unos $800 CLP.</p>
                <div class="tip-box">
                  <h4>💡 Alternativa moderna</h4>
                  <p>Puedes descargar la app "Red Movilidad" en tu teléfono, crear una Bip! digital y pagar el Metro directamente apoyando tu celular en los validadores que cuentan con lector de código QR.</p>
                </div>
              `,
              en: `
                <p>The <strong>Santiago Metro</strong> is considered one of the most modern, clean, and efficient subway systems in all of Latin America.</p>
                <h3>Lines and Coverage</h3>
                <p>It has multiple lines identified by colors. The most useful for tourists are <strong>Line 1 (Red)</strong>, which crosses the entire city along the central axis connecting the historic center with the financial district, and <strong>Line 5 (Green)</strong> to go to the Bellavista neighborhood or the Museum of Memory.</p>
                <h3>Fares and Bip! Card</h3>
                <p>No cash or paper tickets are sold. You need to buy a <strong>Bip! Card</strong> at the ticket booths (the plastic card has a fee) and load it with money. A ticket varies depending on the time of day, costing around $800 CLP on average.</p>
                <div class="tip-box">
                  <h4>💡 Modern alternative</h4>
                  <p>You can download the "Red Movilidad" app on your phone, create a digital Bip! card, and pay the Metro directly by tapping your phone on the validators equipped with a QR code reader.</p>
                </div>
              `,
              pt: `
                <p>O <strong>Metrô de Santiago</strong> é considerado um dos sistemas de transporte subterrâneo mais modernos, limpos e eficientes de toda a América Latina.</p>
                <h3>Linhas e Cobertura</h3>
                <p>Possui múltiplas linhas identificadas por cores. As mais úteis para os turistas são a <strong>Linha 1 (Vermelha)</strong>, que cruza toda a cidade ao longo do eixo central conectando o centro histórico com o distrito financeiro, e a <strong>Linha 5 (Verde)</strong> para ir ao bairro Bellavista ou ao Museu da Memória.</p>
                <h3>Tarifas e Cartão Bip!</h3>
                <p>Não se vende dinheiro nem bilhetes de papel. Você precisa comprar um <strong>Cartão Bip!</strong> nas bilheterias (o plástico tem um custo) e carregá-lo com dinheiro. Uma passagem varia dependendo da hora do dia, custando em média cerca de $800 CLP.</p>
                <div class="tip-box">
                  <h4>💡 Alternativa moderna</h4>
                  <p>Você pode baixar o aplicativo "Red Movilidad" no seu telefone, criar um cartão Bip! digital e pagar o Metrô diretamente tocando seu telefone nos validadores equipados com um leitor de código QR.</p>
                </div>
              `
            }
          },
          {
            slug: 'taxis',
            icon: '<svg width="48" height="48" viewBox="0 0 48 48"><rect x="8" y="20" width="32" height="12" fill="#F2B705"/><rect x="16" y="12" width="16" height="8" fill="#E03C31"/><circle cx="16" cy="36" r="4" fill="#005B9F"/><circle cx="32" cy="36" r="4" fill="#005B9F"/></svg>',
            title: { es: 'Taxis y Aplicaciones', en: 'Taxis and Apps', pt: 'Táxis e Aplicativos' },
            desc: { 
              es: 'Uber, Cabify y Didi funcionan excelentemente. Para los taxis tradicionales, usa siempre los que tienen techo amarillo y exige el taxímetro.', 
              en: 'Uber, Cabify, and Didi work excellently. For traditional taxis, always use those with a yellow roof and demand the meter.', 
              pt: 'Uber, Cabify e Didi funcionam excelentemente. Para táxis tradicionais, sempre use aqueles com teto amarelo e exija o taxímetro.' 
            },
            content: {
              es: `
                <p>Moverse en auto particular por Santiago es cómodo, aunque el tráfico puede ser denso durante las horas pico (7-9 AM y 6-8 PM).</p>
                <h3>Aplicaciones Móviles (Ride-hailing)</h3>
                <p>Las aplicaciones como <strong>Uber, Cabify y DiDi</strong> son extremadamente populares y muy utilizadas tanto por locales como turistas. Ofrecen viajes seguros, limpios y a buen precio, con la ventaja de que el cobro se hace a la tarjeta de crédito de la app, evitando problemas con el cambio.</p>
                <h3>Taxis Tradicionales</h3>
                <p>Si tomas un taxi en la calle, busca siempre los <strong>taxis oficiales de color negro con techo amarillo</strong>. Todos están obligados por ley a usar un taxímetro visible. Si te subes y el chofer no lo enciende, bájate de inmediato.</p>
                <div class="tip-box">
                  <h4>💡 Evita fraudes</h4>
                  <p>Si pagas un taxi tradicional con billetes grandes (ej. 20.000 CLP), menciona la denominación del billete en voz alta ("Aquí tiene veinte mil") para evitar estafas donde el chofer cambia el billete rápidamente por uno de 2.000 CLP y alega que le pagaste menos.</p>
                </div>
              `,
              en: `
                <p>Getting around Santiago by car is comfortable, although traffic can be heavy during peak hours (7-9 AM and 6-8 PM).</p>
                <h3>Ride-hailing Apps</h3>
                <p>Apps like <strong>Uber, Cabify, and DiDi</strong> are extremely popular and widely used by both locals and tourists. They offer safe, clean, and well-priced trips, with the advantage that the charge goes to your app's credit card, avoiding problems with change.</p>
                <h3>Traditional Taxis</h3>
                <p>If you hail a taxi on the street, always look for the <strong>official black taxis with a yellow roof</strong>. They are all required by law to use a visible meter. If you get in and the driver doesn't turn it on, get out immediately.</p>
                <div class="tip-box">
                  <h4>💡 Avoid scams</h4>
                  <p>If you pay a traditional taxi with large bills (e.g., 20,000 CLP), mention the denomination out loud ("Here is twenty thousand") to avoid scams where the driver quickly swaps the bill for a 2,000 CLP one and claims you paid less.</p>
                </div>
              `,
              pt: `
                <p>Mover-se por Santiago de carro é confortável, embora o trânsito possa ser intenso durante os horários de pico (7-9 AM e 6-8 PM).</p>
                <h3>Aplicativos de Transporte (Ride-hailing)</h3>
                <p>Aplicativos como <strong>Uber, Cabify e DiDi</strong> são extremamente populares e amplamente utilizados tanto por locais quanto por turistas. Oferecem viagens seguras, limpas e com bom preço, com a vantagem de que a cobrança é feita no cartão de crédito do aplicativo, evitando problemas com o troco.</p>
                <h3>Táxis Tradicionais</h3>
                <p>Se você pegar um táxi na rua, procure sempre os <strong>táxis oficiais pretos com teto amarelo</strong>. Todos são obrigados por lei a usar um taxímetro visível. Se você entrar e o motorista não o ligar, saia imediatamente.</p>
                <div class="tip-box">
                  <h4>💡 Evite fraudes</h4>
                  <p>Se você pagar um táxi tradicional com notas grandes (ex: 20.000 CLP), mencione o valor da nota em voz alta ("Aqui estão vinte mil") para evitar fraudes onde o motorista troca rapidamente a nota por uma de 2.000 CLP e alega que você pagou menos.</p>
                </div>
              `
            }
          }
        ]
      }
    ]
  },
  {
    id: 'donde-alojar',
    heroImg: 'https://images.unsplash.com/photo-1589808381865-fbaee3cb4eab?auto=format&fit=crop&q=80&w=1200',
    sections: [
      {
        title: { es: 'Mejores Barrios', en: 'Best Neighborhoods', pt: 'Melhores Bairros' },
        items: [
          {
            slug: 'lastarria',
            icon: '<svg width="48" height="48" viewBox="0 0 48 48"><circle cx="24" cy="24" r="16" fill="#E03C31"/><polygon points="24,8 40,40 8,40" fill="rgba(0,91,159,0.7)"/></svg>',
            title: { es: 'Barrio Lastarria', en: 'Lastarria Neighborhood', pt: 'Bairro Lastarria' },
            desc: { 
              es: 'Ideal para amantes del arte, gastronomía y cultura. Lleno de cafés, cines independientes y museos a pasos de distancia.', 
              en: 'Ideal for art, gastronomy, and culture lovers. Full of cafes, independent cinemas, and museums within walking distance.', 
              pt: 'Ideal para os amantes de arte, gastronomia e cultura. Cheio de cafés, cinemas independentes e museus a uma curta distância.' 
            },
            content: {
              es: `
                <p>El <strong>Barrio Lastarria</strong> es un oasis europeo en el corazón de Santiago. Destaca por su arquitectura patrimonial de principios del siglo XX y su vibrante vida cultural.</p>
                <h3>¿Por qué alojar aquí?</h3>
                <p>Es perfecto si quieres caminar hacia los principales atractivos. Estás a pasos del Parque Forestal, el Museo de Bellas Artes y el Cerro Santa Lucía. Las calles adoquinadas albergan una excelente oferta de restaurantes, bares y tiendas de diseño.</p>
                <h3>Atmósfera</h3>
                <p>Bohemia y elegante. Ideal para parejas o viajeros solteros que disfrutan de salir a comer en la noche o tomar un café rodeado de exposiciones artísticas.</p>
              `,
              en: `
                <p>The <strong>Lastarria Neighborhood</strong> is a European oasis in the heart of Santiago. It stands out for its early 20th-century heritage architecture and vibrant cultural life.</p>
                <h3>Why stay here?</h3>
                <p>It's perfect if you want to walk to the main attractions. You are steps from Forestal Park, the Museum of Fine Arts, and Santa Lucia Hill. The cobbled streets host an excellent array of restaurants, bars, and design shops.</p>
                <h3>Atmosphere</h3>
                <p>Bohemian and elegant. Ideal for couples or solo travelers who enjoy going out to eat at night or having coffee surrounded by art exhibitions.</p>
              `,
              pt: `
                <p>O <strong>Bairro Lastarria</strong> é um oásis europeu no coração de Santiago. Destaca-se por sua arquitetura patrimonial do início do século XX e vibrante vida cultural.</p>
                <h3>Por que ficar aqui?</h3>
                <p>É perfeito se você quiser caminhar até as principais atrações. Você está a poucos passos do Parque Florestal, do Museu de Belas Artes e do Morro Santa Lúcia. As ruas de paralelepípedos abrigam uma excelente variedade de restaurantes, bares e lojas de design.</p>
                <h3>Atmosfera</h3>
                <p>Boêmia e elegante. Ideal para casais ou viajantes individuais que gostam de sair para comer à noite ou tomar um café cercado por exposições de arte.</p>
              `
            }
          },
          {
            slug: 'providencia',
            icon: '<svg width="48" height="48" viewBox="0 0 48 48"><circle cx="24" cy="16" r="12" fill="#005B9F"/><rect x="20" y="28" width="8" height="16" fill="#F2B705"/><circle cx="14" cy="24" r="8" fill="#E03C31"/></svg>',
            title: { es: 'Providencia', en: 'Providencia', pt: 'Providência' },
            desc: { 
              es: 'Seguro, verde y céntrico. Ofrece una mezcla perfecta entre vida residencial tranquila y excelente conectividad comercial.', 
              en: 'Safe, green, and central. Offers a perfect mix between quiet residential life and excellent commercial connectivity.', 
              pt: 'Seguro, verde e central. Oferece uma mistura perfeita entre vida residencial tranquila e excelente conectividade comercial.' 
            },
            content: {
              es: `
                <p><strong>Providencia</strong> es considerada la comuna más equilibrada de Santiago. Es el punto de encuentro perfecto entre el bullicioso centro y los tranquilos distritos residenciales del este.</p>
                <h3>¿Por qué alojar aquí?</h3>
                <p>Es inmensamente segura y verde, con avenidas bordeadas de grandes plátanos orientales. Si te gusta el ciclismo urbano, esta comuna cuenta con excelentes ciclovías. Además, el comercio es interminable, destacando lugares como el Mall Costanera Center y el animado Barrio Italia en su frontera sur.</p>
                <div class="tip-box">
                  <h4>💡 Mejor Zona</h4>
                  <p>Busca hoteles o apartamentos cerca de las estaciones de Metro Los Leones o Pedro de Valdivia. Es la mejor conectividad de toda la ciudad.</p>
                </div>
              `,
              en: `
                <p><strong>Providencia</strong> is considered the most balanced district in Santiago. It is the perfect meeting point between the bustling center and the quiet eastern residential districts.</p>
                <h3>Why stay here?</h3>
                <p>It is immensely safe and green, with avenues lined with large oriental plane trees. If you like urban cycling, this commune has excellent bike lanes. Furthermore, the commerce is endless, highlighting places like the Costanera Center Mall and the lively Barrio Italia on its southern border.</p>
                <div class="tip-box">
                  <h4>💡 Best Area</h4>
                  <p>Look for hotels or apartments near the Los Leones or Pedro de Valdivia Metro stations. It offers the best connectivity in the entire city.</p>
                </div>
              `,
              pt: `
                <p><strong>Providência</strong> é considerada a comuna mais equilibrada de Santiago. É o ponto de encontro perfeito entre o centro movimentado e os distritos residenciais tranquilos do leste.</p>
                <h3>Por que ficar aqui?</h3>
                <p>É imensamente segura e verde, com avenidas arborizadas com grandes plátanos orientais. Se você gosta de ciclismo urbano, esta comuna possui excelentes ciclovias. Além disso, o comércio é interminável, destacando lugares como o Shopping Costanera Center e o animado Bairro Italia na sua fronteira sul.</p>
                <div class="tip-box">
                  <h4>💡 Melhor Área</h4>
                  <p>Procure hotéis ou apartamentos próximos às estações de Metrô Los Leones ou Pedro de Valdivia. Oferece a melhor conectividade de toda a cidade.</p>
                </div>
              `
            }
          },
          {
            slug: 'las-condes',
            icon: '<svg width="48" height="48" viewBox="0 0 48 48"><rect x="8" y="16" width="12" height="24" fill="#E03C31"/><rect x="24" y="8" width="16" height="32" fill="#005B9F"/><rect x="28" y="12" width="8" height="8" fill="#F2B705"/></svg>',
            title: { es: 'Las Condes (El Golf)', en: 'Las Condes (El Golf)', pt: 'Las Condes (El Golf)' },
            desc: { 
              es: 'El distrito financiero moderno. Destaca por hoteles de lujo, rascacielos y restaurantes de alta cocina internacional.', 
              en: 'The modern financial district. Stands out for luxury hotels, skyscrapers, and high international cuisine restaurants.', 
              pt: 'O moderno distrito financeiro. Destaca-se por hotéis de luxo, arranha-céus e restaurantes de alta gastronomia internacional.' 
            },
            content: {
              es: `
                <p>La comuna de <strong>Las Condes</strong>, especialmente en el sector conocido como Barrio El Golf, es el distrito corporativo y de lujo de la capital chilena (a menudo apodado "Sanhattan").</p>
                <h3>¿Por qué alojar aquí?</h3>
                <p>Es la zona con los estándares más altos de seguridad y modernidad. Aquí encontrarás cadenas hoteleras internacionales de 5 estrellas (Ritz-Carlton, W Hotel). Las calles están impecables y es ideal si buscas tranquilidad máxima o vienes en un viaje de negocios.</p>
                <h3>Gastronomía</h3>
                <p>Las calles Isidora Goyenechea y Alonso de Córdova albergan los restaurantes más finos y elegantes de la ciudad, desde carnes argentinas hasta sofisticada cocina fusión peruano-japonesa.</p>
              `,
              en: `
                <p>The commune of <strong>Las Condes</strong>, especially in the area known as Barrio El Golf, is the corporate and luxury district of the Chilean capital (often dubbed "Sanhattan").</p>
                <h3>Why stay here?</h3>
                <p>It is the area with the highest standards of safety and modernity. Here you will find international 5-star hotel chains (Ritz-Carlton, W Hotel). The streets are impeccable and it is ideal if you seek maximum tranquility or are on a business trip.</p>
                <h3>Gastronomy</h3>
                <p>Isidora Goyenechea and Alonso de Córdova streets host the finest and most elegant restaurants in the city, from Argentine steakhouses to sophisticated Peruvian-Japanese fusion cuisine.</p>
              `,
              pt: `
                <p>A comuna de <strong>Las Condes</strong>, especialmente na área conhecida como Bairro El Golf, é o distrito corporativo e de luxo da capital chilena (muitas vezes apelidado de "Sanhattan").</p>
                <h3>Por que ficar aqui?</h3>
                <p>É a área com os mais altos padrões de segurança e modernidade. Aqui você encontrará cadeias de hotéis internacionais 5 estrelas (Ritz-Carlton, W Hotel). As ruas são impecáveis e é ideal se você busca tranquilidade máxima ou está em uma viagem de negócios.</p>
                <h3>Gastronomia</h3>
                <p>As ruas Isidora Goyenechea e Alonso de Córdova abrigam os restaurantes mais requintados e elegantes da cidade, desde churrascarias argentinas até sofisticada culinária de fusão peruano-japonesa.</p>
              `
            }
          }
        ]
      }
    ]
  },
  {
    id: 'consejos',
    heroImg: 'https://images.unsplash.com/photo-1558913166-513b6cb59f93?auto=format&fit=crop&q=80&w=1200',
    sections: [
      {
        title: { es: 'Información Esencial', en: 'Essential Information', pt: 'Informações Essenciais' },
        items: [
          {
            slug: 'moneda',
            icon: '<svg width="48" height="48" viewBox="0 0 48 48"><rect x="8" y="12" width="32" height="24" fill="#005B9F"/><circle cx="24" cy="24" r="8" fill="#F2B705"/><rect x="12" y="16" width="6" height="4" fill="#E03C31"/></svg>',
            title: { es: 'Moneda local', en: 'Local currency', pt: 'Moeda local' },
            desc: { 
              es: 'El Peso Chileno (CLP). Las tarjetas de crédito y débito son ampliamente aceptadas, incluso para compras menores.', 
              en: 'The Chilean Peso (CLP). Credit and debit cards are widely accepted, even for minor purchases.', 
              pt: 'O Peso Chileno (CLP). Cartões de crédito e débito são amplamente aceitos, mesmo para pequenas compras.' 
            },
            content: {
              es: `
                <p>La moneda de Chile es el <strong>Peso Chileno (CLP)</strong>. Existen billetes de 1.000, 2.000, 5.000, 10.000 y 20.000 pesos, y monedas de 10, 50, 100 y 500 pesos.</p>
                <h3>Uso de Tarjetas</h3>
                <p>A diferencia de muchos países de la región, el uso de tarjetas bancarias (contactless/NFC, Apple Pay, Google Pay) está increíblemente masificado. En el 95% de los locales comerciales, supermercados y restaurantes podrás pagar con tarjeta sin importe mínimo.</p>
                <div class="tip-box">
                  <h4>💡 Casas de Cambio</h4>
                  <p>Si necesitas cambiar efectivo, los mejores tipos de cambio se encuentran en la calle Agustinas (en el centro histórico) o en el sector de Pedro de Valdivia. Evita cambiar dinero en el aeropuerto si no es estrictamente necesario, ya que la tasa de cambio es desfavorable.</p>
                </div>
              `,
              en: `
                <p>The currency of Chile is the <strong>Chilean Peso (CLP)</strong>. There are bills of 1,000, 2,000, 5,000, 10,000, and 20,000 pesos, and coins of 10, 50, 100, and 500 pesos.</p>
                <h3>Use of Cards</h3>
                <p>Unlike many countries in the region, the use of bank cards (contactless/NFC, Apple Pay, Google Pay) is incredibly widespread. In 95% of commercial premises, supermarkets, and restaurants, you can pay by card with no minimum amount.</p>
                <div class="tip-box">
                  <h4>💡 Currency Exchange</h4>
                  <p>If you need to exchange cash, the best exchange rates are found on Agustinas Street (in the historic center) or in the Pedro de Valdivia sector. Avoid exchanging money at the airport unless strictly necessary, as the exchange rate is unfavorable.</p>
                </div>
              `,
              pt: `
                <p>A moeda do Chile é o <strong>Peso Chileno (CLP)</strong>. Existem notas de 1.000, 2.000, 5.000, 10.000 e 20.000 pesos, e moedas de 10, 50, 100 e 500 pesos.</p>
                <h3>Uso de Cartões</h3>
                <p>Diferente de muitos países da região, o uso de cartões bancários (contactless/NFC, Apple Pay, Google Pay) é incrivelmente difundido. Em 95% dos estabelecimentos comerciais, supermercados e restaurantes, você pode pagar com cartão sem valor mínimo.</p>
                <div class="tip-box">
                  <h4>💡 Casas de Câmbio</h4>
                  <p>Se você precisar trocar dinheiro, as melhores taxas de câmbio são encontradas na Rua Agustinas (no centro histórico) ou no setor de Pedro de Valdivia. Evite trocar dinheiro no aeroporto a menos que seja estritamente necessário, pois a taxa de câmbio é desfavorável.</p>
                </div>
              `
            }
          },
          {
            slug: 'clima',
            icon: '<svg width="48" height="48" viewBox="0 0 48 48"><circle cx="24" cy="24" r="12" fill="#F2B705"/><polygon points="24,4 28,10 20,10" fill="#E03C31"/><polygon points="24,44 28,38 20,38" fill="#E03C31"/><polygon points="4,24 10,20 10,28" fill="#005B9F"/><polygon points="44,24 38,20 38,28" fill="#005B9F"/></svg>',
            title: { es: 'Clima y Cuándo ir', en: 'Weather and When to go', pt: 'Clima e Quando ir' },
            desc: { 
              es: 'Santiago tiene veranos muy calurosos (Ene-Feb) e inviernos fríos (Jun-Ago). Primavera y Otoño son ideales para caminar.', 
              en: 'Santiago has very hot summers (Jan-Feb) and cold winters (Jun-Aug). Spring and Autumn are ideal for walking.', 
              pt: 'Santiago tem verões muito quentes (Jan-Fev) e invernos frios (Jun-Ago). Primavera e Outono são ideais para caminhar.' 
            },
            content: {
              es: `
                <p>Santiago goza de un clima mediterráneo muy marcado, caracterizado por una alta oscilación térmica: hace mucho calor en el día y se enfría rápido al anochecer.</p>
                <h3>Estaciones</h3>
                <ul>
                  <li><strong>Verano (Diciembre a Marzo):</strong> Extremadamente seco y caluroso. Las temperaturas pueden alcanzar los 35°C. No llueve.</li>
                  <li><strong>Invierno (Junio a Agosto):</strong> Frío, con temperaturas entre 0°C y 15°C. Es la época de lluvias, y es cuando puedes ver la cordillera nevada de forma espectacular.</li>
                  <li><strong>Primavera y Otoño:</strong> Las mejores épocas. Días soleados y agradables rondando los 22°C.</li>
                </ul>
                <div class="tip-box">
                  <h4>💡 Qué empacar</h4>
                  <p>Aplica la regla de la "cebolla" (vístete en capas). Incluso en un día cálido de primavera, las mañanas y noches requerirán una chaqueta abrigada.</p>
                </div>
              `,
              en: `
                <p>Santiago enjoys a very distinct Mediterranean climate, characterized by high thermal oscillation: it is very hot during the day and cools down quickly after dark.</p>
                <h3>Seasons</h3>
                <ul>
                  <li><strong>Summer (December to March):</strong> Extremely dry and hot. Temperatures can reach 35°C (95°F). It does not rain.</li>
                  <li><strong>Winter (June to August):</strong> Cold, with temperatures between 0°C and 15°C (32°F - 59°F). This is the rainy season, and it's when you can see the snowy Andes mountain range spectacularly.</li>
                  <li><strong>Spring and Autumn:</strong> The best times. Sunny and pleasant days around 22°C (72°F).</li>
                </ul>
                <div class="tip-box">
                  <h4>💡 What to pack</h4>
                  <p>Apply the "onion" rule (dress in layers). Even on a warm spring day, mornings and nights will require a warm jacket.</p>
                </div>
              `,
              pt: `
                <p>Santiago desfruta de um clima mediterrâneo muito distinto, caracterizado por alta oscilação térmica: faz muito calor durante o dia e esfria rapidamente após o anoitecer.</p>
                <h3>Estações</h3>
                <ul>
                  <li><strong>Verão (Dezembro a Março):</strong> Extremamente seco e quente. As temperaturas podem atingir 35°C. Não chove.</li>
                  <li><strong>Inverno (Junho a Agosto):</strong> Frio, com temperaturas entre 0°C e 15°C. Esta é a estação chuvosa, e é quando você pode ver a cordilheira dos Andes nevada de forma espetacular.</li>
                  <li><strong>Primavera e Outono:</strong> As melhores épocas. Dias ensolarados e agradáveis em torno de 22°C.</li>
                </ul>
                <div class="tip-box">
                  <h4>💡 O que levar</h4>
                  <p>Aplique a regra da "cebola" (vista-se em camadas). Mesmo num dia quente de primavera, as manhãs e as noites exigirão um casaco quente.</p>
                </div>
              `
            }
          },
          {
            slug: 'enchufes',
            icon: '<svg width="48" height="48" viewBox="0 0 48 48"><circle cx="24" cy="24" r="16" fill="#005B9F"/><circle cx="18" cy="24" r="4" fill="#F2B705"/><circle cx="30" cy="24" r="4" fill="#F2B705"/><rect x="22" y="8" width="4" height="8" fill="#E03C31"/></svg>',
            title: { es: 'Enchufes y Voltaje', en: 'Plugs and Voltage', pt: 'Tomadas e Voltagem' },
            desc: { 
              es: 'El voltaje es de 220V. Se utilizan enchufes tipo C o L (dos o tres clavijas redondas). ¡Trae un adaptador universal!', 
              en: 'The voltage is 220V. Type C or L plugs are used (two or three round pins). Bring a universal adapter!', 
              pt: 'A voltagem é 220V. Usam-se tomadas tipo C ou L (dois ou três pinos redondos). Traga um adaptador universal!' 
            },
            content: {
              es: `
                <p>En Chile, el voltaje de la red eléctrica es de <strong>220 Voltios</strong> y la frecuencia es de 50 Hz.</p>
                <h3>Tipos de Enchufe</h3>
                <p>Se utilizan enchufes de clavijas redondas. Los modelos exactos son:</p>
                <ul>
                  <li><strong>Tipo C:</strong> El enchufe europeo estándar de dos patillas redondas.</li>
                  <li><strong>Tipo L:</strong> El enchufe italiano estándar de tres patillas redondas en línea recta.</li>
                </ul>
                <div class="tip-box">
                  <h4>💡 Adaptadores</h4>
                  <p>Si viajas desde Estados Unidos, Canadá o México, necesitarás sí o sí un conversor o adaptador, ya que allí las patillas son planas. Puedes comprarlos fácilmente en los supermercados de Santiago por unos $2.000 CLP.</p>
                </div>
              `,
              en: `
                <p>In Chile, the electrical grid voltage is <strong>220 Volts</strong> and the frequency is 50 Hz.</p>
                <h3>Plug Types</h3>
                <p>Round pin plugs are used. The exact models are:</p>
                <ul>
                  <li><strong>Type C:</strong> The standard European two round pin plug.</li>
                  <li><strong>Type L:</strong> The standard Italian three round pin plug in a straight line.</li>
                </ul>
                <div class="tip-box">
                  <h4>💡 Adapters</h4>
                  <p>If you are traveling from the US, Canada, or Mexico, you will absolutely need a converter or adapter, since your plugs have flat pins. You can easily buy them in Santiago supermarkets for about $2,000 CLP.</p>
                </div>
              `,
              pt: `
                <p>No Chile, a voltagem da rede elétrica é de <strong>220 Volts</strong> e a frequência é de 50 Hz.</p>
                <h3>Tipos de Tomada</h3>
                <p>Usam-se tomadas de pinos redondos. Os modelos exatos são:</p>
                <ul>
                  <li><strong>Tipo C:</strong> O plugue europeu padrão de dois pinos redondos.</li>
                  <li><strong>Tipo L:</strong> O plugue italiano padrão de três pinos redondos em linha reta.</li>
                </ul>
                <div class="tip-box">
                  <h4>💡 Adaptadores</h4>
                  <p>Se você estiver viajando dos Estados Unidos, Canadá ou México, precisará de um conversor ou adaptador, já que lá os pinos são chatos. Você pode comprá-los facilmente em supermercados de Santiago por cerca de $2.000 CLP.</p>
                </div>
              `
            }
          }
        ]
      }
    ]
  }
];
