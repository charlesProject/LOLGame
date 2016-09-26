function addQueryUserArea(data){//设置查询结果
	$("#queryResult").html("");
	for(var i=0;i<data.data.length;i++){
		console.log("qquin="+data.data[i].qquin);
		$("#queryResult").append(
				"<li class='list-group-item'>"+
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
		updateUserTierIconAndName(data.data[i].qquin,data.data[i].tier,data.data[i].queue);
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
function updateUserTierIconAndName(qquin,tier,queue){//更新用户段位图标和图标名字
	$.ajax({
		type: "get",
		url: "user/rank",
		data:{
			"tier":tier,
			"queue":queue
		},
		success: function(data) {
			console.log("段位更新-->"+data.rank_pic);
			$("#"+qquin+"Rank").attr("src",data.rank_pic);
			$("#"+qquin+"Span").html(data.rank_name);
		}
	});
}