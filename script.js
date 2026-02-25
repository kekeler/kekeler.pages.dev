document.querySelectorAll(".socials span")
.forEach(e=>{
e.addEventListener("mouseover",()=>{
e.style.boxShadow="0 0 15px white";
});

e.addEventListener("mouseout",()=>{
e.style.boxShadow="none";
});
});
