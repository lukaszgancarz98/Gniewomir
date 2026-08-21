import { MessageObject } from '../translator';

export type Product = {
    id: string;
    tag: string;
    name: MessageObject;
    shortDescription?: MessageObject;
    description: MessageObject;
    setContents?: { title: MessageObject; items?: MessageObject[] }[];
    modificationOptions?: MessageObject[];
    price: number;
    images: string[];
    additionalInfo?: MessageObject;
    availableVariants?: { title: MessageObject }[];
    simulatedDamage?: { title: MessageObject }[];
    trainingOptions?: { title: MessageObject }[];
    priceExtension?: MessageObject;
    hideSetContentsTitle?: boolean;
    pricePrefix?: boolean;
    popular?: boolean;
};

export const products: Product[] = [
    {
        id: 'wp2',
        tag: 'hemorrhage_control_trainers',
        name: {
            id: 'product.wp2.name',
            defaultMessage: 'WP2 – Wound Packing Procedure Training Set',
            pl: 'WP2 - Zestaw do procedury woundpacking',
            en: 'WP2 – Wound Packing Procedure Training Set',
        },
        shortDescription: {
            id: 'product.wp2.shortDescription',
            defaultMessage:
                'A set of two trainers designed for realistic, repeated training in controlling massive hemorrhage. The trainers are made of durable silicone with high similarity to human tissue. The 1.5 L pump allows precise control of artificial blood pressure using a gauge scaled in mmHg. Valves at the ends of the supply lines enable simultaneous, independent training at two stations. Fully compatible with the universal pump and tubing system (4 mm diameter) used in all trainers.',
            pl: 'Zestaw dwóch trenażerów do realistycznego, wielokrotnego treningu tamowania masywnych krwotoków. Trenażery wykonane z wytrzymałego silikonu o wysokim podobieństwie do ludzkich tkanek. Pompa o pojemności 1,5 L pozwala na precyzyjną kontrolę ciśnienia sztucznej krwi za pomocą manometru wyskalowanego w mmHg. Zawory znajdujące się na końcach przewodów zasilających umożliwiają jednoczesny, niezależny trening na dwóch stanowiskach. W pełni kompatybilny z uniwersalnym systemem pomp i przewodów (średnica 4 mm) stosowanym we wszystkich trenażerach.',
            en: 'A set of two trainers designed for realistic, repeated training in controlling massive hemorrhage. The trainers are made of durable silicone with high similarity to human tissue. The 1.5 L pump allows precise control of artificial blood pressure using a gauge scaled in mmHg. Valves at the ends of the supply lines enable simultaneous, independent training at two stations. Fully compatible with the universal pump and tubing system (4 mm diameter) used in all trainers.',
        },
        description: {
            id: 'product.wp2.description',
            defaultMessage:
                'A set of two trainers designed for realistic, repeated training in controlling massive hemorrhage. The trainers are made of durable silicone with high similarity to human tissue. The 1.5 L pump allows precise control of artificial blood pressure using a gauge scaled in mmHg. Valves at the ends of the supply lines enable simultaneous, independent training at two stations. Fully compatible with the universal pump and tubing system (4 mm diameter) used in all trainers.',
            pl: 'Zestaw dwóch trenażerów do realistycznego, wielokrotnego treningu tamowania masywnych krwotoków. Trenażery wykonane z wytrzymałego silikonu o wysokim podobieństwie do ludzkich tkanek. Pompa o pojemności 1,5 L pozwala na precyzyjną kontrolę ciśnienia sztucznej krwi za pomocą manometru wyskalowanego w mmHg. Zawory znajdujące się na końcach przewodów zasilających umożliwiają jednoczesny, niezależny trening na dwóch stanowiskach. W pełni kompatybilny z uniwersalnym systemem pomp i przewodów (średnica 4 mm) stosowanym we wszystkich trenażerach.',
            en: 'A set of two trainers designed for realistic, repeated training in controlling massive hemorrhage. The trainers are made of durable silicone with high similarity to human tissue. The 1.5 L pump allows precise control of artificial blood pressure using a gauge scaled in mmHg. Valves at the ends of the supply lines enable simultaneous, independent training at two stations. Fully compatible with the universal pump and tubing system (4 mm diameter) used in all trainers.',
        },
        setContents: [
            {
                title: {
                    id: 'product.wp2.setContents.0.title',
                    defaultMessage: '2 silicone trainers:',
                    pl: '2 trenażery silikonowe:',
                    en: '2 silicone trainers:',
                },
                items: [
                    {
                        id: 'product.wp2.setContents.0.items.0',
                        defaultMessage: 'Gunshot wound with a regular shape',
                        pl: 'rana postrzałowa o regularnym kształcie',
                        en: 'gunshot wound with a regular shape',
                    },
                    {
                        id: 'product.wp2.setContents.0.items.1',
                        defaultMessage:
                            'gunshot/shrapnel wound with an irregular shape',
                        pl: 'rana postrzałowa/odłamkowa o nieregularnym kształcie',
                        en: 'gunshot/shrapnel wound with an irregular shape',
                    },
                ],
            },
            {
                title: {
                    id: 'product.wp2.setContents.1.title',
                    defaultMessage:
                        'pump with pressure gauge (1.5 L, scaled in mmHg)',
                    pl: 'pompa z manometrem (1,5 L, wyskalowany w mmHg)',
                    en: 'pump with pressure gauge (1.5 L, scaled in mmHg)',
                },
            },
            {
                title: {
                    id: 'product.wp2.setContents.2.title',
                    defaultMessage: 'Tubing',
                    pl: 'okablowanie',
                    en: 'tubing',
                },
            },
            {
                title: {
                    id: 'product.wp2.setContents.3.title',
                    defaultMessage: 'Splitter',
                    pl: 'dwójnik',
                    en: 'splitter',
                },
            },
            {
                title: {
                    id: 'product.wp2.setContents.4.title',
                    defaultMessage: 'Pump seal maintenance oil',
                    pl: 'olejek do konserwacji uszczelek pompy',
                    en: 'pump seal maintenance oil',
                },
            },
            {
                title: {
                    id: 'product.wp2.setContents.5.title',
                    defaultMessage: 'User manual (paper or electronic)',
                    pl: 'instrukcja obsługi (papierowa lub elektroniczna)',
                    en: 'user manual (paper or electronic)',
                },
            },
            {
                title: {
                    id: 'product.wp2.setContents.6.title',
                    defaultMessage: 'Pump manufacturer manual',
                    pl: 'instrukcja producenta pompy',
                    en: 'pump manufacturer manual',
                },
            },
        ],
        modificationOptions: [
            {
                id: 'product.wp2.modificationOptions.0',
                defaultMessage:
                    'custom wound shape within a 16x12x5 cm block: +300 PLN',
                pl: 'wykonanie rany o indywidualnym kształcie w obrębie bloku 16x12x5 cm: +300 PLN',
                en: 'custom wound shape within a 16x12x5 cm block: +300 PLN',
            },
            {
                id: 'product.wp2.modificationOptions.1',
                defaultMessage:
                    'alternative vessel placement (side wall of the wound): +100 PLN',
                pl: 'alternatywne położenie naczynia zasilającego (boczna ściana rany): +100 PLN',
                en: 'alternative vessel placement (side wall of the wound): +100 PLN',
            },
        ],
        price: 3000,
        images: ['wp2.jpg', 'wp2_1.jpg'],
        pricePrefix: true,
        popular: true,
    },
    {
        id: 'massive_bleeding_catheter',
        tag: 'hemorrhage_control_trainers',
        name: {
            id: 'product.massive_bleeding_catheter.name',
            defaultMessage:
                'Massive Hemorrhage Control Trainer Using a Catheter',
            pl: 'Trenażer tamowania masywnego krwotoku za pomocą cewnika',
            en: 'Massive Hemorrhage Control Trainer Using a Catheter',
        },
        shortDescription: {
            id: 'product.massive_bleeding_catheter.shortDescription',
            defaultMessage:
                'A trainer in the form of an elongated block with a large laceration and a severed vessel, enabling training in controlling massive hemorrhage using a Foley catheter. Made of durable silicone with high similarity to human tissue. A valve at the end of the line allows independent training when a second trainer is connected. Fully compatible with the universal pump and 4 mm tubing system used in all trainers.',
            pl: 'Trenażer w formie przedłużonego bloku z dużą raną szarpaną i przerwanym naczyniem, umożliwiający trening tamowania masywnego krwotoku przy użyciu cewnika Foleya. Wykonany z wytrzymałego silikonu o wysokim podobieństwie do ludzkich tkanek. Zawór na końcu przewodu pozwala na niezależny trening po podłączeniu drugiego trenażera. W pełni kompatybilny z uniwersalnym systemem pomp i przewodów (średnica 4 mm) stosowanym we wszystkich trenażerach.',
            en: 'A trainer in the form of an elongated block with a large laceration and a severed vessel, enabling training in controlling massive hemorrhage using a Foley catheter. Made of durable silicone with high similarity to human tissue. A valve at the end of the line allows independent training when a second trainer is connected. Fully compatible with the universal pump and 4 mm tubing system used in all trainers.',
        },
        description: {
            id: 'product.massive_bleeding_catheter.description',
            defaultMessage:
                'A trainer in the form of an elongated block with a large laceration and a severed vessel, enabling training in controlling massive hemorrhage using a Foley catheter. Made of durable silicone with high similarity to human tissue. A valve at the end of the line allows independent training when a second trainer is connected. Fully compatible with the universal pump and 4 mm tubing system used in all trainers.',
            pl: 'Trenażer w formie przedłużonego bloku z dużą raną szarpaną i przerwanym naczyniem, umożliwiający trening tamowania masywnego krwotoku przy użyciu cewnika Foleya. Wykonany z wytrzymałego silikonu o wysokim podobieństwie do ludzkich tkanek. Zawór na końcu przewodu pozwala na niezależny trening po podłączeniu drugiego trenażera. W pełni kompatybilny z uniwersalnym systemem pomp i przewodów (średnica 4 mm) stosowanym we wszystkich trenażerach.',
            en: 'A trainer in the form of an elongated block with a large laceration and a severed vessel, enabling training in controlling massive hemorrhage using a Foley catheter. Made of durable silicone with high similarity to human tissue. A valve at the end of the line allows independent training when a second trainer is connected. Fully compatible with the universal pump and 4 mm tubing system used in all trainers.',
        },
        setContents: [
            {
                title: {
                    id: 'product.massive_bleeding_catheter.setContents.0.title',
                    defaultMessage:
                        'silicone trainer in the form of an elongated block with a large laceration',
                    pl: 'trenażer silikonowy w formie przedłużonego bloku z dużą raną szarpaną',
                    en: 'silicone trainer in the form of an elongated block with a large laceration',
                },
            },
            {
                title: {
                    id: 'product.massive_bleeding_catheter.setContents.1.title',
                    defaultMessage:
                        'large severed vessel allowing catheter insertion',
                    pl: 'duże przerwane naczynie umożliwiające wprowadzenie cewnika',
                    en: 'large severed vessel allowing catheter insertion',
                },
            },
            {
                title: {
                    id: 'product.massive_bleeding_catheter.setContents.2.title',
                    defaultMessage: 'Standard 4 mm connector',
                    pl: 'standardowe przyłącze 4 mm',
                    en: 'standard 4 mm connector',
                },
            },
        ],
        modificationOptions: [
            {
                id: 'product.massive_bleeding_catheter.modificationOptions.0',
                defaultMessage: 'custom wound shape: +300 PLN',
                pl: 'indywidualny kształt rany: +300 PLN',
                en: 'custom wound shape: +300 PLN',
            },
        ],
        price: 1800,
        images: ['cewnik_1.jpg'],
        pricePrefix: true,
    },
    {
        id: 'wp3it',
        tag: 'hemorrhage_control_trainers',
        name: {
            id: 'product.wp3it.name',
            defaultMessage:
                'WP3IT – Massive Hemorrhage Control Trainer Using IT-CLAMP',
            pl: 'WP3IT - Trenażer tamowania masywnego krwotoku przy użyciu IT-CLAMP',
            en: 'WP3IT – Massive Hemorrhage Control Trainer Using IT-CLAMP',
        },
        shortDescription: {
            id: 'product.wp3it.shortDescription',
            defaultMessage:
                'A trainer with a realistic incised wound with severe bleeding, designed for training the use of IT-CLAMP devices. The 1.5 L pump allows precise control of artificial blood pressure using a gauge scaled in mmHg. A valve at the end of the line allows independent training when a second trainer is connected. Fully compatible with the universal pump and 4 mm tubing system used in all trainers.',
            pl: 'Trenażer z realistyczną raną ciętą o silnym krwawieniu, przeznaczony do treningu użycia urządzeń IT-CLAMP. Pompa o pojemności 1,5 L pozwala na precyzyjną kontrolę ciśnienia sztucznej krwi za pomocą manometru wyskalowanego w mmHg. Zawór na końcu przewodu pozwala na niezależny trening po podłączeniu drugiego trenażera. W pełni kompatybilny z uniwersalnym systemem pomp i przewodów (średnica 4 mm) stosowanym we wszystkich trenażerach.',
            en: 'A trainer with a realistic incised wound with severe bleeding, designed for training the use of IT-CLAMP devices. The 1.5 L pump allows precise control of artificial blood pressure using a gauge scaled in mmHg. A valve at the end of the line allows independent training when a second trainer is connected. Fully compatible with the universal pump and 4 mm tubing system used in all trainers.',
        },
        description: {
            id: 'product.wp3it.description',
            defaultMessage:
                'A trainer with a realistic incised wound with severe bleeding, designed for training the use of IT-CLAMP devices. The 1.5 L pump allows precise control of artificial blood pressure using a gauge scaled in mmHg. A valve at the end of the line allows independent training when a second trainer is connected. Fully compatible with the universal pump and 4 mm tubing system used in all trainers.',
            pl: 'Trenażer z realistyczną raną ciętą o silnym krwawieniu, przeznaczony do treningu użycia urządzeń IT-CLAMP. Pompa o pojemności 1,5 L pozwala na precyzyjną kontrolę ciśnienia sztucznej krwi za pomocą manometru wyskalowanego w mmHg. Zawór na końcu przewodu pozwala na niezależny trening po podłączeniu drugiego trenażera. W pełni kompatybilny z uniwersalnym systemem pomp i przewodów (średnica 4 mm) stosowanym we wszystkich trenażerach.',
            en: 'A trainer with a realistic incised wound with severe bleeding, designed for training the use of IT-CLAMP devices. The 1.5 L pump allows precise control of artificial blood pressure using a gauge scaled in mmHg. A valve at the end of the line allows independent training when a second trainer is connected. Fully compatible with the universal pump and 4 mm tubing system used in all trainers.',
        },
        setContents: [
            {
                title: {
                    id: 'product.wp3it.setContents.0.title',
                    defaultMessage: 'silicone trainer with incised wound',
                    pl: 'trenażer silikonowy z raną ciętą',
                    en: 'silicone trainer with incised wound',
                },
            },
            {
                title: {
                    id: 'product.wp3it.setContents.1.title',
                    defaultMessage: 'pump with pressure gauge (1.5 L)',
                    pl: 'pompa z manometrem (1,5 L)',
                    en: 'pump with pressure gauge (1.5 L)',
                },
            },
            {
                title: {
                    id: 'product.wp3it.setContents.2.title',
                    defaultMessage: 'tubing and splitter',
                    pl: 'okablowanie i dwójnik',
                    en: 'tubing and splitter',
                },
            },
            {
                title: {
                    id: 'product.wp3it.setContents.3.title',
                    defaultMessage: 'seal maintenance oil',
                    pl: 'olejek do konserwacji uszczelek',
                    en: 'seal maintenance oil',
                },
            },
            {
                title: {
                    id: 'product.wp3it.setContents.4.title',
                    defaultMessage: 'user manual (paper or electronic)',
                    pl: 'instrukcja obsługi (papierowa lub elektroniczna)',
                    en: 'user manual (paper or electronic)',
                },
            },
            {
                title: {
                    id: 'product.wp3it.setContents.5.title',
                    defaultMessage: 'pump manufacturer manual',
                    pl: 'instrukcja producenta pompy',
                    en: 'pump manufacturer manual',
                },
            },
        ],
        modificationOptions: [
            {
                id: 'product.wp3it.modificationOptions.0',
                defaultMessage: 'non-standard wound shape: +300 PLN',
                pl: 'rana o niestandardowym kształcie: +300 PLN',
                en: 'non-standard wound shape: +300 PLN',
            },
        ],
        price: 2200,
        images: ['wpit_1.jpg'],
        pricePrefix: true,
    },
    {
        id: 'wp3x',
        tag: 'hemorrhage_control_trainers',
        name: {
            id: 'product.wp3x.name',
            defaultMessage:
                'WP3X – Hemorrhage Control Trainer for X-STAT/CELOX-A',
            pl: 'WP3X - Trenażer do tamowania krwotoku za pomocą X-STAT/CELOX-A',
            en: 'WP3X – Hemorrhage Control Trainer for X-STAT/CELOX-A',
        },
        shortDescription: {
            id: 'product.wp3x.shortDescription',
            defaultMessage:
                'A trainer with a narrow, deep wound with massive bleeding. Enables effective training in the use of X-STAT and CELOX-A devices. Allows practicing hemorrhage control procedures in hard-to-reach locations where classic packing is difficult or impossible. Fully compatible with the universal pump and 4 mm tubing system used in all trainers.',
            pl: 'Trenażer z wąską, głęboką raną o masywnym krwawieniu. Umożliwia skuteczny trening zastosowania urządzeń X-STAT oraz CELOX-A. Pozwala na ćwiczenie procedur tamowania krwotoku w trudno dostępnych miejscach, gdzie klasyczne pakowanie jest utrudnione lub niemożliwe. W pełni kompatybilny z uniwersalnym systemem pomp i przewodów (średnica 4 mm) stosowanym we wszystkich trenażerach.',
            en: 'A trainer with a narrow, deep wound with massive bleeding. Enables effective training in the use of X-STAT and CELOX-A devices. Allows practicing hemorrhage control procedures in hard-to-reach locations where classic packing is difficult or impossible. Fully compatible with the universal pump and 4 mm tubing system used in all trainers.',
        },
        description: {
            id: 'product.wp3x.description',
            defaultMessage:
                'A trainer with a narrow, deep wound with massive bleeding. Enables effective training in the use of X-STAT and CELOX-A devices. Allows practicing hemorrhage control procedures in hard-to-reach locations where classic packing is difficult or impossible. Fully compatible with the universal pump and 4 mm tubing system used in all trainers.',
            pl: 'Trenażer z wąską, głęboką raną o masywnym krwawieniu. Umożliwia skuteczny trening zastosowania urządzeń X-STAT oraz CELOX-A. Pozwala na ćwiczenie procedur tamowania krwotoku w trudno dostępnych miejscach, gdzie klasyczne pakowanie jest utrudnione lub niemożliwe. W pełni kompatybilny z uniwersalnym systemem pomp i przewodów (średnica 4 mm) stosowanym we wszystkich trenażerach.',
            en: 'A trainer with a narrow, deep wound with massive bleeding. Enables effective training in the use of X-STAT and CELOX-A devices. Allows practicing hemorrhage control procedures in hard-to-reach locations where classic packing is difficult or impossible. Fully compatible with the universal pump and 4 mm tubing system used in all trainers.',
        },
        setContents: [
            {
                title: {
                    id: 'product.wp3x.setContents.0.title',
                    defaultMessage:
                        'silicone trainer with a deep, narrow wound',
                    pl: 'trenażer silikonowy z głęboką, wąską raną',
                    en: 'silicone trainer with a deep, narrow wound',
                },
            },
            {
                title: {
                    id: 'product.wp3x.setContents.1.title',
                    defaultMessage: 'standard 4 mm connector',
                    pl: 'standardowe przyłącze 4 mm',
                    en: 'standard 4 mm connector',
                },
            },
        ],
        modificationOptions: [
            {
                id: 'product.wp3x.modificationOptions.0',
                defaultMessage: 'custom wound shape: +300 PLN',
                pl: 'indywidualny kształt rany: +300 PLN',
                en: 'custom wound shape: +300 PLN',
            },
        ],
        price: 1800,
        images: ['wp3x_1.jpg'],
        pricePrefix: true,
    },
    {
        id: 'trainer_large_wound',
        tag: 'hemorrhage_control_trainers',
        name: {
            id: 'product.trainer_large_wound.name',
            defaultMessage:
                'Trainer with a Large Wound (with Modified Vessel Position)',
            pl: 'Trenażer z dużą raną (ze zmienionym położeniem naczynia)',
            en: 'Trainer with a Large Wound (with Modified Vessel Position)',
        },
        shortDescription: {
            id: 'product.trainer_large_wound.shortDescription',
            defaultMessage:
                'A trainer with a large, massively bleeding wound and a modified vascular layout. The supply system enters the trainer in a straight line, while the vessel is located on one of the wound walls. Enables training in locating the source of bleeding and packing a massively bleeding wound with tissue loss. Fully compatible with the universal pump and 4 mm tubing system used in all trainers.',
            pl: 'Trenażer z dużą, masywnie krwawiącą raną oraz zmienionym położeniem układu naczyniowego. System zasilający wchodzi do trenażera w linii prostej, natomiast naczynie znajduje się na jednej ze ścian rany. Pozwala na trening zlokalizowania źródła krwotoku i pakowania masywnie krwawiącej rany z ubytkiem tkanek. W pełni kompatybilny z uniwersalnym systemem pomp i przewodów (średnica 4 mm) stosowanym we wszystkich trenażerach.',
            en: 'A trainer with a large, massively bleeding wound and a modified vascular layout. The supply system enters the trainer in a straight line, while the vessel is located on one of the wound walls. Enables training in locating the source of bleeding and packing a massively bleeding wound with tissue loss. Fully compatible with the universal pump and 4 mm tubing system used in all trainers.',
        },
        description: {
            id: 'product.trainer_large_wound.description',
            defaultMessage:
                'A trainer with a large, massively bleeding wound and a modified vascular layout. The supply system enters the trainer in a straight line, while the vessel is located on one of the wound walls. Enables training in locating the source of bleeding and packing a massively bleeding wound with tissue loss. Fully compatible with the universal pump and 4 mm tubing system used in all trainers.',
            pl: 'Trenażer z dużą, masywnie krwawiącą raną oraz zmienionym położeniem układu naczyniowego. System zasilający wchodzi do trenażera w linii prostej, natomiast naczynie znajduje się na jednej ze ścian rany. Pozwala na trening zlokalizowania źródła krwotoku i pakowania masywnie krwawiącej rany z ubytkiem tkanek. W pełni kompatybilny z uniwersalnym systemem pomp i przewodów (średnica 4 mm) stosowanym we wszystkich trenażerach.',
            en: 'A trainer with a large, massively bleeding wound and a modified vascular layout. The supply system enters the trainer in a straight line, while the vessel is located on one of the wound walls. Enables training in locating the source of bleeding and packing a massively bleeding wound with tissue loss. Fully compatible with the universal pump and 4 mm tubing system used in all trainers.',
        },
        setContents: [
            {
                title: {
                    id: 'product.trainer_large_wound.setContents.0.title',
                    defaultMessage:
                        'silicone trainer with a large, massively bleeding wound',
                    pl: 'trenażer silikonowy z dużą, masywnie krwawiącą raną',
                    en: 'silicone trainer with a large, massively bleeding wound',
                },
            },
            {
                title: {
                    id: 'product.trainer_large_wound.setContents.1.title',
                    defaultMessage:
                        'modified vessel layout (straight-line supply, vessel on the side wall)',
                    pl: 'zmieniony układ położenia naczynia (zasilanie w linii prostej, naczynie na bocznej ścianie)',
                    en: 'modified vessel layout (straight-line supply, vessel on the side wall)',
                },
            },
            {
                title: {
                    id: 'product.trainer_large_wound.setContents.2.title',
                    defaultMessage: 'standard 4 mm connector',
                    pl: 'standardowe przyłącze 4 mm',
                    en: 'standard 4 mm connector',
                },
            },
        ],
        modificationOptions: [
            {
                id: 'product.trainer_large_wound.modificationOptions.0',
                defaultMessage: 'custom wound shape: +300 PLN',
                pl: 'indywidualny kształt rany: +300 PLN',
                en: 'custom wound shape: +300 PLN',
            },
        ],
        price: 1750,
        images: ['cewnik_1.jpg'],
        pricePrefix: true,
    },
    {
        id: 'mesenteric_bleeding_trainer',
        tag: 'hemorrhage_control_trainers',
        name: {
            id: 'product.mesenteric_bleeding_trainer.name',
            defaultMessage: 'Mesenteric Bleeding Trainer',
            pl: 'Trenażer tamowania krwotoku z krezki jelitowej',
            en: 'Mesenteric Bleeding Trainer',
        },
        description: {
            id: 'product.mesenteric_bleeding_trainer.description',
            defaultMessage:
                'Trainer in the form of an exenteration, made of silicone with a high degree of realism. Designed for training in controlling hemorrhage from mesenteric vessels. The construction allows the trainer to be attached to a simulated person using a specialized adhesive for silicone elements. The trainer is equipped with two blood vessels attached to the mesentery, with the option to choose which one will be the source of simulated bleeding. Enables training in applying hemostatic clamps and ligating bleeding vessels. Fully compatible with the universal pump and tubing system (4 mm diameter) used in all trainers.',
            pl: 'Trenażer w formie wytrzewienia, wykonany z silikonu o wysokim stopniu realizmu. Przeznaczony do treningu tamowania krwotoków z naczyń krezki jelitowej. Konstrukcja umożliwia przyklejenie trenażera do osoby pozorowanej za pomocą specjalistycznego kleju do elementów silikonowych. Trenażer wyposażony jest w dwa naczynia krwionośne przytwierdzone do krezki jelitowej, z możliwością wyboru, które z nich będzie źródłem symulowanego krwotoku. Umożliwia trening zakładania kleszczy hemostatycznych oraz podwiązywania krwawiących naczyń. W pełni kompatybilny z uniwersalnym systemem pomp i przewodów (średnica 4 mm) stosowanym we wszystkich trenażerach.',
            en: 'Trainer in the form of an exenteration, made of silicone with a high degree of realism. Designed for training in controlling hemorrhage from mesenteric vessels. The construction allows the trainer to be attached to a simulated person using a specialized adhesive for silicone elements. The trainer is equipped with two blood vessels attached to the mesentery, with the option to choose which one will be the source of simulated bleeding. Enables training in applying hemostatic clamps and ligating bleeding vessels. Fully compatible with the universal pump and tubing system (4 mm diameter) used in all trainers.',
        },
        price: 2500,
        images: ['evis1.jpg', 'evis2.jpg'],
        pricePrefix: true,
    },
    {
        id: 'basic_set',
        tag: 'trauma_simulation_latex',
        name: {
            id: 'product.basic_set.name',
            defaultMessage: 'Basic Set',
            pl: 'Zestaw Basic',
            en: 'Basic Set',
        },
        description: {
            id: 'product.basic_set.description',
            defaultMessage:
                'A set designed for training in tactical medicine (Tactical Combat Casualty Care – TCCC). It enables realistic simulation of injuries typical for the battlefield, such as gunshot wounds, shrapnel injuries, open fractures, and amputations. All elements are made of high-quality latex, which is highly durable and easy and quick to apply. After proper cleaning and disinfection, the wounds can be reused multiple times. Thin elements (e.g. superficial incised wounds) are suitable for approximately 3–5 uses, while thicker structures such as fractures or shrapnel wounds can be used a dozen or more times.',
            pl: 'Zestaw przeznaczony do szkoleń z zakresu <strong>medycyny taktycznej (Tactical Combat Casualty Care - TCCC)</strong>. Umożliwia realistyczne odwzorowanie obrażeń typowych dla pola walki, takich jak rany postrzałowe, odłamkowe, złamania otwarte czy amputacje. Wszystkie elementy wykonane są z wysokiej jakości <strong>lateksu</strong>, który charakteryzuje się dużą trwałością oraz łatwością i szybkością aplikacji. Po prawidłowym oczyszczeniu i dezynfekcji rany mogą być <strong>wielokrotnie używane</strong>. Cienkie elementy (np. powierzchniowe rany cięte) nadają się do ok. <strong>3-5 użyć</strong>, natomiast grubsze struktury, takie jak złamania czy rany odłamkowe, mogą być wykorzystywane <strong>kilkanaście lub więcej razy</strong>.',
            en: 'A set designed for training in tactical medicine (Tactical Combat Casualty Care – TCCC). It enables realistic simulation of injuries typical for the battlefield, such as gunshot wounds, shrapnel injuries, open fractures, and amputations. All elements are made of high-quality latex, which is highly durable and easy and quick to apply. After proper cleaning and disinfection, the wounds can be reused multiple times. Thin elements (e.g. superficial incised wounds) are suitable for approximately 3–5 uses, while thicker structures such as fractures or shrapnel wounds can be used a dozen or more times.',
        },
        setContents: [
            {
                title: {
                    id: 'product.basic_set.setContents.0.title',
                    defaultMessage: '40 entry wounds (various calibers)',
                    pl: '40 ran wlotowych (różnych kalibrów)',
                    en: '40 entry wounds (various calibers)',
                },
            },
            {
                title: {
                    id: 'product.basic_set.setContents.1.title',
                    defaultMessage:
                        '40 exit/shrapnel wounds (can be used interchangeably)',
                    pl: '40 ran wylotowych/odłamkowych (możliwość stosowania zamiennie)',
                    en: '40 exit/shrapnel wounds (can be used interchangeably)',
                },
            },
            {
                title: {
                    id: 'product.basic_set.setContents.2.title',
                    defaultMessage: '3 small open fractures',
                    pl: '3 złamania otwarte małe',
                    en: '3 small open fractures',
                },
            },
            {
                title: {
                    id: 'product.basic_set.setContents.3.title',
                    defaultMessage: '2 large open fractures',
                    pl: '2 złamania otwarte duże',
                    en: '2 large open fractures',
                },
            },
            {
                title: {
                    id: 'product.basic_set.setContents.4.title',
                    defaultMessage: '4 longitudinal incised/lacerated wounds',
                    pl: '4 podłużne rany cięte/szarpane',
                    en: '4 longitudinal incised/lacerated wounds',
                },
            },
            {
                title: {
                    id: 'product.basic_set.setContents.5.title',
                    defaultMessage: '8 small incised wounds (length 2–4 cm)',
                    pl: '8 małych ran ciętych (dł. 2-4 cm)',
                    en: '8 small incised wounds (length 2–4 cm)',
                },
            },
            {
                title: {
                    id: 'product.basic_set.setContents.6.title',
                    defaultMessage:
                        '3 upper limb amputations (training variant)',
                    pl: '3 amputacje kończyny górnej (wariant treningowy)',
                    en: '3 upper limb amputations (training variant)',
                },
            },
            {
                title: {
                    id: 'product.basic_set.setContents.7.title',
                    defaultMessage:
                        '5 wounds with imitation of an embedded metal fragment',
                    pl: '5 ran z imitacją wbitego metalowego odłamka',
                    en: '5 wounds with imitation of an embedded metal fragment',
                },
            },
        ],
        price: 1250,
        images: [
            'basic_1.jpg',
            'basic_2.jpg',
            'basic_3.jpg',
            'basic_4.jpg',
            'basic_5.jpg',
            'basic_6.jpg',
            'basic_7.jpg',
        ],
        additionalInfo: {
            id: 'product.basic_set.additionalInfo',
            defaultMessage: 'All elements are made of latex.',
            pl: 'Wszystkie elementy wykonane z lateksu.',
            en: 'All elements are made of latex.',
        },
        popular: true,
    },
    {
        id: 'basic_civil_set',
        tag: 'trauma_simulation_latex',
        name: {
            id: 'product.basic_civil_set.name',
            defaultMessage: 'Basic Civil Set',
            pl: 'Zestaw Basic Civil',
            en: 'Basic Civil Set',
        },
        description: {
            id: 'product.basic_civil_set.description',
            defaultMessage:
                'A set developed for civilian training, such as first aid courses, qualified first aid (KPP), training for rescuers, medical services, and civilian personnel. It allows realistic simulation of injuries typical for traffic accidents, domestic or industrial injuries – including open fractures, incised, lacerated, bite wounds, and wounds with embedded foreign bodies. The wounds are made of durable latex, resistant to mechanical damage and easy to maintain. After cleaning and disinfection, they can be reused multiple times. Thin elements remain functional for 3–5 uses, while thicker ones (e.g. fractures) can be used even a dozen times.',
            pl: 'Zestaw opracowany z myślą o <strong>szkoleniach cywilnych</strong>, takich jak kursy pierwszej pomocy, kwalifikowanej pierwszej pomocy (KPP), szkolenia dla ratowników, służb medycznych i personelu cywilnego. Pozwala realistycznie odwzorować urazy typowe dla wypadków komunikacyjnych, urazów domowych czy przemysłowych - w tym złamania otwarte, rany cięte, szarpane, kąsane oraz rany z wbitymi ciałami obcymi. Rany wykonano z trwałego <strong>lateksu</strong>, odpornego na uszkodzenia mechaniczne i łatwego w utrzymaniu. Po oczyszczeniu i dezynfekcji mogą być <strong>wielokrotnie używane</strong>. Cienkie elementy zachowują funkcjonalność do <strong>3-5 użyć</strong>, grubsze (np. złamania) nawet <strong>kilkanaście razy</strong>.',
            en: 'A set developed for civilian training, such as first aid courses, qualified first aid (KPP), training for rescuers, medical services, and civilian personnel. It allows realistic simulation of injuries typical for traffic accidents, domestic or industrial injuries – including open fractures, incised, lacerated, bite wounds, and wounds with embedded foreign bodies. The wounds are made of durable latex, resistant to mechanical damage and easy to maintain. After cleaning and disinfection, they can be reused multiple times. Thin elements remain functional for 3–5 uses, while thicker ones (e.g. fractures) can be used even a dozen times.',
        },
        setContents: [
            {
                title: {
                    id: 'product.basic_civil_set.setContents.0.title',
                    defaultMessage: '5 small open fractures',
                    pl: '5 złamań otwartych małych',
                    en: '5 small open fractures',
                },
            },
            {
                title: {
                    id: 'product.basic_civil_set.setContents.1.title',
                    defaultMessage: '5 medium open fractures',
                    pl: '5 złamań otwartych średnich',
                    en: '5 medium open fractures',
                },
            },
            {
                title: {
                    id: 'product.basic_civil_set.setContents.2.title',
                    defaultMessage: '5 large open fractures',
                    pl: '5 złamań otwartych dużych',
                    en: '5 large open fractures',
                },
            },
            {
                title: {
                    id: 'product.basic_civil_set.setContents.3.title',
                    defaultMessage: '2 structural ankle joint fractures',
                    pl: '2 złamania strukturalne stawu skokowego',
                    en: '2 structural ankle joint fractures',
                },
            },
            {
                title: {
                    id: 'product.basic_civil_set.setContents.4.title',
                    defaultMessage: '2 open fractures of both forearm bones',
                    pl: '2 złamania otwarte obu kości przedramienia',
                    en: '2 open fractures of both forearm bones',
                },
            },
            {
                title: {
                    id: 'product.basic_civil_set.setContents.5.title',
                    defaultMessage: '8 longitudinal incised/lacerated wounds',
                    pl: '8 podłużnych ran ciętych/szarpanych',
                    en: '8 longitudinal incised/lacerated wounds',
                },
            },
            {
                title: {
                    id: 'product.basic_civil_set.setContents.6.title',
                    defaultMessage: '8 small incised wounds (length 2–4 cm)',
                    pl: '8 małych ran ciętych (dł. 2-4 cm)',
                    en: '8 small incised wounds (length 2–4 cm)',
                },
            },
            {
                title: {
                    id: 'product.basic_civil_set.setContents.7.title',
                    defaultMessage:
                        '5 wounds with imitation of an embedded metal fragment',
                    pl: '5 ran z imitacją wbitego metalowego odłamka',
                    en: '5 wounds with imitation of an embedded metal fragment',
                },
            },
            {
                title: {
                    id: 'product.basic_civil_set.setContents.8.title',
                    defaultMessage: '5 small lacerations',
                    pl: '5 ran szarpanych małych',
                    en: '5 small lacerations',
                },
            },
            {
                title: {
                    id: 'product.basic_civil_set.setContents.9.title',
                    defaultMessage: '2 large lacerations',
                    pl: '2 rany szarpane duże',
                    en: '2 large lacerations',
                },
            },
            {
                title: {
                    id: 'product.basic_civil_set.setContents.10.title',
                    defaultMessage: '2 bite wounds (human and dog)',
                    pl: '2 rany kąsane (człowiek oraz pies)',
                    en: '2 bite wounds (human and dog)',
                },
            },
        ],
        price: 1000,
        images: [
            'basic_1.jpg',
            'basic_2.jpg',
            'basic_3.jpg',
            'basic_4.jpg',
            'basic_5.jpg',
        ],
        additionalInfo: {
            id: 'product.basic_civil_set.additionalInfo',
            defaultMessage: 'All elements are made of latex.',
            pl: 'Wszystkie elementy wykonane z lateksu.',
            en: 'All elements are made of latex.',
        },
    },
    {
        id: 'multitrauma_set',
        tag: 'trauma_simulation_latex',
        name: {
            id: 'product.multitrauma_set.name',
            defaultMessage: 'Multitrauma Set',
            pl: 'Zestaw Multitrauma',
            en: 'Multitrauma Set',
        },
        description: {
            id: 'product.multitrauma_set.description',
            defaultMessage:
                'A set designed for advanced tactical medicine (TCCC) training and exercises in battlefield medicine and mass casualty incidents. It enables simulation of multiple simultaneous injuries – gunshot wounds, shrapnel injuries, amputations, and fractures. The elements are made of durable latex, ensuring resistance to intensive use and ease of application. After proper cleaning and disinfection, the wounds can be reused. Thin elements (e.g. superficial wounds) are suitable for 3–5 uses, while thicker structures (e.g. fractures, amputations) can be used multiple times – even a dozen times.',
            pl: 'Zestaw przeznaczony do <strong>zaawansowanych szkoleń medycyny taktycznej (TCCC)</strong> oraz ćwiczeń z zakresu medycyny pola walki i zdarzeń masowych. Umożliwia symulację wielu jednoczesnych obrażeń - postrzałów, urazów odłamkowych, amputacji i złamań Elementy wykonane są z trwałego <strong>lateksu</strong>, zapewniającego odporność na intensywne użytkowanie i łatwość aplikacji. Po prawidłowym oczyszczeniu i dezynfekcji rany mogą być <strong>ponownie wykorzystywane</strong>. Cienkie elementy (np. rany powierzchniowe) nadają się do <strong>3-5 użyć</strong>, grubsze struktury (np. złamania, amputacje) mogą być używane <strong>wielokrotnie</strong> - nawet kilkanaście razy.',
            en: 'A set designed for advanced tactical medicine (TCCC) training and exercises in battlefield medicine and mass casualty incidents. It enables simulation of multiple simultaneous injuries – gunshot wounds, shrapnel injuries, amputations, and fractures. The elements are made of durable latex, ensuring resistance to intensive use and ease of application. After proper cleaning and disinfection, the wounds can be reused. Thin elements (e.g. superficial wounds) are suitable for 3–5 uses, while thicker structures (e.g. fractures, amputations) can be used multiple times – even a dozen times.',
        },
        setContents: [
            {
                title: {
                    id: 'product.multitrauma_set.setContents.0.title',
                    defaultMessage: '50 entry wounds (various calibers)',
                    pl: '50 ran wlotowych (różnych kalibrów)',
                    en: '50 entry wounds (various calibers)',
                },
            },
            {
                title: {
                    id: 'product.multitrauma_set.setContents.1.title',
                    defaultMessage:
                        '50 exit/shrapnel wounds (can be used interchangeably)',
                    pl: '50 ran wylotowych/odłamkowych (możliwość stosowania zamiennie)',
                    en: '50 exit/shrapnel wounds (can be used interchangeably)',
                },
            },
            {
                title: {
                    id: 'product.multitrauma_set.setContents.2.title',
                    defaultMessage: '10 small open fractures',
                    pl: '10 złamań otwartych małych',
                    en: '10 small open fractures',
                },
            },
            {
                title: {
                    id: 'product.multitrauma_set.setContents.3.title',
                    defaultMessage: '5 large open fractures',
                    pl: '5 złamań otwartych dużych',
                    en: '5 large open fractures',
                },
            },
            {
                title: {
                    id: 'product.multitrauma_set.setContents.4.title',
                    defaultMessage: '2 structural ankle joint fractures',
                    pl: '2 złamania strukturalne stawu skokowego',
                    en: '2 structural ankle joint fractures',
                },
            },
            {
                title: {
                    id: 'product.multitrauma_set.setContents.5.title',
                    defaultMessage: '10 longitudinal incised/lacerated wounds',
                    pl: '10 podłużnych ran ciętych/szarpanych',
                    en: '10 longitudinal incised/lacerated wounds',
                },
            },
            {
                title: {
                    id: 'product.multitrauma_set.setContents.6.title',
                    defaultMessage: '10 small incised wounds (length 2–4 cm)',
                    pl: '10 małych ran ciętych (dł. 2-4 cm)',
                    en: '10 small incised wounds (length 2–4 cm)',
                },
            },
            {
                title: {
                    id: 'product.multitrauma_set.setContents.7.title',
                    defaultMessage: '4 upper limb amputations',
                    pl: '4 amputacje kończyny górnej',
                    en: '4 upper limb amputations',
                },
            },
            {
                title: {
                    id: 'product.multitrauma_set.setContents.8.title',
                    defaultMessage: '10 wounds with embedded metal fragment',
                    pl: '10 ran z wbitym metalowym odłamkiem',
                    en: '10 wounds with embedded metal fragment',
                },
            },
            {
                title: {
                    id: 'product.multitrauma_set.setContents.10.title',
                    defaultMessage: '1 latex artificial skin (48 x 66 cm)',
                    pl: '1 sztuczna skóra lateksowa (48 x 66 cm)',
                    en: '1 latex artificial skin (48 x 66 cm)',
                },
            },
        ],
        price: 2000,
        images: [
            'basic_1.jpg',
            'basic_2.jpg',
            'basic_3.jpg',
            'basic_4.jpg',
            'basic_5.jpg',
            'basic_6.jpg',
            'basic_7.jpg',
        ],
        additionalInfo: {
            id: 'product.multitrauma_set.additionalInfo',
            defaultMessage: 'All elements are made of latex.',
            pl: 'Wszystkie elementy wykonane z lateksu.',
            en: 'All elements are made of latex.',
        },
    },
    {
        id: 'amputation_hand_set',
        tag: 'trauma_simulation_sylicone',
        name: {
            id: 'product.amputation_hand_set.name',
            defaultMessage: 'Set: Amputated Hand + Fingers',
            pl: 'Zestaw: Amputowana dłoń + palce',
            en: 'Set: Amputated Hand + Fingers',
        },
        description: {
            id: 'product.amputation_hand_set.description',
            defaultMessage:
                'A set containing realistic casts of amputated upper limb elements. Made of durable silicone, intended for use as a moulage element – for example in scenarios with amputated limbs or during training in securing severed body parts.',
            pl: 'Zestaw zawiera realistyczne odlewy amputowanych elementów kończyny górnej. Wykonane z wytrzymałego silikonu, przeznaczone do wykorzystania jako element pozoracji - np. w scenariuszach z amputowanymi kończynami lub podczas zabezpieczania odciętych fragmentów ciała.',
            en: 'A set containing realistic casts of amputated upper limb elements. Made of durable silicone, intended for use as a moulage element – for example in scenarios with amputated limbs or during training in securing severed body parts.',
        },
        setContents: [
            {
                title: {
                    id: 'product.amputation_hand_set.setContents.0.title',
                    defaultMessage: '1 amputated hand',
                    pl: '1 amputowana dłoń',
                    en: '1 amputated hand',
                },
            },
            {
                title: {
                    id: 'product.amputation_hand_set.setContents.1.title',
                    defaultMessage: '1 set of amputated fingers (5 pcs.)',
                    pl: '1 komplet amputowanych palców dłoni (5 szt.)',
                    en: '1 set of amputated fingers (5 pcs.)',
                },
            },
        ],
        price: 750,
        images: [
            'dlon1.jpg',
            'dlon2.jpg',
            'dlon3.jpg',
            'dlon4.jpg',
            'dlon5.jpg',
            'dlon6.jpg',
            'palec1.jpg',
            'palec2.jpg',
            'palec3.jpg',
            'palec4.jpg',
            'palec5.jpg',
            'palec6.jpg',
            'reka_1.jpg',
            'reka_2.jpg',
            'reka_3.jpg',
            'palce_1.jpg',
        ],
    },
    {
        id: 'silicone_evisceration',
        tag: 'trauma_simulation_sylicone',
        name: {
            id: 'product.silicone_evisceration.name',
            defaultMessage: 'Silicone Evisceration',
            pl: 'Silikonowe wytrzewienie',
            en: 'Silicone Evisceration',
        },
        description: {
            id: 'product.silicone_evisceration.description',
            defaultMessage:
                'A silicone cast depicting an abdominal injury with evisceration of organs. Made of high-quality silicone with a very high degree of realism. Construction allows attaching the prosthetic to a simulated patient using a specialized silicone adhesive. Used in tactical medicine and prehospital care training.',
            pl: 'Odlew silikonowy przedstawiający uraz jamy brzusznej z wytrzewieniem narządów. Wykonany z wysokiej jakości silikonu o bardzo wysokim stopniu realizmu. Konstrukcja umożliwia przyklejenie trenażera do osoby pozorowanej za pomocą specjalistycznego kleju do elementów silikonowych. Stosowany w ćwiczeniach z zakresu medycyny taktycznej i ratownictwa przedszpitalnego.',
            en: 'A silicone cast depicting an abdominal injury with evisceration of organs. Made of high-quality silicone with a very high degree of realism. Construction allows attaching the prosthetic to a simulated patient using a specialized silicone adhesive. Used in tactical medicine and prehospital care training.',
        },
        price: 750,
        images: [
            'wytrzewienie_1.jpg',
            'wytrzewienie_2.png',
            'wytrzewienie_3.jpg',
        ],
        popular: true,
    },
    {
        id: 'amputated_limbs_and_fingers_set',
        tag: 'trauma_simulation_sylicone',
        name: {
            id: 'product.amputated_limbs_and_fingers_set.name',
            defaultMessage: 'Set of Amputated Limbs and Fingers',
            pl: 'Zestaw amputowanych kończyn i palców',
            en: 'Set of Amputated Limbs and Fingers',
        },
        description: {
            id: 'product.amputated_limbs_and_fingers_set.description',
            defaultMessage:
                'A set containing realistic casts of amputated body parts made of durable silicone. Intended for use as a moulage element, e.g. in scenarios with multiple casualties or during training in securing severed limbs.',
            pl: 'Zestaw zawiera realistyczne odlewy amputowanych części ciała wykonane z trwałego silikonu. Przeznaczony do wykorzystania jako element pozoracji, np. w scenariuszach z licznymi poszkodowanymi lub podczas ćwiczeń z zabezpieczania odciętych kończyn.',
            en: 'A set containing realistic casts of amputated body parts made of durable silicone. Intended for use as a moulage element, e.g. in scenarios with multiple casualties or during training in securing severed limbs.',
        },
        setContents: [
            {
                title: {
                    id: 'product.amputated_limbs_and_fingers_set.setContents.0.title',
                    defaultMessage: '1 amputated hand',
                    pl: '1 amputowana dłoń',
                    en: '1 amputated hand',
                },
            },
            {
                title: {
                    id: 'product.amputated_limbs_and_fingers_set.setContents.1.title',
                    defaultMessage: '1 amputated foot',
                    pl: '1 amputowana stopa',
                    en: '1 amputated foot',
                },
            },
            {
                title: {
                    id: 'product.amputated_limbs_and_fingers_set.setContents.2.title',
                    defaultMessage: '2 sets of amputated fingers (5 pcs. each)',
                    pl: '2 komplety amputowanych palców dłoni (po 5 szt.)',
                    en: '2 sets of amputated fingers (5 pcs. each)',
                },
            },
        ],
        price: 1450,
        images: [
            'stopa_2.jpg',
            'stopa_1.jpg',
            'stopa_3.jpg',
            'dlon1.jpg',
            'dlon2.jpg',
            'dlon3.jpg',
            'dlon4.jpg',
            'dlon5.jpg',
            'dlon6.jpg',
            'palec1.jpg',
            'palec2.jpg',
            'palec3.jpg',
            'palec4.jpg',
            'palec5.jpg',
            'palec6.jpg',
            'reka_1.jpg',
            'reka_2.jpg',
            'reka_3.jpg',
            'palce_1.jpg',
        ],
    },
    {
        id: 'amputated_forearm_elbow_level',
        tag: 'trauma_simulation_sylicone',
        name: {
            id: 'product.amputated_forearm_elbow_level.name',
            defaultMessage: 'Amputated Forearm at Elbow Level',
            pl: 'Amputowane przedramię na wysokości łokcia',
            en: 'Amputated Forearm at Elbow Level',
        },
        description: {
            id: 'product.amputated_forearm_elbow_level.description',
            defaultMessage:
                'A silicone cast depicting an upper limb amputation at elbow level. Intended for use as a moulage element, e.g. in scenarios with multiple casualties or during training in securing severed limbs. Does not feature hemorrhage simulation.',
            pl: 'Silikonowy odlew przedstawiający amputowaną kończynę górną na wysokości łokcia. Przeznaczony do wykorzystania jako element pozoracji, np. w scenariuszach z licznymi poszkodowanymi lub podczas ćwiczeń z zabezpieczania odciętych kończyn. Nie posiada funkcji symulacji krwotoku.',
            en: 'A silicone cast depicting an upper limb amputation at elbow level. Intended for use as a moulage element, e.g. in scenarios with multiple casualties or during training in securing severed limbs. Does not feature hemorrhage simulation.',
        },
        price: 1900,
        images: ['placeholder.png'],
    },
    {
        id: 'silicone_forearm_with_selected_injuries',
        tag: 'trauma_simulation_sylicone',
        name: {
            id: 'product.silicone_forearm_with_selected_injuries.name',
            defaultMessage:
                'Silicone Forearm Cast (without Elbow Joint) with Selected Injuries',
            pl: 'Silikonowy odlew przedramienia (bez stawu łokciowego) z wybranymi urazami',
            en: 'Silicone Forearm Cast (without Elbow Joint) with Selected Injuries',
        },
        description: {
            id: 'product.silicone_forearm_with_selected_injuries.description',
            defaultMessage:
                'A trainer intended for exercises in the management of limb injuries. Made of silicone, it includes representations of selected injuries and enables learning fracture stabilization and wound management.',
            pl: 'Trenażer przeznaczony do ćwiczeń z zakresu postępowania przy urazach kończyn. Wykonany z silikonu, zawiera odwzorowanie wybranych obrażeń - umożliwia naukę stabilizacji złamań i zabezpieczania ran.',
            en: 'A trainer intended for exercises in the management of limb injuries. Made of silicone, it includes representations of selected injuries and enables learning fracture stabilization and wound management.',
        },
        price: 2000,
        images: ['przedramie_1.jpg', 'przedramie_2.jpg', 'przedramie_3.jpg'],
        availableVariants: [
            {
                title: {
                    id: 'product.silicone_forearm_with_selected_injuries.availableVariants.0.title',
                    defaultMessage:
                        'forearm with open fracture / laceration of the wrist and closed fracture of a finger',
                    pl: 'przedramię z otwartym złamaniem / raną szarpaną nadgarstka i złamaniem zamkniętym palca',
                    en: 'forearm with open fracture / laceration of the wrist and closed fracture of a finger',
                },
            },
            {
                title: {
                    id: 'product.silicone_forearm_with_selected_injuries.availableVariants.1.title',
                    defaultMessage:
                        'forearm with closed fracture of both forearm bones and several small lacerations',
                    pl: 'przedramię ze złamaniem zamkniętym obu kości przedramienia i kilkoma niewielkimi ranami szarpanymi',
                    en: 'forearm with closed fracture of both forearm bones and several small lacerations',
                },
            },
        ],
        additionalInfo: {
            id: 'product.silicone_forearm_with_selected_injuries.additionalInfo',
            defaultMessage:
                'Possibility to change the type of injuries for an additional <strong>500 PLN</strong>.',
            pl: 'Możliwość zmiany rodzaju obrażeń za dopłatą <strong>500 PLN</strong>.',
            en: 'Possibility to change the type of injuries for an additional <strong>500 PLN</strong>.',
        },
    },
    {
        id: 'advanced_partial_hand_amputation',
        tag: 'trauma_simulation_sylicone',
        name: {
            id: 'product.advanced_partial_hand_amputation.name',
            defaultMessage: 'Advanced Partial Hand Amputation',
            pl: 'Zaawansowana częściowa amputacja dłoni',
            en: 'Advanced Partial Hand Amputation',
        },
        description: {
            id: 'product.advanced_partial_hand_amputation.description',
            defaultMessage:
                'A silicone trainer depicting a partial hand amputation. The partially amputated hand is attached to a cuff that covers part of the simulated person’s limb. Enables training in controlling massive hemorrhage, wound management, and stabilization of the injured limb.',
            pl: 'Trenażer wykonany z silikonu, przedstawiający częściową amputację dłoni. Dłoń częściowo amputowana przymocowana jest do mankietu, który zakrywa część kończyny osoby pozorowanej. Umożliwia przećwiczenie tamowania masywnego krwotoku, zabezpieczenia rany i stabilizacji uszkodzonej kończyny.',
            en: 'A silicone trainer depicting a partial hand amputation. The partially amputated hand is attached to a cuff that covers part of the simulated person’s limb. Enables training in controlling massive hemorrhage, wound management, and stabilization of the injured limb.',
        },
        price: 1200,
        images: ['placeholder.png'],
    },
    {
        id: 'silicone_forearm_with_slowly_oozing_hemorrhage',
        tag: 'trauma_simulation_sylicone',
        name: {
            id: 'product.silicone_forearm_with_slowly_oozing_hemorrhage.name',
            defaultMessage:
                'Silicone Forearm Cast (without Elbow Joint) with Slowly Oozing Hemorrhage',
            pl: 'Silikonowy odlew przedramienia (bez stawu łokciowego) z wolno sączącym się krwotokiem',
            en: 'Silicone Forearm Cast (without Elbow Joint) with Slowly Oozing Hemorrhage',
        },
        description: {
            id: 'product.silicone_forearm_with_slowly_oozing_hemorrhage.description',
            defaultMessage:
                'A trainer depicting a forearm with an open fracture and laceration in the wrist area, as well as a closed fracture of a finger. Equipped with a simulated bleeding system – the instructor can adjust the intensity of the simulated blood flow using a pump. Enables practical training in hemorrhage control, fracture management, and limb injury care.',
            pl: 'Trenażer przedstawiający przedramię z otwartym złamaniem i raną szarpaną w okolicy nadgarstka oraz złamaniem zamkniętym palca. Wyposażony w system symulowanego krwawienia - instruktor może regulować intensywność wypływu symulowanej krwi za pomocą pompy. Pozwala na praktyczne szkolenie z zakresu tamowania krwotoków, zaopatrywania złamań i zabezpieczania urazów kończyn.',
            en: 'A trainer depicting a forearm with an open fracture and laceration in the wrist area, as well as a closed fracture of a finger. Equipped with a simulated bleeding system – the instructor can adjust the intensity of the simulated blood flow using a pump. Enables practical training in hemorrhage control, fracture management, and limb injury care.',
        },
        price: 2400,
        images: ['przedramie_1.jpg', 'przedramie_2.jpg', 'przedramie_3.jpg'],
        availableVariants: [
            {
                title: {
                    id: 'product.silicone_forearm_with_slowly_oozing_hemorrhage.availableVariants.0.title',
                    defaultMessage:
                        'forearm with open fracture / laceration of the wrist and closed fracture of a finger',
                    pl: 'przedramię z otwartym złamaniem / raną szarpaną nadgarstka i złamaniem zamkniętym palca',
                    en: 'forearm with open fracture / laceration of the wrist and closed fracture of a finger',
                },
            },
            {
                title: {
                    id: 'product.silicone_forearm_with_slowly_oozing_hemorrhage.availableVariants.1.title',
                    defaultMessage:
                        'forearm with closed fracture of both forearm bones and several small lacerations',
                    pl: 'przedramię ze złamaniem zamkniętym obu kości przedramienia i kilkoma niewielkimi ranami szarpanymi',
                    en: 'forearm with closed fracture of both forearm bones and several small lacerations',
                },
            },
        ],
        additionalInfo: {
            id: 'product.silicone_forearm_with_slowly_oozing_hemorrhage.additionalInfo',
            defaultMessage:
                'Possibility to change the type of injuries for an additional <strong>500 PLN</strong>.',
            pl: 'Możliwość zmiany rodzaju obrażeń za dopłatą <strong>500 PLN</strong>.',
            en: 'Possibility to change the type of injuries for an additional <strong>500 PLN</strong>.',
        },
    },
    {
        id: 'trainer_stopping_bleeding_bandage_and_wound_packing_arm_shoulder',
        tag: 'hemorrhage_control_trainers',
        name: {
            id: 'product.trainer_stopping_bleeding_bandage_and_wound_packing_arm_shoulder.name',
            defaultMessage:
                'Hemorrhage Control Trainer Using Tourniquet and Wound Packing (Arm with Shoulder)',
            pl: 'Trenażer tamowania krwotoku za pomocą opaski oraz wound packing (ramię z barkiem)',
            en: 'Hemorrhage Control Trainer Using Tourniquet and Wound Packing (Arm with Shoulder)',
        },
        description: {
            id: 'product.trainer_stopping_bleeding_bandage_and_wound_packing_arm_shoulder.description',
            defaultMessage:
                'An advanced trainer including a cast of the arm with shoulder, intended for learning and improving techniques of controlling massive hemorrhage in the upper limb. Equipped with an instructor-controlled bleeding system, it enables realistic simulation of injuries requiring immediate intervention.',
            pl: 'Zaawansowany trenażer obejmujący odlew ramienia wraz z barkiem, przeznaczony do nauki i doskonalenia technik tamowania masywnych krwotoków w obrębie kończyny górnej. Wyposażony w system krwawienia sterowany przez instruktora, umożliwia realistyczną symulację urazów wymagających natychmiastowego działania.',
            en: 'An advanced trainer including a cast of the arm with shoulder, intended for learning and improving techniques of controlling massive hemorrhage in the upper limb. Equipped with an instructor-controlled bleeding system, it enables realistic simulation of injuries requiring immediate intervention.',
        },
        price: 10000,
        images: ['reka_bez_barku_1.jpg'],
        simulatedDamage: [
            {
                title: {
                    id: 'product.trainer_stopping_bleeding_bandage_and_wound_packing_arm_shoulder.simulatedDamage.0.title',
                    defaultMessage: 'Hand amputation',
                    pl: 'amputacja dłoni',
                    en: 'Hand amputation',
                },
            },
            {
                title: {
                    id: 'product.trainer_stopping_bleeding_bandage_and_wound_packing_arm_shoulder.simulatedDamage.1.title',
                    defaultMessage:
                        'Gunshot / shrapnel wound in the antecubital fossa',
                    pl: 'rana postrzałowa / odłamkowa w dole łokciowym',
                    en: 'Gunshot / shrapnel wound in the antecubital fossa',
                },
            },
        ],
        trainingOptions: [
            {
                title: {
                    id: 'product.trainer_stopping_bleeding_bandage_and_wound_packing_arm_shoulder.trainingOptions.0.title',
                    defaultMessage: 'Application of a tourniquet',
                    pl: 'aplikacja opaski uciskowej',
                    en: 'Application of a tourniquet',
                },
            },
            {
                title: {
                    id: 'product.trainer_stopping_bleeding_bandage_and_wound_packing_arm_shoulder.trainingOptions.1.title',
                    defaultMessage:
                        'Performing wound packing procedure in a deep wound',
                    pl: 'wykonanie procedury wound packing w ranie głębokiej',
                    en: 'Performing wound packing procedure in a deep wound',
                },
            },
            {
                title: {
                    id: 'product.trainer_stopping_bleeding_bandage_and_wound_packing_arm_shoulder.trainingOptions.2.title',
                    defaultMessage:
                        'Practicing tourniquet conversion or approximation',
                    pl: 'ćwiczenie konwersji lub aproksymacji opaski uciskowej',
                    en: 'Practicing tourniquet conversion or approximation',
                },
            },
        ],
        additionalInfo: {
            id: 'product.trainer_stopping_bleeding_bandage_and_wound_packing_arm_shoulder.additionalInfo',
            defaultMessage:
                'The supply system allows independent activation and regulation of bleeding from each wound.',
            pl: 'System zasilający pozwala na niezależne uruchamianie i regulację krwotoku z każdej rany.',
            en: 'The supply system allows independent activation and regulation of bleeding from each wound.',
        },
        priceExtension: {
            id: 'product.trainer_stopping_bleeding_bandage_and_wound_packing_arm_shoulder.priceExtension',
            defaultMessage:
                '<strong>Change of distribution or nature of injuries:</strong> additional 500 PLN',
            pl: '<strong>Zmiana rozkładu lub charakteru obrażeń:</strong> dopłata 500 PLN',
            en: '<strong>Change of distribution or nature of injuries:</strong> additional 500 PLN',
        },
    },
    {
        id: 'trainer_stopping_bleeding_bandage_and_wound_packing_arm_without_shoulder',
        tag: 'hemorrhage_control_trainers',
        name: {
            id: 'product.trainer_stopping_bleeding_bandage_and_wound_packing_arm_without_shoulder.name',
            defaultMessage:
                'Hemorrhage Control Trainer Using Tourniquet and Wound Packing (Arm without Shoulder)',
            pl: 'Trenażer tamowania krwotoku za pomocą opaski oraz wound packing (ramię bez barku)',
            en: 'Hemorrhage Control Trainer Using Tourniquet and Wound Packing (Arm without Shoulder)',
        },
        description: {
            id: 'product.trainer_stopping_bleeding_bandage_and_wound_packing_arm_without_shoulder.description',
            defaultMessage:
                'A trainer depicting the upper limb (without shoulder), intended for exercises in controlling massive hemorrhage and wound packing procedures. The model is equipped with a bleeding system with independent control of each wound, allowing realistic simulation of various training scenarios.',
            pl: 'Trenażer przedstawiający kończynę górną (bez barku), przeznaczony do ćwiczeń z zakresu tamowania masywnych krwotoków oraz procedur wound packing. Model wyposażony jest w system krwawienia z możliwością niezależnego sterowania każdą raną, co pozwala na wierne odwzorowanie różnych scenariuszy szkoleniowych.',
            en: 'A trainer depicting the upper limb (without shoulder), intended for exercises in controlling massive hemorrhage and wound packing procedures. The model is equipped with a bleeding system with independent control of each wound, allowing realistic simulation of various training scenarios.',
        },
        price: 5500,
        images: ['reka_bez_barku_1.jpg'],
        simulatedDamage: [
            {
                title: {
                    id: 'product.trainer_stopping_bleeding_bandage_and_wound_packing_arm_without_shoulder.simulatedDamage.0.title',
                    defaultMessage: 'Hand amputation',
                    pl: 'amputacja dłoni',
                    en: 'Hand amputation',
                },
            },
            {
                title: {
                    id: 'product.trainer_stopping_bleeding_bandage_and_wound_packing_arm_without_shoulder.simulatedDamage.1.title',
                    defaultMessage:
                        'Gunshot wound in the antecubital fossa or forearm',
                    pl: 'rana postrzałowa w dole łokciowym lub w obrębie przedramienia',
                    en: 'Gunshot wound in the antecubital fossa or forearm',
                },
            },
        ],
        trainingOptions: [
            {
                title: {
                    id: 'product.trainer_stopping_bleeding_bandage_and_wound_packing_arm_without_shoulder.trainingOptions.0.title',
                    defaultMessage: 'Application of a tourniquet',
                    pl: 'aplikacja opaski uciskowej',
                    en: 'Application of a tourniquet',
                },
            },
            {
                title: {
                    id: 'product.trainer_stopping_bleeding_bandage_and_wound_packing_arm_without_shoulder.trainingOptions.1.title',
                    defaultMessage:
                        'Practicing wound packing procedure in a deep wound',
                    pl: 'wykonywanie procedury wound packing w ranie głębokiej',
                    en: 'Practicing wound packing procedure in a deep wound',
                },
            },
            {
                title: {
                    id: 'product.trainer_stopping_bleeding_bandage_and_wound_packing_arm_without_shoulder.trainingOptions.2.title',
                    defaultMessage:
                        'Practicing tourniquet conversion or approximation',
                    pl: 'ćwiczenie konwersji lub aproksymacji opaski uciskowej',
                    en: 'Practicing tourniquet conversion or approximation',
                },
            },
        ],
        priceExtension: {
            id: 'product.trainer_stopping_bleeding_bandage_and_wound_packing_arm_without_shoulder.priceExtension',
            defaultMessage:
                '<strong>Change of distribution or nature of injuries:</strong> additional 500 PLN',
            pl: '<strong>Zmiana rozkładu lub charakteru obrażeń:</strong> dopłata 500 PLN',
            en: '<strong>Change of distribution or nature of injuries:</strong> additional 500 PLN',
        },
        popular: true,
    },
    {
        id: 'trainer_stopping_bleeding_bandage_and_wound_packing_leg',
        tag: 'hemorrhage_control_trainers',
        name: {
            id: 'product.trainer_stopping_bleeding_bandage_and_wound_packing_leg.name',
            defaultMessage:
                'Hemorrhage Control Trainer Using Tourniquet and Wound Packing (Lower Limb)',
            pl: 'Trenażer tamowania krwotoku za pomocą opaski oraz wound packing (kończyna dolna)',
            en: 'Hemorrhage Control Trainer Using Tourniquet and Wound Packing (Lower Limb)',
        },
        description: {
            id: 'product.trainer_stopping_bleeding_bandage_and_wound_packing_leg.description',
            defaultMessage:
                'A trainer depicting the lower limb, intended for training in controlling massive hemorrhage and practicing wound packing procedures. The model is equipped with a simulated bleeding system with independent supply to each wound, allowing control of hemorrhage intensity.',
            pl: 'Trenażer przedstawiający kończynę dolną, przeznaczony do szkolenia z zakresu tamowania masywnych krwotoków oraz ćwiczenia procedur wound packing. Model wyposażony jest w system symulowanego krwawienia z niezależnym zasilaniem każdej rany, co pozwala na kontrolowanie intensywności krwotoku.',
            en: 'A trainer depicting the lower limb, intended for training in controlling massive hemorrhage and practicing wound packing procedures. The model is equipped with a simulated bleeding system with independent supply to each wound, allowing control of hemorrhage intensity.',
        },
        price: 15000,
        simulatedDamage: [
            {
                title: {
                    id: 'product.trainer_stopping_bleeding_bandage_and_wound_packing_leg.simulatedDamage.0.title',
                    defaultMessage:
                        'Amputation below the knee (at mid-calf level)',
                    pl: 'amputacja poniżej kolana (na wysokości połowy łydki)',
                    en: 'Amputation below the knee (at mid-calf level)',
                },
            },
            {
                title: {
                    id: 'product.trainer_stopping_bleeding_bandage_and_wound_packing_leg.simulatedDamage.1.title',
                    defaultMessage: 'Gunshot / shrapnel wound above the knee',
                    pl: 'rana postrzałowa / odłamkowa powyżej kolana',
                    en: 'Gunshot / shrapnel wound above the knee',
                },
            },
        ],
        trainingOptions: [
            {
                title: {
                    id: 'product.trainer_stopping_bleeding_bandage_and_wound_packing_leg.trainingOptions.0.title',
                    defaultMessage:
                        'Application of a tourniquet on the lower limb',
                    pl: 'aplikacja opaski uciskowej na kończynę dolną',
                    en: 'Application of a tourniquet on the lower limb',
                },
            },
            {
                title: {
                    id: 'product.trainer_stopping_bleeding_bandage_and_wound_packing_leg.trainingOptions.1.title',
                    defaultMessage: 'Performing wound packing procedure',
                    pl: 'wykonanie procedury wound packing',
                    en: 'Performing wound packing procedure',
                },
            },
            {
                title: {
                    id: 'product.trainer_stopping_bleeding_bandage_and_wound_packing_leg.trainingOptions.2.title',
                    defaultMessage:
                        'Practicing tourniquet conversion or approximation',
                    pl: 'ćwiczenie konwersji lub aproksymacji opaski uciskowej',
                    en: 'Practicing tourniquet conversion or approximation',
                },
            },
        ],
        priceExtension: {
            id: 'product.trainer_stopping_bleeding_bandage_and_wound_packing_leg.priceExtension',
            defaultMessage:
                '<strong>Change of distribution or nature of injuries:</strong> additional 750 PLN',
            pl: '<strong>Zmiana rozkładu lub charakteru obrażeń:</strong> dopłata 750 PLN',
            en: '<strong>Change of distribution or nature of injuries:</strong> additional 750 PLN',
        },
        images: [
            'noga1.jpg',
            'noga2.jpg',
            'noga3.jpg',
            'noga4.jpg',
            'noga5.jpg',
        ],
    },
    {
        id: 'intraosseous_Access_Trainer_EZ_IO',
        tag: 'task_trainers',
        name: {
            id: 'product.intraosseous_Access_Trainer_EZ_IO.name',
            defaultMessage: 'Intraosseous Access Trainer (EZ-IO)',
            pl: 'Trenażer uzyskania dostępu doszpikowego (EZ-IO)',
            en: 'Intraosseous Access Trainer (EZ-IO)',
        },
        description: {
            id: 'product.intraosseous_Access_Trainer_EZ_IO.description',
            defaultMessage:
                'Set of two trainers - tibia and humerus - made using 3D printing technology. The model is designed for repeated training in obtaining intraosseous access using the EZ-IO set. The bones are a representation of real anatomical structures - they were created based on 3D scans, which allows them to maintain their full geometry and anatomical fidelity. The surfaces of the bones intended for punctures are interchangeable. After they are worn out, it is possible to replace just the surface without having to replace the entire trainer. The replaceable components can also be restored by filling holes formed as a result of intensive use. The trainers are designed to accommodate a standard 20 ml syringe, which allows for simulation of blood/bone marrow aspiration.',
            pl: 'Zestaw dwóch trenażerów - kość piszczelowa oraz kość ramienna - wykonanych w technologii druku 3D. Model przeznaczony jest do wielokrotnego treningu uzyskiwania dostępu doszpikowego za pomocą zestawu EZ-IO. Kości stanowią odwzorowanie rzeczywistych struktur anatomicznych - powstały na bazie skanów 3D, co pozwala zachować ich pełną geometrię i wierność anatomiczną. Powierzchnie kości przeznaczone do wykonywania wkłuć są wymienne. Po ich zużyciu możliwa jest wymiana samej powierzchni, bez konieczności wymiany całego trenażera. Wymienne elementy mogą być również uzupełniane po powstaniu ubytków wynikających z intensywnego użytkowania. Trenażery są przystosowane do umieszczenia standardowej strzykawki o pojemności 20 ml, która umożliwia symulację aspiracji krwi/szpiku kostnego.',
            en: 'Set of two trainers - tibia and humerus - made using 3D printing technology. The model is designed for repeated training in obtaining intraosseous access using the EZ-IO set. The bones are a representation of real anatomical structures - they were created based on 3D scans, which allows them to maintain their full geometry and anatomical fidelity. The surfaces of the bones intended for punctures are interchangeable. After they are worn out, it is possible to replace just the surface without having to replace the entire trainer. The replaceable components can also be restored by filling holes formed as a result of intensive use. The trainers are designed to accommodate a standard 20 ml syringe, which allows for simulation of blood/bone marrow aspiration.',
        },
        price: 2500,
        images: [
            'IOHUMERUS1.jpg',
            'IOHUMERUSBONE.jpg',
            'IOHUMERUSNTIBIA.jpg',
            'IOTibia1.jpg',
        ],
        trainingOptions: [
            {
                title: {
                    id: 'product.intraosseous_Access_Trainer_EZ_IO.trainingOptions.0.title',
                    defaultMessage:
                        '1x intraosseous access trainer EZ-IO - proximal humerus',
                    pl: '1x trenażer uzyskiwania dostępu doszpikowego EZ-IO - kość ramienna',
                    en: '1x intraosseous access trainer EZ-IO - proximal humerus',
                },
            },
            {
                title: {
                    id: 'product.intraosseous_Access_Trainer_EZ_IO.trainingOptions.1.title',
                    defaultMessage:
                        '1x intraosseous access trainer EZ-IO - proximal tibia',
                    pl: '1x trenażer uzyskiwania dostępu doszpikowego EZ-IO - kość piszczelowa',
                    en: '1x intraosseous access trainer EZ-IO - proximal tibia',
                },
            },
            {
                title: {
                    id: 'product.intraosseous_Access_Trainer_EZ_IO.trainingOptions.2.title',
                    defaultMessage:
                        '3x interchangeable puncture surface - proximal humerus',
                    pl: '3x wymienna powierzchnia wkłucia - kość ramienna ',
                    en: '3x interchangeable puncture surface - proximal humerus',
                },
            },
            {
                title: {
                    id: 'product.intraosseous_Access_Trainer_EZ_IO.trainingOptions.3.title',
                    defaultMessage:
                        '3x interchangeable puncture surface - proximal tibia',
                    pl: '3x wymienna powierzchnia wkłucia - kość piszczelowa ',
                    en: '3x interchangeable puncture surface - proximal tibia',
                },
            },
        ],
    },
    {
        id: 'additional_pump_with_pressure_gauge_IO',
        tag: 'accessories',
        name: {
            id: 'product.additional_pump_with_pressure_gauge_IO.name',
            defaultMessage: 'Additional Pump with Pressure Gauge',
            pl: 'Dodatkowa pompa wraz z manometrem',
            en: 'Additional Pump with Pressure Gauge',
        },
        description: {
            id: 'product.additional_pump_with_pressure_gauge_IO.description',
            defaultMessage:
                'Pump compatible with the simulated bleeding system, equipped with a pressure gauge calibrated in mmHg, allowing for control and adjustment of working pressure.',
            pl: 'Pompa kompatybilna z systemem symulowanego krwawienia, wyposażona w manometr wyskalowany w mmHg umożliwiający kontrolę i regulację ciśnienia roboczego.',
            en: 'Pump compatible with the simulated bleeding system, equipped with a pressure gauge calibrated in mmHg, allowing for control and adjustment of working pressure.',
        },
        price: 350,
        images: ['placeholder.png'],
    },
    {
        id: 'specialized_glue_silicone_elements_wounds_IO',
        tag: 'accessories',
        name: {
            id: 'product.specialized_glue_silicone_elements_wounds_IO.name',
            defaultMessage:
                'Specialized Adhesive for Attaching Silicone Elements/Wounds',
            pl: 'Specjalistyczny klej do przyklejania elementów/ran silikonowych',
            en: 'Specialized Adhesive for Attaching Silicone Elements/Wounds',
        },
        description: {
            id: 'product.specialized_glue_silicone_elements_wounds_IO.description',
            defaultMessage:
                'Adhesive intended for attaching silicone elements to the body of the simulated person.',
            pl: 'Klej przeznaczony do mocowania elementow silikonowych na ciele pozorowanym.',
            en: 'Adhesive intended for attaching silicone elements to the body of the simulated person.',
        },
        hideSetContentsTitle: true,
        setContents: [
            {
                title: {
                    id: 'product.specialized_glue_silicone_elements_wounds_IO.setContents.0.title',
                    defaultMessage: 'does not require the use of a remover',
                    pl: 'nie wymaga stosowania zmywacza',
                    en: 'does not require the use of a remover',
                },
            },
            {
                title: {
                    id: 'product.specialized_glue_silicone_elements_wounds_IO.setContents.1.title',
                    defaultMessage:
                        'when mixed with an appropriate pigment, it can be used to create realistic injuries directly on the skin of the simulated person',
                    pl: 'po zmieszaniu z odpowiednim pigmentem może być wykorzystany do tworzenia realistycznych obrażeń bezpośrednio na skórze osoby pozorowanej',
                    en: 'when mixed with an appropriate pigment, it can be used to create realistic injuries directly on the skin of the simulated person',
                },
            },
        ],
        price: 300,
        images: ['placeholder.png'],
    },
    {
        id: 'silicone_glue_for_repairs_IO',
        tag: 'accessories',
        name: {
            id: 'product.silicone_glue_for_repairs_IO.name',
            defaultMessage: 'Silicone Glue (for Repairs)',
            pl: 'Klej do silikonu (do napraw)',
            en: 'Silicone Glue (for Repairs)',
        },
        description: {
            id: 'product.silicone_glue_for_repairs_IO.description',
            defaultMessage:
                'A specialized adhesive intended for repairing silicone elements, enabling quick and durable bonding of damaged parts.',
            pl: 'Specjalistyczny klej przeznaczony do naprawy elementów wykonanych z silikonu, umożliwiający szybkie i trwałe łączenie uszkodzonych fragmentów.',
            en: 'A specialized adhesive intended for repairing silicone elements, enabling quick and durable bonding of damaged parts.',
        },
        price: 300,
        images: ['placeholder.png'],
    },
];
