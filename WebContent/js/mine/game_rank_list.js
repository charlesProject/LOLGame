//排行榜点击事件
var curAreaId = 1;
function bindRankListClickEvent(area_id,pnum){
	curAreaId = area_id;
	initRankListPagePlugin(area_id,pnum);
}

//初始化分页组件
function initRankListPagePlugin(area_id,pnum){
	$.ajax({
		type: "get",
		url: "game/rankList/top",
		data:{
			"area_id":area_id,
			"pnum":pnum
		},
		success: function(data) {
			$("#topRankListBox").pagination(data.data.total_num, {
		        items_per_page:10,
		        num_display_entries:2,
		        num_edge_entries:2,
		        prev_text:"前一页",
		        next_text:"后一页",
		        callback:RankListPaginationClick
			});
		}
	});
	
}
//分页回调函数（战绩查询分页操作）
function RankListPaginationClick(new_page_index, pagination_container) {
	//var area_id = 1;
	$.ajax({
		type: "get",
		url: "game/rankList/top",
		data:{
			"area_id":curAreaId,
			"pnum":(new_page_index+1),
		},
		success: function(data) {
			updateTopRankList(data);
		}
	});
    return false;
}

function updateTopRankList(data){
//	console.log("排行榜数据更新");
	//console.log(data);
	$("#rankModalBody>tr").html("");
	var rankList = data.data.rank_list;
	for(var i=0;i<rankList.length;i++){
		$("#rankModalBody").append(
				"<tr class='active'>"+
				"<td colspan='2'>"+rankList[i].ranking+"</td>"+
				"<td colspan='2'><img id='rankUserIcon"+rankList[i].qquin+"' src='img/2.png' class='rankChampionIcon' />"+rankList[i].name+"</td>"+
				"<td colspan='2'><img id='rankIcon"+rankList[i].qquin+"' src='img/section_255.png' class='championIcon' style='float:left;'/><span id='rankName"+rankList[i].qquin+"'>最强王者</span></td>"+
				"<td colspan='2'>"+rankList[i].win_point+"</td>"+
				"<td colspan='4'>"+
				"	<img id='rankChampion1"+rankList[i].qquin+"' src='img/Nautilus.png' class='championIcon' />"+
				"	<img  id='rankChampion2"+rankList[i].qquin+"' src='img/Nautilus.png' class='championIcon' />"+
				"	<img id='rankChampion3"+rankList[i].qquin+"' src='img/Nautilus.png' class='championIcon' />"+
				"	<img id='rankChampion4"+rankList[i].qquin+"' src='img/Nautilus.png' class='championIcon' />"+
				"	<img id='rankChampion5"+rankList[i].qquin+"' src='img/Nautilus.png' class='championIcon' />"+
				"</td>"+
			"</tr>"
		);
		updateRankUserIcon(rankList[i].qquin,rankList[i].icon_id);
		updateRankIconAndName(rankList[i].qquin,rankList[i].queue,rankList[i].tier,rankList[i].queue);//更新段位图标和名称
		updateRankChampionIcon(rankList[i].qquin,rankList[i].champions);//更新英雄图标
	}
}
function updateRankUserIcon(qquin,icon_id){
	//console.log("用户图标id"+icon_id);
	if(icon_id=="undefined"){
		return;
	}
	$("#rankUserIcon"+qquin).attr("src","http://cdn.tgp.qq.com/lol/images/resources/usericon/"+icon_id+".png");
}

function updateRankChampionIcon(qquin,champions){
	$("#rankChampion1"+qquin).attr("src","http://cdn.tgp.qq.com/lol/images/resources/champions/"+champions[0]+".png");
	$("#rankChampion2"+qquin).attr("src","http://cdn.tgp.qq.com/lol/images/resources/champions/"+champions[1]+".png");
	$("#rankChampion3"+qquin).attr("src","http://cdn.tgp.qq.com/lol/images/resources/champions/"+champions[2]+".png");
	$("#rankChampion4"+qquin).attr("src","http://cdn.tgp.qq.com/lol/images/resources/champions/"+champions[3]+".png");
	$("#rankChampion5"+qquin).attr("src","http://cdn.tgp.qq.com/lol/images/resources/champions/"+champions[4]+".png");
}

function updateRankIconAndName(qquin,tier,queue){
	$.ajax({
		type: "get",
		url: "user/rank",
		data:{
			"tier":tier,
			"queue":queue
		},
		success: function(data) {
//			console.log("修改....");
//			console.log(data);
			$("#rankName"+qquin).html(data.rank_name);
			$("#rankIcon"+qquin).attr("src",data.rank_pic);
		}
	});
}

function InitRankAreaMsg(){
	$.ajax({
		type: "get",
		url: "game/allAreaName",
		data:{
		},
		success: function(data) {
			for(var i=0;i<data.length;i++){
				$("#areaRankList").append(
						"<li>"+
						"<button class='btn btn-default' id='rankAreaId"+data[i].area_id+"'>"+data[i].area_name+"</button>"+
						"</li>"
				);
				bindAreaBtnClickEvent(data[i].area_id);
			}
		}
	});
}
function bindAreaBtnClickEvent(area_id){
	$("#rankAreaId"+area_id).bind("click",function(){
		bindRankListClickEvent(area_id,1);
		var areaName = $(this).html();
		$("#guofuPaiHang").html("<font color='red'>"+areaName+"</font>"+"国服胖行榜");
	});
}