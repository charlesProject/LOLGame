package jxufe.liuburu.control;

import java.io.UnsupportedEncodingException;

import jxufe.liuburu.util.LOLGameUtil;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import com.alibaba.fastjson.JSONArray;
import com.alibaba.fastjson.JSONObject;
@Controller
@RequestMapping("/user")
public class UserQueryControl {
	
	/**
	 * 用户信息查询
	 * @param userName
	 * @return
	 */
	@RequestMapping("area")
	@ResponseBody
	public JSONObject getUserArea(@RequestParam("key")String userName){
		
		JSONObject result = LOLGameUtil.getUserArea(userName);
		return result ;
	}
	
	/**
	 * 游戏大区名称查询
	 * @param area_id
	 * @return
	 */
	@RequestMapping("/area/{area_id}")
	@ResponseBody
	public JSONObject getUserTier(@PathVariable("area_id")Integer area_id){
		JSONObject result = LOLGameUtil.getGameAreaName(area_id);
		return result;
	}
	
	/**
	 * 用户头像图标查询
	 * @param icon_id
	 * @return
	 */
	@RequestMapping("/icon/{icon_id}")
	@ResponseBody
	public JSONObject getUserIcon(@PathVariable("icon_id")Integer icon_id){
		JSONObject result = LOLGameUtil.getUserIcon(icon_id);
		return result;
	}
	
	/**
	 * 段位图标和名称查询
	 * @param tier
	 * @param queue
	 * @return
	 */
	@RequestMapping("/rank")
	@ResponseBody
	public JSONObject getUserTierIcon(@RequestParam("tier")Integer tier,@RequestParam("queue")Integer queue){
		JSONObject result = LOLGameUtil.getUserTier(tier, queue);
		return result;
	}
	
	/**
	 * 用户基本信息查询
	 * @param qquin 可以为QQ号码，或者是唯一大区用户标志号
	 * @param queue
	 * @return
	 */
	@RequestMapping("/basic")
	@ResponseBody
	public JSONObject getUserBaseInfo(@RequestParam("qquin")String qquin,@RequestParam("area_id")Integer area_id){
		JSONObject result = LOLGameUtil.getUserBaseInfo(qquin, area_id);
		return result;
	}
	
	/**
	 * 用户详情信息查询
	 * @param qquin 可以为QQ号码，或者是唯一大区用户标志号
	 * @param queue
	 * @return
	 */
	@RequestMapping("/detail")
	@ResponseBody
	public JSONObject getUserDetailInfo(
			@RequestParam("qquin")String qquin,
			@RequestParam("area_id")Integer area_id){
		JSONObject result = null;
		try {
			result = LOLGameUtil.getUserDetailInfo(qquin, area_id);
		} catch (UnsupportedEncodingException e) {
			// TODO Auto-generated catch block
			result = new JSONObject();
			result.put("msg", "用户详情查询异常");
			e.printStackTrace();
		}
		return result;
	}
	
	/**
	 * 用户To3召唤师熟练度   
	 * @param qquin 可以为QQ号码，或者是唯一大区用户标志号
	 * @param queue  字段位
	 * @param type 搜索英雄的方式（1：默认按使用时间 2：按熟练度 3：搜索前三名）
	 * @return
	 */
	@RequestMapping("/champion/{type}")
	@ResponseBody
	public JSONArray getTopTreeChampion(
			@RequestParam("qquin")String qquin,
			@RequestParam("area_id")String area_id,
			@PathVariable("type")Integer type){
		JSONArray resultArray=null;
		if(area_id.equals("rankListBtn")){
			return null;
		}
		try {
			resultArray = LOLGameUtil.getChampionInfoByType(qquin, Integer.parseInt(area_id),type);
		} catch (UnsupportedEncodingException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		return resultArray;
	}
	
	
	
	
	
	
}
