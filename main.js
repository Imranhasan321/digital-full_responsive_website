



window.onload = function digital_fn(){

    //toggle btn
    let toggle = document.querySelector("#nav .toogle-btn");
    let collapse = document.querySelector("#nav .collapse");
    toggle.addEventListener('click',function(event){
        //console.log(toggle)
        collapse.classList.toggle('active');
    }
    );


}
