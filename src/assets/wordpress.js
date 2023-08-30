import harmfulBacteria_1 from '@assets/images/homePage/harmful_carcinogens_1.png';
import harmfulBacteria_2 from '@assets/images/homePage/harmful_carcinogens_2.png';
import harmfulBacteria_3 from '@assets/images/homePage/harmful_carcinogens_3.png';
import harmfulBacteria_4 from '@assets/images/homePage/harmful_carcinogens_4.png';
import * as uuid from 'uuid';
export const importantFactors = [
    {
        id: uuid.v4(),
        title: 'Removes all meat-borne bacteria',
        factor: 'that can cause food poisoning',
        image: harmfulBacteria_1,

    },
    {
        id: uuid.v4(),
        title: 'Removes harmful carcinogens',
        factor: 'that can cause cancer',
        image: harmfulBacteria_2
    },
    {
        id: uuid.v4(),
        title: 'Protects your food from paint chips',
        factor: 'that gather on the inside of a lid and other firebox parts',
        image: harmfulBacteria_3
    },
    {
        id: uuid.v4(),
        title: 'Prevents grill fires',
        factor: 'that happens due to flammable grease and malfunctions',
        image: harmfulBacteria_4
    },
    {
        id: uuid.v4(),
        title: 'Helps extend the life of your bbq',
        factor: 'that gets damaged by rust and corrosion',
        image: harmfulBacteria_1
    },
    {
        id: uuid.v4(),
        title: 'Let\'s make it look great!',
        factor: 'that happens due to flammable grease and malfunctions',
        image: harmfulBacteria_4
    }
]

import benefit_1 from '@assets/images/homePage/benefit_1.png';
import benefit_2 from '@assets/images/homePage/benefit_2.png';
import benefit_3 from '@assets/images/homePage/benefit_3.png';

export const ourServices = [
    {
        id: uuid.v4(),
        service: 'We understand that a grill is not just a cooking tool; it\'s an investment. That\'s why we offer professional grill cleaning services to help you get the most out of your grill.',
        image: benefit_3
    },
    {
        id: uuid.v4(),
        service: 'We can help bring your high-end grill back to life and protect both your health and prevent future spending.',
        image: benefit_2
    },
    {
        id: uuid.v4(),
        service: 'We perform all our cleaning services at your home or business! After your grill is serviced, it will look and work great!',
        image: benefit_1
    }
]

import equipment1 from "@assets/images/homePage/Frame_1.svg";
import equipment2 from "@assets/images/homePage/Frame_2.svg";
import equipment3 from "@assets/images/homePage/Frame_3.svg";
import equipment4 from "@assets/images/homePage/Frame_4.svg";

export const ourEquipments = [
    {
        id: uuid.v4(),
        title: 'non-toxic and eco-friendly cleaners',
        image: equipment2
    },
    {
        id: uuid.v4(),
        title: 'super-heated steam',
        image: equipment3
    },
    {
        id: uuid.v4(),
        title: 'specialized equipments',
        image: equipment1
    },
    {
        id: uuid.v4(),
        title: 'proprietary advanced process methodology',
        image: equipment4
    },
]

import vacuumCleaner from '@assets/images/homePage/vacuum_cleaner.png';
import hairdryer from '@assets/images/homePage/hairdryer.png';
import brush from '@assets/images/homePage/brush.png';
import vacuuming from '@assets/images/homePage/vacuuming.png';
import sprayer from '@assets/images/homePage/sprayer.png';
import boltcutter from '@assets/images/homePage/boltcutter.png';
import bacteria from '@assets/images/homePage/bacteria.png';
import sponge from '@assets/images/homePage/sponge.png';
export const ourCleaningServices = [
    {
        id: uuid.v4(),
        image: vacuumCleaner,
        title: 'High-pressure 330ºF steam cleaning',
        purpose: 'to remove built-up grease, grime, and other debris, kill bacteria and other pathogens'
    },
    {
        id: uuid.v4(),
        image: hairdryer,
        title: 'Sanding and buffing',
        purpose: 'to remove rust buildup and prevent corrosion'
    },
    {
        id: uuid.v4(),
        image: brush,
        title: 'Scrubbing',
        purpose: 'to remove baked-on food, carbon deposits, and other difficult-to-remove substances'
    },
    {
        id: uuid.v4(),
        image: vacuuming,
        title: 'Vacuuming',
        purpose: 'to remove debris, ash, and other loose particles'
    },
    {
        id: uuid.v4(),
        image: sprayer,
        title: 'Degreasing',
        purpose: 'to remove grease, grime, and oil buildup with eco-friendly cleaning agents'
    },
    {
        id: uuid.v4(),
        image: boltcutter,
        title: 'Power Cleaning',
        purpose: 'to achieve a comprehensive and thorough cleaning and get rid of even the most stubborn grime and buildup on your grill'
    },
    {
        id: uuid.v4(),
        image: bacteria,
        title: 'Sanitizing',
        purpose: 'to kill bacteria and other germs that may accumulate on the grill'
    },
    {
        id: uuid.v4(),
        image: sponge,
        title: 'Exterior cleaning',
        purpose: 'to thoroughly clean the lid, sides, and bottom of the grill'
    },
];

import unclogging from '@assets/images/homePage/unclogging.png';
import polishing from '@assets/images/homePage/polishing.png';
import inspection from '@assets/images/homePage/inspection.png';
import tuneUp from '@assets/images/homePage/tune-up.png';
import seasoning from '@assets/images/homePage/seasoning.png';
export const ourBonuses = [
    {
        id: uuid.v4(),
        image: unclogging,
        title: 'Unclogging grill burner holes',
        purpose: 'to allow even heating while grilling'
    },
    {
        id: uuid.v4(),
        image: polishing,
        title: 'Exterior polishing',
        purpose: 'to remove any stains or discoloration and restore the original shine'
    },
    {
        id: uuid.v4(),
        image: inspection,
        title: 'Inspection of the grill and its components',
        purpose: 'to ensure they are in good working condition'
    },
    {
        id: uuid.v4(),
        image: tuneUp,
        title: 'Tune-up service',
        purpose: 'to adjust components for optimal functioning'
    },
    {
        id: uuid.v4(),
        image: seasoning,
        title: 'Seasoning',
        purpose: 'to create a protective coating on the grill surfaces, which helps to prevent rust and corrosion'
    }
]