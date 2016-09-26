var PKEY = "000157E4FB420070D654FDE556C1794B354735964DC0738E296DC0E8C6FFD2ABA569D1615E9D26CECE16BEBD194F0982C03EC93685A47AB82FFBB15C4886F43EA1655B207A5D513D902FFF9698E06FDD37E3884363918348464BD7F9615E0D11DEBB668E8981F9D0DF1EC6E6AFB0608C7DD9D3CC8E32F41B";
var PUIN = "2914207499";
var DOMAIN = "api.pallas.tgp.qq.com";
var PATH = "/core";

function setLOLCookie() { //设置LOL查询相关的cookie
	//默认有效期为到会话结束
	console.log("设置cookie");
	$.cookie("pkey", PKEY);
	$.cookie("liuburu", PKEY, {
		domain: ".test"
	});
	//	$.cookie("puin",PUIN,{domain:DOMAIN,path:PATH});
	//	$.cookie("pkey",PKEY,{expires:1});
	//	$.cookie("puin",PUIN,{expires:1});
//	$.ajax({
//		url: "http://lolapi.games-cube.com/UserArea?keyword=卡卡罗特444",
//		type: "GET",
//		headers: {
//			"DAIWAN-API-TOKEN": "DF23F-91F8F-2F4A8-42F33"
//		},
//		success: function(result) {
//			alert(JSON.stringify(result));
//		}
//	});
}