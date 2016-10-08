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
	/************************************第一分类*************************************************************/
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
	
	/*********************************第二分类****************************************************************/
	/**
	 * 获取召唤师的缩略头像
	 * http://cdn.tgp.qq.com/lol/images/resources/champions/133.png
	 */
	public static final String CHAMPION_SMALL_ICON= "http://cdn.tgp.qq.com/lol/images/resources/champions";
	
	
	/**
	 * 获取召唤师的大头像
	 * http://cdn.tgp.qq.com/lol/images/resources/card/60.jpg
	 */
	public static final String CHAMPION_BIG_ICON= "http://cdn.tgp.qq.com/lol/images/resources/card";
	
	/*********************************第三分类****************************************************************/
	
	/**
	 * 获取游戏的战绩分页信息
	 * http://api.pallas.tgp.qq.com/core/tcall?p=[[3,{"area_id":26,"qquin":"2914207499","bt_num":"0","bt_list":[],"champion_id":0,"offset":40,"limit":8,"mvp_flag":-1}]]
	 */
	public static final String GAME_PAGE_PATH= "http://api.pallas.tgp.qq.com/core/tcall";
	
	/**
	 * 战斗详情
	 * http://api.pallas.tgp.qq.com/core/get_battle_info?p={"area_id":26,"game_id":"336185858"}
	 */
	public static final String GAME_DETAIL_INFO ="http://api.pallas.tgp.qq.com/core/get_battle_info";
	
	/**
	 * 区域排行榜单
	 * http://api.pallas.tgp.qq.com/core/get_score_rank?area_id=26&pnum=2
	 */
	public static final String TOP_RANK_LIST = "http://api.pallas.tgp.qq.com/core/get_score_rank";
	
}
