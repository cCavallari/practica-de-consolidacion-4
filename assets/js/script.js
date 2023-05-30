let numero = 1;

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
    fetch(`https://swapi.dev/api/people/${numero}`) // función generadora (numero consecutivo) return false para terminar
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
    numero++; // le suma uno al numero
});
