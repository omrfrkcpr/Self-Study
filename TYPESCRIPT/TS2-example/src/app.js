//! Interface
/* interface Person {
    name: string;
    readonly age: number
}

const person1: Person = {
    name: 'Mark',
    age: 40
}


interface Calendar {
    events: string[];
    addEvents(event:string):void;
}

class LMSCalendar implements Calendar {
    constructor (public events: string[]){}

    addEvents(event: string): void {
        this.events.push(event)
    }
}

const de08 = new LMSCalendar(['HTML','CSS','JS','React'])
const de09 = new LMSCalendar(['HTML','CSS','JS','React'])
const ch17 = new LMSCalendar(['HTML','CSS','JS','Angular'])

de08.addEvents('TS')

console.log(de08) */
/* interface NumKey {
    (key: number, value: string): void
  }
  
  function addKeyVal(k: number, v: string): void {
    console.log("adding key value", k, v)
  }
  
  function update(index: number, newVal: string): void {
    console.log("updating key value", index, newVal)
  }
  
  let kvp: NumKey = addKeyVal;
  kvp(1, 'John')
  kvp = update
  kvp(2, 'Jane') */
//generics
function getArray(items) {
    return new Array().concat(items);
}
let numArr = getArray([1, 2, 3]);
let strArr = getArray(["John", "Jane"]);
numArr.push(4); // OK
strArr.push("Jake"); // OK
numArr.push("Tim"); // Compiler Error
strArr.push(5); // Compiler Error
