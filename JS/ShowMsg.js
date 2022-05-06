let infoMsg = document.getElementById("info_msg");
let ShowMsg = document.querySelector(".msg_info_parint");
let CloseMsg = document.getElementById("close_msg");


infoMsg.addEventListener('click', () => {
  ShowMsg.style.opacity= "1"
  ShowMsg.style.visibility= "visible"
})

CloseMsg.addEventListener('click', () => {
  ShowMsg.style.opacity= "0"
  ShowMsg.style.visibility= "hidden"
})