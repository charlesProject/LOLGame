package jxufe.liuburu.data;

public class Tier {
	private int tier;
	private int queue;
	private String rank;
	public Tier() {
		super();
		// TODO Auto-generated constructor stub
	}
	
	
	public Tier(int tier, int queue) {
		super();
		this.tier = tier;
		this.queue = queue;
	}

	public String getRank() {
		return rank;
	}
	public void setRank(String rank) {
		this.rank = rank;
	}


	public Tier(int tier, int queue, String rank) {
		super();
		this.tier = tier;
		this.queue = queue;
		this.rank = rank;
	}

	public int getTier() {
		return tier;
	}
	public void setTier(int tier) {
		this.tier = tier;
	}
	public int getQueue() {
		return queue;
	}
	public void setQueue(int queue) {
		this.queue = queue;
	}

	@Override
	public String toString() {
		return "Tier [tier=" + tier + ", queue=" + queue + ", rank=" + rank
				+ "]";
	}
	
}
