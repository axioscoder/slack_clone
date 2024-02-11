const cli=document.querySelector("#dropdown")
const menuu=document.querySelector("#menubar")
const wide=document.getElementById("wide")

cli.addEventListener("click",()=>{
    menuu.classList.toggle('hide');
})
 
document.addEventListener("scroll",(dets)=>{
    let header=document.querySelector("#main")
    let screen_height=window.innerHeight;
    let qw=window.scrollY
    header.classList.toggle("sticky",window.scrollY >screen_height/2);
})
/*document.addEventListener("click",function(event){
    const cli1=document.querySelector(".f1")
    const menu1=document.querySelector("#menubar1")
    if(!menu1.contains(event.target)){
        menu1.style.display='none';
    }
        


})
const cli1=document.querySelector(".f1")
cli1.addEventListener("click",()=>{
    menu1.style.display=(menu1.style.display=="block")? "none":"block"
})*/


 const cli1=document.querySelector(".f1")
 const menu1=document.querySelector("#menubar1")

 cli1.addEventListener("click",()=>{
    menu1.classList.toggle("hide1");
    })

 /*window.addEventListener("click",()=>{
    // menu1.classList.toggle("disappear");
    menu1.style.opacity='0';
 })*/
 //hiding dropdown upon clicking outside


 setTimeout(function(){
    let ab=document.querySelector(".bodyy")
    ab.style.display="none";
 },4000)


