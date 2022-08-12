// let userDetails=localStorage.getItem('userDetails')
// document.getElementById('userDetails').innerHTML=JSON.parse(userDetails).name

const groupList = document.getElementById("items") 
const token= localStorage.getItem('token')
const btn = document.querySelector('#btn')
let logoutBtn = document.querySelector('#logout')

btn.addEventListener("click", () => {
    nav.classList.toggle("active");
    btn.classList.toggle("active");
})


document.addEventListener('DOMContentLoaded', (e)=>{
    e.preventDefault()
    // setInterval(() => {
        axios.get('http://localhost:3000/getgroups',{headers:{"Authorization":token}})
    .then(res=>{
        
        console.log(res.data)

        let groups = res.data.groups
        console.log(groupList);
        if(groups.length>groupList.childElementCount)
        {
            groupList.innerHTML='';
            for(let i=0;i<groups.length;i++){

            let li = document.createElement("li")
            li.className = "list-group-item"

            li.innerHTML=` 
            <a href="../chatPage/chat.html?grpid=${groups[i].id}">
            ${groups[i].groupname}
            </a>
            <p id='created'>Created : ${groups[i].createdAt.slice(0,10)}</p>`

            groupList.appendChild(li)
        }

        }
        
        
        })
        
    // }, 1000);
    

})



logoutBtn.addEventListener('click', (e)=>{
    localStorage.clear()
    window.location.replace('../LoginPage/login.html')
})

const createGrpBtn = document.querySelector('.submit-btn')
const grpName = document.querySelector('#group')

createGrpBtn.addEventListener('click', (e)=>{   
    e.preventDefault()
    if(grpName.value == ''){
        grpName.placeholder = 'Please enter group name'
        grpName.classList.add('empty')
    }
    else{
        
        axios.post('http://localhost:3000/creategroup',{
            groupname:grpName.value
         },{
             headers:{"Authorization":token}
         }).then(ress=>{
             console.log(ress)
             location.reload();
         })
    }
})

// let filter = document.querySelector("#filter")

// filter.addEventListener("keyup", filterItems)

// function filterItems(e){
    
//     var text = e.target.value.toLowerCase()
//     //console.log(text)

//     // Get List
//     var items = document.querySelectorAll("li")
//     //console.log(items)

//     Array.from(items).forEach(item => {
//         var itemName = item.textContent
        
//         if(itemName.toLowerCase().indexOf(text) != -1){
//             item.style.display = "block"
//         }else{
//             item.style.display = "none"
//         }

//     });
// }