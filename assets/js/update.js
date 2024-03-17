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
            porcentaje: "-2%",
            descripcion: "que ayer"
        },
        {
            porcentaje: "+5%",
            descripcion: "que ayer"
        },
    ];

    let [SemPasada, MesPasado, UsuariosAyer, VentasAyer] = data;

    let { porcentaje: PSemPasada, descripcion: DSempasada } = SemPasada;
    let { porcentaje: PMesPasado, descripcion: DMesPasado } = MesPasado;
    let { porcentaje: PUsuariosAyer, descripcion: DUsuariosAyer } = UsuariosAyer;
    let { porcentaje: PVentasAyer, descripcion: DVentasAyer } = VentasAyer;

    let MsgSemPasada = `<p class="mb-0"><span class="text-success text-sm font-weight-bolder">${PSemPasada} </span>${DSempasada}</p>`
    let MsgMesPasado = `<p class="mb-0"><span class="text-success text-sm font-weight-bolder">${PMesPasado} </span>${DMesPasado}</p>`
    let MsgUsuariosAyer = `<p class="mb-0"><span class="text-success text-sm font-weight-bolder">${PUsuariosAyer} </span>${DUsuariosAyer}</p>`
    let MsgVentasAyer = `<p class="mb-0"><span class="text-success text-sm font-weight-bolder">${PVentasAyer} </span>${DVentasAyer}</p>`

    let ListaElementos = document.getElementsByClassName("card-footer p-3")

    let [Primero, Segundo, Tercero, Cuarto] = ListaElementos

    Primero.innerHTML = MsgSemPasada
    Segundo.innerHTML = MsgMesPasado
    Tercero.innerHTML = MsgUsuariosAyer
    Cuarto.innerHTML = MsgVentasAyer
}

let CambiosTextoGraficos = () => {
    let data = [
        {
            titulo: "Vistas del sitio web",
            descripcion: "Rendimiento de la última campaña"
        },

        {
            titulo: "Ventas diarias",
            descripcion: "(+15%) de aumento en las ventas de hoy"
        },
        {
            titulo: "Tareas completadas",
            descripcion: "Rendimiento de la última campaña"
        }
    ]

    let

}


runScripts();
updateData();
modifyText();
cambiosIndicadores();

CambiosTextoGraficos()