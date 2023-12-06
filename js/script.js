const alas = document.getElementById('alas')
const tinggi = document.getElementById('tinggi')
const hitung = document.getElementById('hitung')
const output = document.getElementById('output')
const reset = document.getElementById('reset')
hitung.addEventListener('click', function () {
    let a = alas.value
    let t = tinggi.value
    let l = 0.5*a*t
    output.innerHTML = `Luas segitiga dari alas ${a} cm dan tiggi ${t} cm adalah ${l} cm2`
})
reset.addEventListener("click", function () {
    alas.value = "";
    tinggi.value = "";
    output.innerHTML = "";
});
const s1 = document.getElementById('s1')
const s2 = document.getElementById('s2')
const s3 = document.getElementById('s3')
const hitung2 = document.getElementById('hitung2')
const output2 = document.getElementById('output2')   
const reset2 = document.getElementById('reset2')   
hitung2.addEventListener('click', function () {
    let x = s1.value
    let y = s2.value
    let z = s3.value
    let k = (parseInt(x)+parseInt(y)+parseInt(z))
    output2.innerHTML = `Keliling segitiga dari sisi1= ${x} cm dan sisi2= ${y} cm dan sisi3= ${z} adalah ${k} cm`
})
reset2.addEventListener("click", function () {
    s1.value = "";
    s2.value = "";
    s3.value = "";
    output2.innerHTML = "";
});