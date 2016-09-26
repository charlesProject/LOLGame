function userAreaQuery() {
	$("#submit").bind("click", function() { //绑定用户查询按钮
		var gamerName = $("#gamerName").val();
		$.ajax({
			type: "get",
			url: "user/area",
			data:{
				"key":gamerName
			},
			success: function(data) {
				console.log(data);
				addQueryUserArea(data);
			}
		});
	})
}