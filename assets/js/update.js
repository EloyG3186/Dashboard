let runScripts = () => {

    let chart_bars, icons, cards;

    chart_bars = document.getElementById("chart-bars");
    console.log("ELEMENTOS POR ID");
    console.log(chart_bars);

    icons = document.getElementsByTagName("i");
    console.log("ELEMENTOS POR TAG");
    console.log(icons);

    cards = document.getElementsByClassName("card");
    console.log("ELEMENTOS POR CLASS");
    console.log(cards);

}

let modifyText = () => {
    let listOfP, elementP;
    listOfP = document.getElementsByTagName("p");
    elementP = listOfP[3];
    elementP.innerHTML = "Dinero Actual";

    let listOfH4, elementH4;
    listOfH4 = document.getElementsByTagName("H4");
    elementH4 = listOfH4[0];
    elementH4.innerHTML = "$301K";

}

let updateData = () => {
    let data = [{
        title: 'Usuarios actuales',
        value: '3,200'
    },
    {
        title: 'Nuevos clientes',
        value: '4,215'
    },
    {
        title: 'Ventas',
        value: '$121,520'
    }];

    let [users, clients, sales] = data;

    let { title: title_users, value: value_users } = users;
    let { title: title_clients, value: value_clients } = clients;
    let { title: title_sales, value: value_sales } = sales;

    let message_users = `<p class="text-sm mb-0 text-capitalize">${title_users}</p><h4 class="mb-0">${value_users}</h4>`;
    let message_clients = `<p class="text-sm mb-0 text-capitalize">${title_clients}</p><h4 class="mb-0">${value_clients}</h4>`;
    let message_sales = `<p class="text-sm mb-0 text-capitalize">${title_sales}</p><h4 class="mb-0">${value_sales}</h4>`;


    let listOfElements = document.getElementsByClassName('text-end pt-1')

    let [, second, third, fourth] = listOfElements;

    second.innerHTML = message_users;
    third.innerHTML = message_clients;
    fourth.innerHTML = message_sales;

}

let cambiosIndicadores = () => {

    let data = [
        {
            porcentaje: "+55%",
            descripcion: "que la semana pasada"
        },
        {
            porcentaje: "+3%",
            descripcion: "que el mes pasado"
        },
        {
            porcentaje: "+3%",
            descripcion: "que el mes pasado"
        },
        {
            porcentaje: "-2%",
            descripcion: "que ayer"
        },
        {
            porcentaje: "+5%",
            descripcion: "que ayer"
        },
    ];

    let [users, clients, sales] = data;

}


runScripts();
updateData();
modifyText();
cambiosIndicadores();
