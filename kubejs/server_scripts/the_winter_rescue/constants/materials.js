//priority: 1010

// Used to determine which materials to unify
const materialsToUnify = [
    'iron',
    'gold',
    'copper',
    'silver',
    'zinc',
    'brass',
    'lead',
    'tin',
    'compressed_iron',
    'nickel',
    'aluminum',
    'uranium',
    'bronze',
    'electrum',
    'constantan',
    'steel',
    'osmium',
    'diamond',
    'lapis',
    'emerald',
    'quartz',
    'coal',
    'charcoal',
    'obsidian',
    'ender',
    'fluix',
    'saltpeter',
    'fluorite',
    'invar',
    'signalum',
    'lumium',
    'enderium',
    'sulfur',
    'cinnabar',
    'niter',
    'potassium_nitrate',
    'saltpeter',
    'apatite',
    'bitumen',
    'redstone',
    'glowstone',
    'arcane',
    'mana',
    'certus_quartz',
    'charged_certus_quartz',
    'iesnium',
    'dimensional',
    'cloggrum',
    'froststeel',
    'regalium',
    'utherium',
    'coal_coke',
    'starmetal',
    'amber',
    'cobalt',
    'queens_slime',
    'rose_gold',
    'tinkers_bronze',
    'knightslime',
    'slimesteel',
    'manyullyn',
    'hepatizon',
    'thallasium',
    'nebu',
    'aeternium',
    'alfsteel',
    'elementium',
    'gaia_spirit',
    'infused_iron',
    'manasteel',
    'sky',
    'terminite',
    'terrasteel',
    'energized_steel',
    'blazing_crystal',
    'niotic_crystal',
    'spirited_crystal',
    'nitro_crystal'
];

// Used to determine which material types to unify
const typesToUnify = ['nugget', 'ingot', 'gem', 'storage_block', 'ore', 'dust', 'gear', 'plate', 'rod'];

// Used for creating tags on custom ore processing materials
const metals = [
    'aluminum',
    'cloggrum',
    'cobalt',
    'copper',
    'froststeel',
    'gold',
    'iesnium',
    'iron',
    'lead',
    'nebu',
    'nickel',
    'osmium',
    'regalium',
    'silver',
    'thallasium',
    'tin',
    'uranium',
    'utherium',
    'zinc'
];

// Defines melting point of various materials
const meltingPoints = {
    utherium: {temp: 1070},
    thallasium: {temp: 800},
    signalum: {temp: 1272},
    regalium: {temp: 620},
    nebu: {temp: 1400},
    lumium: {temp: 1354},
    iesnium: {temp: 850},
    froststeel: {temp: 860},
    enderium: {temp: 1450},
    cloggrum: {temp: 650},
    sulfur: {temp: 115},
    redstone: {temp: 660},
    potassium_nitrate: {temp: 334},
    lapis: {temp: 115},
    fluorite: {temp: 1418},
    dimensional: {temp: 1450},
    coal: {temp: 1149},
    cinnabar: {temp: 580},
    bitumen: {temp: 115},
    apatite: {temp: 1660},
    aeternium: {temp: 1250},
    alfsteel: {temp: 1450},
    elementium: {temp: 875},
    gaia_spirit: {temp: 1350},
    infused_iron: {temp: 850},
    manasteel: {temp: 900},
    sky: {temp: 950},
    terminite: {temp: 840},
    terrasteel: {temp: 975},
    energized_steel: {temp: 875},
    blazing_crystal: {temp: 950},
    niotic_crystal: {temp: 1250},
    spirited_crystal: {temp: 1350},
    nitro_crystal: {temp: 1450}
};

// Defines the secondary metal each metal type will produce.
const oreProcessingSecondaries = {
    iron: {
        secondary: 'nickel',
        createProcessingTime: 400
    },
    nickel: {
        secondary: 'iron',
        createProcessingTime: 350
    },
    gold: {
        secondary: 'zinc',
        createProcessingTime: 300
    },
    copper: {
        secondary: 'gold',
        createProcessingTime: 350
    },
    aluminum: {
        secondary: 'iron',
        createProcessingTime: 300
    },
    lead: {
        secondary: 'silver',
        createProcessingTime: 300
    },
    silver: {
        secondary: 'lead',
        createProcessingTime: 300
    },
    uranium: {
        secondary: 'lead',
        createProcessingTime: 400
    },
    osmium: {
        secondary: 'tin',
        createProcessingTime: 400
    },
    tin: {
        secondary: 'osmium',
        createProcessingTime: 350
    },
    zinc: {
        secondary: 'gold',
        createProcessingTime: 350
    },
    nebu: {
        secondary: 'uranium',
        createProcessingTime: 400
    },
    cobalt: {
        secondary: 'iron',
        createProcessingTime: 400
    },
    cloggrum: {
        secondary: 'froststeel',
        createProcessingTime: 300
    },
    froststeel: {
        secondary: 'cobalt',
        createProcessingTime: 400
    },
    regalium: {
        secondary: 'utherium',
        createProcessingTime: 400
    },
    utherium: {
        secondary: 'regalium',
        createProcessingTime: 400
    },
    thallasium: {
        secondary: 'thallasium',
        createProcessingTime: 300
    },
    iesnium: {
        secondary: 'silver',
        createProcessingTime: 500
    },
    elementium: {
        secondary: 'elementium',
        createProcessingTime: 400
    }
};