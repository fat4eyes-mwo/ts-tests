namespace A {
	export function main() {
		//works as expected, picks up Foo and bar defined in aa.ts
		let a = new A.Foo();
		let b = A.bar();
	}
}