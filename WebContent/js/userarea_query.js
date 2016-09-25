var DAIWAN_API_TOKEN = "09994-9A4C8-81409-08199";
function userAreaQuery() {
	$("#submit").bind("click", function() { //绑定用户查询按钮
		var gamerName = $("#gamerName").val();
		$.ajax({
			type: "get",
			url: "http://localhost:8080/LOLGame/userareas?userName=" + gamerName,
			success: function(data) {
				for(var i=0;i<data.data.length;i++){
					//1.头像
					loadUserHeadIcon(data.data.qquin);
					//2.昵称
					setUserName(data.data.name);
					//3.区号
					setAreaName(data.data.name);
					//4.段位等级
					setUserLevel(data.data.tier);
				}
				console.log(data);
			}
		});
	})
}

function loadUserHeadIcon(qquin){
	console.log("设置头像");
}
function setUserName(qquin){02
	console.log("设置用户名");
}
function setAreaName(qquin){
	console.log("设置区号");
}
function setUserLevel(qquin){
	console.log("设置等级以及图标");
}