let colors=["white",
"orange",
"magenta",
"light_blue",
"yellow",
"lime",
"pink",
"gray",
"light_gray",
"cyan",
"purple",
"blue",
"brown",
"black",
"green",
"red"
];

onEvent('item.tags', (event) => {
    event.add('itemfilters:check_nbt', 'tetra:modular_double')
	event.add('frostedheart:knife', 'tetra:modular_sword')
	event.add('frostedheart:knife', '#forge:knives')
	//event.add('ages_api:knives','#frostedheart:knife')
    event.add('forge:plates/bronze', "steampowered:bronze_sheet")
    event.add('forge:plates/cast_iron', "kubejs:cast_iron_plate")
    event.add('forge:plates/tungsten_steel', "kubejs:tungsten_steel_plate")
    event.add('forge:ingots/tungsten_steel', "kubejs:tungsten_steel")
    event.add('forge:plates/battery_alloy', "kubejs:battery_alloy_plate")
    event.add('forge:ingots/battery_alloy', "kubejs:battery_alloy")
    event.add('forge:dusts/wood', "rankine:sawdust")
	event.add("forge:ingots/antimony","rankine:antimony");
	event.add("forge:rods/cast_iron","kubejs:cast_iron_rod")
    event.add('the_winter_rescue:flux_block', "rankine:limestone")
    event.add('the_winter_rescue:flux_block', "rankine:white_marble")
    event.add('the_winter_rescue:flux_block', "rankine:black_marble")
    event.add('the_winter_rescue:flux_block', "rankine:dolostone")
    event.add('the_winter_rescue:flux_block', "rankine:chalk")
    event.add('the_winter_rescue:flour', "stone_age:flour")
    event.add('the_winter_rescue:flour', "frostedheart:rye_flour")

    event.add('the_winter_rescue:cogwheels', "steampowered:bronze_cogwheel")
    event.add('the_winter_rescue:cogwheels', "steampowered:cast_iron_cogwheel")
    event.add('the_winter_rescue:cogwheels', "steampowered:steel_cogwheel")

    event.add('the_winter_rescue:large_cogwheels', "steampowered:bronze_large_cogwheel")
    event.add('the_winter_rescue:large_cogwheels', "steampowered:cast_iron_large_cogwheel")
    event.add('the_winter_rescue:large_cogwheels', "steampowered:steel_large_cogwheel")
    event.add('forge:ores/copper', "rankine:malachite")
    event.add('forge:ores/copper', "rankine:chalcocite")
    event.add('forge:ores/tin', "kubejs:native_tin")
    event.add('forge:ores/tin', "rankine:cassiterite")
	event.add('immersiveengineering:forbidden_in_crates', '#create:toolboxes')
	event.add('immersiveengineering:forbidden_in_crates', 'tetra:modular_toolbelt')
	event.add('immersiveengineering:forbidden_in_crates', '#charcoal_pit:ceramic_pots')
	event.add('immersiveengineering:forbidden_in_crates', 'charcoal_pit:clay_pot')
	event.add('immersiveengineering:forbidden_in_crates', '#storagedrawers:drawers')
	event.add('immersiveengineering:forbidden_in_crates', 'storagedrawers:compacting_drawers_3')
	event.add("kubejs:fuel_stick","frostedheart:charcoal_stick")
	event.add("kubejs:fuel_stick","frostedheart:coal_stick")
	event.add("kubejs:fuel_stick","kubejs:straw_briquette")
	event.add("frostedheart:ash","charcoal_pit:ash")
	event.add("frostedheart:cow_feed","charcoal_pit:straw");
	event.add("kubejs:coal_dust","kubejs:anthracite_dust")
	event.add("kubejs:coal_dust","kubejs:bituminous_coal_dust")
	event.add("kubejs:coal_dust","kubejs:subbituminous_coal_dust")
	event.add("kubejs:coal_dust","kubejs:lignite_dust")
	event.add("kubejs:coal_dust","kubejs:coal_dust")
	event.add("kubejs:fuel_glue","minecraft:slime_ball")
	event.add("kubejs:fuel_glue","create:dough")
	event.add("kubejs:fuel_glue","#forge:bitumen")
	event.add("forge:ores/copper","kubejs:rusted_copper_ingot")
	event.add("forge:ores/tin","kubejs:gray_tin_ingot")
	event.add("forge:ores/iron","kubejs:rusted_iron_ingot")
	event.add("forge:dusts/zinc","kubejs:zinc_dust")
	event.removeAll("diet:fruits")
	event.removeAll("diet:vegetables")
	event.removeAll("diet:plant_oil")
	event.removeAll("diet:protein")
	event.removeAll("diet:foods")
	event.removeAll("diet:sugar")
	event.removeAll("diet:vitamin")
	//event.remove("thermopolium:mushroom","#forge:mushrooms");
	//event.add("thermopolium:mushroom","#forge:edible_mushrooms");


	event.add("kubejs:tetra_hammer","tetra:modular_double")
	event.add("rankine:tree_choppers","tetra:modular_double")
	event.add("rankine:tree_choppers","minecraft:iron_axe")
	event.add("forge:axes","minecraft:iron_axe")
		event.add('minecraft:shulker_box', 'minecraft:shulker_box')
	colors.forEach(clr=>{
		event.add('minecraft:shulker_box', 'minecraft:'+clr+'_shulker_box')
	})
	event.add('kubejs:straw_briquettes','kubejs:wet_straw_briquette');
	event.add('kubejs:straw_briquettes','kubejs:straw_briquette');
	event.add('thermopolium:container','frostedheart:advanced_thermos');
	event.add('thermopolium:container','frostedheart:thermos');
	event.add('thermopolium:cereals/baked','frostedheart:military_rations');
	event.add('thermopolium:cereals/baked','frostedheart:rye_bread');
	event.add('thermopolium:vegetables','frostedheart:military_rations');
	event.add('thermopolium:meats/meat','frostedheart:military_rations');
	event.add('thermopolium:meats','frostedheart:chocolate');
	event.add('thermopolium:eggs','crockpot:cooked_egg');
	event.add('thermopolium:vegetables','frostedheart:white_turnip_block');
	event.add('thermopolium:vegetables','frostedheart:dried_vegetables');
	event.add('frostedheart:mushroom_base',"frostedheart:straw_briquette_red_mushroom")
	event.add('frostedheart:mushroom_base',"frostedheart:straw_briquette_brown_mushroom")
	event.add('the_winter_rescue:leather',"minecraft:leather")
	event.add('the_winter_rescue:leather',"#forge:rubber")
	
	event.add('frostedheart:electronic_junk',"kubejs:damaged_gpu")
	event.add('frostedheart:electronic_junk',"kubejs:damaged_gpu")
    event.add('frostedheart:electronic_junk',"kubejs:damaged_circuit_board")
    event.add('frostedheart:electronic_junk',"kubejs:damaged_electric_motor")
    event.add('frostedheart:electronic_junk',"kubejs:damaged_camera")
    event.add('frostedheart:electronic_junk',"kubejs:burnt_circuit_board")
    event.add('frostedheart:electronic_junk',"kubejs:broken_robot_1")
    event.add('frostedheart:electronic_junk',"kubejs:broken_robot_2")
	
	//Why we disable ftb ultimine? We consider it have a bad impact on player experience, since it greatly reduce difficulty of this modpack and can easily cause bug or cheat.	
	//为何要禁止连锁挖矿？我们以前认为使用连锁挖矿是个人行为，可以让后期不想挖矿的玩家偷懒。
	//但是部分玩家和游戏UP向各种所有玩家推荐连锁挖矿。
	//甚至一些新手玩家刚刚下载整合包就已经前来询问连锁挖矿相关问题，并直接安装连锁挖矿，而不是先体验整合包内容。
	//而新手玩家上手直接使用连锁挖矿显然是非常影响整体游戏体验的，也与我们设计的初衷相悖，因此我们被迫提高连锁挖矿的门槛。
	//如果你坚持要使用连锁挖矿，可以自行把对应的内容去除，但是出现任何问题后果自负。并且请不要向他人宣传连锁挖矿。
	//最终，我们是不推荐擅自修改整合包内容的，这样极大降低游戏体验。如果实在要爽，不如直接开创造。
	event.add('ftbultimine:included_tools','create:cogwheel')
});