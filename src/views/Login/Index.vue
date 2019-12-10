<template>
  <div>
    <div @click="getName">{{ name1 }}{{ ChangeName }}</div>
    <test :value="name1" @nameChange="nameChange"></test>
    <test1 ref="test1"></test1>
    <select @change="selectChange" v-model="selectVal">
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
    </select>
  </div>
</template>

<script lang="ts">
import {
  Component,
  Vue,
  Provide,
  Emit,
  Watch,
  Prop,
  Model,
  Inject
} from "vue-property-decorator";
import Test from "@/views/Login/assembly/Test.vue";
import Test1 from "@/views/Login/assembly/Test1.vue";

import "@/assets/Ts/Interface";
import "@/assets/Ts/StaticClass";
import "@/assets/Ts/absolute";
import "@/assets/Ts/fanxing";
import "@/assets/Ts/NameSpace";
import "@/assets/Ts/Decorate";

@Component({
  //Component组件装饰器，用于增加一些全局的配置，如filters过滤器等
  components: {
    test: Test,
    Test1: Test1
  } //components这里放置一些全局的组件
})
export default class Index extends Vue {
  @Provide() public name1: string = "typescript";
  @Provide() private sex: number = 2;
  @Provide() age: number | undefined | null;
  @Provide() selectVal: string = "1";
  private getName(): void {
    this.name1 = "222";
    this.age = 123;
    alert(this.age);
  }

  get ChangeName(): String {
    // enum sexType {"asd"=""}
    if (this.sex === 1) {
      return "男";
    }
    return "女";
  }

  selectChange(): void {
    alert(this.selectVal);
  }

  private nameChange(name: any): void {
    this.name1 = name;
  }

  public mounted(): void {
    (this.$refs.test1 as any).getData("你好，中国");
  }
}
</script>

<style scoped lang="less"></style>
