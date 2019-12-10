interface Animal {
  eat(): void
}

interface Person extends Animal {
  run(): void
}

class test implements Person {
  name: string

  constructor(name: string) {
    this.name = name
  }

  eat(): void {
    console.log('eat')
  }

  run(): void {
    console.log('run')
  }
}

let a = new test('ABC')
a.eat()
a.run()
/*
 接口用来定义标准
*/

interface Web {
  (name: string, val: string): void
}

let w: Web = function(name: string, val: string) {
  console.log(name + val)
  return name + val
}

w('WUZHIBIN', 'TEST')
/*
  接口 限制定义参数类型

*/
interface InterfaceTest {
  name: string
  sex: string
  age: number
}

class Fun {
  constructor() {}

  getInfo(obj: InterfaceTest) {
    console.log(obj)
  }
}
var f = new Fun()
f.getInfo({
  name: 'string',
  sex: 'string',
  age: 123
})

/*
  接口 可索引接口 数组的约束
*/

interface InterfaceTest2 {
  [index: number]: string
}

var arr: InterfaceTest2 = ['asdf', 'asdf']

console.log(arr)

/*
  接口 可索引接口 对象的约束
*/

interface InterfaceTest3 {
  [index: string]: string
}

var arr11: InterfaceTest3 = { '': '' }

console.log(arr11)

/*
拓展接口 接口可以继承接口
*/

interface tzInterface {
  eat(): void
}

interface tsExInterface extends tzInterface {
  run(): void
}

class stzClass implements tsExInterface {
  name: string
  constructor(name: string) {
    this.name = name
  }
  eat() {}
  run() {}
}

/*
  类类型 接口  对类的约束 和抽象类有点像
*/
