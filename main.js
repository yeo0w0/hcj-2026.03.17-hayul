document.getElementById('time').innerHTML = new Date().toLocaleString()

function pink() {
  document.body.style.backgroundColor = 'pink'
}
function lightblue() {
  document.body.style.backgroundColor = 'lightblue'
}
function lightyellow() {
  document.body.style.backgroundColor = 'lightyellow'
}
function reset() {
  document.body.style.backgroundColor = 'linen'
}

function showhtml() {
  document.getElementById('fig').src = 'Html5.png'
  document.getElementById('desc').innerHTML =
    '<b>HTML</b>은 HyperText Markup Language의 약자로 웹 페이지를 만들 때 사용하는 언어입니다.'
}
function showcss() {
  document.getElementById('fig').src = 'Css3.png'
  document.getElementById('desc').innerHTML =
    '<b>CSS</b>는 Cascading Style Sheets의 약자로 웹 페이지의 스타일을 지정할 때 사용하는 언어입니다.'
}
function showjs() {
  document.getElementById('fig').src = 'JS.png'
  document.getElementById('desc').innerHTML =
    '<b>JavaScript</b>는 웹 페이지에 동적 기능을 추가할 때 사용하는 프로그래밍 언어입니다.'
}
function hide() {
  document.getElementById('fig').src = ''
  document.getElementById('desc').innerHTML = ''
}
