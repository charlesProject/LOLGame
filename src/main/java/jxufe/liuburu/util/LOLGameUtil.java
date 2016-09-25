package jxufe.liuburu.util;

import java.io.BufferedReader;
import java.io.DataOutputStream;
import java.io.IOException;
import java.io.InputStream;
import java.io.InputStreamReader;
import java.io.UnsupportedEncodingException;
import java.net.HttpURLConnection;
import java.net.URL;
import java.net.URLEncoder;
import java.net.UnknownHostException;
import java.util.HashMap;
import java.util.Map;

import org.apache.http.ParseException;
import org.apache.http.client.ClientProtocolException;
import org.apache.http.client.methods.CloseableHttpResponse;
import org.apache.http.client.methods.HttpGet;
import org.apache.http.impl.client.CloseableHttpClient;
import org.apache.http.impl.client.HttpClients;
import org.apache.http.message.BasicHeader;
import org.apache.http.util.EntityUtils;

import com.alibaba.fastjson.JSON;
import com.alibaba.fastjson.JSONObject;

import jxufe.liuburu.api.Path;

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
	 * 
	 * @param userName
	 * @return 
	 * msg:返回信息 
	 * code:无意义 
	 * data[
	 * area_id:大区ID
	 * qquin:用户唯一码
	 * icon_id:用户头像
	 * level:级别
	 * ]
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
