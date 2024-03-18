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
    let cambios = [
        {
          valor_previo: 250,
          valor_actual: 301,
          mensaje_tiempo: 'que la semana anterior'
        },
        {
          valor_previo: 3510,
          valor_actual: 3200,
          mensaje_tiempo: 'que la semana anterior'
        },
        {
          valor_previo: 3920,
          valor_actual: 4215,
          mensaje_tiempo: 'que ayer'
        },
        {
          valor_previo: 110200,
          valor_actual: 121520,
          mensaje_tiempo: 'que ayer'
        }
      ]

    let [SemPasada, MesPasado, UsuariosAyer, VentasAyer] = cambios;
    let signo=""

    if(SemPasada.valor_actual>SemPasada.valor_previo) signo="+" 
    let MsgSemPasada = `<p class="mb-0"><span class="text-success text-sm font-weight-bolder">${signo}
                        ${Math.round((SemPasada.valor_actual - SemPasada.valor_previo)*100/SemPasada.valor_previo) } </span>
                        ${SemPasada.mensaje_tiempo}</p>`
                        signo=""
    if(MesPasado.valor_actual>MesPasado.valor_previo) signo="+" 
    let MsgMesPasado = `<p class="mb-0"><span class="text-success text-sm font-weight-bolder">${signo}
                        ${Math.round((MesPasado.valor_actual - MesPasado.valor_previo)*100/MesPasado.valor_previo) } </span>
                        ${MesPasado.mensaje_tiempo}</p>`
                        signo=""
    if(UsuariosAyer.valor_actual>UsuariosAyer.valor_previo) signo="+" 
    let MsgUsuariosAyer = `<p class="mb-0"><span class="text-success text-sm font-weight-bolder">${signo}
                        ${Math.round((UsuariosAyer.valor_actual - UsuariosAyer.valor_previo)*100/UsuariosAyer.valor_previo) } </span>
                        ${UsuariosAyer.mensaje_tiempo}</p>`
                        signo=""
    if(VentasAyer.valor_actual>VentasAyer.valor_previo) signo="+" 
    let MsgVentasAyer = `<p class="mb-0"><span class="text-success text-sm font-weight-bolder">${signo}
                        ${Math.round((VentasAyer.valor_actual - VentasAyer.valor_previo)*100/VentasAyer.valor_previo) } </span>
                        ${VentasAyer.mensaje_tiempo}</p>`

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
            descripcion: "Rendimiento de la última campaña",
            schedule: "campaña enviada hace 2 días"
        },

        {
            titulo: "Ventas diarias",
            descripcion: "(+15%) de aumento en las ventas de hoy",
            schedule: "campaña enviada hace 2 días"
        },
        {
            titulo: "Tareas completadas",
            descripcion: "Rendimiento de la última campaña",
            schedule: "campaña enviada hace 2 días"
        }
    ]

    let [Visitas, Ventas, Tareas] = data;

    let { titulo: TituloVisitas, descripcion: descVisitas, schedule:schVisitas} = Visitas
    let { titulo: TituloVentas, descripcion: descVentas, schedule:schVentas} = Ventas
    let { titulo: TituloTareas, descripcion: descTareas, schedule:schTareas} = Tareas

    let ListaElementos = document.getElementsByClassName("card-body");

    let [cardVisitas, cardVentas, cardTareas] = ListaElementos;

    console.log(ListaElementos);
    console.log(cardVisitas)
    console.log(cardVentas)
    console.log(cardTareas)

    cardVisitas.innerHTML = `<h6 class="mb-0 ">${TituloVisitas}</h6>
                             <p class="text-sm ">${descVisitas}</p>
                             <hr class="dark horizontal"><div class="d-flex ">
                             <i class="material-icons text-sm my-auto me-1">schedule</i>
                             <p class="mb-0 text-sm">${schVisitas} </p></div>`

    cardVentas.innerHTML = `<h6 class="mb-0 ">${TituloVentas}</h6>
                            <p class="text-sm ">${descVentas}</p>
                            <hr class="dark horizontal"><div class="d-flex ">
                            <i class="material-icons text-sm my-auto me-1">schedule</i>
                            <p class="mb-0 text-sm"> ${schVentas} </p></div>`

    cardTareas.innerHTML = `<h6 class="mb-0 ">${TituloTareas}</h6>
                            <p class="text-sm ">${descTareas}</p>
                            <hr class="dark horizontal"><div class="d-flex ">
                            <i class="material-icons text-sm my-auto me-1">schedule</i>
                            <p class="mb-0 text-sm"> ${schTareas} </p></div>`
}

runScripts();
updateData();
modifyText();
cambiosIndicadores();

CambiosTextoGraficos()