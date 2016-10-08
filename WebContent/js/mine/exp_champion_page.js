/**
 * 常用英雄分类
 */
var localChampionId = 0;
function InitExpQueryBtn(){
	//TODO同时还需要绑定事件监听函数
	//console.log("英雄分类查询操作");
	var params = $("[data-toggle='modal' ]").attr("id").split("_");
	var area_id = params[0];
	var qquin = params[1];
	$.ajax({
		type: "get",
		url: "user/champion/"+5,
		data:{
			"qquin":qquin,
			"area_id":area_id,
		},
		success: function(data) {
			updateExpChampionBtn(data);//更新用户基本信息
		}
	});
}


//更新组件
function updateExpChampionBtn(data){
	$("#expChampionMenue").html("");
	for(var i=0;i<data.length;i++){
		$("#expChampionMenue").append(
				"<img id='expBtn_"+data[i].champion_id+"' class='expBtnGroupItem' src='http://cdn.tgp.qq.com/lol/images/resources/champions/86.png' alt='' />"
		);
		updateChampionIcon("expBtn_"+data[i].champion_id,data[i].champion_id,0);
	}
	bindExpBtnEvent();
}


//分页相关
//初始化分页组件
function initExpPagePlugin(qquin,area_id,bt_num,bt_list,champion_id,offset,limit,mvp_flag){
	$.ajax({
		type: "get",
		url: "game/pageData",
		data:{
			"qquin":qquin,
			"area_id":area_id,
			"bt_num":bt_num,
			"bt_list":bt_list,
			"champion_id":champion_id,
			"offset":offset,
			"limit":limit,
			"mvp_flag":mvp_flag
		},
		success: function(data) {
			$("#pagePluginBox").pagination(data.data[0].total_num, {
		        items_per_page:8,
		        num_display_entries:1,
		        num_edge_entries:1,
		        prev_text:"前一页",
		        next_text:"后一页",
		        callback:expPaginationClick
			});
		}
	});
	
}
//分页回调函数（战绩查询分页操作）
function expPaginationClick(new_page_index, pagination_container) {
	//console.log("defaultPaginationClick分页-->"+new_page_index);
	var qquin_areaid = $("[data-toggle='modal']").attr("id").split("_");
	var qquin = qquin_areaid[1];
	var area_id = qquin_areaid[0];
	var bt_num = 0;
	var bt_list=-1;
	//var champion_id=0;
	var offset=new_page_index*8;
	var limit = 8;
	var mvp_flag = -1;
	$.ajax({
		type: "get",
		url: "game/pageData",
		data:{
			"qquin":qquin,
			"area_id":area_id,
			"bt_num":bt_num,
			"bt_list":bt_list,
			"champion_id":localChampionId,
			"offset":offset,
			"limit":limit,
			"mvp_flag":mvp_flag
		},
		success: function(data) {
			updateGamePlayData(data);
		}
	});
    return false;
}
//mvp按钮监听事件
function bindExpBtnEvent(){
		
		$(".expBtnGroupItem").bind("click",function(){
			var qquin_areaid = $("[data-toggle='modal']").attr("id").split("_");
			var qquin = qquin_areaid[1];
			var area_id = qquin_areaid[0];
			var bt_num = 0;
			var bt_list=-1;
			var champion_id = $(this).attr("id").split("_")[1];
			localChampionId = champion_id;
			var offset=0;
			var limit = 8;
			var mvp_flag = -1;
			initExpPagePlugin(qquin,area_id,bt_num,bt_list,champion_id,offset,limit,mvp_flag);
		})
}


