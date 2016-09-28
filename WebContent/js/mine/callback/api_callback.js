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
		updataUserIcon(data.data[i].qquin,data.data[i].icon_id);
		updataUserArea(data.data[i].qquin,data.data[i].area_id);
		updateUserTierIconAndName(data.data[i].qquin+"Span",data.data[i].qquin+"Rank",data.data[i].tier,data.data[i].queue);
	}
}

function updataUserIcon(img,iconId){//更新用户头像
	$.ajax({
		type: "get",
		url: "user/icon/"+iconId,
		data:{
		},
		success: function(data) {
			//console.log("头像-->"+data.pic_url);
			$("#"+img+"Img").attr("src",data.pic_url);
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
	$("#basicDiscreditNum").html(data.data.discredit_num);
	$("#basicLevel").html(data.data.level);
	$("#basicPowerValue").html(data.data.power_value);
	$("#basicRankLastBattle").html(data.data.rank_last_battle);
	updateUserTierIconAndName("basicRank","basicIcon",data.data.tier,data.data.queue);
}
//更新用户的英雄排行榜
function updateChampionTopInfo(data){
//	console.log("update champion top info....");
	//console.log(data);
	for(var i=0;i<data.length;i++){
		updateChampionIcon((i+1),data[i].champion_id);
		$("#topChampionName"+(i+1)).html(data[i].used_exp_value);
	}
}

//更新用户的详细信息
function updateDetailInfo(data){
//	console.log("update detail info....");
//	console.log(data);
	//更新上班部分mvp，5、4、3杀数据
	$("#totalMVP").html("X"+(data.data[2].total_rank_mvps+data.data[2].total_match_mvps));
	$("#godLikeNum").html("X"+data.data[1].god_like_num);
	$("#pentaKills").html("X"+data.data[1].penta_kills);
	$("#quadraKills").html("X"+data.data[1].quadra_kills);
	$("#tripleKills").html("X"+data.data[1].triple_kills);
	//更新下半部分图标数据
	var recentGameData=new Array();
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
}

//更新排行榜英雄Icon
function updateChampionIcon(indexEle,champion_id){
	$.ajax({
		type: "get",
		url: "champion/icon/"+champion_id,
		data:{
		},
		success: function(data) {
//			console.log("TOP3更新图标");
//			console.log(data);
			$("#topChampionIcon"+indexEle+"").attr("src",data.icon_url);
		}
	});
}