const b1 = document.getElementById("four");


let holder1 = 0;
let holder2 = 0;
let holder = 0;
let result = "";
let op = "";
let concatenate = "";
let operate= false;
let status = 0
function showZero(){
    var board = document.getElementById("display");
    
    if(operate==false){
        concatenate=concatenate+"0";
        board.value=concatenate;
        holder1 = Number(board.value)
    }else{
        concatenate=concatenate+"0";
        board.value=concatenate;
        holder2 = Number(board.value)
    }
        

   // operate(op,Number(board.value))
   // holder =holder+ 4;
       
}
function showOne(){
    var board = document.getElementById("display");
    
    if(operate==false){
        concatenate=concatenate+"1";
        board.value=concatenate;
        holder1 = Number(board.value)
    }
    else{
        concatenate=concatenate+"1";
        board.value=concatenate;
        holder2 = Number(board.value)
    }
        
   // operate(op,Number(board.value))
   // holder =holder+ 4;
       
}
function showTwo(){
    var board = document.getElementById("display");
    
    if(operate==false){
    concatenate=concatenate+"2";
    board.value=concatenate;
        holder1 = Number(board.value)
    }
    else{
        concatenate=concatenate+"2";
        board.value=concatenate;
        holder2 = Number(board.value)
    }
        
    //operate(op,Number(board.value))
   // holder =holder+ 4;
       
}
function showThree(){
    var board = document.getElementById("display");
    
    if(operate==false){
        concatenate=concatenate+"3";
        board.value=concatenate;
        holder1 = Number(board.value)
    }else{
        concatenate=concatenate+"3";
        board.value=concatenate;
        holder2 = Number(board.value)
    }
        
    //operate(op,Number(board.value))
   // holder =holder+ 4;
       
}

function showFour(){
    var board = document.getElementById("display");
    
    if(operate==false){
        concatenate=concatenate+"4";
        board.value=concatenate;
        holder1 = Number(board.value)
    }
    else{
        concatenate=concatenate+"4";
        board.value=concatenate;
        holder2 = Number(board.value)
    }
        
    //holder =holder+ 4;
    
   // operate(op,Number(board.value));
}
function showFive(){
    
    var board = document.getElementById("display");
    
    
    if(operate==false){
        concatenate=concatenate+"5";
        board.value=concatenate;
        holder1 = Number(board.value)
    }else{
        concatenate=concatenate+"5";
        board.value=concatenate;
        holder2 = Number(board.value)
    }
        
   // operate(op,Number(board.value));
   // alert("Answer is "+holder);
}
function showSix(){
    
    var board = document.getElementById("display");
    
    concatenate=concatenate+"6";
    board.value=concatenate;
    if(operate==false)
        holder1 = Number(board.value)
    else
        holder2 = Number(board.value)
   // operate(op,Number(board.value));
   // alert("Answer is "+holder);
}
function showSeven(){
    
    var board = document.getElementById("display");
    
    concatenate=concatenate+"7";
    board.value=concatenate;
    if(operate==false)
        holder1 = Number(board.value)
    else
        holder2 = Number(board.value)
   // operate(op,Number(board.value));
   // alert("Answer is "+holder);
}
function showEigth(){
    
    var board = document.getElementById("display");
    
    concatenate=concatenate+"8";
    board.value=concatenate;
    if(operate==false)
        holder1 = Number(board.value)
    else
        holder2 = Number(board.value)
   // operate(op,Number(board.value));
   // alert("Answer is "+holder);
}
function showNine(){
    
    var board = document.getElementById("display");
    
    concatenate=concatenate+"9";
    board.value=concatenate;
    if(operate==false)
        holder1 = Number(board.value)
    else
        holder2 = Number(board.value)
   // operate(op,Number(board.value));
   // alert("Answer is "+holder);
}
function operation(op,val1,val2){
    if(op=="add")
        holder1 = val1+val2;
    else if(op=="minus")
        holder1 = val1-val2
    else if(op=="times")
        holder1 = val1*val2
    else if(op=="divide")
        holder1 = val1/val2
}
function add(){
    var board = document.getElementById("display");
  //  result = board.value + " + "
    //alert("Mee" + holder);
    
    op="add";   
    operate= true; 
    concatenate="";
    //operate(op,Number(board.value));
    //board.value= holder;
    
}
function minus(){
    var board = document.getElementById("display");
   // result = board.value + " - "
    //alert("Mee" + result);
   // board.value= result;
    op="minus"; 
    operate= true; 
    concatenate="" ;
   // operate(op,Number(board.value));
   // board.value= holder; 
    
}
function times(){
    var board = document.getElementById("display");
   // result = board.value + " - "
    //alert("Mee" + result);
   // board.value= result;
    op="times";  
    operate= true; 
    //operate(op,Number(board.value));
    //board.value= holder; 
    
}
function divide(){
    var board = document.getElementById("display");
   // result = board.value + " - "
    //alert("Mee" + result);
   // board.value= result;
    op="divide";   
    operate= true;
    concatenate="";
    //operate(op,Number(board.value));
    //board.value= holder; 
    
}
function equals(){
    //if(ops=="add")
    var board = document.getElementById("display");
    //board.value= holder;
    //result = holder;
   // alert("New result stored is "+result);
    operation(op,holder1,holder2);
    board.value= holder1;
    operate= false;
    concatenate="";



}
