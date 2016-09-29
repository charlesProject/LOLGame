package jxufe.liuburu.control;

import jxufe.liuburu.util.LOLGameUtil;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import com.alibaba.fastjson.JSONObject;

@Controller
@RequestMapping("/champion")
public class ChampionQueryControl {
	/**
	 * 获取召唤师图片
	 * @param champion_id
	 * @return
	 */
	@RequestMapping("/icon/{champion_id}")
	@ResponseBody
	public JSONObject getChampionSmallIcon(
			@PathVariable("champion_id") Integer champion_id,
			@RequestParam("type") Integer type
			){
		JSONObject result = LOLGameUtil.getChampionIcon(champion_id,type);
		return result;
	}
	
}
