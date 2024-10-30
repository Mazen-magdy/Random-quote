//          requesting data from a server
let qu = document.getElementById('qouate')
let au = document.getElementById('author')
//  function requestingForAQuoate (){
function GetAQuate (){fetch("https://api.api-ninjas.com/v1/quotes?category=happiness").then((done)=>{
    console.log(done)
    let data = done.json()
    return data
}).then((data) =>{
    let  r = Math.trunc(Math.random(0,15) *15 )
    console.log(r)
    let text = data[r].text;
    qu.textContent = text;
    let creator = data[r].author;
    au.textContent = creator;
}).catch((err) =>{
    qu.textContent = "An error occured With the request"
})
}
GetAQuate ()
//        Reapeating the request
let but = document.getElementById('right-side')
but.addEventListener('click', ()=> {
     GetAQuate();
})