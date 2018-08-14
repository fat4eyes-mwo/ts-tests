import {B} from "./b"; //this import seems to cause lookup of A.foo and A.bar to fail below
namespace A {

	export class AA {
		constructor() {

		}
	}

	export function error() {
		//false errors, unable to find Foo and bar defined in aa.ts. 
		//Seems to be caused by the type import above.
		let a = new A.Foo();
		let b = A.bar();
		
		let c : B; //lookup ok
		let d = new A.AA(); //lookup ok
	}
}