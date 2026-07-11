export interface MultiLangString {
  es: string;
  en: string;
  pt: string;
}

export interface PlanificaItem {
  icon: string;
  title: MultiLangString;
  desc: MultiLangString;
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
            icon: '✈️',
            title: { es: 'Aeropuerto SCL', en: 'SCL Airport', pt: 'Aeroporto SCL' },
            desc: { 
              es: 'El Aeropuerto Internacional Arturo Merino Benítez es el principal punto de entrada. Se ubica a 30 minutos del centro de la ciudad.', 
              en: 'Arturo Merino Benitez International Airport is the main entry point. It is located 30 minutes from the city center.', 
              pt: 'O Aeroporto Internacional Arturo Merino Benítez é o principal ponto de entrada. Está localizado a 30 minutos do centro da cidade.' 
            }
          },
          {
            icon: '🚌',
            title: { es: 'Buses desde el Aeropuerto', en: 'Airport Buses', pt: 'Ônibus do Aeroporto' },
            desc: { 
              es: 'Empresas como Centropuerto y TurBus ofrecen traslados económicos cada 10-15 minutos hacia estaciones de metro centrales.', 
              en: 'Companies like Centropuerto and TurBus offer affordable transfers every 10-15 minutes to central subway stations.', 
              pt: 'Empresas como Centropuerto e TurBus oferecem traslados econômicos a cada 10-15 minutos para as estações centrais de metrô.' 
            }
          }
        ]
      },
      {
        title: { es: 'Moverse por la ciudad', en: 'Getting around the city', pt: 'Movendo-se pela cidade' },
        items: [
          {
            icon: '🚇',
            title: { es: 'Metro de Santiago', en: 'Santiago Subway', pt: 'Metrô de Santiago' },
            desc: { 
              es: 'Es el sistema de transporte más rápido y extenso de Sudamérica. Necesitarás una Tarjeta Bip! para viajar.', 
              en: 'It is the fastest and most extensive transport system in South America. You will need a Bip! Card to travel.', 
              pt: 'É o sistema de transporte mais rápido e extenso da América do Sul. Você precisará de um Cartão Bip! para viajar.' 
            }
          },
          {
            icon: '🚖',
            title: { es: 'Taxis y Aplicaciones', en: 'Taxis and Apps', pt: 'Táxis e Aplicativos' },
            desc: { 
              es: 'Uber, Cabify y Didi funcionan excelentemente. Para los taxis tradicionales, usa siempre los que tienen techo amarillo y exige el taxímetro.', 
              en: 'Uber, Cabify, and Didi work excellently. For traditional taxis, always use those with a yellow roof and demand the meter.', 
              pt: 'Uber, Cabify e Didi funcionam excelentemente. Para táxis tradicionais, sempre use aqueles com teto amarelo e exija o taxímetro.' 
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
            icon: '🍷',
            title: { es: 'Barrio Lastarria', en: 'Lastarria Neighborhood', pt: 'Bairro Lastarria' },
            desc: { 
              es: 'Ideal para amantes del arte, gastronomía y cultura. Lleno de cafés, cines independientes y museos a pasos de distancia.', 
              en: 'Ideal for art, gastronomy, and culture lovers. Full of cafes, independent cinemas, and museums within walking distance.', 
              pt: 'Ideal para os amantes de arte, gastronomia e cultura. Cheio de cafés, cinemas independentes e museus a uma curta distância.' 
            }
          },
          {
            icon: '🌳',
            title: { es: 'Providencia', en: 'Providencia', pt: 'Providência' },
            desc: { 
              es: 'Seguro, verde y céntrico. Ofrece una mezcla perfecta entre vida residencial tranquila y excelente conectividad comercial.', 
              en: 'Safe, green, and central. Offers a perfect mix between quiet residential life and excellent commercial connectivity.', 
              pt: 'Seguro, verde e central. Oferece uma mistura perfeita entre vida residencial tranquila e excelente conectividade comercial.' 
            }
          },
          {
            icon: '🏢',
            title: { es: 'Las Condes (El Golf)', en: 'Las Condes (El Golf)', pt: 'Las Condes (El Golf)' },
            desc: { 
              es: 'El distrito financiero moderno. Destaca por hoteles de lujo, rascacielos y restaurantes de alta cocina internacional.', 
              en: 'The modern financial district. Stands out for luxury hotels, skyscrapers, and high international cuisine restaurants.', 
              pt: 'O moderno distrito financeiro. Destaca-se por hotéis de luxo, arranha-céus e restaurantes de alta gastronomia internacional.' 
            }
          }
        ]
      }
    ]
  },
  {
    id: 'itinerarios',
    heroImg: 'https://images.unsplash.com/photo-1596700075591-2ea39baeb1b2?auto=format&fit=crop&q=80&w=1200',
    sections: [
      {
        title: { es: 'Rutas Recomendadas', en: 'Recommended Routes', pt: 'Rotas Recomendadas' },
        items: [
          {
            icon: '1️⃣',
            title: { es: 'Santiago Express (1 Día)', en: 'Santiago Express (1 Day)', pt: 'Santiago Express (1 Dia)' },
            desc: { 
              es: 'Mañana en el Centro Histórico (La Moneda, Plaza de Armas). Tarde subiendo el Cerro San Cristóbal. Noche en Bellavista.', 
              en: 'Morning in the Historic Center (La Moneda, Plaza de Armas). Afternoon climbing San Cristobal Hill. Night in Bellavista.', 
              pt: 'Manhã no Centro Histórico (La Moneda, Plaza de Armas). Tarde subindo o Morro San Cristóbal. Noite em Bellavista.' 
            }
          },
          {
            icon: '3️⃣',
            title: { es: 'Lo Mejor de la Ciudad (3 Días)', en: 'Best of the City (3 Days)', pt: 'O Melhor da Cidade (3 Dias)' },
            desc: { 
              es: 'Día 1: Centro histórico. Día 2: Museos en Quinta Normal y Barrio Italia. Día 3: Tour a un viñedo cercano (Concha y Toro).', 
              en: 'Day 1: Historic center. Day 2: Museums in Quinta Normal and Barrio Italia. Day 3: Tour to a nearby vineyard (Concha y Toro).', 
              pt: 'Dia 1: Centro histórico. Dia 2: Museus na Quinta Normal e Bairro Italia. Dia 3: Passeio a um vinhedo próximo (Concha y Toro).' 
            }
          },
          {
            icon: '5️⃣',
            title: { es: 'Exploración Total (5 Días)', en: 'Total Exploration (5 Days)', pt: 'Exploração Total (5 Dias)' },
            desc: { 
              es: 'Incluye los 3 días anteriores más un viaje por el día a Valparaíso y Viña del Mar, y un día de escape a la Cordillera de los Andes.', 
              en: 'Includes the previous 3 days plus a day trip to Valparaiso and Viña del Mar, and an escape day to the Andes Mountains.', 
              pt: 'Inclui os 3 dias anteriores mais uma viagem de um dia a Valparaíso e Viña del Mar, e um dia de fuga para a Cordilheira dos Andes.' 
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
            icon: '💵',
            title: { es: 'Moneda local', en: 'Local currency', pt: 'Moeda local' },
            desc: { 
              es: 'El Peso Chileno (CLP). Las tarjetas de crédito y débito son ampliamente aceptadas, incluso para compras menores.', 
              en: 'The Chilean Peso (CLP). Credit and debit cards are widely accepted, even for minor purchases.', 
              pt: 'O Peso Chileno (CLP). Cartões de crédito e débito são amplamente aceitos, mesmo para pequenas compras.' 
            }
          },
          {
            icon: '☀️',
            title: { es: 'Clima y Cuándo ir', en: 'Weather and When to go', pt: 'Clima e Quando ir' },
            desc: { 
              es: 'Santiago tiene veranos muy calurosos (Ene-Feb) e inviernos fríos (Jun-Ago). Primavera y Otoño son ideales para caminar.', 
              en: 'Santiago has very hot summers (Jan-Feb) and cold winters (Jun-Aug). Spring and Autumn are ideal for walking.', 
              pt: 'Santiago tem verões muito quentes (Jan-Fev) e invernos frios (Jun-Ago). Primavera e Outono são ideais para caminhar.' 
            }
          },
          {
            icon: '🔌',
            title: { es: 'Enchufes y Voltaje', en: 'Plugs and Voltage', pt: 'Tomadas e Voltagem' },
            desc: { 
              es: 'El voltaje es de 220V. Se utilizan enchufes tipo C o L (dos o tres clavijas redondas). ¡Trae un adaptador universal!', 
              en: 'The voltage is 220V. Type C or L plugs are used (two or three round pins). Bring a universal adapter!', 
              pt: 'A voltagem é 220V. Usam-se tomadas tipo C ou L (dois ou três pinos redondos). Traga um adaptador universal!' 
            }
          }
        ]
      }
    ]
  }
];
