onEvent('recipes', (event) => {
    const recipes = [
        tree_stumpRecipe(Item.of('create:copper_sheet'), Item.of('create:copper_ingot'),
            Ingredient.of('#forge:hammers'), 3, 2),
        tree_stumpRecipe(Item.of('create:copper_sheet'), Item.of('rankine:copper_ingot'),
            Ingredient.of('#forge:hammers'), 3, 2),
        tree_stumpRecipe(Item.of('create:copper_sheet'), Item.of('immersiveengineering:ingot_copper'),
            Ingredient.of('#forge:hammers'), 3, 2),
        tree_stumpRecipe(Item.of('steampowered:bronze_sheet'), Item.of('rankine:bronze_ingot'),
            Ingredient.of('#forge:hammers'), 3, 2),
        tree_stumpRecipe(Item.of('create:iron_sheet'), Item.of('minecraft:iron_ingot'),
            Ingredient.of('#forge:hammers'), 3, 2),
        tree_stumpRecipe(Item.of('kubejs:cast_iron_plate'), Item.of('rankine:cast_iron_ingot'),
            Ingredient.of('#forge:hammers'), 3, 2),
        tree_stumpRecipe(Item.of('immersiveengineering:plate_gold'), Item.of('minecraft:gold_ingot'),
            Ingredient.of('#forge:hammers'), 3, 2),
        tree_stumpRecipe(Item.of('kubejs:invar_steel_plate'), Item.of('rankine:invar_ingot'),
            Ingredient.of('#forge:hammers'), 3, 2),
        tree_stumpRecipe(Item.of('create:brass_sheet'), Item.of('rankine:brass_ingot'),
            Ingredient.of('#forge:hammers'), 3, 2),
        tree_stumpRecipe(Item.of('kubejs:flux'), Ingredient.of('#the_winter_rescue:flux_block'),
            Ingredient.of('#forge:hammers'), 3),
        tree_stumpRecipe(Item.of('rankine:alumina'), Item.of('kubejs:bauxite'),
            Ingredient.of('#forge:hammers'), 3),
        tree_stumpRecipe(Item.of('3x rankine:kaolinite'), Item.of('rankine:kaolin'),
            Ingredient.of('#forge:hammers'), 3),
		tree_stumpRecipe(Item.of("2x kubejs:wet_coal_briquette"), Item.of("kubejs:wet_coal_dust"),
            Ingredient.of('#forge:hammers'), 2),
        tree_stumpRecipe(Item.of('immersiveengineering:slab_treated_wood_horizontal', 2), Item.of('immersiveengineering:treated_wood_horizontal'),
            Ingredient.of('#forge:axes'), 2),
		tree_stumpRecipe(Item.of('immersiveengineering:slab_treated_wood_vertical', 2), Item.of('immersiveengineering:treated_wood_vertical'),
            Ingredient.of('#forge:axes'), 2),
		tree_stumpRecipe(Item.of('immersiveengineering:slab_treated_wood_packaged', 2), Item.of('immersiveengineering:treated_wood_packaged'),
            Ingredient.of('#forge:axes'), 2),
		tree_stumpRecipe(Item.of('kubejs:creosoted_sawdust_briquette'), Item.of('kubejs:creosoted_sawdust'),
            Ingredient.of('#forge:hammers'), 2)
    ]
    const wood_recipes = []
	//auto bulk wood recipes
	//Ingredient.of("#minecraft:carpets").getItemIds().forEach(name=>{console.info(name)});
	Ingredient.of("#minecraft:logs").getItemIds().forEach((name)=>{
		if(name.indexOf("log")!=-1){
			let namex=name.replace("_log","").replace("stripped_","");
			wood_recipes.push(tree_stumpRecipe(Item.of(namex+'_planks', 3), Item.of(name),
				Ingredient.of('#forge:axes'), 2))
			wood_recipes.push(tree_stumpRecipe(Item.of(namex+'_slab', 2), Item.of(namex+'_planks'),
				Ingredient.of('#forge:axes'), 2))
		}else if(name.indexOf("wood")!=-1){
			let namex=name.replace("_wood","").replace("stripped_","");
			wood_recipes.push(tree_stumpRecipe(Item.of(namex+'_planks', 3), Item.of(name),
				Ingredient.of('#forge:axes'), 2))
		}else if(name.indexOf("stem")!=-1){
			let namex=name.replace("_stem","").replace("stripped_","");
			wood_recipes.push(tree_stumpRecipe(Item.of(namex+'_planks', 3), Item.of(name),
				Ingredient.of('#forge:axes'), 2))
		}
		
	});
	
    wood_recipes.forEach((recipe) => {
        event.remove({output: recipe.result, type: 'minecraft:crafting_shapeless'});
        event.custom({
            "type": "stone_age:tree_stump",
            "ingredient": recipe.ingredients.toJson(),
            "tool": recipe.tool.toJson(),
            "chopTimes": recipe.chop,
            "amount": recipe.amount,
            "result": recipe.result.toResultJson()
        })
    })
    recipes.forEach((recipe) => {
        event.custom({
            "type": "stone_age:tree_stump",
            "ingredient": recipe.ingredients.toJson(),
            "tool": recipe.tool.toJson(),
            "chopTimes": recipe.chop,
            "amount": recipe.amount,
            "result": recipe.result.toResultJson()
        })
    })
});