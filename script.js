function func1(){
    let n=prompt('Введите почту:')
    alert('Форма заказа отправлена на почту: ' + n)
}
window.onscroll = function() {myFunction()};

function myFunction() {
  if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
    document.querySelector(".ik").style.position = "fixed";
    document.querySelector(".ik").style.display = "inline-block";
  } else {
    document.querySelector(".ik").style.position = "absolute";
    document.querySelector(".ik").style.display = "none";
  }
}