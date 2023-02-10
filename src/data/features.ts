interface Feature {
    name: string;
    description: string;
    icon: string;
    link?: string;
}
const features: Feature[] = [
    {
        name: 'OSZCZĘDZAJ & TNIJ KOSZTY',
        description: 'Możemy pomóc Ci zaoszczędzić nawet 50% na rachunkach za energię.',
        icon: 'money',
        link: '/#'
    },
    {
        name: 'TERMICZNIE EFEKTYWNE',
        description: 'Izolacja natryskowa może służyć zarówno jako materiał izolacyjny, jak i bariera powietrzna.',
        icon: 'thermometer',
        link: '/#'
    },
    {
        name: 'WYSOKA TRWAŁOŚĆ NA LATA',
        description: 'Piana Pur będzie trwała przez cały czas istnienia budynku.',
        icon: 'life',
        link: '/#'
    },
    {
        name: 'SZYBKA INSTALACJA',
        description: 'Piana izolacyjna szybka w montażu i nie wymaga przerwy w działalności.',
        icon: 'fast',
        link: '/#'
    },
    {
        name: 'REDUKCJA HAŁASU',
        description: 'Opianowanie pomieszczenia pianą Pur zapewnia wysoki poziom izolacji akustycznej.',
        icon: 'sound',
        link: '/#'
    },
    {
        name: 'ELIMINACJA KONDENSACJI',
        description: 'Izolacja natryskowa eliminuje problemy z kondensacją.',
        icon: 'condensation',
        link: '/#'
    }
]
export default features;