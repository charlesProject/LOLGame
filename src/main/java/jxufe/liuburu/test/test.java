package jxufe.liuburu.test;
class A{
	{
		System.out.println("A非静态代码段");
	}
	public A(){
		System.out.println("A构造");
	}
	static{
		System.out.println("A静态代码段");
	}
}
class B extends A{
	public B(){
		System.out.println("B构造");
	}
	{
		System.out.println("B非静态代码段");
	}
	static{
		System.out.println("B静态代码段");
	}
}
public class test {
	public static void main(String[] args) {
		new B();
	}
}
