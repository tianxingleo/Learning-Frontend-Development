<template>
  <div class="father">
    <h3>父组件</h3>
    <p>直接参考之前所讲的pinia即可</p>
    <hr>
    <LoveTalk />
  </div>
</template>

<script setup lang="ts" name="Father">
import LoveTalk from '@/components/LoveTalk.vue';
</script>

<style scoped>
.father {
  background-color: rgb(165, 165, 165);
  padding: 20px;
  border-radius: 10px;
}
</style>
