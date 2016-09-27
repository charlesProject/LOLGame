package jxufe.liuburu.data.comparator;

import java.util.Comparator;

import jxufe.liuburu.data.Champion;

/**
 * 英雄熟练度比较器
 * @author liuburu
 *
 */
public class ChampionExpValueComparator implements Comparator<Champion> {

	@Override
	public int compare(Champion o1, Champion o2) {
		return o1.getUsed_exp_value()-o2.getUsed_exp_value()>0?-1:1;
	}

}
