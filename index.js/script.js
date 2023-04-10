const emailInput = document.getElementById("email");
const submitBtn = document.querySelector("button[type='submit']");
 

submitBtn.addEventListener("click", function(event) {
  event.preventDefault(); 
  
  const email = emailInput.value;
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  
  if (!emailRegex.test(email)) {
    const errorMsg = document.getElementById("errortext");
    emailInput.insertAdjacentElement("afterend", errorMsg);
    errorMsg.style.display = 'block'
   }  
  else {
    document.querySelector("form").submit();
  }
});