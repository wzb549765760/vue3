<template>
  <div>asdf</div>
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
export default class Test1 extends Vue {
  private getData(data: any): string {
    alert(data);
    return "123";
  }
}
</script>

<style scoped></style>
