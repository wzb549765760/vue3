/*
多态  父类定义方法 子类去实现
*/

class Animals {
  name: string
  constructor(name: string) {
    this.name = name
  }

  getName(type: string): void {
    console.log(this.name)
  }
}

class Dog extends Animals {
  constructor(name: string) {
    super(name)
  }

  getName(type: string): void {
    console.log(this.name + '在吃' + type)
  }
}

let d = new Dog('dog')
d.getName('肉')

/**
 *
 * abstract 抽象类只能放在抽象方法里面
 * 抽象类和抽象方法用来定义标准
 */

abstract class AbstractTest {
  constructor(name: string) {
    this.name = name
  }
  name: string
  abstract eat(something: string): any
}

class AbstractChileTest extends AbstractTest {
  constructor(name: string) {
    super(name)
  }

  eat(something: string): any {
    console.log(this.name + '-eat-' + something)
  }
}

let A = new AbstractChileTest('test')

A.eat('testsomething')
