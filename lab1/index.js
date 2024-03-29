

 const confirmRestart = (start) => {
    Swal.fire({
        title: 'Finished!',
        text: 'Do you want to count again?',
        type: 'question',
        showCancelButton: true,
        confirmButtonText: 'yes',
        cancelButtonText: 'No, stop!',
      }).then((result) =>{
          if(result.value){
              recursivePrint(start)
          }
        })
 }
 const wait = () => {
    return new Promise((resolve, reject) => {
        setTimeout(resolve, 300)
    })

 }

 const recursivePrint = (num , start = num) => {
     wait().then(() => {
         console.log(num );
         document.getElementById("counter").innerHTML = num;
         if(num > 0 ){
             return recursivePrint(num-1, start)
         }
         else{
            confirmRestart(start)
         }
     })
 }



 const printList = (bound) => {
    for(let i = 0; i<= bound; i++){
        const ul = document.getElementById("numList");
        const li = document.createElement("li");
        li.appendChild(document.createTextNode((bound-i)));
        ul.appendChild(li);
    }
 }


//printList(35);
recursivePrint(25);