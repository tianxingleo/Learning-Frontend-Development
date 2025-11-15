import { ref } from 'vue'; // 1. 导入 ref

// 2. 声明响应式数据
// 在 <script setup> 中，声明的变量默认暴露给模板，无需返回
const userName = ref('roy');
const salary = ref(1500); // 统一变量名为 salary

// 3. 定义方法
function addSalary() {
  // 修改 ref 变量时，必须使用 .value 访问和修改其内部值
  salary.value += 100;
  console.log("新的薪水:", salary);
}

// 4. <script setup> 自动暴露，无需手动 return
