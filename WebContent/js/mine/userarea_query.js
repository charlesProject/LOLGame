function userAreaQuery() {
	$("#submit").bind("click", function() { //绑定用户查询按钮
		var gamerName = $("#gamerName").val();
		$.ajax({
			type: "get",
			url: "http://api.pallas.tgp.qq.com/core/search_player?key=" + gamerName,
			dataType: "jsonp",
			success: function(data) {
				console.log(data);
			}
		});
	})
}