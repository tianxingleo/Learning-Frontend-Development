<template>
    <div class="talk">
        <button @click="getLoveTalk">获取一句话</button>
        <ul>
            <li v-for="talk in talkList" :key="talk.id">{{ talk.title }}</li>
        </ul>
    </div>
</template>

<script setup lang="ts" name="LoveTalk">
import { reactive } from 'vue';
import axios from 'axios';
import { nanoid } from 'nanoid';

let talkList = reactive([
    { id: '1', title: '今天你有点怪，哪里怪？怪好看的！' },
    { id: '2', title: '草莓、蓝莓、蔓越莓，今天想我了没？' },
    { id: '3', title: '心里给你留了一块地，我的死心塌地' }
]);

async function getLoveTalk() {
    try {
        // 原 API (api.uomg.com) 证书已过期，更换为韩小韩 API
        let result = await axios.get('https://api.vvhan.com/api/love');
        // 构造对象，使用时间戳作为 ID
        let obj = { id: nanoid(), title: result.data.content }
        // 添加到数组头部
        talkList.unshift(obj);
    } catch (error) {
        console.error('获取失败', error);
        alert('获取情话失败，请检查网络');
    }
}
</script>

<style scoped>
.talk {
    background-color: orange;
    padding: 10px;
    border-radius: 10px;
    box-shadow: 0 0 10px;
}
</style>