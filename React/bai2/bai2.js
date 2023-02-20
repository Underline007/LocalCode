// class Person{
//     constructor(name,address){
//         this.name = name;
//         this.address = address;
//     }

//     getDress(){
//         return "I live in " + this.address;
//     }
// }

// const test = new Person("Dzung", "Ha Noi");
// console.log("check test: " , test);
// console.log("check address: ", test.getDress())

// class Novel {
//     constructor(title, author){
//         this.title = title
//         this.author = author
//     }

//     getAuthor(){
//         return "hello" + this.author
//     }
// }

// let myNovel = new Novel("Nguyen Nhat Anh", "Toi Thay hoa vang")
// console.log(myNovel);
// console.log(myNovel.getAuthor())

// bai 3

// let person = {
//     name: "Dzung",
//     age: '21',
// }

// console.log(person);

// let React = {
//     language: "javascript",
//     author: "facebook",
// }

// let tutorial = {
//     name: "React Tutorial",
//     author: "HoiDanIT vs Eric",
//     language: "javascript"
// };

// alert(tutorial.name )           



// -----------------bai 4----------------------
// arrow function

// hello = () => "Hello World"; 
// hello1 = (value) => "Hello World" + value;

// ---------bai 6-----------

// const base_url = "localhost:8080";
// const api = "get-user";  
// fetch_page = 2;

// console.log(`${base_url}/${api}?page=${fetch_page}` )

// ---------------bai 7--------------------

// const firstArr = [1,2,3];
// const secondArr = [4,5,6];
// const thirdArr = [...firstArr, ...secondArr,7,8];

// console.log(thirdArr);


// let myArr = ['Eric', 'HoiDanIT', 'React'];
// myArr.push("New");
// myArr = [...myArr, "new"]
// myArr.unshift("addFirst");
// myArr = ["AddddFirst",...myArr]
// console.log(myArr);




// const test = {name: 'dzung', address: 'hanoi'}
// console.log({...test})

// const myVehicle = {
//     brand: 'Ford',
//     model: 'Mustang',
//     color: 'red'
//   }
//   const updateMyVehicle = {
//     type: 'car',
//     year: 2021, 
//     color: 'yellow'
//   }
// //Khi các thuộc tính trùng nhau trong object, các thuộc tính trùng nhau sẽ bị ghi đè.
// const update = {...myVehicle , ...updateMyVehicle}
// console.log(update)

// const state = {
//     name: 'dzung',
//     age: 18,
// }

// const result = {...state, age: 25}
// console.log(result);


// function sum(x, y, z) {
//     return x + y + z;
//   }
//   const numbers = [1, 2, 3];
//   console.log(sum(...numbers));



// -----------------------bai 8-----------------------------

// const person = { name: "Eric", age: 26, eyeColor: "black", like: "girl" };
// const name = person.name;
// const age = person.age;
// console.log(name); //Eric
// console.log(age); //26

//--------------------Destructing Object
// const person = { name: "Eric", age: 26, eyeColor: "black", like: "girl" };
// const { age, name } = person;
// console.log(name); //Eric
// console.log(age); //26


// const city = [ "ha noi", "da nang" ,'sai gon', "ca mau"];

// // old way
// // const hanoi = city [0];
// // const danang = city [1];
// // const hcm = city [2];
// // console.log(hanoi, danang, `${hcm}`)

// //With destructuring:
// // const [ hanoi, danang, hcm] = city;
// const [ hanoi, danang, ,camau] = city;
// console.log(hanoi, danang, `${camau}`)

// const react = ["facebook", 'all-in-one', 'javascript'];
// const [,,tech] = react;
// console.log(tech)


// const dev = { salary: 2000, tool : 'laptop', like: 'bugs' };
// const {like}= dev;
// let tech1 = like

// console.log(tech1) //bugs

// --------------------bai 9------------------------------
// Ternary Operator 
// const x = 1;

// if (x > 5){
//     console.log('greater than 5')
// } else {
//     console.log(`less than 5`)
// }

// y = x > 5 ? `lon hon 5` :'nho hon 5'
// console.log(y)


// -----------------------bai 10 ---------------------

// let userAdmin = {
//     admin() {
//       alert("I am Eric");
//     }
//   };
  
//   let userGuest = { };
  
// userGuest.admin?.() ?? "np";
  

// let obj = {
//     name: 'dzung',
//     chanel: "RepTV",
//     address:{
//         street: "Ham Nghi",
//         province: "My Dinh"
//     }
// }
// console.log(obj?.xy ?? "Del co dau ")


// const test = undefined;
// test.map(item => item)



