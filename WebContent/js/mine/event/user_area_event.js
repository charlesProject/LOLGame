function bindQueryResultEvent(){//查询结果点击事件
	$(".queryResltLi").bind("click",function(){
		var params = $(this).attr("id").split("_");
		var area_id = params[0];
		var qquin = params[1];
		console.log("获得-->"+area_id+","+qquin);
		basicAjax(qquin,area_id);//基本信息请求
		topChampionAjax(qquin,area_id,3);//选择top3请求
		detailAjax(qquin,area_id);//详细信息请求
		$("[data-toggle='modal' ]").attr("id",area_id+"_"+qquin)
	//	var qquin_areaid = $("[data-toggle='modal']").attr("id").split("_");
		var bt_num = 0;
		var bt_list=-1;
		var champion_id=0;
		var offset=0;
		var limit = 8;
		var mvp_flag = -1;
		initDefaultPagePlugin(qquin,area_id,bt_num,bt_list,champion_id,offset,limit,mvp_flag)//绑定对战分页信息,默认开始加载beginIndex:0  pageSize:8的页面数据
		//绑定mvp按钮事件
		bindMvpBtnEvent();
		bindDefaultQueryAllBtnEvent();
		bindPaiWeiBtnEvent();
		bindPiPeiBtnEvent();
		bindDaLuanDouBtnEvent();
		bindRenJiBtnEvent();
		$("#queryResultList").hide();
		$(".queryResultBottom").show();
	});
}
//查询更多英雄事件
function bindMoreChampioBtnEvent(ele){
	$(ele).bind("click",function(){
		console.log("查询更多-->"+$(this).attr("id"));
		var params = $(this).attr("id").split("_");
		var area_id = params[0];
		var qquin = params[1];
		moreChampionAjax(qquin,area_id,2);
	});
}
//绑定英雄 “熟练度” 和 “最近使用”事件监听
function bindTowChampionQueryTypeEvent(latelyBtn,usedExpBtn){
	$("#"+latelyBtn).bind("click",function(){
		console.log("查询最近排序-->"+$("[data-toggle='modal' ]").attr("id"));
		var params = $("[data-toggle='modal' ]").attr("id").split("_");
		var area_id = params[0];
		var qquin = params[1];
		moreChampionAjax(qquin,area_id,1);
		turnModalOptionBtnColor(latelyBtn,usedExpBtn);
	});
	
	$("#"+usedExpBtn).bind("click",function(){
		console.log("查询经验排序-->"+$("[data-toggle='modal' ]").attr("id"));
		var params = $("[data-toggle='modal' ]").attr("id").split("_");
		var area_id = params[0];
		var qquin = params[1];
		moreChampionAjax(qquin,area_id,2);
		turnModalOptionBtnColor(usedExpBtn,latelyBtn);
	});
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
function moreChampionAjax(qquin,area_id,type){
	$.ajax({
		type: "get",
		url: "user/champion/"+type,
		data:{
			"qquin":qquin,
			"area_id":area_id,
		},
		success: function(data) {
			updateChampionMoreInfo(data);//更新用户基本信息
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

//Modal框的颜色切换动作
function turnModalOptionBtnColor(curBtn,otherBtn){
	$("#"+curBtn).attr("class","btn btn-danger champSelectBtn");
	$("#"+otherBtn).attr("class","btn btn-default champSelectBtn");
}