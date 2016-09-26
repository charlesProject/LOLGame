package jxufe.liuburu.lol;

import java.util.HashMap;
import java.util.Map;
import java.util.Map.Entry;
import java.util.Set;

import jxufe.liuburu.data.Tier;

/**
 * 段位信息
 * @author liuburu
 *
 */
public class Tiers {
	public static final Map<Tier, String> TIERS = new HashMap<Tier,String>();
	static{
		/*其他网站的初略段位信息
		 * TIERS.put(0, "http://img4.18183.duoku.com/lol/db/section_0.png");//最强王者
		TIERS.put(1, "http://img4.18183.duoku.com/lol/db/section_1.png");//璀璨钻石
		TIERS.put(2, "http://img4.18183.duoku.com/lol/db/section_2.png");//华贵白金
		TIERS.put(3, "http://img4.18183.duoku.com/lol/db/section_3.png");//荣耀黄金
		TIERS.put(4, "http://img4.18183.duoku.com/lol/db/section_4.png");//不屈白银
		TIERS.put(5, "http://img4.18183.duoku.com/lol/db/section_5.png");//英勇青铜
		TIERS.put(6, "http://img4.18183.duoku.com/lol/db/section_6.png");//超凡大师
		TIERS.put(255, "http://img4.18183.duoku.com/lol/db/section_255.png");//无段位*/
		
		Tier tier_none = new Tier(255,255 ,"无段位");//无段位http://ossweb-img.qq.com/images/lol/img/rank/rank_none.jpg
		Tier tier_bronze_1 = new Tier(5, 0,"青铜I");//青铜http://ossweb-img.qq.com/images/lol/img/rank/bronze_1.jpg
		Tier tier_bronze_2 = new Tier(5, 1,"青铜II");
		Tier tier_bronze_3 = new Tier(5, 2,"青铜III");
		Tier tier_bronze_4 = new Tier(5, 3,"青铜IV");
		Tier tier_bronze_5 = new Tier(5, 4,"青铜V");
		Tier tier_silver_1 = new Tier(4, 0 ,"白银I");//白银http://ossweb-img.qq.com/images/lol/img/rank/silver_5.jpg
		Tier tier_silver_2 = new Tier(4, 1 ,"白银II");
		Tier tier_silver_3 = new Tier(4, 2 ,"白银III");
		Tier tier_silver_4 = new Tier(4, 3 ,"白银IV");
		Tier tier_silver_5 = new Tier(4, 4 ,"白银V");
		Tier tier_gold_1 = new Tier(3, 0,"黄金I");//黄金http://ossweb-img.qq.com/images/lol/img/rank/gold_5.jpg
		Tier tier_gold_2 = new Tier(3, 1,"黄金II");
		Tier tier_gold_3 = new Tier(3, 2,"黄金III");
		Tier tier_gold_4 = new Tier(3, 3,"黄金IV");
		Tier tier_gold_5 = new Tier(3, 4,"黄金V");
		Tier tier_platinum_1 = new Tier(2, 0,"铂金I");//华贵铂金http://ossweb-img.qq.com/images/lol/img/rank/platinum_5.jpg
		Tier tier_platinum_2 = new Tier(2, 1,"铂金II");
		Tier tier_platinum_3 = new Tier(2, 2,"铂金III");
		Tier tier_platinum_4 = new Tier(2, 3,"铂金IV");
		Tier tier_platinum_5 = new Tier(2, 4,"铂金V");
		Tier tier_diamond_1 = new Tier(1, 0,"钻石I");// 钻石http://ossweb-img.qq.com/images/lol/img/rank/diamond_1.jpg
		Tier tier_diamond_2 = new Tier(1, 1,"钻石II");
		Tier tier_diamond_3 = new Tier(1, 2,"钻石III");
		Tier tier_diamond_4 = new Tier(1, 3,"钻石VI");
		Tier tier_diamond_5 = new Tier(1, 4,"钻石V");
		Tier tier_master_1 = new Tier(6, 0,"超凡大师");// 超凡大师http://ossweb-img.qq.com/images/lol/img/rank/master_1.jpg
		Tier tier_challenger = new Tier(0, 1,"最强王者");// 最强王者http://ossweb-img.qq.com/images/lol/img/rank/challenger.jpg
		
		TIERS.put(tier_none, "http://ossweb-img.qq.com/images/lol/img/rank/rank_none.jpg");//无段位
		TIERS.put(tier_bronze_1, "http://ossweb-img.qq.com/images/lol/img/rank/bronze_1.jpg");//青铜
		TIERS.put(tier_bronze_2, "http://ossweb-img.qq.com/images/lol/img/rank/bronze_2.jpg");
		TIERS.put(tier_bronze_3, "http://ossweb-img.qq.com/images/lol/img/rank/bronze_3.jpg");
		TIERS.put(tier_bronze_4, "http://ossweb-img.qq.com/images/lol/img/rank/bronze_4.jpg");
		TIERS.put(tier_bronze_5, "http://ossweb-img.qq.com/images/lol/img/rank/bronze_5.jpg");
		TIERS.put(tier_silver_1, "http://ossweb-img.qq.com/images/lol/img/rank/silver_1.jpg");//白银
		TIERS.put(tier_silver_2, "http://ossweb-img.qq.com/images/lol/img/rank/silver_2.jpg");
		TIERS.put(tier_silver_3, "http://ossweb-img.qq.com/images/lol/img/rank/silver_3.jpg");
		TIERS.put(tier_silver_4, "http://ossweb-img.qq.com/images/lol/img/rank/silver_4.jpg");
		TIERS.put(tier_silver_5, "http://ossweb-img.qq.com/images/lol/img/rank/silver_5.jpg");
		TIERS.put(tier_gold_1, "http://ossweb-img.qq.com/images/lol/img/rank/gold_1.jpg");//黄金
		TIERS.put(tier_gold_2, "http://ossweb-img.qq.com/images/lol/img/rank/gold_2.jpg");
		TIERS.put(tier_gold_3, "http://ossweb-img.qq.com/images/lol/img/rank/gold_3.jpg");
		TIERS.put(tier_gold_4, "http://ossweb-img.qq.com/images/lol/img/rank/gold_4.jpg");
		TIERS.put(tier_gold_5, "http://ossweb-img.qq.com/images/lol/img/rank/gold_5.jpg");
		TIERS.put(tier_platinum_1, "http://ossweb-img.qq.com/images/lol/img/rank/platinum_1.jpg");//铂金
		TIERS.put(tier_platinum_2, "http://ossweb-img.qq.com/images/lol/img/rank/platinum_2.jpg");
		TIERS.put(tier_platinum_3, "http://ossweb-img.qq.com/images/lol/img/rank/platinum_3.jpg");
		TIERS.put(tier_platinum_4, "http://ossweb-img.qq.com/images/lol/img/rank/platinum_4.jpg");
		TIERS.put(tier_platinum_5, "http://ossweb-img.qq.com/images/lol/img/rank/platinum_5.jpg");
		TIERS.put(tier_diamond_1, "http://ossweb-img.qq.com/images/lol/img/rank/diamond_1.jpg");//钻石
		TIERS.put(tier_diamond_2, "http://ossweb-img.qq.com/images/lol/img/rank/diamond_2.jpg");
		TIERS.put(tier_diamond_3, "http://ossweb-img.qq.com/images/lol/img/rank/diamond_3.jpg");
		TIERS.put(tier_diamond_4, "http://ossweb-img.qq.com/images/lol/img/rank/diamond_4.jpg");
		TIERS.put(tier_diamond_5, "http://ossweb-img.qq.com/images/lol/img/rank/diamond_5.jpg");
		TIERS.put(tier_master_1, "http://ossweb-img.qq.com/images/lol/img/rank/master_1.jpg");//大师
		TIERS.put(tier_challenger, "http://ossweb-img.qq.com/images/lol/img/rank/challenger.jpg");//王者
	}
	
	/**
	 * 获取段位名称
	 * @param tier
	 * @return
	 */
	public static String queryTierName(Tier tier){
		Set<Entry<Tier, String>> entrySet = Tiers.TIERS.entrySet();
		for(Entry<Tier,String> entry:entrySet){
			if(entry.getKey().getTier()==tier.getTier()&&entry.getKey().getQueue()==tier.getQueue()){
				return entry.getKey().getRank();
			}
		}
		return null;
	}
	
	/**
	 * 获取段位图标
	 * @param tier
	 * @return
	 */
	public static String queryIconImg(Tier tier){
		Set<Entry<Tier, String>> entrySet = Tiers.TIERS.entrySet();
		for(Entry<Tier,String> entry:entrySet){
			if(entry.getKey().getTier()==tier.getTier()&&entry.getKey().getQueue()==tier.getQueue()){
				return entry.getValue();
			}
		}
		return null;
	}
	public static void main(String[] args) {
		Tier tier_diamond_5 = new Tier(3, 5);
		System.out.println(queryTierName(tier_diamond_5));
		System.out.println(queryIconImg(tier_diamond_5));
//	System.out.println(Tiers.TIERS.size());
	}
}
