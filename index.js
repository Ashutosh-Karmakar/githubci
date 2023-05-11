var number;
var count = 0;
var opbool = 0;
var results = [];


// Here all the display on the input area is taken care of
$(".operators div").click(function(){
  number = $(".input").text();
  let once = this.id;
  if(once === "." && count == 0){
    count = 1;
    number = $(".input").text();
    operator = this.id;
    number = number.toString()+ once.toString();
    $(".input").text(number);
  }
  console.log(number !== "");

  if((once=="+" || once=="-" || once=="*" || once=="/") && number!== ""){
    count = 0;
    if(opbool == 0){
      number = $(".input").text();
      operator = this.id;
      number = number.toString()+ once.toString();
      $(".input").text(number);
    }
    if(opbool == 1){
      number = $(".input").text();
      number = number.slice(0,number.length-1)
      $(".input").text(number.toString() + once.toString());
    }
    opbool = 1;
  }
  else if(once!= "." &&(once!="+" && once!="-" && once!="*" && once!="/")){
    console.log("jjjjj");
    opbool = 0;
    number = $(".input").text();
    operator = this.id;
    number = number.toString()+ once.toString();
    $(".input").text(number);
  }
  if(once == "C"){
     number = null;
     results = [];
     $(".input").text(number);
  }
});

// here the equals event operation is carried out
$(".equals").click(function(){
  let res = $(".input").text();
  let operator = [];
  // console.lo g(res);
  let next = 0;
  for(let i=0;i<res.length;i++){
    if((res[i] == "+" || res[i] == "-" || res[i] == "*" || res[i] == "/") && i!= res.length-1){
      results.push(res.slice(next,i));
      next = i+1;
      operator.push(res[i])
    }
  }
  results.push(res.slice(next,res.length))
  calculate(operator);

  console.log("inside equals");
  console.log(operator);
  console.log(results);
  console.log("inside equals");

});

// here the calculation is taken care of
function calculate(operator){
  let len = operator.length
  for(let i=0 ; i< len ; i++){

    console.log("calculator");
    console.log(operator);
    console.log(results);
    console.log("calculator");




    add = operator.indexOf("+");
    sub = operator.indexOf("-");
    mul = operator.indexOf("*");
    div = operator.indexOf("/");
    if(div!=-1){
      let var1 = parseFloat(results[div]);
      let var2 = parseFloat(results[div+1]);
      results[div] = (var1/var2);
      sift(div);
      siftOperator(div,operator)
    }
    else if(mul!=-1){
      let var1 = parseFloat(results[mul]);
      let var2 = parseFloat(results[mul+1]);
      results[mul] = (var1*var2);
      sift(mul);
      siftOperator(mul,operator)
    }
    else if(sub!=-1){
        let var1 = parseFloat(results[sub]);
        let var2 = parseFloat(results[sub+1]);
        results[sub] = (var1-var2);
        sift(sub);
        siftOperator(sub,operator)
    }
    else if(add!=-1){
      let var1 = parseFloat(results[add]);
      let var2 = parseFloat(results[add+1]);
      results[add] = (var1+var2);
      sift(add);
      siftOperator(add,operator)
    }

  }
    $(".input").text(results.pop());

}


function siftOperator(i,operator){
  for(let v=i;v<operator.length;v++){
    operator[v] = operator[v+1];
  }
  operator.pop();


}

function sift(i){
  for(let v=i+1;v<results.length;v++){
    results[v] = results[v+1];
  }
  results.pop();
}
