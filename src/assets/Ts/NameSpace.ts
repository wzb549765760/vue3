/*

namespace:来定义命名空间  阻止代码，避免冲突

*/

export namespace NameSpanceA {
  export class getData {
    name: string
    constructor(name: string) {
      this.name = name
    }
    dog(): void {
      console.log(this.name + 'is:dog')
    }
  }
}

var aas = new NameSpanceA.getData('asdf')

aas.dog()
