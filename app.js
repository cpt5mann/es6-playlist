const POPCONT = document.querySelector("#popcont")
const ACACONT = document.querySelector("#acacont")
const popbtn=document.querySelector("#popbtn");
const acabtn= document.querySelector("#acabtn");

popbtn.addEventListener("click", function(){
const popfil= data.filter(songs => {
return songs.genre === "Pop";
})
.map(songs => {
return `
<div id="indivcont">
<h1> ${songs.song} </h1>
<div> Artist: ${songs.artist}</div> 
<div> Genre:${songs.genre}</div>
<img src="${songs.image}">
</div>

`;
})
.join('')

POPCONT.innerHTML= popfil;
});


acabtn.addEventListener("click", function(){
    const acafil= data.filter(songs => {
    return songs.genre === "Acapella";
    })
    .map(songs => {
    return `
    <div id="indivcont">
    <h1> ${songs.song} </h1>
    <div>Artist:${songs.artist}</div>
    <div> Genre:${songs.genre}</div>
    <img src="${songs.image}">
    </div>
    `;
    })
    .join('')
    
    POPCONT.innerHTML= acafil;
    });




