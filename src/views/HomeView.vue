<template>
  <main>
    <input type="text" v-model="message1" />
    <input type="text" v-model="message2" />
    <TheWelcome />
  </main>
</template>
<script setup lang="ts">
import { ref, reactive, computed, watch, watchEffect } from "vue";
import TheWelcome from "../components/TheWelcome.vue";

let message1 = ref<string>("");
let message2 = ref<string>("");

// watchEffect(() => {
//   //console.log('message', message.value);
//   console.log("message2", message2.value);
// });
watchEffect((onInvalidate) => {
  console.log("message1", message1.value);
  //用户输入的时间间隔小于1秒，都会立刻清除掉定时，不输入结果。正因为这个，实现了用户防抖的功能，只在用户输入时间间隔大于1秒，才做打印
  onInvalidate(() => console.log("before"));
});
</script>
