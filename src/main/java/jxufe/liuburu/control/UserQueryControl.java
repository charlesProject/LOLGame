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
	public JSONObject userArea(@RequestParam("key")String userName){
		JSONObject result = LOLGameUtil.getUserArea(userName);
		return result ;
	}
	
	@RequestMapping("/view")
	public String testView(){
		return "view";
	}
}
