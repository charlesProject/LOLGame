package jxufe.liuburu.util;

import java.io.IOException;
import java.io.UnsupportedEncodingException;
import java.net.URLEncoder;
import java.util.Iterator;
import java.util.Set;
import java.util.TreeSet;

import javax.sound.sampled.ReverbType;

import jxufe.liuburu.api.Path;
import jxufe.liuburu.data.Champion;
import jxufe.liuburu.data.Tier;
import jxufe.liuburu.data.comparator.ChampionExpValueComparator;
import jxufe.liuburu.data.comparator.ChampionUserTimeComparator;
import jxufe.liuburu.lol.ServerNames;
import jxufe.liuburu.lol.Tiers;
import jxufe.liuburu.lol.Token;

import org.apache.http.ParseException;
import org.apache.http.client.ClientProtocolException;
import org.apache.http.client.methods.CloseableHttpResponse;
import org.apache.http.client.methods.HttpGet;
import org.apache.http.impl.client.CloseableHttpClient;
import org.apache.http.impl.client.HttpClients;
import org.apache.http.message.BasicHeader;
import org.apache.http.util.EntityUtils;

import com.alibaba.fastjson.JSON;
import com.alibaba.fastjson.JSONArray;
import com.alibaba.fastjson.JSONObject;

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
	
	/**
	 * 查询用户基本信息
	 * @param qquin
	 * @param area_id
	 * @return
	 */
	public static JSONObject getUserBaseInfo(String qquin,int area_id){
		CloseableHttpClient httpclient = HttpClients.createDefault();
		HttpGet httpGet = new HttpGet(Path.USER_BASIC_INFO+"?area_id="+area_id+"&qquin="+qquin);
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
	/**
	 * 查询用户详细信息
	 * @param qquin
	 * @param area_id
	 * @return
	 */
	/**
	 * @param qquin
	 * @param area_id
	 * @return
	 * @throws UnsupportedEncodingException 
	 */
	public static JSONObject getUserDetailInfo(String qquin,int area_id) throws UnsupportedEncodingException{
		CloseableHttpClient httpclient = HttpClients.createDefault();
		String param = RequestUtil.userDetailInfo(qquin, area_id); 
		String encParam =URLEncoder.encode(param, "UTF-8");
		HttpGet httpGet = new HttpGet(Path.USER_DETIL_INFO+"?p="+encParam);
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
	/**
	 * 查询英雄熟练度TopTree
	 * @param qquin
	 * @param area_id
	 * @return
	 */
	/**
	 * @param qquin
	 * @param area_id
	 * @param type 搜索方式
	 * @return
	 * @throws UnsupportedEncodingException 
	 */
	public static JSONArray getChampionInfoByType(String qquin,int area_id,int type) throws UnsupportedEncodingException{
		CloseableHttpClient httpclient = HttpClients.createDefault();
		String param = RequestUtil.championTop(qquin, area_id); 
		String encParam =URLEncoder.encode(param, "UTF-8");
		HttpGet httpGet = new HttpGet(Path.USER_DETIL_INFO+"?p="+encParam);
		System.out.println(Path.USER_DETIL_INFO+"?p="+encParam);
		setlolToken(httpGet);
		JSONArray resultArray = null;
		try {
			CloseableHttpResponse response = httpclient.execute(httpGet);
			JSONObject resultObject = JSONObject.parseObject(EntityUtils.toString(response.getEntity(),"UTF-8"));
			resultArray = selectChampion(resultObject,type);
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
		return resultArray;
		
	}
	
	/**
	 * json数据装换成对象，并且对其排序，取出排名前三的数据
	 */
	private static JSONArray selectChampion(JSONObject obj,int type) {
		JSONArray resultArray = resolveJsonObject2Array(obj, type);
		if(type==3){
			resultArray =  filterTopChampion(resultArray);
		}
		return resultArray;
	}
	
	

	private static JSONArray filterTopChampion(JSONArray resultArray) {
		JSONArray topChampion = new JSONArray();
		for(int i=0;i<3;i++){
			topChampion.add(resultArray.get(i));
		}
		return topChampion;
	}

	private static JSONArray resolveJsonObject2Array(JSONObject obj,int type) {
		TreeSet<Champion> champions = null;
		if(type==1){
			champions = new TreeSet<Champion>(new ChampionUserTimeComparator());
		}else if(type==2||type==3){
			champions = new TreeSet<Champion>(new ChampionExpValueComparator());
		}else{
			System.out.println("type参数传递错误");
			return null;
		}
		JSONArray data = obj.getJSONArray("data");
		JSONArray champion_list = data.getJSONObject(0).getJSONArray("champion_list");
		for(int i=0;i<champion_list.size();i++){
			JSONObject champion  = champion_list.getJSONObject(i);
			Champion tempChampion = new Champion();
			tempChampion.setChampion_id(champion.getInteger("champion_id"));
			tempChampion.setUsed_exp_value(champion.getInteger("used_exp_value"));
			tempChampion.setLast_use_time(champion.getDate("last_use_time"));
			tempChampion.setUse_num(champion.getInteger("use_num"));
			tempChampion.setWin_num(champion.getIntValue("win_num"));
			tempChampion.setQquin(champion.getString("qquin"));
			tempChampion.setArea_id(champion.getIntValue("area_id"));
			champions.add(tempChampion);
		}
		return JSONArray.parseArray(JSON.toJSONString(champions));
	}

	/**
	 * 获取游戏大区名字
	 * @param area_id
	 * @return
	 */
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
	
	/**
	 * 获取召唤师图片
	 * @param champion_id
	 * @return
	 */
	public static JSONObject getChampionIcon(int champion_id){
		String icon_url =Path.CHAMPION_ICON_PATH+ "/"+champion_id+".png";
		JSONObject result = new JSONObject();
		result.put("champion_id", champion_id);
		result.put("icon_url", icon_url);
		return  result;
	}

	public static void main(String[] args) throws UnsupportedEncodingException {
		//	System.out.println(getUserIcon(106));
			//System.out.println(getUserTier(3, 1));
			//System.out.println(getGameAreaName(26));
	//		System.out.println(getUserBaseInfo("U11086490469144632336",26));
	//		System.out.println(getUserBaseInfo("2914207499",26));
		//	System.out.println(getUserDetailInfo("2914207499", 26));
//			JSONArray resultArray  = getChampionInfoByType("2914207499", 26,1);
//			System.out.println(resultArray);
//			System.out.println(resultArray.size());
		//	System.out.println(getChampionIcon(86));
		System.out.println(getUserArea("卡卡罗特44"));
		}
}
