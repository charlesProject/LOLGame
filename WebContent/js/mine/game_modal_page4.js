//初始化分页组件
function initRenJiPagePlugin(qquin,area_id,bt_num,bt_list,champion_id,offset,limit,mvp_flag){
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
			//updateGamePlayData(data);
			//console.log("handleType==="+handleType);
			$("#pagePluginBox").pagination(data.data[0].total_num, {
		        items_per_page:8,
		        num_display_entries:1,
		        num_edge_entries:1,
		        prev_text:"前一页",
		        next_text:"后一页",
		        callback:renJiPaginationClick
			});
		}
	});
	
}
//分页回调函数（战绩查询分页操作）
function renJiPaginationClick(new_page_index, pagination_container) {
	console.log("defaultPaginationClick分页-->"+new_page_index);
	var qquin_areaid = $("[data-toggle='modal']").attr("id").split("_");
	var qquin = qquin_areaid[1];
	var area_id = qquin_areaid[0];
	var bt_num = 1;
	var bt_list=8;
	var champion_id=0;
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
			"champion_id":champion_id,
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
function bindRenJiBtnEvent(){
		$("#queryRenJi").bind("click",function(){
			var qquin_areaid = $("[data-toggle='modal']").attr("id").split("_");
			var qquin = qquin_areaid[1];
			var area_id = qquin_areaid[0];
			var bt_num = 1;
			var bt_list=8;
			var champion_id=0;
			var offset=0;
			var limit = 8;
			var mvp_flag = -1;
			initRenJiPagePlugin(qquin,area_id,bt_num,bt_list,champion_id,offset,limit,mvp_flag);
		})
}

