console.log("sa");
let userarr =[]
let user = document.querySelector(".input")
let div = document.querySelector(".container")
let sub = document.querySelector(".submit")
let form = document.querySelector(".form")
form.addEventListener("submit",(event)=>{
    sub.value = "Loading..."
    event.preventDefault()
    fetch(`https://api.github.com/users/${user.value}`)
    .then((res)=>{
        return res.json()
    })
    .then((re)=>{
    user.value = ""
    console.log(re);
    userarr.unshift(re)
    if(re.id){
        render()
}
else{
    alert("user Not found")
    userarr.shift()
    render()
}
})
.catch((err)=>{
    return err
})
.catch((er)=>{
    console.log(er);
})
.finally(()=>{
sub.value = "Chek User"
})
})
function render() {
    div.innerHTML=""
 userarr.map((item , i)=>{
    div.innerHTML += ` <div class="user">
         <div class="img">
             <img src="${item.avatar_url}" alt="">
         </div>
         <div class="item">
         <b class="bp"><h1>${item.name}</h1>
         <h5>${item.login}</h5>
         </b>
             <h2>Bio : ${item.bio}</h2>
             <h3>
                 <b class="b1">follower : <b class="bb1">${item.followers}</b></b>
                 <b class="b2">following : <b class="bb2">${item.following}</b></b>
             </h3>
             <h4>&#128338;${item.created_at}</h4>
             <h6 onclick="delet(${i})">&#128465;</h6>
         </div>
     </div>`
 })
}
function delet(ii){
    console.log(ii);
    
userarr.splice(ii , 1)
render()
}