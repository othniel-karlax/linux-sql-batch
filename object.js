const person={
    name:"ahmed",
    age:25,
    greet:function(){console.log("hello")},
    greet1:function(){console.log("the namer is "+ this.name)} 
}
console.log(person.greet())

// const job={
//     name:"Aaron",
//     position:"fullstack eveloper",
//     showdetails() {
//         console.log(`The ${this.name} position is ${this.position}`);}
// };

// const New =Object.create(job);
// New.position="front end";
// New.showdetails();

// const name={firstname:"Aaron",lastname:"solomon"};
// const details={age:25};


// let fruits=["apple","banana","kiwi"]
// const arr=fruits.map(function(words){
// words;
// return words.toUpperCase();
// });
// console.log(fruits)
// console.log(arr)
// age=18
// age>=18?console.log("VE"):console.log("NE")

// let add=(x,y) => x+y;
// console.log(add(10,20));

// let names=['john','mac','peter'];
// let lengths=names.map(name=>name.length);
// console.log(lengths);



