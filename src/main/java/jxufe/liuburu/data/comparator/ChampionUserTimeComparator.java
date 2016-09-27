package jxufe.liuburu.data.comparator;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Comparator;
import java.util.Date;

import jxufe.liuburu.data.Champion;

/**
 * 英雄熟练度比较器
 * @author liuburu
 *
 */
public class ChampionUserTimeComparator implements Comparator<Champion> {

	@Override
	public int compare(Champion o1, Champion o2) {
		return o1.getLast_use_time().after(o2.getLast_use_time())==true?-1:1;
	}
}
