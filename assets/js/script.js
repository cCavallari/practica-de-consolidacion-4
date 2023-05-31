/* function numeroDinamico (){
    let numero = 0;
    return {
        next: function(){
            return numero < 5 ? {value: ++numero, done: false} : {done: true};

        }
    }
}

const numeroGenerador = numeroDinamico(); */

function* numeroDinamico(numero){
    while(numero < 5){
        yield ++numero; /* cuando coloco el ++ adelante, significa que primero hará la suma, en vez de iniciar en 0 (iniciando finalmente en uno) */
    }
}

const numeroGenerador = numeroDinamico(0);

const tarjeta = (personaje) => {
    var primera = document.querySelector('#primera');
    var nuevaTarjeta = document.createElement('div');
    nuevaTarjeta.setAttribute('class', 'col-12 col-md-6 col-lg-4');
    var single = document.createElement('div');
    single.setAttribute('class', 'single-timeline-content d-flex wow fadeInLeft single', 'data-wow-delay', '0.7s');
    var icon = document.createElement('div');
    icon.setAttribute('class', 'timeline-icon rojo');
    var text = document.createElement('div');
    text.setAttribute('class', 'timeline-text');
    var h6 = document.createElement("h6");
    h6.textContent = personaje.name;
    var p = document.createElement("p");
    p.innerHTML = `<strong>Estatura:</strong> ${personaje.height} cm. <strong>Peso:</strong> ${personaje.mass} kg.`;
    text.append(h6, p);
    single.append(icon, text);
    nuevaTarjeta.append(single);
    primera.append(nuevaTarjeta);

};

const primeraSeccion = document.querySelector('#primeraSeccion');
primeraSeccion.addEventListener('mouseover', () => {
    fetch(`https://swapi.dev/api/people/${(numeroGenerador.next()).value}`) // función generadora (numero consecutivo) return false para terminar
        .then(response => {
            if (response.ok) // cuando la respuesta esta OK recien manda los datos (await)
                return response.json();
            else
                throw new Error(response.status); //throw para asignar a la promesa
        })
        .then(personaje => {
            tarjeta(personaje);
        })
        .catch(error => {
            console.log('error, no se pudo leer el personaje');
        })
});

/* 6 - 11 */

function* numeroDinamico2(numero){
    while(numero < 11){
        yield ++numero;
    }
}

const numeroGenerador2 = numeroDinamico2(6);

const tarjeta2 = (personaje) => {
    var primera = document.querySelector('#segunda');
    var nuevaTarjeta = document.createElement('div');
    nuevaTarjeta.setAttribute('class', 'col-12 col-md-6 col-lg-4');
    var single = document.createElement('div');
    single.setAttribute('class', 'single-timeline-content d-flex wow fadeInLeft single', 'data-wow-delay', '0.7s');
    var icon = document.createElement('div');
    icon.setAttribute('class', 'timeline-icon verde');
    var text = document.createElement('div');
    text.setAttribute('class', 'timeline-text');
    var h6 = document.createElement("h6");
    h6.textContent = personaje.name;
    var p = document.createElement("p");
    p.innerHTML = `<strong>Estatura:</strong> ${personaje.height} cm. <strong>Peso:</strong> ${personaje.mass} kg.`;
    text.append(h6, p);
    single.append(icon, text);
    nuevaTarjeta.append(single);
    primera.append(nuevaTarjeta);

};

const segundaSeccion = document.querySelector('#segundaSeccion');
segundaSeccion.addEventListener('mouseover', () => {
    fetch(`https://swapi.dev/api/people/${(numeroGenerador2.next()).value}`)
        .then(response => {
            if (response.ok) 
                return response.json();
            else
                throw new Error(response.status); 
        })
        .then(personaje => {
            tarjeta2(personaje);
        })
        .catch(error => {
            console.log('error, no se pudo leer el personaje');
        })
});

/* 12 - 17 */

function* numeroDinamico3(numero){
    while(numero < 18){
        yield ++numero; 
    }
}

const numeroGenerador3 = numeroDinamico3(12);

const tarjeta3 = (personaje) => {
    var primera = document.querySelector('#tercera');
    var nuevaTarjeta = document.createElement('div');
    nuevaTarjeta.setAttribute('class', 'col-12 col-md-6 col-lg-4');
    var single = document.createElement('div');
    single.setAttribute('class', 'single-timeline-content d-flex wow fadeInLeft single', 'data-wow-delay', '0.7s');
    var icon = document.createElement('div');
    icon.setAttribute('class', 'timeline-icon celeste');
    var text = document.createElement('div');
    text.setAttribute('class', 'timeline-text');
    var h6 = document.createElement("h6");
    h6.textContent = personaje.name;
    var p = document.createElement("p");
    p.innerHTML = `<strong>Estatura:</strong> ${personaje.height} cm. <strong>Peso:</strong> ${personaje.mass} kg.`;
    text.append(h6, p);
    single.append(icon, text);
    nuevaTarjeta.append(single);
    primera.append(nuevaTarjeta);

};

const terceraSeccion = document.querySelector('#terceraSeccion');
terceraSeccion.addEventListener('mouseover', () => {
    fetch(`https://swapi.dev/api/people/${(numeroGenerador3.next()).value}`)
        .then(response => {
            if (response.ok)
                return response.json();
            else
                throw new Error(response.status);
        })
        .then(personaje => {
            tarjeta3(personaje);
        })
        .catch(error => {
            console.log('error, no se pudo leer el personaje');
        })
});

/* fetch(`https://swapi.dev/api/people/`)
        .then(response => {
            if (response.ok)
                return response.json();
            else
                throw new Error(response.status);
        })
        .then(data => console.log(data))
        .then(personaje => {
            tarjeta(personaje);
        })
        .catch(error => {
            console.log('error, no se pudo leer el personaje');
        }) */