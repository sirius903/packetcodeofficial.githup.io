document.getElementById("add-code-btn").addEventListener("click", function(){
    this.style.display = 'none';
    document.getElementById("add-code").style.display = 'flex';
})
document.getElementById("code-cancel").addEventListener("click", function(){
    document.getElementById("add-code-btn").style.display = '';
    document.getElementById("add-code").style.display = '';
})
