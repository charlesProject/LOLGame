package jxufe.liuburu.data;

import java.util.Date;

public class Champion {
	private Integer champion_id;
	private int used_exp_value;
	private Date last_use_time;
	private int use_num;
	private int win_num;
	private String qquin;
	private int area_id;
	public Champion() {
		super();
		// TODO Auto-generated constructor stub
	}
	public Champion(Integer champion_id, int used_exp_value) {
		super();
		this.champion_id = champion_id;
		this.used_exp_value = used_exp_value;
	}
	public Integer getChampion_id() {
		return champion_id;
	}
	public void setChampion_id(Integer champion_id) {
		this.champion_id = champion_id;
	}
	public int getUsed_exp_value() {
		return used_exp_value;
	}
	public void setUsed_exp_value(int used_exp_value) {
		this.used_exp_value = used_exp_value;
	}
	
	public Date getLast_use_time() {
		return last_use_time;
	}
	public void setLast_use_time(Date last_use_time) {
		this.last_use_time = last_use_time;
	}
	public int getUse_num() {
		return use_num;
	}
	public void setUse_num(int use_num) {
		this.use_num = use_num;
	}
	public int getWin_num() {
		return win_num;
	}
	public void setWin_num(int win_num) {
		this.win_num = win_num;
	}
	public String getQquin() {
		return qquin;
	}
	public void setQquin(String qquin) {
		this.qquin = qquin;
	}
	public int getArea_id() {
		return area_id;
	}
	public void setArea_id(int area_id) {
		this.area_id = area_id;
	}
	@Override
	public String toString() {
		return "Champion [champion_id=" + champion_id + ", used_exp_value="
				+ used_exp_value + ", last_use_time=" + last_use_time
				+ ", use_num=" + use_num + ", win_num=" + win_num + ", qquin="
				+ qquin + ", area_id=" + area_id + "]";
	}
	
	
}
