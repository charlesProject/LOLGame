function userAreaQueryEvent() {
	$("#submit").bind("click", function() { //绑定用户查询按钮
		$("#queryResultList").show();
		var gamerName = $("#gamerName").val();
		$.ajax({
			type: "get",
			url: "user/area",
			data:{
				"key":gamerName
			},
			success: function(data) {
			//	console.log(data);
				addQueryUserArea(data);
				bindQueryResultEvent();//绑定查询结果点击事件
				$(".queryResultBottom").hide();
			}
		});
	})
}