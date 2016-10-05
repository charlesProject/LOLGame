/**
 * 游戏相关数据查询
 */

//游戏模型
function getGameModalName(game_modal){
	if(game_modal==1){
		return "匹配";
	}if(game_modal==2){
		return "人机";
	}else if(game_modal==4){
		return "排位";
	}else if(game_modal==11){
		return "克隆";
	}else if(game_modal==24){
		return "无限乱斗";
	}else if(game_modal==6){
		return "大乱斗";
	}else if(game_modal==8){
		return "自定义";
	}else{
		return "*"+game_modal;
	}
}
//游戏胜利或者失败
function getWin(winCode){
	if(winCode==1){
		return "<span style='color:green;'>胜利</span>";
	}else{
		return "<span style='color:red;'>失败</span>";
	}
}