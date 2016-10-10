package jxufe.liuburu.control;

import java.io.UnsupportedEncodingException;
import java.util.Map;
import java.util.Map.Entry;
import java.util.Set;

import jxufe.liuburu.data.Tier;
import jxufe.liuburu.lol.ServerNames;
import jxufe.liuburu.lol.Tiers;
import jxufe.liuburu.util.LOLGameUtil;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import com.alibaba.fastjson.JSONArray;
import com.alibaba.fastjson.JSONObject;

@Controller
@RequestMapping("/game")
public class GameQueryControl {
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
	@RequestMapping("/pageData")
	@ResponseBody
	public  JSONObject queryGameData(
			@RequestParam("qquin")String qquin,
			@RequestParam("area_id")Integer area_id,
			@RequestParam(value="bt_num",defaultValue="0")Integer bt_num,
			@RequestParam(value="bt_list",defaultValue="-1")Integer bt_list,
			@RequestParam(value="champion_id",defaultValue="0")Integer champion_id,
			@RequestParam("offset")Integer offset,
			@RequestParam(value="limit",defaultValue="8")Integer limit,	
			@RequestParam(value="mvp_flag",defaultValue="-1")Integer mvp_flag){
		JSONObject resultObject = null;
		try {
			resultObject =  LOLGameUtil.queryGameDataByPage(qquin, area_id, bt_num, bt_list, champion_id, offset, limit, mvp_flag);
		} catch (UnsupportedEncodingException e) {
			System.out.println("战绩查询异常");
			e.printStackTrace();
		}
		return resultObject;
	}
	
	/***
	 * 游戏详情查询
	 * @param area_id
	 * @param game_id
	 * @return
	 */
	@RequestMapping("/detail")
	@ResponseBody
	public JSONObject  queryGameDetail(
			@RequestParam("area_id")Integer area_id,
			@RequestParam("game_id")String game_id){
		JSONObject result = null;
		try {
			result = LOLGameUtil.queryGameDetail(area_id, game_id);
		} catch (UnsupportedEncodingException e) {
			e.printStackTrace();
		}
		return result;
	}
	
	
	@RequestMapping("queryMvp")
	@ResponseBody
	public JSONObject checkWhetherMvpPlayer(
			@RequestParam("area_id")Integer area_id,
			@RequestParam("game_id")String game_id
			){
		JSONObject result= null;
		try {
			result = LOLGameUtil.queryMvpPlayer(area_id, game_id);
		} catch (UnsupportedEncodingException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		return result;
	}
	
	@RequestMapping("rankList/top")
	@ResponseBody
	public JSONObject getRankList(
			@RequestParam("area_id")Integer area_id,
			@RequestParam("pnum")Integer pnum
			){
		JSONObject result = LOLGameUtil.getTopChinaRankList(area_id, pnum);
		return result;
	}
	
	
	@RequestMapping("allRankName")
	@ResponseBody
	public JSONArray getAllRankName(
			){
		JSONArray array = new JSONArray();
		Set<Entry<Tier, String>> entrySet = Tiers.getAllAreas().entrySet();
		for(Entry<Tier, String> entry:entrySet){
			JSONObject obj = new JSONObject();
			obj.put("tier", entry.getKey().getTier());
			obj.put("queue", entry.getKey().getQueue());
			obj.put("rank", entry.getKey().getRank());
			obj.put("pic_url",entry.getValue());
			array.add(obj);
		}
		return array;
	}
	
	@RequestMapping("allAreaName")
	@ResponseBody
	public JSONArray getAllAreaName(
			){
		JSONArray allServerName = ServerNames.getAllServerName();
		return allServerName;
	}
	
	
}
