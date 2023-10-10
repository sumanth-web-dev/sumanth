var p1 = "x" , p2='o';
var person1=[],person2=[];
var count=0;


// row=[6,15,24];

// col=[12,15,18];

// dia=15;
//var a=[[1,2,3],[1,2,4],[1,2,3]];

function fun(n){         
    if ( count%2==0){
        //person1.push(Int8Array(n));
        p1="X";
      
    }else{
        //person2.push(Int8Array(n));
        p1="O";
    }

    for (let i=0;i<person1.length;i++){
        for(let j=0;j<person2.length;j++)
        {

        }
    }
    document.getElementById(n).textContent=p1;
    document.getElementById(n).disabled=true;
    console.log(count) ;
    count+=1;  
}



