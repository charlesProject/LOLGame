/**
 * 游戏详情点击事件
 */
function bindGameDetailClickEvent(game_id){
	var area_id = $("[data-toggle=modal]").attr("id").split("_")[0];
	console.log(game_id);
	$(".lolGameDataHover").css("background","white");
	$("#gameDetail_"+game_id).css("background","rgb(244, 240, 240)");
	$.ajax({
		type: "get",
		url: "game/detail",
		data:{
			"area_id":area_id,
			"game_id":game_id
		},
		success: function(data) {
			//console.log(data);
			//1.先添加dom元素
			updateGameDetail(data);
		}
	});
}

//战斗详情数据更新
function updateGameDetail(data){
	$("#team100 tr:gt(0)").remove();
	$("#team200 tr:gt(0)").remove();
	var gamer_records = data.data.battle.gamer_records;
	checkVictoryOrDefect(gamer_records[0].win);//检验是胜利一方还是失败一方
	var gameDetailBox ;
	for(var i=0;i<gamer_records.length;i++){
		if(i<5){
			gameDetailBox = $("#team100");
		}else{
			gameDetailBox = $("#team200");
		}
		gameDetailBox.append(
				"<tr class='active'>"+
				"<td><img id='detailChampionIcon_"+gamer_records[i].qquin+"' src='img/Zilean.png' class='lolIHeadtemIcon' /></td>"+
				"<td style='text-align: center;'>"+
				"<p id='detailUserName_"+gamer_records[i].qquin+"' style='margin-bottom: 0px;'>卡卡罗特444</p>"+
				"<div id='detailHonor_"+gamer_records[i].qquin+"' class='gameHonorBox'>"+
				"		</div>"+
				"</td'>"+
				"<td id='detailEarnMoney_"+gamer_records[i].qquin+"'>"+
				"	6625"+
				"</td>"+
				"<td id='detailKDA_"+gamer_records[i].qquin+"'>"+
				"<p>24(1/1/7)</p>"+
				"<p id = 'detailScore_"+gamer_records[i].qquin+"' style='color:red;'>15.6</p>"+
				"</td>"+
				"<td id='detailSkill_"+gamer_records[i].qquin+"' colspan='2'>"+
				"		<img src='img/4.jpg' class='lolItemIcon' />"+
				"	<img src='img/14.jpg' class='lolItemIcon' />"+
				"</td>"+
				"<td id='detailEquipment_"+gamer_records[i].qquin+"' colspan='6'>" +
				"<img src='img/3009.png' class='lolItemIcon' />"+
				"<img src='img/3031.png' class='lolItemIcon' /> <img"+
				"	src='img/3046.png' class='lolItemIcon' /> <img"+
				"	src='img/3065.png' class='lolItemIcon' /> <img"+
				"	src='img/3072.png' class='lolItemIcon' /> <img"+
				"	src='img/3009.png' class='lolItemIcon' /> <img"+
				"	src='img/3340.png' class='lolItemIcon' /></td>"+
			"</tr>"
		);
		updateUserChampionAndName(gamer_records[i].name,gamer_records[i].qquin,gamer_records[i].champion_id);//更新用户英雄和玩家名称
		updateUserBattleTagList(gamer_records[i].battle_tag_list,gamer_records[i].qquin);//更新战斗标签
		updateMoneyAndKDA(//更新经济和KDA
				gamer_records[i].gold_earned,//金钱
				gamer_records[i].champions_killed,//杀人
				gamer_records[i].num_deaths,//死亡
				gamer_records[i].assists,//助攻
				gamer_records[i].game_score,
				gamer_records[i].qquin);//评分
		updateSkillIcons(gamer_records[i].summon_spell1_id,gamer_records[i].summon_spell2_id,gamer_records[i].qquin);//更新技能图标
		updateEquipmentIcons(
				gamer_records[i].item0,
				gamer_records[i].item1,
				gamer_records[i].item2,
				gamer_records[i].item3,
				gamer_records[i].item4,
				gamer_records[i].item5,
				gamer_records[i].item6,//饰品装备
				gamer_records[i].qquin
				);//更新装备栏
	}
}

//更新用户英雄和玩家名称
function updateUserChampionAndName(championName,qquin,championId){
	console.log("玩家召唤师头像+召唤师名=="+championName+"+"+qquin);
	$("#detailChampionIcon_"+qquin).attr("src","http://cdn.tgp.qq.com/lol/images/resources/champions/"+championId+".png");
	$("#detailUserName_"+qquin).html(championName);
}

//更新战斗标签
function updateUserBattleTagList(tagData,qquin){
	$("detailHonor_"+qquin).html("");
	console.log("战斗标签:");
	if(tagData.length!=0){
		for(var i=0;i<tagData.length;i++){
			console.log("标签-->"+tagData[i].tag_id);
			$("#detailHonor_"+qquin).append(
					"<div class='tag"+tagData[i].tag_id+"'></div>"
			);
		}
	}
}
//更新经济和KDA
function updateMoneyAndKDA(
		gold_earned,//金钱
		champions_killed,//杀人
		num_deaths,//死亡
		assists,//助攻
		game_score,//评分
		qquin){
	console.log("金钱:"+gold_earned+",杀:"+champions_killed+",死:"+num_deaths+",助攻:"+assists+"，评分:"+game_score);
	$("#detailEarnMoney_"+qquin).html(gold_earned);
	$("#detailKDA_"+qquin).html(
			"<p>"+champions_killed+"/"+num_deaths+"/"+assists+"</p>"+
			"<p id = 'detailScore_"+qquin+"' style='color:red;'>"+game_score+"</p>"
			);
}
//更新技能图标
function updateSkillIcons(summon_spell1_id,summon_spell2_id,qquin){
	console.log("召唤师技能:"+summon_spell1_id+"--"+summon_spell2_id);
	$("#detailSkill_"+qquin).html(
			"		<img src='http://cdn.tgp.qq.com/lol/images/resources/summonability/"+summon_spell1_id+".png' class='lolItemIcon' />"+
			"	<img src='http://cdn.tgp.qq.com/lol/images/resources/summonability/"+summon_spell2_id+".png' class='lolItemIcon' />"
	);
}
//更新装备栏
function updateEquipmentIcons(item0,	item1,	item2,	item3,	item4,	item5,	item6,qquin){
	console.log("装备:"+item0+" "+item1+" "+item2+" "+item3+" "+item4+" "+item5+" "+item6+" ");
	$("#detailEquipment_"+qquin).html(
			"<img src='http://cdn.tgp.qq.com/lol/images/resources/items/"+item0+".png' class='lolItemIcon' />"+
			"<img src='http://cdn.tgp.qq.com/lol/images/resources/items/"+item1+".png' class='lolItemIcon' />"+
			"<img src='http://cdn.tgp.qq.com/lol/images/resources/items/"+item2+".png' class='lolItemIcon' />"+
			"<img src='http://cdn.tgp.qq.com/lol/images/resources/items/"+item3+".png' class='lolItemIcon' />"+
			"<img src='http://cdn.tgp.qq.com/lol/images/resources/items/"+item4+".png' class='lolItemIcon' />"+
			"<img src='http://cdn.tgp.qq.com/lol/images/resources/items/"+item5+".png' class='lolItemIcon' />"+
			"<img src='http://cdn.tgp.qq.com/lol/images/resources/items/"+item6+".png' class='lolItemIcon' />"
	);
}
//胜利或者失败的检验
function checkVictoryOrDefect(win){
	if(win==1){//胜利
		$("#teamHead100").html("胜利");
		$("#teamHead100").css("color","blue");
		$("#teamHead200").html("失败");
		$("#teamHead200").css("color","red");
	}else{
		$("#teamHead100").html("失败");
		$("#teamHead100").css("color","red");
		$("#teamHead200").html("胜利");
		$("#teamHead200").css("color","blue");
	}
}