var LOL ;
$(function(){
	//initPagePlugin(100,8);//分页相关
	userAreaQueryEvent();//搜索框搜索相关
	InitRankAreaMsg();
	InitFreeChampion();
	InitChampionUpdateMsg();
})

//周免英雄相关
function InitFreeChampion(){
	$("#freeChampionUl").html("");
	$("#freeUpdateTime").html("<h6>"+LOLherojs.free.date[1]+"至"+LOLherojs.free.date[1]+"</h6>");
	//console.log(LOLherojs.free.data);
	$.each(LOLherojs.free.data,function(key,value){
		$("#freeChampionUl").append(
				"<li>"+
				"<div>"+
				"	<img class='areaBtnClass' src='http://ossweb-img.qq.com/images/lol/img/champion/"+key+".png'/>"+
				"	<p>"+value.name+"</p>"+
				"</div>"+
			"</li>"
		
		);
	});
}
//英雄更新信息
function InitChampionUpdateMsg(){
	$("#championUpdateModalBody").html("");
	$.each(LOL.LOLHeroNewInfo,function(key,value){
		console.log("key="+key+" value="+value.heroname);
		$("#championUpdateModalBody").append(
				"<div class='oneHeroItem'>"+
				"<div style='color: orange;margin-left: 15px;float: left;'>"+
				"	<img src='http://cdn.tgp.qq.com/lol/images/resources/champions/"+key+".png' style='width: 60px;height: 60px; ' />"+
				"	<p>"+value.heroname+"</p>"+
				"</div>"+
				"<ul style='float: left;' id='updateDetailInfoUL_"+key+"'>"+
				"	<li class='skillLiClass'>"+
				"		<p style='color:red;margin-left: -406px; margin-top: 15px;'>近期改动</p>"+
				"	</li>"+
				
//				"<li class='skillLiClass'>"+
//				"<div class='skillItem'>"+
//				"	<div class='skillItemKey'>W</div>"+
//				"</div>"+
//				"<div style='float: left; margin-left: 15px;color: #3D5E7C;'>"+
//				"<h3 style='margin-left: -330px;color: #79A8CD;'>星之灌注</h3>"+
//				"	<p>恐惧持续时间从 1/1.25/1.5/1.75/2秒 提高至 1.25/1.5/1.75/2/2.25秒</p>"+
//				"</div>"+
//				"<div style='clear: both;'></div>"+
//				"</li>"+
				
				
				"</ul>"+
			"</div>"
		);
		updateaDetailUpdateMsg(key,value.data);
	})
}

//技能更新详情
function updateaDetailUpdateMsg(champion_id,data){
	console.log("更新数据--");
	console.log(data);
	for(var i=0;i<data.length;i++){
		$("#updateDetailInfoUL_"+champion_id).append(
				"<li class='skillLiClass'>"+
				"<div class='skillItem' id='skillItem_"+champion_id+"_"+i+"'>"+
				"	<div class='skillItemKey'>W</div>"+
				"</div>"+
				"<div style='float: left; margin-left: 15px;color: #3D5E7C;'>"+
				"<div style='text-align: left;'>"+
				"<span style='color: #79A8CD;font-size: 18px;'>"+data[i].name+"</span>"+
				"</div>"+
				"	<div style='width:400px'>"+data[i].description+"</div>"+
				"</div>"+
				"<div style='clear: both;'></div>"+
				"</li>"
		);
		updateSkillItem(champion_id,i,data[i].type,data[i].image);
	}
}
//技能图标更新
function updateSkillItem(champion_id,i,type,image){
	if(type=="spells_q"){
		$("#skillItem_"+champion_id+"_"+i).html(
				"<div class='skillItemKey'>Q</div>"
		);
	}else if(type=="spells_w"){
		$("#skillItem_"+champion_id+"_"+i).html(
				"<div class='skillItemKey'>W</div>"
		);
	}else if(type=="spells_e"){
		$("#skillItem_"+champion_id+"_"+i).html(
				"<div class='skillItemKey'>E</div>"
		);
	}else if(type=="spells_r"){
		$("#skillItem_"+champion_id+"_"+i).html(
				"<div class='skillItemKey'>R</div>"
		);
	}
	$.ajax({
		url:"http://cdn.tgp.qq.com/lol/images/resources/skill/"+image,
		error:function(xhr, error, ex){
			$("#skillItem_"+champion_id+"_"+i).css("background","url(http://ossweb-img.qq.com/images/lol/img/spell/"+image+")");
//			if (xhr.status == '404') {
//			}
		},
		success:function(){
			$("#skillItem_"+champion_id+"_"+i).css("background","url(http://cdn.tgp.qq.com/lol/images/resources/skill/"+image+")");
		}
	});
//	$("#skillItem_"+champion_id+"_"+i).error(function() {  
//		console.log("图片地址错误");
//	});  
}
