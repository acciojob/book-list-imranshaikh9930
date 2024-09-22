//your JS code here. If required.
const titleVal = document.getElementById("title");
const authorVal = document.getElementById("author");
const isbnVal = document.getElementById("isbn");
const btn = document.getElementById("submit");
const tbody = document.getElementById("book-list");

btn.addEventListener("click",(e)=>{
	e.preventDefault();
    let temp = "";
    temp +=`<tr>
                <td>${titleVal.value}</td>
                <td>${authorVal.value}</td>
                <td>${isbnVal.value}</td>
                <td><button class="delete">X</button></td>
                </tr>`;

    console.log(tbody);

    tbody.innerHTML += temp;
	
})

const table = document.querySelector(".table-striped");

table.addEventListener("click",(e)=>{

    if(e.target && e.target.classList.contains("delete")){
        const row = e.target.closest("tr");
        row.remove();
    }

})

