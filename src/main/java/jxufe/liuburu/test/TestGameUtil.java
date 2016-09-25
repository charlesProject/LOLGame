package jxufe.liuburu.test;

import static org.junit.Assert.*;

import org.apache.http.client.methods.CloseableHttpResponse;
import org.apache.http.client.methods.HttpGet;
import org.apache.http.impl.client.CloseableHttpClient;
import org.apache.http.impl.client.HttpClients;
import org.apache.http.message.BasicHeader;
import org.apache.http.util.EntityUtils;
import org.junit.Test;

import jxufe.liuburu.util.LOLGameUtil;

public class TestGameUtil {

	@Test
	public void testGetUserArea() {
		System.out.println(LOLGameUtil.getUserArea("卡卡罗特444"));
	}
	
	public static void main(String[] args) throws Exception {
		CloseableHttpClient httpclient = HttpClients.createDefault();
		HttpGet httpGet = new HttpGet("http://api.pallas.tgp.qq.com/core/search_player?key=卡卡罗特444");
		httpGet.setHeader(new BasicHeader("Cookie","pkey=000157E5D6BD0070B398BEE753FDE9349598AB2E04EBA968F587B32F4430A9F40D560D8291522FC1F374FCE23A363A7159299F4944D8B4FD07FA1406CB43E8E35BC9FF6E839D81A913CA94E835C13368F57E4C3D4387B445CEBA342CD9733AFE4422392BD58DD2D52D4E2F225EA6FBB0E6717D1B866F10F3;puin=2914207499"));
		CloseableHttpResponse response = httpclient.execute(httpGet);
		System.out.println(EntityUtils.toString(response.getEntity(),"UTF-8"));

	}

}
