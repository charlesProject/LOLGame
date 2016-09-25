package jxufe.liuburu.control;

import java.io.IOException;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.alibaba.fastjson.JSONObject;

import jxufe.liuburu.util.LOLGameUtil;

/**
 * Servlet implementation class UserAreaServlet
 */
@WebServlet("/userareas")
public class UserAreaServlet extends HttpServlet {
	private static final long serialVersionUID = 1L;
	
	protected void doGet(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {
		this.doPost(request, response);
	}

	protected void doPost(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {
		String userName = request.getParameter("userName");
		JSONObject userAreas = LOLGameUtil.getUserArea(userName);
		response.setContentType("application/json;charset=utf-8");
		response.getWriter().print(userAreas);
		cookieMethod(response);
	}

	/**
	 * @param response
	 */
	private void cookieMethod(HttpServletResponse response) {
		Cookie cookie = new Cookie("test","just for test");
		cookie.setHttpOnly(false);
		cookie.setSecure(false);
		cookie.setDomain("www.jxufe.com");
		cookie.setPath("/core");
		cookie.setMaxAge(60*600);
		response.addCookie(cookie);
	}

}
