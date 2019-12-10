<template>
  <div>
    <input v-model="name" />
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
export default class Index extends Vue {
  @Provide() name: string = "";
  @Watch("name", { deep: true })
  nameWatch(newVal: string, oldVal: string): void {
    alert(`${newVal}----${oldVal}`);
  }
}
</script>
