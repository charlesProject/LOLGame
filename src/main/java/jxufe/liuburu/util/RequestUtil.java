package jxufe.liuburu.util;

import java.io.UnsupportedEncodingException;
import java.net.URLEncoder;

import org.apache.http.client.utils.URLEncodedUtils;

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
		
}
