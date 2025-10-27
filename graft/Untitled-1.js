function checkAge(age) {
  if (age < 0) {
    // 抛出一个自定义的 RangeError 错误
    throw new RangeError("年龄不能是负数。");
  } else if (age === 0) {
    // 抛出一个普通的字符串
    throw "年龄不能为零"; 
  }
  return true;
}

try {
  checkAge(-5);
} catch (error) {
  // error 变量现在接收到我们抛出的自定义内容
  console.error("捕获到年龄检查错误：");
  
  if (error instanceof RangeError) {
     console.log("错误类型：", error.name);
     console.log("错误描述：", error.message);
  } else {
     console.log("非标准错误值：", error);
  }
}