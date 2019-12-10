//泛型 函数
/*
泛型  泛型就是解决 类 接口 方法的复用性，以及对不特定数据类型的支持
*/

// 泛型 对不特定数据类型的支持 需求：传入什么类型 传出什么类型

function getData<T>(value: T): T {
  return value
}

getData<number>(123)

// 泛型 对不特定数据类型的支持 需求：传入什么类型 传出什么类型

function getData1<T>(value: T): any {
  return value
}

getData1<number>(123)

getData1<string>('123')

// 泛型类 比如有一个最小的堆算法。需要同时支持返回数字和字符串两种类型  通过类的泛型来实现

//泛型 类

class MinClass<T> {
  list: T[] = []
  push(value: T): void {
    this.list.push(value)
  }
  minNum(): T {
    var minVal = this.list[0]
    for (let i = 0; i < this.list.length; i++) {
      if (this.list[i] > minVal) {
        minVal = this.list[i]
      }
    }
    return minVal
  }
}

var m1 = new MinClass<number>() //实例化 制定了类的T代表的类型是number

m1.push(123)
m1.push(12)
m1.push(3)

alert(m1.minNum())

//泛型 接口
//函数 泛型接口
interface Config {
  (value: string, value1: string): string
}

var setData: Config = function(value: string, value1: string): string {
  return ''
}

// 泛型接口
//方式1
interface ConfigFun {
  <T>(value: T): T
}
var setData1: ConfigFun = function<T>(value: T): T {
  return value
}

setData1<string>('123')

// 方式2

interface ConfigFun1<T> {
  (value: T): T
}
var setData2: ConfigFun1<string> = function<T>(value: T): T {
  return value
}

setData2('123')
// setData2(123)

//方式3
function setData3<T>(value: T): T {
  return value
}

setData3<string>('123')

//把泛型 当做 参数
//普通方法
class User {
  name: string | undefined
  pwd: string | undefined
}

function IntoUser(obj: User): boolean {
  alert(JSON.stringify(obj))

  return false
}

var user = new User()
user.name = '123'

user.pwd = '123123'

IntoUser(user)

// 泛型定义
class User1 {
  name: string | undefined
  pwd: string | undefined
}

class IntoUser1<T> {
  add(obj: T): boolean {
    return false
  }
}
