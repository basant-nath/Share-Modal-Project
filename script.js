
const btn1=document.querySelector('.btn-1');
const modal=document.querySelector('.modal');

const overlay=document.querySelector('.overlay')

const closebtn=document.querySelector('.close-btn')

// closebtn.addEventListener('click',()=>{
//     // console.log("close clicked ");
//     let store=modal.style.display='none'
//     // return store
// })



function allSet(){

    btn1.addEventListener('click',(e)=>{
        e.stopPropagation()
    openModal()
    })
    
    closebtn.addEventListener('click',(e)=>{
    e.stopPropagation()
        closeModal()
    })
    
    overlay.addEventListener('click',function(e){
    closeModal()
    })



function openModal(){

    modal.style.opacity='1'
    //  modal.style.transfrom='scale(1)'
     overlay.style.opacity='1'

}

function closeModal(){
    modal.style.opacity='0'
    overlay.style.opacity='0'
}


}
  



allSet()


