var champions;
//取远端英雄数据
function define(map) {
	console.log("define map");
	champions = map;
}
//根据champion_id查找英雄名称
function getChampionMsg(champion_id) {
	console.log(champions[champion_id].title);
}
