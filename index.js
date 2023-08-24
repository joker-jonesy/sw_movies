async function grabAll(){
    try{
        const response = await fetch("https://swapi.dev/api/films");
        const data = await response.json();
        // console.log(data.results);
        return data.results;
    }catch{
        console.log("error");
    }
}

async function grabOne(id){
    try{
        const response = await fetch("https://swapi.dev/api/films/"+id+"/");
        const data = await response.json();
        return data;
    }catch{
        console.log("error");
    }
}

function createElement(dt, idx){

    console.log(dt)

    this.element=document.createElement("div");

    this.title =document.createElement("h1");
    this.title.innerHTML=dt.title;
    this.release =document.createElement("h2");
    this.release.innerHTML=dt.release_date;

    this.element.addEventListener("click", function(){
        // typically youd grab the id from the object
        showOne(idx)
    })

    this.element.appendChild(this.title);
    this.element.appendChild(this.release);

    document.querySelector(".wrapper").appendChild(this.element);
}

function showAll(){
    document.querySelector(".wrapper").innerHTML=""
    grabAll().then(response=>{
        response.forEach((i, idx) =>{
            createElement(i,idx+1)
        })
    })
}

function showOne(id){
    document.querySelector(".wrapper").innerHTML=""
    grabOne(id).then(response=>{
        createElement(response)
    })
}

document.getElementById("all").addEventListener("click", function(){
    showAll();
})

showAll();