// // // alert("hello");

// // // function hello(name="shantanu"){
// // //     console.log("Hello World " + name);
// // // }

// // // hello();

// // // function addNum(a=9 , b){
// // //     console.log(a + b);
// // // }

// // // addNum(6);

// // //  function formal(name="sam" , title='sir'){
// // //     // console.log(title + " " + name);
// // //     return name +" "+ title;
// // //  }

// // // //  formal();
// // // console.log(formal());


// // // function timesFive(num){
// // //     return num*5;
// // // }

// // function addAwesome(name){
// //     console.log(name+" is awesome!");
// // }

// // var topic=["python" , "Javascript", "Django"];

// // topic.forEach(addAwesome);




// var roster=[];

// function addNew(){
//     var newName = prompt("What name would you like to add");

//     roster.push(newName);
// }

// function remove(){
//     var remName = prompt("What  name would you like to remove? ");
//     var index=roster.indexOf(remName);
//     roster.splice(index,1);
// }

// function display(){
//     console.log(roster);
// }


// var start = prompt("Would you like to start the roster web app? "+  "y/n");

// var request = "empty";

// if(start=='y'){
//     while(request!=="quit"){
//         request= prompt("Please select an action : add,remove,display , or quit.");

//         if(request ==='add'){
//             addNew();
//         }
//         else if(request==='display'){
//             display();
//         }
//         else if(request==='remove'){
//             remove();
//         }
//         else{
//             alert("Not recognised");
//         }
//     }
// }

// // alert("Thanks for using the web app");