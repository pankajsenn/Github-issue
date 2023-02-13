let currentpage = 1;
if(currentpage === 1){
  fetch(`https://api.github.com/repositories/1296269/issues?page=1&per_page=5`).then(res=>res.json()).then(data=>{
    data.map(issue=>{
      document.getElementById("issues").innerHTML += `<li>${issue.title}</li>`
    })
  }).catch(err=>console.log(err));
}
function loadprev(){
    if(currentpage>1){
    currentpage = currentpage-1;
    let url = `https://api.github.com/repositories/1296269/issues?page=${currentpage}&per_page=5`
    document.getElementById("issues").innerText = "";
    fetch(url).then(res=>res.json()).then(data =>{
    document.getElementById("heading").innerText = `Page ${currentpage}`
    data.map(issue=>{
      document.getElementById("issues").innerHTML += `<li>${issue.title}</li>`
    })
    }).catch(err=>console.log(err));
    }
}
function loadnext(){
    currentpage = currentpage+1;
    let url = `https://api.github.com/repositories/1296269/issues?page=${currentpage}&per_page=5`
    document.getElementById("issues").innerText = "";
    fetch(url).then(res=>res.json()).then(data =>{
    document.getElementById("heading").innerText = `Page-${currentpage}`
    data.map(issue=>{
      document.getElementById("issues").innerHTML += `<li>${issue.title}</li>`
    })
    }).catch(err=>console.log(err));
}