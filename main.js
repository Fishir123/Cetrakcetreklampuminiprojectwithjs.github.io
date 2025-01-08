function saklar(lamp){
   let lampu1 = document.getElementById('lampu1')
   let lampu2 = document.getElementById('lampu2')
   let lampu3 = document.getElementById('lampu3')
   // let toogle = document.querySelector("input.sr-only.peer")
   let toogle1 = document.getElementById('default-toogle1')
   let toogle2 = document.getElementById('default-toogle2')
   let toogle3 = document.getElementById('default-toogle3')

   // toogle.checked ? alert("nyala") : alert("mati")

   if (toogle1.checked){
      lampu1.src = "assets/img/on.gif"
   }else{
      lampu1.src = "assets/img/off.gif"
   }

   if (toogle2.checked){
      lampu2.src = "assets/img/on.gif"
   }else{
      lampu2.src = "assets/img/off.gif"
   }

   if (toogle3.checked){
      lampu3.src = "assets/img/on.gif"
   }else{
      lampu3.src = "assets/img/off.gif"
   }
}
