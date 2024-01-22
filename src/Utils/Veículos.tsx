interface Veículos {
  id: number;
  nome: string;
  descripção: string;
  categoria: any;
  Dadostécnicos: {
    motor?: string;
    potencia?: string;
    transmissão?: string;
    combustível?: string;
    capacidade?: string;
};
  Preço: string; 
  image: string;
  storeId: number[];
}

const getInboxItems = ():Veículos[] => [
  {
    id: 1,
    nome: "Toyota Camry",
    descripção: "Sedã de alta qualidade.",
    categoria: "Sedan",
    Dadostécnicos: {
      motor: "Motor de 4 cilindros em linha",
      potencia: "180 cv",
      transmissão: "Automática de 8 velocidades",
      combustível: "Gasolina",
      capacidade: "Capacidade para 5 passageiros",
    },
    Preço: "20 euros o dia",
    image: "https://www.toyota.com/imgix/content/dam/toyota/jellies/max/2024/camry/xse/2548/2pt/36/5.png?fm=png&w=930&q=90?",
    storeId: [1],
  },
  {
    id: 2,
    nome: "Honda CR-V",
    descripção: "SUV compacto com características todo-terreno.",
    categoria: "SUV",
    Dadostécnicos: {
      motor: "Motor de 4 cilindros em linha",
      potencia: "190 cv",
      transmissão: "Automática de variação contínua (CVT)",
      combustível: "Gasolina",
      capacidade: "Capacidade para 5 passageiros",
    },
    Preço: "25 euros o dia",
    image: "https://static.wixstatic.com/media/19f4e1_2c6989b6fa3947f3b1bb0354a890c306~mv2.png/v1/fill/w_640,h_400,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/Toyota%20Raize%201%20xs.png?",
    storeId: [1, 2],
  },
  {
    id: 3,
    nome: "Ford Mustang",
    descripção: "Coupé desportivo com design elegante.",
    categoria: "Coupe",
    Dadostécnicos: {
      motor: "Motor V8",
      potencia: "450 cv",
      transmissão: "Manual de 6 velocidades",
      combustível: "Gasolina",
      capacidade: "Capacidade para 4 passageiros",
    },
    Preço: "10 euros o dia",
    image: "https://purepng.com/public/uploads/large/purepng.com-ford-mustangford-mustangford-falconcompact-carcars-1701527482048rotru.png?",
    storeId: [3],
  },
  {
    id: 4,
    nome: "Volkswagen Golf",
    descripção: "Hatchback versátil e eficiente em combustível.",
    categoria: "Hatchback",
    Dadostécnicos: {
      motor: "Motor de 4 cilindros em linha",
      potencia: "147 cv",
      transmissão: "Automática de 8 velocidades",
      combustível: "Gasolina",
      capacidade: "Capacidade para 5 passageiros",
    },
    Preço: "20 euros o dia",
    image: "https://pngimg.com/d/volkswagen_PNG1793.png?",
    storeId: [1, 4],
  },
  {
    id: 5,
    nome: "Jeep Wrangler",
    descripção: "Veículo todo-terreno conversível.",
    categoria: "SUV",
    Dadostécnicos: {
      motor: "Motor V6",
      potencia: "285 cv",
      transmissão: "Automática de 8 velocidades",
      combustível: "Gasolina",
      capacidade: "Capacidade para 4 passageiros",
    },
    Preço:"25 euros o dia",
    image: "https://pngimg.com/d/jeep_PNG49.png?",
    storeId: [5, 2],
  },
  {
    id: 6,
    nome: "Tesla Model 3",
    descripção: "Automóvel elétrico com tecnologia avançada.",
    categoria: "Elétrico",
    Dadostécnicos: {
      motor: "Motor elétrico",
      capacidade: "Capacidade para 5 passageiros",
    },
    Preço: "28 euros o dia",
    image: "https://service.tesla.com/docs/Public/diy/images/GUID-BEE67A59-6DD7-460C-9C49-0DD47E707A02-online-en-US.png?",
    storeId: [1, 6, 8],
  },
  {
    id: 7,
    nome: "Chevrolet Silverado",
    descripção: "Pick-up resistente e capaz de transportar carga pesada.",
    categoria: "Pick-up",
    Dadostécnicos: {
      motor: "Motor V8",
      potencia: "355 cv",
      combustível: "Gasolina",
      capacidade: "Capacidade para 6 passageiros",
    },
    Preço: "22 euros o dia",
    image: "https://chevrolet.com.gt/wp-content/uploads/2022/08/silveradoblanco.png?",
    storeId: [7, 8, 5],
  },
  {
    id: 8,
    nome: "Kia Soul",
    descripção: "Hatchback compacto com design distintivo.",
    categoria: "Hatchback",
    Dadostécnicos: {
      motor: "Motor de 4 cilindros em linha",
      potencia: "147 cv",
      transmissão: "Automática de 6 velocidades",
      combustível: "Gasolina",
      capacidade: "Capacidade para 5 passageiros",
    },
    Preço: "12 euros o dia",
    image: "https://pngimg.com/d/kia_PNG71.png?",
    storeId: [1, 2, 3, 4, 5, 6, 7, 8],
  },
];

export { getInboxItems };