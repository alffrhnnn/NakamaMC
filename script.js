
setTimeout(()=>{
document.getElementById('loader').classList.add('hidden')
},2500)

document.querySelectorAll('.box,.role').forEach(el=>{
el.addEventListener('mousemove',e=>{
const r=el.getBoundingClientRect()
el.style.transform=
`rotateX(${(e.clientY-r.top-100)/18}deg)
rotateY(${-(e.clientX-r.left-100)/18}deg)`
})
el.addEventListener('mouseleave',()=>{
el.style.transform=''
})
})
