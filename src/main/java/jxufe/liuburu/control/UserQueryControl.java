package jxufe.liuburu.control;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
@Controller
@RequestMapping("/user")
public class UserQueryControl {
	@RequestMapping("area")
	@ResponseBody
	public String test(){
		return "just for test";
	}
	
	@RequestMapping("/view")
	public String testView(){
		return "view";
	}
}
