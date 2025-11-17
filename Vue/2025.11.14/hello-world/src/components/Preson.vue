

<template>
    <!-- html -->
     <div class="person">
        <h2>姓名：{{ name }}</h2>
        <h2>年龄：{{ age }}</h2>
        <button @click="changeName">修改名字</button>
        <button @click="changeAge">修改name</button>
        <button @click="showTel">查看联系方式</button>

        <h2>一辆{{ car.brand }}车，价值{{ car.price }}万</h2>
        <button @click="changePrice">修改汽车价值</button>
        <button @click="changeBrand">修改品牌</button>

        <h2>当前求和为:{{ sum }}</h2>
        <button @click="changeSum">点我加1</button>

        <h2>游戏列表</h2>
        <ul>
            <li v-for="g in games" :key="g.id">{{ g.name }}</li>
        </ul>
        <button @click="clickFirstGame">修改第一个游戏的名字</button>
        <br>

        姓:<input type="text" v-model="firstName"><br></br>
        名:<input type="text" v-model="lastName">
        全名:<span>{{fullname}}</span>
        <button @click="changeFullName">将全名改为li</button>

        <h1>监视ref定义的基本类型数据</h1>
        <h2>当前求和为{{ sum_1 }}</h2>
        <button @click="changeSum_1">点我数据+1</button>


        <h1>监视ref定义的对象类型数据</h1>
        <h2>姓名：{{ person.name }}</h2>
        <h2>age:{{ person.age }}</h2>
        <button @click="changeName_1">修改名字</button>
        <button @click="changeAge_1">修改age</button>
        <button @click="changePerson">修改person</button>

        <h1>监视reactive定义的对象类型数据</h1>
        <h2>姓名：{{ person.name }}</h2>
        <h2>age:{{ person.age }}</h2>
        <button @click="changeName_1">修改名字</button>
        <button @click="changeAge_1">修改age</button>
        <button @click="changePerson">修改person</button>


        <h2>name{{ person_1.name }}</h2>
        <h2>age{{ person_1.age }}</h2>
        <h2>car:{{ person_1.car.c1}},{{ person_1.car.c2 }}</h2>
        <button @click="changeName_2">change name</button>
        <button @click="changeAge_2">change age</button>
        <button @click="changeC1">change C1</button>
        <button @click="changeC2">change c2</button>
        <button @click="changeCar_2">change car</button>

     </div>
</template>

<!-- <script lang="ts">
//js/ts
    export default{
        name:'Person',
        
    }
    
</script> -->

<script lang="ts" setup name="Person">
    import {reactive, ref,computed,watch} from 'vue'


    let person_1=reactive({
        name:'zhangsan',
        age:18,
        car:{
            c1:'benchi',
            c2:'baoma'
        }
    })

    function changeCar_2(){
        person_1.car={c1:'yadi',c2:'aima'}
    }
    function changeC2(){
        person_1.car.c2='aodi'
    }
    function changeC1(){
        person_1.car.c1='dazong'
    }
    function  changeAge_2(){
        person_1.age+=1
    }
    function changeName_2(){
        person_1.name+='~'
    }

    watch(()=>{return person.name},(newValue)=>{//监视值，需要getter函数，对于对象不需要；对于对象如果用函数包裹，那只能监视整体值
        console.log("change")
    })






    let person=reactive({
        name:'张三',
        age:18
    })
    function changeAge_1(){
        person.age=19
    }
    function changeName_1(){
        person.name='lisi'
    }
    function changePerson(){
        //person={name:'lisi',age:90}
        Object.assign(person,{name:'lisi',age:90})
    }
    //监视的是对象的地址值，只有changeperson有用。检测内部变化，需要开启深度监视
    
    watch(person,(newValue,oldValue)=>{//reactive定义的对象类型数据默认开启深度监视
        console.log('change')
    })


    

    let sum_1=ref(0)
    function changeSum_1(){
        sum_1.value+=1
    }
    const stopwatch=watch(sum_1,(newvalue,oldvalue)=>{
        console.log('change')
        if(newvalue>=10){
            stopwatch()
        }
    })




    let firstName = ref('zhang')
    let lastName = ref('san')

    // let fullname = computed(()=>{
    //     return firstName.value+lastName.value
    // })
    let fullname = computed({
        get(){
            return firstName.value+lastName.value
        },
        set(val){
            const [str1,str2]=val.split('-')
            firstName.value=str1!
            lastName.value=str2!
            console.log(1)
        }
    })

    function changeFullName(){
        fullname.value='li-si'
    }


    let car=reactive({brand:'奔驰',price:100})
    function changePrice(){
        car.price += 10
    }
    function changeBrand(){
        car.brand='baoma'
    }
    function changeCar(){
        //car=reactive({brand:'at',prize:1})
        Object.assign(car,{brand:'at',prize:1})



    }
    let games=reactive([
        {id:'ayasdytfsatr01',name:'wanzhe'},
        {id:'ayasdytfsatr02',name:'yuanshen'}
    ])
    function clickFirstGame(){
    // 使用 ! 避免 TypeScript 抱怨 games[0] 可能是 undefined
        games[0]!.name='abcd' 
    }

    let sum = ref(0)
    function changeSum(){
        sum.value += 1
    }



    let name=ref('张三')//不是响应式的
    let age = 18
    let tel ='13888'
    let address = 'beijin'

    //方法
    
    function changeName(){
        console.log(1)
        name.value='zhang-san'//如此修改修改不会显现
    }
    function changeAge(){
        age += 1
    }
    function showTel(){
        alert(tel)
    }


    //return {name,age,changeName,changeAge,showTel}
    //return ()=>'哈哈'//setup的返回值还可以是一个渲染函数
</script>

<style scoped>
    /* 样式 */
    .person{
        background-color: #66ccff;
        box-shadow: 0 0 10px;
        border-radius: 10px;
        padding: 20px;
        margin-bottom: 20px; /* 您可以随意调整 20px 这个值 */
    }
    button {
        margin: 0 5px;
    }
</style>