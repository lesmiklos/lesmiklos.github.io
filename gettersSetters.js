console.log('----------Getters & Setters-----------');

const person = {
    firstName: '',
    lastName: '',
    title: '',

    get fullName(){                                                                                                //this the 'getter'. Will allow us to access object properties
        return `${person.firstName} ${person.lastName} ${person.title}` 
    }, 
    set fullName(value){                                                                                          // this is the setter. Allows us to modify object properties.
        const parts = value.split(' ');  // to insert a space between elements, note that # of spaces affects split point
        this.firstName = parts[0];       // an array with 'firstname' space 'lastname'
        this.lastName = parts[1];
        
    }
};

person.fullName ='John Baptist';


console.log(person);
console.log(person.fullName);



window.onload = function() {

    document.querySelector("#callback-btn")
        .addEventListener('click', function(){
        console.log("User Has Clicked The Button")
        document.getElementById("UserClickNotice").innerHTML = "User clicked the button at least once";
        
        
    });
    
    
    
    document.getElementById("FirstParagraph").innerHTML = person.fullName;
    
    
    } 


    
    