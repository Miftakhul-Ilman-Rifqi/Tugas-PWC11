//document.getElementById
const judul = document.getElementById('judul')
judul.style.color = 'blue';
judul.style.backgroundColor = '#ccc';
judul.innerHTML = 'Pemrograman Web Client'

//menambahkan tag p
const paragraf = document.createElement('p')
const text = document.createTextNode('Bab Baru')
const box = document.getElementById('a')
paragraf.appendChild(text)
box.appendChild(paragraf)

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

//menambahkan list baru
const para = document.createElement("li")
const t = document.createTextNode("Sub Bab Baru")
para.appendChild(t)

//memindahkan list baru tadi ke tempat yang diinginkan
const list = document.getElementById("p5")
list.insertBefore(para, list.childNodes[2])
