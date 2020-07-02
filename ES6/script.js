
// // let test1 = "Hello";


// let เทส = 2
// เทส = 3
// alert(เทส); 


// let name = "benz"
// let human = name
// console.log(human);

// let MyWallet = 30;
// let MyDadName = "DAD";
// let MyMomName = "MyMomName";
// let MyAddress = "Address";
// let AgeOfUniverse = 20000;
// console.log(MyWallet);
// console.log(MyDadName);
// console.log(MyMomName);
// console.log(MyAddress);
// console.log(AgeOfUniverse);

// let F = 4;
// F = "GGGG"
// console.log(typeof F)
// console.log(`F is ${F}`)

// let Name = "Benz"
// let Age = "24"
// let Address = "XXX"
// let Hisy = `My name is ${Name}  
// Age : ${Age}, Adress : ${Address}`
// console.log(Hisy)

// let A = "2"
// let B = "3"
// C = "3"+"4"

// let X = Number(null)
//console.log(Boolean(alert(1)));

// let X = prompt("What.....?")
// if (X == '2018') {
//     alert("xxx")
// } else {
//     alert("yyy")
// }


// let age = prompt("What..age...?")
// if (age > 18 && age < 60) {
//     alert("Between 18-60")
// } else  {
//     alert("Not in 18-60")
// }



// let  Number = prompt("ทายเลขมาสิ?")
// if (age > 18 && age < 60) {
//     alert("Between 18-60")
// } else  {
//     alert("Not in 18-60")
// }



// while (true) {
//     let hiddenNum = 30
//     let n = parseInt(prompt("ทายเลขมาสิ?"), 10);
//     if (Number(n)) {
//         if (n < hiddenNum) {
//             alert("ค่ามากกว่า : " + n)
//         } else if (n > hiddenNum) {
//             alert("ค่าน้อยกว่า : " + n)
//         } else {
//             alert("ถูกแล้ว")
//             alert(paste("เลขที่ซ่อนอยู่คือ", hiddenNum))
//             break;
//         }
//     }else{
//         alert("ใส่ตัวเลขจ้าาาา")
//     }
// }

// let a = +prompt('a?', '');

// switch (a) {
//     case (2 || 3):
//         alert('2,3');
//         break;
// }

// function sum(A,B){
//     return A+B
// }
// const x = sum(2,"3");
// console.log(x);


// let a = prompt('a?');
// function draw(a) {
//     let star = "";
//     for (let i = 0; i < a; i++) {
//         star = star + "*";
//         console.log(star);  
//     }

// }


// function ask(question, yes, no) {
//     if (confirm(question)) yes()
//     else no();
//   }
//   function showOk() {
//     alert( "You agreed." );
//   }
//   function showCancel() {
//     alert( "You canceled the execution." );
//   }
//   // usage: functions showOk, showCancel are passed as arguments to ask
//   ask("Do you agree?", showOk, showCancel);




//   let ask = (question, yes, no) => {  
//     if (confirm(question)) yes()
//     else no();
//   };


//   ask(
//     "Do you agree?",
//     () => alert("You agreed.") ,
//     () => { alert("You canceled the execution."); }
//   );


//     let propertiesName = "age";

// let obj = {
//   [propertiesName]: 20, // จะได้ key เป็น age
// }

// console.log(obj);   



// let fruit = prompt("Which fruit to buy?", "apple");
// let bag = {};
// let StrStop = "stop";
// // เอาค่าชื่อมาจากตัวแปร
// bag[fruit] = 5;
// console.log(bag)

// let hiddenNum = 30
//     let n = parseInt(prompt("ทายเลขมาสิ?"), 10);
//     if (Number(n)) {
//         if (n < hiddenNum) {
//             alert("ค่ามากกว่า : " + n)
//         } else if (n > hiddenNum) {
//             alert("ค่าน้อยกว่า : " + n)
//         } else {
//             alert("ถูกแล้ว")
//             alert(paste("เลขที่ซ่อนอยู่คือ", hiddenNum))
//             break;
//         }
//     }else{
//         alert("ใส่ตัวเลขจ้าาาา")
//     }

// let obj = {}

// while (1) {
//     let key = prompt("KEY :");
//     let Value = prompt("VALUE :");
//     obj[key] = Value
//     if (key == "stop" || Value == "stop") {
//         console.log(obj)
//         break
//     }
// }



// const user = {
//     name: "John"
//   };

//   user.age = 25; 
//   // เพิ่ม properties ใหม่


//   alert(user.age); // 25



// let menu = {
//     width: 200,
//     height: 300,
//     title: "My menu"
//   };

//   multiplyNumeric(menu,3)
//   function multiplyNumeric(obj,No){

//     for (key in obj) {
//         //if(Number(obj[key])){
//             if(typeof obj[key] === "number"){
//             obj[key] = obj[key]*No;
//         }
//       }
//       console.log(obj)
//   }


// multiplyNumeric(menu, 2);

// function multiplyNumeric(obj,No){
// //for(let key in obj)
// alert( key );  	
// alert( obj[key] );

// }


// let user = {
//     name: "John",
//     go: function() { alert(this.name) }
//   }

//   user.go()



//   function makeUser() {
//     return {
//       name: "John",
//       ref: this.name
//     };
//   };

//   let user = makeUser();

//   console.log( user.ref ); // What's the result?


// let one = 0;
// let two = 0;

// let calculator = {
//     read : function() {one = prompt("ตัวเเรก"); two = prompt("ตัวสอง")},
//     sum :  function() {return Number(one)+ Number(two)},
//     mul :  function() {return Number(one) * Number(two)}
//   };

// calculator.read();
//  alert( calculator.sum() );
//  alert( calculator.mul() );



// let num = 1.23456;
// alert( Math.floor(num * 100) / 100 );
// let min =prompt("min");
//  let max =prompt("max");

// function random(min,max) {

//       //highlightedNumber = Math.random() * (max - min) + min;
//       alert(Number(min) + Math.random() * (Number(max)-Number(min)));
//  // alert(highlightedNumber);
// };

// random(min,max)

//alert( random(1, 5) ); 

// let str = prompt("add str");
// function ucF(str) {
//   // alert(str.charAt(0).toUpperCase() + str.substring(1, str.length));
//   if (str.includes("xxx") || str.includes("viagra")) {
//     return true;
//   } elsel
//   return false
// }  

// console.log(ucF(str))

// let A = ["Jazz","Blues"];
// A.push("Rock-n-Roll")
// A.splice(Math.round((A.length/2)-1), 1, "Classics "); //ระบุ parameter 2 เป็น 1 จะเท่ากับการ Replace
// console.log(A); 

// sumInput()  
// let keep = [];
// function sumInput() {
//   let X = prompt("Input :")
//   let num  = X;
//   for (let i = 0; i < X.length - 1; i++) {
//       if(isNaN(X)){
//           break;
//       }else{
//         keep.push(X[i])
//       }
//   }
// console.log(keep)
// }


// let str = "abc123";
// console.log(str.slice(1,4))


// ["Bilbo", "Gandalf", "Nazgul"].forEach((item, index, array) => {
//   alert(`${item} is at index ${index} in ${array}`);
// });


// let values = ["Hare", "Krishna", "Hare", "Krishna", "Krishna", "Krishna", "Hare", "Hare", ":-O" ];
// console.log(new Set(values));

// const errorMessage = 'This is a super long error that was thrown because of Batman. When you stop to think about how Batman had anything to do with this, you would get nowhere fast.';

// // ไม่ดี
// const errorMessage = 'This is a super long error that was thrown because \
// of Batman. When you stop to think about how Batman had anything to do \
// with this, you would get nowhere \
// fast.';

// // ดี
// const errorMessage = 'This is a super long error that was thrown because ' +
//   'of Batman. When you stop to think about how Batman had anything to do ' +
//   'with this, you would get nowhere fast.';


// const fruits = ['apple','banana','orange']
// const students = [ { id:1 ,name : 'bean', age : 14},{id:2 , name : 'ken', age : 15}]
// const itemsCopy = [...fruits,...students];



// function getFullName(user) {
//     const firstName = user.firstName;
//     const lastName = user.lastName;
  
//     return `${firstName} ${lastName}`;

// }

// function getFullName(user) {
//     const { firstName, lastName } = obj; // ใช้ Destructuring ในการแปลงค่าอ็อบเจ็กต์ให้เป็นตัวแปร
//     return `${firstName} ${lastName}`;
//   }
  

// class Foo {
//     bar() { return 1; }
//     bar() { return 2; }
//   }


//   let test = new Foo();
//   console.log(test.bar)
  

