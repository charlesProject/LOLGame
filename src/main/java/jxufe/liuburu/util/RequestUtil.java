package jxufe.liuburu.util;

import java.io.UnsupportedEncodingException;
import java.net.URLEncoder;

import org.apache.http.client.utils.URLEncodedUtils;

import com.alibaba.fastjson.JSONObject;

/**
 * 请求参数生成器
 * @author liuburu
 *
 */
public class RequestUtil {
	
		/**
		 * 用户详情请求参数
		 * @param qquin
		 * @param area_id
		 * @return
		 */
		public static String userDetailInfo(String qquin,int area_id){
			String param = "[[7,{\"item_num\":1,\"items\":[{\"qquin\":\""+qquin+"\",\"area_id\":\""+area_id+"\"}]}],[28,{\"qquin\":\""+qquin+"\",\"area_id\":\""+area_id+"\"}],[29,{\"qquin\":\""+qquin+"\",\"area_id\":\""+area_id+"\",\"top_mvp_type\":0}],[35,{\"qquin\":\""+qquin+"\",\"area_id\":\""+area_id+"\",\"champion_id\":0}],[36,{\"qquin\":\""+qquin+"\",\"area_id\":\""+area_id+"\"}]]";
			return param;
		}
		public static void main(String[] args) throws UnsupportedEncodingException {
			//System.out.println(userDetailInfo("2914207499", 26));
			String url = URLEncoder.encode("卡卡罗特444", "UTF-8");
			System.out.println(url);
		}
		/**
		 * 用户熟练英雄TopTree请求参数
		 * @param qquin
		 * @param area_id
		 * @return
		 */
		public static String championTop(String qquin,int area_id){
			String param = "[[35,{\"area_id\":\""+area_id+"\",\"qquin\":\""+qquin+"\"}]]";
			return param;
		}
		
		/**
		 * 生成战绩请求参数
		 * @param qquin	玩家唯一编号
		 * @param area_id 大区编号
		 * @param bt_num 类型分类参数
		 * @param bt_list 类型分类参数 (注意：为数组形式)
		 * @param champion_id 召唤师编号
		 * @param offset 数据偏离量
		 * @param limit 分页大小
		 * @param mvp_flag 是否为mvp数据
		 * @return
		 */
		public static String queryGameData(
				String qquin,int area_id,int bt_num,int bt_list,
				int champion_id,int offset,int limit,int mvp_flag){
			String new_bt_list = (bt_list==-1)?"":""+bt_list;
			String param = "[[3,{\"area_id\":"+area_id+",\"qquin\":\""+qquin+"\",\"bt_num\":\""+bt_num+"\",\"bt_list\":["+new_bt_list+"],\"champion_id\":"+champion_id+",\"offset\":"+offset+",\"limit\":"+limit+",\"mvp_flag\":"+mvp_flag+"}]]";
			return param;
		}
		
		/**
		 * 封装单局游戏详情请求参数
		 * @param area_id
		 * @param game_id
		 * @return
		 */
		public static String queryGameDetail(int area_id, String game_id) {
			String param = "{\"area_id\":"+area_id+",\"game_id\":\""+game_id+"\"}";
			return param;
		}
		
}
