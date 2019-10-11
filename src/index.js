module.exports = function check(str, bracketsConfig) {
  // your solution
  var str =str;
  var list=str.split('');
  var arr=[];
   var stack = [];
   
    for (let i =0; i< list.length ; i++) {
      if (list[i]=='(') {
       stack.push(list[i]);   
       }
      if (list[i]=='[') {
            stack.push(list[i]);   
         }    
      if (list[i]=='{') {
          stack.push(list[i]);   
       }   
      if (list[i]=='|') {
        stack.push(list[i]);   
     } 
         
     if (list[i]==')'){
       if(stack[i-1]=='(') {
       
            var j = stack.pop();
            list.splice(i, 1); 
            list.splice(i-1, 1); 
               i=0;
         }
  
      }
      if (list[i]==']'){
        if(stack[i-1]=='[') {
               
             var j = stack.pop();
             list.splice(i, 1); 
             list.splice(i-1, 1); 
           
           i=-2; 
          }
        
       }
       if (list[i]=='}'){
        if(stack[i-1]=='{') {
               
             var j = stack.pop();
             list.splice(i, 1); 
             list.splice(i-1, 1); 
             i=-2; 
          }
       }
       if (list[i]=='|'){
        if(stack[i-1]=='|') {
             
             var j = stack.pop();
             list.splice(i, 1); 
             list.splice(i-1, 1); 
             i=-2; 
          }
       }  
      
        
    }
  
    if (Array.isArray(list) && list.length) {
    var a=false;
       } 
  else {
        var a=true;
  }
        return a;
  }
