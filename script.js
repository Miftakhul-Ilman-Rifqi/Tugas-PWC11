//document.getElementById
const judul = document.getElementById('judul')
judul.style.color = 'blue';
judul.style.backgroundColor = '#ccc';
judul.innerHTML = 'Pemrograman Web Client'

//document.getElementByTagName
const p = document.getElementsByTagName('p')
const ul = document.getElementsByTagName('ul')
for (let i = 0; i < p.length; i++) {
    p[i].style.backgroundColor = 'lightblue';
}
for (let i = 0; i < ul.length; i++) {
    ul[i].style.color = 'red';
}

//document.getElementByClassName
const p4 = document.getElementsByClassName('p4')[0]
p4.style.color = 'blue';