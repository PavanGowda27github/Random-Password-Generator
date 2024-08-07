var password=document.getElementById('password')
function genPassword() {
    var chars="0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*()ABCDERFGHIJKLMNOPQRSTUVWXYZ"
    var passwordLength=12;
    var password=""
    for(var i=0;i<=passwordLength;i++){
        var randomNumber=Math.floor(Math.random()*chars.length)
        // console.log(randomNumber)
        password +=chars.substring(randomNumber,randomNumber+1)
    }
    document.getElementById('password').value=password
}
function copyPassword(){
    var copyText=document.getElementById('password')
    copyText.select()
    copyText.setSelectRange(0,999)
    document.execommand("copy")

}