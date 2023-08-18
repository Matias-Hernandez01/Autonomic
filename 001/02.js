function suma (num1, num2){
  if(typeof num1 === "string" && typeof num2 === "string"){
    return Number(num1) + Number(num2)
  }else if (typeof num1 === "number"  && typeof num2 === "string" ){
    return num1 + Number(num2)
  } else if (typeof num1 === "string"  && typeof num2 === "number" ){
    return Number(num1) + num2
  } else {
    return num1 + num2
  }
}
