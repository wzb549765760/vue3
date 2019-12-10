/*
 静态类  只能在静态方法获取到

*/
class StaticClass {
  public name: string
  protected sex: string
  constructor(name: string, sex: string) {
    this.name = name
    this.sex = sex
  }
  static age: number
  static getAge(): any {
    console.log(this.name)
  }
}

class StaticClassChild extends StaticClass {
  constructor(name: string, sex: string) {
    super(name, sex)
  }
  getName(): void {
    console.log(this.name)
  }
  getSex(): void {
    console.log(this.sex)
  }
}

let s = new StaticClassChild('test', 'sex')
s.getSex()
