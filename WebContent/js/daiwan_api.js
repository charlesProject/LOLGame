/**
 * DaiWan_api英雄联盟接口
 */
var token;
var dwuser ="kakaluote444";// DAIWAN平台账号
var dwpass = "lbr5078930198";//DAIWAN平台密码
var LoginUrl = "http://www.games-cube.com/combat/api/login";
var UserAreaUrl = "http://www.games-cube.com/combat/api/UserArea";//用户区域 [UserArea]
var UserHotInfoUrl = "http://www.games-cube.com/combat/api/UserHotInfo";//用户基本[UserHotInfo]
var CombatListUrl = "http://www.games-cube.com/combat/api/CombatList";//战斗数据 [CombatList]
var HotChampionUrl = "http://www.games-cube.com/combat/api/hotchampion";//热门英雄排行 [HotChampion]
var FreeUrl = "http://www.games-cube.com/combat/api/Free";//本周限免英雄[Free]
var ChampionRankUrl = "http://www.games-cube.com/combat/api/ChampionRank";//英雄Rank排行[ChampionRank]
var ChampionUrl = "http://www.games-cube.com/combat/api/champion";//英雄数据 [Champion]
var AreaUrl = "http://www.games-cube.com/combat/api/area";//大区数据 [Area]
var IconAirUrl = "http://ossweb-img.qq.com/images/lol/img/profileicon2/profileicon";//{icon_id}.jpg|图标资源 [Icon]玩家图标
var IconHeroUrl = "http://ossweb-img.qq.com/images/lol/img/champion/";//{英雄英文名}.png|图标资源 [Icon]英雄图标
var IconSkillUrl = "http://cdn.tgp.qq.com/pallas/images/summonability/";//{summon_spell1_id/summon_spell1_id}.png|图标资源 [Icon]召唤师技能图标
var IconEquipmentUrl = "http://cdn.tgp.qq.com/pallas/images/items/";//{item0/item1/item2/item3/item4/item5/item6}.png|图标资源 [Icon]装备图标
var UserExtInfoUrl = "http://www.games-cube.com/combat/api/UserExtInfo";//用户详细[UserExtInfo]
var GameDetailUrl = "http://www.games-cube.com/combat/api/GameDetail";//单场战斗数据 [GameDetail]
function GetKey(){
	$.ajax({
		type:'get',
		url:LoginUrl+'?username='+encodeURI(dwuser)+'&password='+dwpass,
		dataType:'json',
		jsonp:"jsonp",
		success:function(json){
				if(json.code!=1)
				{
					alert('key读取错误，请检查DaiWan平台账号密码是否正确');
				}
				else
				{
					token = json.key;
					alert(token);
				}

			},
			error:function (XMLHttpRequest, textStatus, errorThrown){
				alert('检测帐号失败，网络异常，请重试！'+url);
			}
	});
}

function GetCurl(url,token){
	var settings = {
        type: "GET",
        url:URL,
        dataType:'json',
        error: function(XMLHttpRequest,textStatus,errorThrown) {
        	alert('检测帐号失败，网络异常，请重试！');
        },
        success: function(json) {
        	alert(data);
            //$("body").append(data);
        },
        headers: {
            "DAIWAN-API-TOKEN":token
        }
    };
	$.ajax(settings);
}
//获取指定用户名所在的区服信息及用户在区服中的基本信息
function GetUserArea(keyword) {
	Url = UserAreaUrl+'?keyword='+keyword;
	json = GetCurl(Url,token);
	alert(json);
}
