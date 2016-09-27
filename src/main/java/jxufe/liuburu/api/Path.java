package jxufe.liuburu.api;

public class Path {
	/**
	 * 用户区域查询接口
	 * http://lolapi.games-cube.com/UserArea?keyword={keyword}
	 */
	public static final String USER_AREA_PATH = "http://api.pallas.tgp.qq.com/core/search_player";
	/**
	 * 用户头像
	 *http://cdn.tgp.qq.com/lol/images/resources/usericon/24.png
	 */
	public static final String USER_ICON_PATH = "http://cdn.tgp.qq.com/lol/images/resources/usericon/";
	
	/**
	 * 用户基本信息
	 * http://api.pallas.tgp.qq.com/core/get_user_hot_info?area_id=26&qquin=2914207499
	 */
	public static final String USER_BASIC_INFO = "http://api.pallas.tgp.qq.com/core/get_user_hot_info";
	
	/**
	 * 用户详细信息
	 * http://api.pallas.tgp.qq.com/core/get_user_hot_info?area_id=26&qquin=2914207499
	 */
	public static final String USER_DETIL_INFO = "http://api.pallas.tgp.qq.com/core/tcall";
	
	/**
	 * 用户英雄熟练度
	 * http://api.pallas.tgp.qq.com/core/tcall?p=[[35,{"area_id":"26","qquin":"2914207499"}]]
	 */
	public static final String USER_CHAMPION_TOP= "http://api.pallas.tgp.qq.com/core/tcall";
	
	
}
