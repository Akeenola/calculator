let holder1 = 0;
let holder2 = 0;
let result = "";
let op = "";
let concatenate = "";
let operate= false;
let status = 0;
let activePoint = false;
let signed = false;

function showZero(){
    signed = true;
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
    signed = true;
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
    signed = true;
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
    signed = true;
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
    signed = true;
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
    signed = true;
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
    signed = true;
    var board = document.getElementById("display");
    
    
    if(operate==false){
        concatenate=concatenate+"6";
        board.value=concatenate;
        holder1 = Number(board.value)
    }
        
    else{
        concatenate=concatenate+"6";
        board.value=concatenate;
        holder2 = Number(board.value)
    }
        
   // operate(op,Number(board.value));
   // alert("Answer is "+holder);
}
function showSeven(){
    signed = true;
    var board = document.getElementById("display");
    
    
    if(operate==false){
        concatenate=concatenate+"7";
        board.value=concatenate;
        holder1 = Number(board.value)
    }
        
    else{
        concatenate=concatenate+"7";
        board.value=concatenate;
        holder2 = Number(board.value)
    }
        
   // operate(op,Number(board.value));
   // alert("Answer is "+holder);
}
function showEigth(){
    signed = true;
    var board = document.getElementById("display");
    
    
    if(operate==false){
        concatenate=concatenate+"8";
        board.value=concatenate;
        holder1 = Number(board.value)
    }
        
    else{
        concatenate=concatenate+"8";
        board.value=concatenate;
        holder2 = Number(board.value)
    }
        
   // operate(op,Number(board.value));
   // alert("Answer is "+holder);
}
function showNine(){
    signed = true;
    var board = document.getElementById("display");
    
    
    if(operate==false){
        concatenate=concatenate+"9";
        board.value=concatenate;
        holder1 = Number(board.value)
    }
        
    else{
        concatenate=concatenate+"9";
        board.value=concatenate;
        holder2 = Number(board.value)
    }
        
   // operate(op,Number(board.value));
   // alert("Answer is "+holder);
}
function showPoint(){
    
    var board = document.getElementById("display");
    
    
    if(activePoint==false){
        if(concatenate==""){
            concatenate="0."+concatenate;
            board.value= concatenate;
            activePoint = true;

        }
            
        else {
            concatenate=concatenate+".";
             board.value=concatenate;
            holder1 = Number(board.value)
            activePoint = true;
        }
        
    }
        
    /*else{
        concatenate=concatenate+"9";
        board.value=concatenate;
        holder2 = Number(board.value)
    }*/
        
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
        if(val2 ==0)
            holder1 = "Math Error";
        else
            holder1 = val1/val2
}
function add(){
    var board = document.getElementById("display");
  //  result = board.value + " + "
    //alert("Mee" + holder);
    
    op="add";   
    operate= true; 
    concatenate="";
    activePoint = false;
    //operate(op,Number(board.value));
    //board.value= holder;
    
}
function minus(){
    var board = document.getElementById("display");
   // result = board.value + " - "
    //alert("Mee" + result);
   // board.value= result;
   if(signed==false){//allow signed value operation
         concatenate="-"+concatenate;
         board.value = concatenate
         signed = true;
   }
        
    else{
        if(board.value =="-")
            board.value = "Invalid Operation";
        else{
            op="minus"; 
            operate= true; 
            concatenate="" ;
            activePoint= false;
        }
    }
    
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
    concatenate="";
    activePoint = false;
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
    activePoint=false;
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
    activePoint=false;



}
