const massi=document.getElementById("mass")
const height=document.getElementById("height")
const result=document.getElementById("result")
const validateInput=()=>{
    if(massi.value==""){
    alert("please provide mass")
    return false
    }
    if(height.value==""){
        alert("please provide mass")
        return false
        }
        return true
}

const bmi=() =>{
        

    const mass=parseFloat(massi.value)
    const height=parseFloat(height.value)

   
   
    const bmi=mass/(height/100)**2
   if(bmi<18.5){
       alert('u are under weight')
   }else if(bmi<25){
       alert('u are normal bmi')
   }else if (bmi<30) {
       alert('u r over weight') 
   }else{
       alert("u are over obese")
   }
       
   
           }
           bmi();