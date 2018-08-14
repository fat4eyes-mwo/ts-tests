import {B} from "./b";
namespace A {
	export function error() {
		//false errors, unable to find Foo and bar defined in aa.ts. 
		//Seems to be caused by the type import above.
		let a = new A.Foo();
		let b = A.bar();
		
		let c : B; //lookup ok
	}
}