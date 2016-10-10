/**
 * 游戏相关数据查询
 */

//游戏模型
function getGameModalName(game_modal){
	var typeData = {
			type: {
				1: "自定义",
				2: "新手关",
				3: "匹配赛",
				4: "排位赛",
				5: "战队赛",
				6: "大乱斗",
				7: "人机",
				8: "统治战场",
				9: "大对决",
				11: "克隆赛",
				14: "无限火力",
				15: "镜像赛",
				16: "末日赛",
				17: "飞升赛",
				18: "六杀丛林",
				19: "魄罗乱斗",
				20: "互选征召",
				21: "佣兵战",
				22: "新统治",
				23: "枢纽攻防"
			}
	}
	return typeData.type[game_modal];
//	if(game_modal==1){
//		return "匹配";
//	}if(game_modal==2){
//		return "人机";
//	}else if(game_modal==4){
//		return "排位";
//	}else if(game_modal==5){
//		return "战队赛";
//	}else if(game_modal==6){
//		return "大乱斗";
//	}else if(game_modal==11){
//	}else if(game_modal==4){
//		return "排位";
//	}else if(game_modal==11){
//		return "克隆";
//	}else if(game_modal==24){
//		return "无限乱斗";
//	}else if(game_modal==6){
//		return "大乱斗";
//	}else if(game_modal==8){
//		return "自定义";
//	}else{
//		return "*"+game_modal;
//	}
}
//游戏胜利或者失败
function getWin(winCode){
	if(winCode==1){
		return "<span style='color:green;'>胜利</span>";
	}else{
		return "<span style='color:red;'>失败</span>";
	}
}