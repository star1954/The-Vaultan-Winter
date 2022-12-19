onEvent('recipes', (event) => {


    event.remove({type: 'create:pressing'})


    event.recipes.createCompacting('2x steampowered:bronze_sheet', '3x rankine:bronze_ingot')
    event.recipes.createCompacting('2x kubejs:battery_alloy_plate', '3x kubejs:battery_alloy')
    event.recipes.createCompacting('2x kubejs:cast_iron_plate', '3x rankine:cast_iron_ingot')
    event.recipes.createCompacting('2x kubejs:invar_steel_plate', '3x rankine:invar_ingot')

    let metals = [
        "copper",
        "brass",
        "iron"
    ]
    metals.forEach((plate) => {
        event.recipes.createCompacting(`2x create:${plate}_sheet`, `3x #forge:ingots/${plate}`)
    });


    let metals2 = [
        "aluminum",
        "lead",
        "constantan",
        "steel",
        "electrum",
		"silver",
        "gold"
    ]
    metals2.forEach((plate) => {
        event.recipes.createCompacting(`2x immersiveengineering:plate_${plate}`, `3x #forge:ingots/${plate}`)
    });
});
