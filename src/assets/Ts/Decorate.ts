/*
 
装饰器 普通 无法带参数

*/

function logClass(params: any): any {
  console.log(params)

  params.prototype.ok = function() {
    console.log('this is ok fun')
  }
}

@logClass
class log {
  constructor() {}
}
/*

装饰器 工厂 客带参

*/
function logClassF(params: string) {
  return function(target: any) {
    console.log(params, target)
  }
}

@logClassF('asdfasd')
class logF {
  constructor() {}
}

/*

使用修饰器 来重载

*/

function logClassFun(target: any) {
  return class extends target {
    name: any = '重载后的数据'
    getData() {
      console.log(this.name)
    }
  }
}

@logClassFun
class logFun {
  public name: string | undefined
  constructor() {
    this.name = 'parameters'
  }
  getData() {
    console.log(this.name)
  }
}

/* 
属性装饰器
*/

function logClassFunc(target: any) {
  // return class extends target {
  //   name: any = '重载后的数据'
  //   getData() {
  //     console.log(this.name)
  //   }
  // }
}

function logClassFuncParams(target: any) {
  return function(params: any, item: any) {
    console.log('logClassFuncParams')
    console.log(target)
    console.log(params)
    console.log(item)
    params[item] = target
  }
}

@logClassFunc
class logFunc {
  @logClassFuncParams('asd')
  public name: string | undefined
  constructor() {
    // this.name = 'parameters'
  }
  getData() {
    console.log('getData ======')
    console.log(this.name)
  }
}

var l = new logFunc()
l.getData()
