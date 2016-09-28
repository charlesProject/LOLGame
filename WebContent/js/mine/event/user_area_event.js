function bindQueryResultEvent(){//查询结果点击事件
	$(".queryResltLi").bind("click",function(){
		var params = $(this).attr("id").split("_");
		var area_id = params[0];
		var qquin = params[1];
		console.log("获得-->"+area_id+","+qquin);
		basicAjax(qquin,area_id);//基本信息请求
		topChampionAjax(qquin,area_id,3);//选择top3请求
		detailAjax(qquin,area_id);//详细信息请求
		$("#queryResultList").hide();
		$(".queryResultBottom").show();
	})
}

function basicAjax(qquin,area_id){
	$.ajax({
		type: "get",
		url: "user/basic",
		data:{
			"qquin":qquin,
			"area_id":area_id
		},
		success: function(data) {
			updateBasicInfo(data);//更新用户基本信息
		}
	});
}
function topChampionAjax(qquin,area_id,type){
	$.ajax({
		type: "get",
		url: "user/champion/"+type,
		data:{
			"qquin":qquin,
			"area_id":area_id,
		},
		success: function(data) {
			updateChampionTopInfo(data);//更新用户基本信息
		}
	});
}
function detailAjax(qquin,area_id){
	$.ajax({
		type: "get",
		url: "user/detail",
		data:{
			"qquin":qquin,
			"area_id":area_id
		},
		success: function(data) {
			updateDetailInfo(data);//更新用户基本信息
		
		}
	});
}