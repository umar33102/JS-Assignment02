document.getElementById("concatenateSomeString").onclick=function(){
    let name="Umar";
    let message="God day";
    let banger="!"
    let ouput=message+"  "+name+"  "+banger
    document.getElementById("statement").innerHTML="let name='Umar';<br>let message='God day';<br>let banger='!'"
    document.getElementById("output").innerHTML=ouput
}
document.getElementById("askNameFromUser").onclick=function(){
    document.getElementById("statement").innerHTML=""
    document.getElementById("output").innerHTML=""
    let firstName=prompt("Enter your first name")
    let lastName=prompt("Enter your last name")
    let fullName=firstName+" "+lastName
    document.getElementById("statement").innerHTML='let firstName=prompt("Enter your first name")<br>let lastName=prompt("Enter your last name")<br>let fullName=firstName+" "+lastName'
    document.getElementById("output").innerHTML=fullName
}
document.getElementById("comparsionOperator").onclick=function(){
    document.getElementById("statement").innerHTML=""
    document.getElementById("output").innerHTML=""
    let num1=+prompt("Enter the number 1:")
    let num2=+prompt("Enter the number 2:")
    if (num1===num2){
        console.log("Both number is Equal:")
        document.getElementById("statement").innerHTML='let num1=+prompt("Enter the number 1:")<br>let num2=+prompt("Enter the number 2:")'
        document.getElementById("output").innerHTML="Both number is Equal:"
    }else if(num1>num2){
        console.log("Number: 1 is greater")
        document.getElementById("statement").innerHTML='let num1=+prompt("Enter the number 1:")<br>let num2=+prompt("Enter the number 2:")'
        document.getElementById("output").innerHTML="Number: 1 is greater"
    }else if(num1<num2){
        console.log("Number: 2 is greater")
        document.getElementById("statement").innerHTML='let num1=+prompt("Enter the number 1:")<br>let num2=+prompt("Enter the number 2:")'
        document.getElementById("output").innerHTML="Number: 2 is greater:"
    }else{
        console.log("Please enter the number")
        document.getElementById("statement").innerHTML='let num1=+prompt("Enter the number 1:")<br>let num2=+prompt("Enter the number 2:")'
        document.getElementById("output").innerHTML="Please enter the number"
    }
}


document.getElementById("ifElseIf").onclick=function(){
    document.getElementById("statement").innerHTML=""
    document.getElementById("output").innerHTML=""
    let score=+prompt("Enter Your Score: ")
    if (score>=90){
        console.log("Your Grade is A")
        document.getElementById("statement").innerHTML='let score=+prompt("Enter Your Score: ")'
        document.getElementById("output").innerHTML="Your Grade is A"
    }else if(score>=80){
        console.log("Your grade is B")
        document.getElementById("statement").innerHTML='let score=+prompt("Enter Your Score: ")'
        document.getElementById("output").innerHTML="Your Grade is B"
    }else if(score>=70){
        console.log("Your grade is C")
        document.getElementById("statement").innerHTML='let score=+prompt("Enter Your Score: ")'
        document.getElementById("output").innerHTML="Your Grade is C"
    }else if(score>=60){
        console.log("Your grade is D")
        document.getElementById("statement").innerHTML='let score=+prompt("Enter Your Score: ")'
        document.getElementById("output").innerHTML="Your Grade is D"
    }else{
        console.log("Your grade is F")
        document.getElementById("statement").innerHTML='let score=+prompt("Enter Your Score: ")'
        document.getElementById("output").innerHTML="Your Grade is F"
    }
}



document.getElementById("testingSetOfCondition").onclick=function(){
    document.getElementById("statement").innerHTML=""
    document.getElementById("output").innerHTML=""
    let character=prompt("Enter any character: ")
    if((character>='A') && (character<='Z')){
        document.getElementById("statement").innerHTML='let character=prompt("Enter any character: ")'
        console.log("Upper Case: ",character)
        document.getElementById("output").innerHTML="Upper Case Charater"
    }else if ((character>='a') && (character<='z')) {
        document.getElementById("statement").innerHTML='let character=prompt("Enter any character: ")'
        console.log("lower Case: ",character)
        document.getElementById("output").innerHTML="Lower Case Charater"
    }else if((character>='0') && (character<='9')){
        document.getElementById("statement").innerHTML='let character=prompt("Enter any character: ")'
        console.log("Number: ",character)
        document.getElementById("output").innerHTML="You Enter Number"
    }else{
        document.getElementById("statement").innerHTML='let character=prompt("Enter any character: ")'
        console.log("Symbol: ",character)
        document.getElementById("output").innerHTML="You Enter Symbol"
    }
}



document.getElementById("ifStatementNested").onclick=function(){
    document.getElementById("statement").innerHTML=""
    document.getElementById("output").innerHTML=""
    let a=+prompt("Enter the first number:")
    let b=+prompt("Enter the second number:")
    let c=+prompt("Enter the third number:")
    if (a==b){
        if(a==c){
            console.log("All Numbers are Equal:")
            document.getElementById("statement").innerHTML='let a=+prompt("Enter the first number:")<br>let b=+prompt("Enter the second number:")<br>let c=+prompt("Enter the third number:")'
            document.getElementById("output").innerHTML='"All Numbers are Equal:"'
        }else{
            console.log("All Numbers are Different:")
            document.getElementById("statement").innerHTML='let a=+prompt("Enter the first number:")<br>let b=+prompt("Enter the second number:")<br>let c=+prompt("Enter the third number:")'
            document.getElementById("output").innerHTML='"All Numbers are Different:"'
            
        }
        
    }else{
        console.log("All Numbers are Different:")
        document.getElementById("statement").innerHTML='let a=+prompt("Enter the first number:")<br>let b=+prompt("Enter the second number:")<br>let c=+prompt("Enter the third number:")'
        document.getElementById("output").innerHTML='"All Numbers are Different:"'

    }
}


document.getElementById("login").onclick=function(){
    document.getElementById("statement").innerHTML=""
    document.getElementById("output").innerHTML=""
    let fullName=prompt("Please Enter Your Name:")
    if (fullName==="Umar Hayat"){
        let password=+prompt("Please Enter Your Password:")
        if(password==123){
            document.getElementById("statement").innerHTML='let password=+prompt("Please Enter Your Password:")'
            console.log("Successfully Login")
            document.getElementById("output").innerHTML="Successfully Login"
        }else{
            console.log("Wrong Password")
            document.getElementById("statement").innerHTML='let password=+prompt("Please Enter Your Password:")'
            document.getElementById("output").innerHTML="Wrong Password"        
        }
    }else{
        console.log("Wrong UserName")
        document.getElementById("statement").innerHTML='let password=+prompt("Please Enter Your Password:")'
    document.getElementById("output").innerHTML="Wrong UserName"
    }
}