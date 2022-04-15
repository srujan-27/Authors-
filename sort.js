fetch(' https://api.quotable.io/authors?sortBy=name').then((data)=>{
    //console.log(data);
    return  data.json();
}).then((completedata)=>{
    //console.log(completedata.results);
    //document.getElementById("root").innerHTML=completedata.results[2].name;
    let data1="";
    completedata.results.map((values)=>{
        data1+=
        `
        <h4><a href="${values.bio}">${values.name}</a><h4/>   
        `

    });
    document.getElementById("ss").innerHTML=data1;

}).catch((err)=>{
    console.log(err);
})
