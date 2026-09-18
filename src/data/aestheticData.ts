export const WHATSAPP_NUMBER = '67992144061';
export const WHATSAPP_FORMATTED = '(67) 99214-4061';

export function getWhatsAppUrl(message?: string): string {
  const defaultText = 'Olá! Gostaria de agendar um atendimento na Reya Estética & Spa.';
  const encodedText = encodeURIComponent(message || defaultText);
  return `https://wa.me/55${WHATSAPP_NUMBER}?text=${encodedText}`;
}

export interface ServiceItem {
  id: string;
  title: string;
  subtitle: string;
  category: 'massage' | 'facials' | 'aroma' | 'sauna';
  image: string;
  duration: string;
  description: string;
  benefits: string[];
  recommendedFor: string;
}

export const SERVICES: ServiceItem[] = [
  {
    id: 'massage',
    title: 'Massage',
    subtitle: 'Massagens Terapêuticas & Relaxantes',
    category: 'massage',
    image: 'https://images.unsplash.com/photo-1600334129128-685c5582fd35?q=80&w=600&auto=format&fit=crop',
    duration: '60 a 90 min',
    description: 'Protocolos manuais de drenagem linfática, massagem relaxante com pedras quentes e liberação miofascial para descompressão e alívio de tensões.',
    benefits: ['Redução de edemas e retenção de líquidos', 'Alívio instantâneo do estresse e cansaço muscular', 'Melhora da oxigenação tecidual'],
    recommendedFor: 'Tensão muscular, retenção líquida e necessidade de relaxamento profundo.',
  },
  {
    id: 'facials',
    title: 'Facials',
    subtitle: 'Estética Facial & Rejuvenescimento',
    category: 'facials',
    image: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?q=80&w=600&auto=format&fit=crop',
    duration: '50 a 75 min',
    description: 'Limpeza de pele profunda com sucção e hidratação ultrassônica, peeling de diamante, estímulo de colágeno e hidratação com ativos biomiméticos.',
    benefits: ['Poros desobstruídos e pele aveludada', 'Estímulo natural de colágeno e elastina', 'Luminosidade radiante e uniformização do tom'],
    recommendedFor: 'Peles desvitalizadas, acnéicas, manchas solares e prevenção de linhas finas.',
  },
  {
    id: 'aroma',
    title: 'Aroma',
    subtitle: 'Rituais de Aromaterapia & Óleos Nobres',
    category: 'aroma',
    image: 'https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?q=80&w=600&auto=format&fit=crop',
    duration: '45 a 60 min',
    description: 'Experiência sensorial sinérgica combinando óleos essenciais puros franceses (lavanda, bergamota, gerânio e olíbano) que equilibram a mente e nutrem a derme.',
    benefits: ['Harmonização do humor e desaceleração mental', 'Nutrição profunda com lipídios vegetais', 'Efeito antioxidante e aromacêutico'],
    recommendedFor: 'Ansiedade, noites mal dormidas e sensibilidade cutânea.',
  },
  {
    id: 'sauna',
    title: 'Sauna',
    subtitle: 'Sauna Finlandesa & Detox Corporal',
    category: 'sauna',
    image: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?q=80&w=600&auto=format&fit=crop',
    duration: '40 a 60 min',
    description: 'Banhos termais secos e úmidos com infusões de eucalipto selvagem e sais minerais, promovendo eliminação de toxinas e vasodilatação benéfica.',
    benefits: ['Desintoxicação profunda pelos poros', 'Relaxamento articular e muscular amplo', 'Estímulo da imunidade e circulação sistêmica'],
    recommendedFor: 'Detox pré e pós-procedimentos corporais, cansaço crônico.',
  },
];

export interface TechniqueFeature {
  id: string;
  iconName: 'massage' | 'diffuser' | 'face' | 'bath';
  title: string;
  description: string;
  whatsappMessage: string;
}

export const TECHNIQUES: TechniqueFeature[] = [
  {
    id: 'tech-1',
    iconName: 'massage',
    title: 'Drenagem Linfática Especializada',
    description: 'Toques suaves e rítmicos que ativam a circulação linfática, desincham áreas críticas e aceleram o metabolismo corporal com resultados imediatos.',
    whatsappMessage: 'Olá! Gostaria de agendar uma sessão de Drenagem Linfática.',
  },
  {
    id: 'tech-2',
    iconName: 'diffuser',
    title: 'Cosmetologia Integrativa & Ativos Puros',
    description: 'Utilizamos blend exclusivo de óleos vegetais prensados a frio e nanoativos que penetram nas camadas mais nobres da epiderme com alta biodisponibilidade.',
    whatsappMessage: 'Olá! Gostaria de saber mais sobre os produtos e ativos utilizados nos protocolos.',
  },
  {
    id: 'tech-3',
    iconName: 'face',
    title: 'Harmonização & Skincare Regenerativo',
    description: 'Protocolos personalizados que respeitam a anatomia do seu rosto, devolvendo viço, firmeza e hidratação profunda sem alterar suas expressões naturais.',
    whatsappMessage: 'Olá! Tenho interesse em uma avaliação facial com foco em rejuvenescimento e hidratação.',
  },
  {
    id: 'tech-4',
    iconName: 'bath',
    title: 'Rituais de Banho Terapêutico & Hidro',
    description: 'Imersão em águas enriquecidas com magnésio marinho e pétalas aromáticas, preparando o corpo para receber os tratamentos estéticos mais profundos.',
    whatsappMessage: 'Olá! Gostaria de informações sobre o ritual de banho terapêutico e day spa.',
  },
];
