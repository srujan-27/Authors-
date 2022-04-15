
fetch('https://api.quotable.io/authors?slug=albert-einstein|abraham-lincoln').then((data)=>{
    //console.log(data);
    return  data.json();
}).then((completedata)=>{
    //console.log(completedata.results);
    //document.getElementById("root").innerHTML=completedata.results[2].name;
    let data1="";
    completedata.results.map((values)=>{
        data1+=
        `
        <h3><a href="${values.bio}">${values.name}</a><h3/>   
        `

    });
    document.getElementById("pslug").innerHTML=data1;

}).catch((err)=>{
    console.log(err);
})