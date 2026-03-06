const ctx = document.getElementById("grafico")

new Chart(ctx,{

type:"bar",

data:{

labels:["Combustível","Manutenção"],

datasets:[{

label:"Custos",

data:[5000,2500]

}]

}

})
