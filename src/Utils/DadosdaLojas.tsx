export interface DatosdaLojas {
    id: number;
    name: string;
    instructions: string;
    morada: string;
    image: string;
    latitude: number;
    longitude: number; 
}

const getInboxItems = (): DatosdaLojas[] => [
    {
            "id": 1,
            "name": "Aveiro",
            "instructions": " Localizada na encantadora cidade de Aveiro, conhecida por seus canais pitorescos e arquitetura única. Temos orgulho em oferecer uma ampla frota de veículos modernos e bem mantidos para atender às necessidades de nossos clientes.",
            "morada": "Largo da Estação dos Caminhos de Ferro, 3800-179,",
            "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0f/Ria_de_Aveiro_edited_%28cropped%29.jpg/1920px-Ria_de_Aveiro_edited_%28cropped%29.jpg?",
            "latitude": 40.643518,
            "longitude": -8.640806

        },
        {
            "id": 2,
            "name": "Braga",
            "instructions": "Localizada na histórica cidade de Braga, conhecida por sua rica herança cultural e arquitetura impressionante. Temos o prazer de oferecer uma ampla frota de veículos modernos e bem conservados para atender às necessidades de nossos clientes.",
            "morada": " Largo da Estação, 4700-223",
            "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/52/Arco_da_Porta_Nova_-_panoramio.jpg/1280px-Arco_da_Porta_Nova_-_panoramio.jpg?",
            "latitude": 41.547321,
            "longitude": -8.434821
        },
        {
            "id": 3,
            "name": "Coimbra",
            "instructions": "Situada na histórica cidade de Coimbra, conhecida por sua prestigiosa universidade e charme arquitetônico. Estamos dedicados a oferecer uma ampla frota de veículos modernos e bem conservados para atender às necessidades dos nossos clientes.",
            "morada": "Largo da Ameias, 3000-024",
            "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/16/Universidade_de_Coimbra_no_topo_%286167202913%29.jpg/1280px-Universidade_de_Coimbra_no_topo_%286167202913%29.jpg?",
            "latitude": 40.209,
            "longitude": -8.432225
        },
        {
            "id": 4,
            "name": "Lisboa",
            "instructions": "Localizada na vibrante cidade de Lisboa, conhecida por sua rica história, arquitetura encantadora e atmosfera cosmopol",
            "morada": "Edifício Gare do Oriente, Piso 1 - Av. D. João II, 1900-233",
            "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/41/Lisbon_%2836831596786%29_%28cropped%29.jpg/1920px-Lisbon_%2836831596786%29_%28cropped%29.jpg?",  
            "latitude": 38.767891,
            "longitude": -9.099116
        },
        {
            "id": 5,
            "name": "Porto",
            "instructions": "Situada na dinâmica cidade do Porto, famosa por suas pontes icônicas, cultura vibrante e gastronomia única. Nosso compromisso é fornecer uma experiência de aluguel de Veículos excepcional, disponibilizando uma frota diversificada de veículos modernos e bem conservados.",
            "morada": "Praça Almeida Garrett, 4000-069",
            "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/Puente_Don_Luis_I%2C_Oporto%2C_Portugal%2C_2012-05-09%2C_DD_13.JPG/1920px-Puente_Don_Luis_I%2C_Oporto%2C_Portugal%2C_2012-05-09%2C_DD_13.JPG?",
            "latitude": 41.145667,
            "longitude": -8.60959,
        },
        {
            "id": 6,
            "name": "Faro",
            "instructions": "Encontra-se no coração da deslumbrante região do Algarve. Especializamo-nos em proporcionar uma experiência única, permitindo que os nossos clientes explorem as magníficas praias locais e desfrutem plenamente do sol e do mar.",
            "morada": "Largo da Estação dos Caminhos de Ferro, 8000-133",
            "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/be/Faro_-_Portugal_%2816083970893%29_%28cropped%29.jpg/2560px-Faro_-_Portugal_%2816083970893%29_%28cropped%29.jpg?",
            "latitude": 37.019447,
            "longitude": -7.94068
        },
        {
            "id": 7,
            "name": "Funchal",
            "instructions": "Situada na deslumbrante cidade do Funchal, na ensolarada ilha da Madeira. Nosso objetivo é proporcionar aos nossos clientes uma experiência de condução única, permitindo-lhes explorar as belezas naturais e os encantos da ilha.",
            "morada": " Santa Cruz,9100-105 ",
            "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/D8E_2941_%2812120800265%29.jpg/1920px-D8E_2941_%2812120800265%29.jpg?",
            "latitude": 32.6979,
            "longitude": -16.7745
        },
        {
            "id": 8,
            "name": "Viana do Castelo",
            "instructions": " Encontra-se na encantadora cidade de Viana do Castelo, conhecida por sua arquitetura histórica, rica herança cultural e proximidade com a costa atlântica. Nosso compromisso é fornecer aos clientes uma experiência de aluguel de Veículos conveniente e personalizada.",
            "morada": "Av. Combatentes da Grande Guerra, 4900-563",
            "image": "https://upload.wikimedia.org/wikipedia/commons/b/ba/Viana_do_Castelo_%28cropped%29.JPG?",
            "latitude": 41.694670,
            "longitude": -8.832418
        },
    ];       

    export {getInboxItems};