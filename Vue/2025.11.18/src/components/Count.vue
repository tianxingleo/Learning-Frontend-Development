<template>
    <div class="count">
        <h2>当前cuount：{{ countStore.sum }}</h2>
        <select v-model.number="n">
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>

        </select>
        <button @click="add">+</button>
        <button @click="minus">-</button>
    </div>
</template>

<script setup lang="ts" name="Count">
import { ref, reactive } from 'vue';
import { useCountStore } from '@/store/count'
// let sum = ref(1)
let n = ref(1)
const countStore = useCountStore()

function add() {
    // sum.value += n.value
}
function minus() {
    // sum.value -= n.value
}
</script>

<style scoped>
.count {
    background-color: skyblue;
    padding: 10px;
    border-radius: 10px;
    box-shadow: 0 0 10px;

}

select,
button {
    margin: 0 5px;
    height: 30px;
}
</style>