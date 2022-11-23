let namep = prompt('ismingiz')
let surnamep = prompt('familiyangiz')
let agep = Number(prompt('yoshingiz'))
let javob = {
	name: namep,
	surname: surnamep,
	age: agep
}

if (agep < 16) {
	javob.age = 'maktab uquvchisi' 
}else if (agep >= 18 ) {
	javob.age = 'pasport olgan'
}
if (agep >= 19 && agep <=25) {
	javob.age = 'institutda uqiyapdi'
}else if (agep >=25 && agep <=30) {
	javob.age = 'xaqiqiy erkak'
}
if (agep >=30 && agep <= 50) {
	javob.age = 'qariy boshladi'
}else if (agep>=50 && agep <=80) {
	javob.age = 'qari'
}
console.log(javob)
//svetofor
let rang = prompt('yashil,sariq va qizil rang laridan birini kiriting')
let rangjav = 0
if (rang === 'yashil') {
	rangjav = 'sariq'
	console.log(rangjav)
}else if (rang === 'sariq') {
	rangjav = 'qizil'
	console.log(rangjav)
}
if (rang === 'qizil') {
	rangjav = 'yashil'
	console.log(rangjav)
}

