package jxufe.liuburu.util;

import java.io.IOException;

import org.apache.http.ParseException;
import org.apache.http.client.ClientProtocolException;
import org.apache.http.client.methods.CloseableHttpResponse;
import org.apache.http.client.methods.HttpGet;
import org.apache.http.impl.client.CloseableHttpClient;
import org.apache.http.impl.client.HttpClients;
import org.apache.http.message.BasicHeader;
import org.apache.http.util.EntityUtils;

import com.alibaba.fastjson.JSONObject;

import jxufe.liuburu.api.Path;
import jxufe.liuburu.data.Tier;
import jxufe.liuburu.lol.ServerNames;
import jxufe.liuburu.lol.Tiers;
import jxufe.liuburu.lol.Token;

/**
 * LOL查询工具类
 **/

public class LOLGameUtil {
	/**
	 * 设置请求头，让发起的网路请求具有权限
	 * @param httpGet
	 */
	private static void setlolToken(HttpGet httpGet) {
		httpGet.setHeader(new BasicHeader("Cookie",Token.PKEY+";"+Token.PUIN));
	}
	
	public static JSONObject getGameAreaName(int area_id){
		String areaName = ServerNames.SERVER_MAP.get(area_id);
		JSONObject result = new JSONObject();
		result.put("area_id", area_id);
		result.put("area_name", areaName);
		return result;
	}
	
	/**
	 * 获取段位图片地址
	 * @param tier
	 * @param queue
	 * @return
	 */
	public static JSONObject getUserTier(int tier,int queue){
		Tier tierObject = new Tier(tier, queue);
		String pic_url = Tiers.queryIconImg(tierObject);
		String rank_name = Tiers.queryTierName(tierObject);
		JSONObject result = new JSONObject();
		result.put("tier", tier);
		result.put("queue", queue);
		result.put("rank_pic", pic_url);
		result.put("rank_name", rank_name);
		return result;
	}
	public static void main(String[] args) {
	//	System.out.println(getUserIcon(106));
		System.out.println(getUserTier(3, 1));
		//System.out.println(getGameAreaName(26));
	}
	
	/**
	 * 获取召唤师头像地址
	 * @param icon_id
	 * @return
	 */
	public static JSONObject getUserIcon(int icon_id){
			String picUrl = Path.USER_ICON_PATH+"/"+icon_id+".png";
			JSONObject result = new JSONObject();
			result.put("icon_id", icon_id);
			result.put("pic_url", picUrl);
			return result;
	}
	
	
	
	/**
	 * 查询用户大区信息
	 * @param userName
	 * @return
	 */
	public static JSONObject getUserArea(String userName) {
		CloseableHttpClient httpclient = HttpClients.createDefault();
		HttpGet httpGet = new HttpGet(Path.USER_AREA_PATH+"?key="+userName);
		System.out.println(httpGet.getURI());
		setlolToken(httpGet);
		JSONObject result = null;
		try {
			CloseableHttpResponse response = httpclient.execute(httpGet);
			result = JSONObject.parseObject(EntityUtils.toString(response.getEntity(),"UTF-8"));
		} catch (ClientProtocolException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		} catch (ParseException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		} catch (IOException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		return result;
	}
}
