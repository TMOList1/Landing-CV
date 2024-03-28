

function show(id) {
	document.getElementById(id).style.display = 'block';

}

function hide(id) {
	document.getElementById(id).style.display = 'none';

}

function toggle(id) {
	if (document.getElementById(id).style.display == 'block') {
		document.getElementById(id).style.display = 'none';
		document.getElementById('borg').style.transform = "rotate(0deg) scale(1)";
	} else {
		document.getElementById(id).style.display = 'block';
		document.getElementById('borg').style.transform = "rotate(270deg) scale(1.2)";
	}

}

window.addEventListener('resize', block);

function block() {

	if (document.documentElement.clientWidth > 800) {
		document.getElementById('navbar').style.display = 'block';
	}
	else {
		document.getElementById('navbar').style.display = 'none';
	}

}

let schet = 0;
let discription = [
	"Блочный алгоритм шифрования CAST-128 с возможностью кодирования и декодирования как текста, так и изображений. Реализован на С++.",
	"Простой чат с ручным обновлением, поддерживающий несколько пользователей с возможностью авторизации, работающий на сервлетах Java (на изображении часть интерфейса).", "Командный проект: Настольный радар с областью обнаружения в пределах полутора метра, графическим отображением при помощи Processing, звуковым оповещением, а также отправкой Telegram-уведомлений авторизованным пользователям. Собран на базе Arduino."
]

function setProject(num) {
	schet = num;
	let photo = document.getElementById("photoM");
	photo.src = "img/projects/" + (schet) + "0.jpg";
	document.getElementById('info').innerHTML = discription[schet];
}

function leftbut() {
	if (schet > 0) {
		schet--;
	}
	else
		schet = 2;
	let photo = document.getElementById("photoM");
	photo.src = "img/projects/" + (schet) + "0.jpg";
	document.getElementById('info').innerHTML = discription[schet];
}

function rightbut() {
	if (schet < 2) {
		schet++;
	}
	else{
		schet = 0;
	}
	let photo = document.getElementById("photoM");
	photo.src = "img/projects/" + (schet) + "0.jpg";
	document.getElementById('info').innerHTML = discription[schet];
}

// const card = document.querySelector('.cdiv');
// card.addEventListener('mousemove', rotate);

// function rotate(event) {
// 	const curPhoto = this.querySelector('.projects');
// 	console.log(event);
// }

function formAction(){
  let email = document.getElementById('emailfield').value;
  let text = document.getElementById('textfield').value;
  alert("your email: " + email + "\n your message: " + text + "\n was successfully send.")
}