function plotChatLoad(recentGameData){
//	var data = [[1],[6],[6],[7],[10]];
	var data = [[recentGameData[0]],[recentGameData[1]],[recentGameData[2]],[recentGameData[3]],[recentGameData[4]]];
	var data_max = 60; //Y轴最大刻度
	var line_title = ["上单","打野","中单","ADC","辅助"]; //曲线名称
	var y_label = ""; //Y轴标题
	var x_label = ""; //X轴标题
	var x = []; //定义X轴刻度值
	var title = "这是标题"; //统计图标标题
	//j.jqplot.diagram.base("chart1", data, line_title, "这是统计标题", x, x_label, y_label, data_max, 1);
	j.jqplot.diagram.base("chart2", data, line_title, "游戏场次", x, x_label, y_label, data_max, 2);
}

