function addQueryUserArea(data){//设置查询结果
	$("#queryResultList").html("");
	for(var i=0;i<data.data.length;i++){
		//console.log("qquin="+data.data[i].qquin);
		$("#queryResultList").append(
				"<li class='list-group-item cursorClass queryResltLi' id='"+data.data[i].area_id+"_"+data.data[i].qquin+"'>"+
		"<div>"+
		"<div class='searchResultBox'>"+
		"	<img src='img/2.png' class='headIcon img-circle' id='"+data.data[i].qquin+"Img' />"+
		"	</div>"+
		"	<div class='searchResultBox'>"+
		"		<p class='sumName'>"+data.data[i].name+"</p>"+
		"		<p id='"+data.data[i].qquin+"P'>巨龙之巢</p>"+
		"	</div>"+
		"	<div class='searchResultBoxLast'>"+
		"		<p class='areaP'><img class='leavelImg' src='img/section_255.png' id='"+data.data[i].qquin+"Rank'/><span class='badge' id='"+data.data[i].qquin+"Span'>30</span></p>"+
		"	</div>"+
		"	<div style='clear: both;'></div>"+
		"</div>"+
		"</li>"+
		"");
		updataUserIcon(data.data[i].qquin+"Img",data.data[i].icon_id);
		updataUserArea(data.data[i].qquin,data.data[i].area_id);
		updateUserTierIconAndName(data.data[i].qquin+"Span",data.data[i].qquin+"Rank",data.data[i].tier,data.data[i].queue);
	}
}

function updataUserIcon(ele,iconId){//更新用户头像
	$.ajax({
		type: "get",
		url: "user/icon/"+iconId,
		data:{
		},
		success: function(data) {
			//console.log("头像-->"+data.pic_url);
			$("#"+ele).attr("src",data.pic_url);
		}
	});
}
function updataUserArea(p,area_id){//更新用户所在的大区
	$.ajax({
		type: "get",
		url: "user/area/"+area_id,
		data:{
		},
		success: function(data) {
		//	console.log("大区Name-->"+data.area_name);
			$("#"+p+"P").html(data.area_name);
		}
	});
}
function updateUserTierIconAndName(rankDom,iconDom,tier,queue){//更新用户段标和图标名字
	
	//console.log("更新Dom元素-->"+rankDom+"----"+iconDom);
	$.ajax({
		type: "get",
		url: "user/rank",
		data:{
			"tier":tier,
			"queue":queue
		},
		success: function(data) {
			$("#"+rankDom).html(data.rank_name);
			$("#"+iconDom).attr("src",data.rank_pic);
		}
	});
}

//更新用户的基本信息
function updateBasicInfo(data){
//	console.log("update basic info....");
//	console.log(data);
	$("#basicName").html(data.data.name);
	$("#basicWinPoint").html("胜点"+data.data.win_point);
	$("#basicPraiseNum").html(data.data.praise_num);
	//$("#basicDiscreditNum").html(data.data.discredit_num);
	$("#basicLevel").html(data.data.level);
	$("#basicPowerValue").html(data.data.power_value);
	$("#basicRankLastBattle").html(data.data.rank_last_battle);
	updateUserTierIconAndName("basicRank","basicIcon",data.data.tier,data.data.queue);
	updataUserIcon("basicUserIcon",data.data.icon);
}
//更新用户的英雄排行榜
function updateChampionTopInfo(data){
//	console.log("update champion top info....");
	//console.log(data);
	if(data.length!=0){
		for(var i=0;i<data.length;i++){
			updateChampionIcon("topChampionIcon"+(i+1),data[i].champion_id,0);
			$("#topChampionName"+(i+1)).html(data[i].used_exp_value);
		}
		//更新更多英雄按钮的id,同时绑定查询事件到改元素
		//$("[data-toggle='modal' ]").attr("id",data[0].area_id+"_"+data[0].qquin);
		bindMoreChampioBtnEvent("[data-toggle='modal' ]");
		bindTowChampionQueryTypeEvent("latelyBtn","usedExpBtn");
	}
}

//更新查询所有英雄(更新模态框)
function updateChampionMoreInfo(data){
//	console.log("更新模态框");
//	console.log(data);
	$("#modalBody").html("");
	for(var i=0;i<data.length;i++){
		var victoryRate = (100*data[i].win_num/data[i].use_num).toFixed(1);
		$("#modalBody").append(
				"<div class='championCard'>"+
				"<div class='cardLeft'>"+
				"<img src='img/86.jpg' class='leftImg' id='modalIcon"+data[i].champion_id+"'/>"+
				"</div>"+
				"<div class='cardRight'>"+
				"<div>"+
				"<p style='color: #85B6B7; margin-top: 15px;' id='modalName"+data[i].champion_id+"'>德玛西亚之力</p>"+
				"		<p style='color: #C56710;'>"+data[i].used_exp_value+"</p>"+
				"		<p style='color: #427A9F;'>熟练度</p>"+
				"		<div id='modalLevel"+data[i].champion_id+"'>"+
				"		<img src='img/star.png' class='starClass' />"+
				"		<img src='img/star.png' class='starClass' />"+
				"		<img src='img/star.png' class='starClass' />"+
				"		<img src='img/star.png' class='starClass' />"+
				"		<img src='img/black_star.png' class='starClass' />"+
				"	</div>"+
				"	<div>"+
				"		<p style='margin-top: 8px;'><span style='color: #427A9F;'>胜率</span><span style='color: #00C790; margin-left: 8px;'>"+victoryRate+"%</span></p>"+
				"		<p><span style='color: #427A9F;'>场次</span><span style='color: #00C790;margin-left: 8px;'>"+data[i].use_num+"</span></p>"+
				"	</div>"+
				"</div>"+
				"</div>"+
				"</div>"+""
		);
		updateChampionIcon("modalIcon"+data[i].champion_id,data[i].champion_id,1);//更新模态框champion图标
		updateChampionName("modalName"+data[i].champion_id,data[i].champion_id);//更新模态框champion 的名称
		updateChampionLevelStar("modalLevel"+data[i].champion_id,data[i].used_exp_value);//更新模态框星级评价
	}
	
}

//更新用户的详细信息
function updateDetailInfo(data){
//	console.log('update detail info....");
//	console.log(data);
	//更新上班部分mvp，5、4、3杀数据
	$("#totalMVP").html("X"+(data.data[2].total_rank_mvps+data.data[2].total_match_mvps));
	$("#godLikeNum").html("X"+data.data[1].god_like_num);
	$("#pentaKills").html("X"+data.data[1].penta_kills);
	$("#quadraKills").html("X"+data.data[1].quadra_kills);
	$("#tripleKills").html("X"+data.data[1].triple_kills);
	//更新下半部分图标数据
	var recentGameData=new Array();
	if(data.data[0].items.length!=0){
		recentGameData[0] = data.data[0].items[0].recent_position.up_use_num;
		recentGameData[1] = data.data[0].items[0].recent_position.jungle_use_num;//打野
		recentGameData[2] = data.data[0].items[0].recent_position.mid_use_num;
		recentGameData[3] = data.data[0].items[0].recent_position.adc_use_num;
		recentGameData[4] = data.data[0].items[0].recent_position.aux_use_num;//辅助
//	console.log("最近英雄使用次数");
//	console.log(recentGameData);
		//加载统计图数据
		$("#gameChart").html("<div id='chart2' style='width: 250px; height: 200px;'></div>");
		plotChatLoad(recentGameData);//加载统计图相关
	}else{
		$("#gameChart").html("<div id='chart2' style='width: 250px; height: 200px;'></div>");
		plotChatLoad(0);//加载统计图相关
	}
}

//更新排行榜英雄Icon
function updateChampionIcon(ele,champion_id,type){
	$.ajax({
		type: "get",
		url: "champion/icon/"+champion_id,
		data:{
			"type":type
		},
		success: function(data) {
//			console.log("TOP3更新图标");
//			console.log(data);
//		console.log("更新MOdal图标"+ele);
//			console.log(data);
			$("#"+ele).attr("src",data.icon_url);
		}
	});
}
//更新排行榜英雄Name
function updateChampionName(ele,champion_id){
	var championName = getChampionName(champion_id);
//	console.log("更新Modal Name="+championName);
	$("#"+ele).html(championName);
}

//更新排行榜英雄的熟练度星级图标
function updateChampionLevelStar(ele,used_exp_value){
	var star_level = getChampionLevel(used_exp_value);
	$("#"+ele).html("");//清空
	for(var i=0;i<5;i++){
		if(i<star_level){
			$("#"+ele).append(
					"<img src='img/star.png' class='starClass'>"
			);
		}else{
			$("#"+ele).append(
					"<img src='img/black_star.png' class='starClass'>"
			);
		}
	}
}


//初始化游戏战斗数据
function updateGamePlayData(data){
	console.log("战绩初始化");
	console.log(data)
	$("#lolGameDataList").html("");
	for(var i=0;i<data.data[0].battle_list.length;i++){
		var gameTime = data.data[0].battle_list[i].battle_time;
		var dateTime = gameTime.split(" ");
		$("#lolGameDataList").append(
				"<li class='list-group-item lolGameDataHover'>"+
				"<div>"+
				"	<div class='searchResultBox'>"+
				"		<img id='gameIcon"+data.data[0].battle_list[i].game_id+"' src='img/Nautilus.png' class='championIcon img-circle' />"+
				"	</div>"+
				"	<div class='searchResultBox'>"+
				"		<p id='gameName"+data.data[0].battle_list[i].game_id+"' class='sumName'>深海泰坦</p>"+
				"		<p>"+getWin(data.data[0].battle_list[i].win)+"</p>"+
				"	</div>"+
				"	<div class='searchResultBox thridBoxClass'>"+
				"		<p>"+dateTime[0]+"</p>"+
				"		<p>"+dateTime[1]+"</p>"+
				"	</div>"+
				"	<div class='searchResultBox'>"+
				"		<p>"+getGameModalName(data.data[0].battle_list[i].game_mode)+"</p>"+
				"  <img class='mvpIcon' src='img/honor/mvp.png' alt='mvp'>"+
				"	</div>"+
				"	<div style='clear: both;'></div>"+
				"</div>"+
			"</li>"
		);
		$("#lolGameDataList>li").first().css({background:"#F4F0F0"});//改变战绩列表中第一个盒子的默认底色
		updateChampionIcon("gameIcon"+data.data[0].battle_list[i].game_id,data.data[0].battle_list[i].champion_id,0);//更新缩略图
		updateChampionName("gameName"+data.data[0].battle_list[i].game_id,data.data[0].battle_list[i].champion_id,0);//更新图标
	}
}