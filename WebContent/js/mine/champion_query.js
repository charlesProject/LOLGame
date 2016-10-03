var champions;
//取远端英雄数据
function define(map) {
	console.log("define map");
	champions = map;
}
//根据champion_id查找英雄名称
function getChampionName(champion_id) {
	//console.log(champions[champion_id].title);
	return champions[champion_id].title;
}

//根据熟练度获取等级
function getChampionLevel(used_exp_value){
	if(used_exp_value>=0&&used_exp_value<4000){
		return 0;
	}else if(used_exp_value>4000&&used_exp_value<8000){
		return 1;
	}else if(used_exp_value>8000&&used_exp_value<12000){
		return 2;
	}else if(used_exp_value>12000&&used_exp_value<16000){
		return 3;
	}else if(used_exp_value>16000&&used_exp_value<20000){
		return 4;
	}else if(used_exp_value>20000&&used_exp_value<100000){
		return 5;
	}else{
		return 5;
	}
}
