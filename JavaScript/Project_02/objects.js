// alert('hello');

var carInfo = {
    make : "Toyota",
    year : 1990,
    model : "Camry",

    // carAlert: 
};

var myNewO = {
    a: "hello",
    b: [1,2,3],
    c: {
        inside: ['a','b']
    }
};

var simple = {
    prop : "Hello",
    myMethod : function(){
        console.log("The myMethod Was called")
    }
};


var myObj={
    name: "SHantanu",
    greet: function(){
        console.log("Hello " + this.name);
    },
};

var employee ={
    name: "SHantanu Mapari",
    job: "Programmer",
    age: 31,
    nameLength: function(){
        console.log(this.name.length);
    },

    report: function(){
        alert("Name is "+ this.name+" , Job is: "+this.job+" , Age is: "+this.age);
    },

    lastName: function(){
        console.log(this.name.split(" ")[1]);
    }
};