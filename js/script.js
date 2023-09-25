function clicar(num){
    let numero = document.querySelector('#res').innerHTML 
    res.innerHTML = numero + num
    
}
function clean(){
    document.querySelector('#res').innerHTML = ''
}
function black(){
    let res = document.querySelector('#res').innerHTML;
    document.querySelector('#res').innerHTML = res.substring(0,res.length -1)
    
}
function calcular(){
    let res = document.querySelector('#res').innerHTML;
    if(res){
        document.querySelector('#res').innerHTML = eval(res)
    }
   
    
}