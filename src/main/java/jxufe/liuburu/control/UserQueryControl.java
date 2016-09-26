package jxufe.liuburu.control;

import jxufe.liuburu.util.LOLGameUtil;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import com.alibaba.fastjson.JSONObject;
@Controller
@RequestMapping("/user")
public class UserQueryControl {
	
	@RequestMapping("area")
	@ResponseBody
	public JSONObject getUserArea(@RequestParam("key")String userName){
		JSONObject result = LOLGameUtil.getUserArea(userName);
		return result ;
	}
	
	@RequestMapping("/area/{area_id}")
	@ResponseBody
	public JSONObject getUserTier(@PathVariable("area_id")Integer area_id){
		JSONObject result = LOLGameUtil.getGameAreaName(area_id);
		return result;
	}
	
	@RequestMapping("/icon/{icon_id}")
	@ResponseBody
	public JSONObject getUserIcon(@PathVariable("icon_id")Integer icon_id){
		JSONObject result = LOLGameUtil.getUserIcon(icon_id);
		return result;
	}
	
	@RequestMapping("/rank")
	@ResponseBody
	public JSONObject getUserTierIcon(@RequestParam("tier")int tier,@RequestParam("queue")int queue){
		JSONObject result = LOLGameUtil.getUserTier(tier, queue);
		return result;
	}
	
	
	
	
	
}
