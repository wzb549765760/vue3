<template>
  <div>
    <input v-model="name1" />
    {{ name1 }}
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

@Component
export default class Test extends Vue {
  @Prop() private value: any;
  @Provide() public name1: string = "";

  public created(): void {
    this.name1 = this.value;
  }

  public mounted(): void {}

  @Emit("nameChange") onInput(val?: any) {}

  @Watch("name1", { deep: true })
  name1Watch(): void {
    this.onInput(this.name1); //传值
  }
}
</script>

<style scoped lang="less"></style>
