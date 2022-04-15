document.getElementById('password').addEventListener('input', enableSubmit)
document.getElementById('confirm_password').addEventListener('input', enableSubmit)

document.getElementById('submit').onclick = function() {
    if(document.getElementById('password').value !=
    document.getElementById('confirm_password').value){
        this.disabled = true
        document.getElementById('message').textContent="passwords not matching"
    }
}

function enableSubmit() {
    document.getElementById('submit').disabled = false
}