/*const apikey_eventi = 'Ai0JvwYHNKSDaJmIWAvgMQMlYWiEOaRA';

function search(event){
    event.preventDefault();
    
    const eventi_input = document.querySelector('#key_news');
    const eventi_value = encodeURIComponent(eventi_input.value);
    console.log('Ricerco: ' + eventi_value);
    rest_url='https://app.ticketmaster.com/discovery/v2/events.json?' + eventi_value + '&countryCode=GB&apiKey=' + apikey_eventi;
    console.log('url: ' + rest_url);
    
    fetch(rest_url).then(onResponse).then(onJsonEvent);
}

const form = document.querySelector('form');
form.addEventListener('submit', search);
*/
function onResponse(response){
    console.log(response);
    return response.json();
}

function onJsonEvent(json){
    console.log(json);
    let max_results=15;
    const eventi=document.querySelector("#eventi");
    eventi.innerHTML="";
    if(json.page.totalElements<=max_results)
    {
        max_results=json.page.totalElements;
    }
    for(let i=0; i<max_results; i++){
        const nome_evento=json._embedded.events[i].name;
        const data_evento=json._embedded.events[i].dates.start.localDate;
        const url_evento=json._embedded.events[i].url;
        const slot=document.createElement("div");
        const nome=document.createElement("h1");
        const scopri=document.createElement("a");
        scopri.textContent="Scopri";
        scopri.href = url_evento;
        nome.textContent=nome_evento;
        const data=document.createElement("p");
        data.textContent=data_evento;
        eventi.appendChild(slot);
        slot.appendChild(nome);
        slot.appendChild(data);
        slot.appendChild(scopri);
      
    }
}
fetch("cerca_eventi.php").then(onResponse).then(onJsonEvent);

//const aggiornamento=document.querySelector("#aggiorna");
//aggiornamento.addEventListener("click", aggiorna);