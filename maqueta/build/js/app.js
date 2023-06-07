// Cuenta regresiva(30 de agosto a las 00:00)
const fechaObjetivo = new Date('2023-08-30T00:00:00');

const numeroDias = document.querySelector('.cuenta_regresiva_contador:nth-child(1) .cuenta_regresiva_numero');
const numeroHoras = document.querySelector('.cuenta_regresiva_contador:nth-child(2) .cuenta_regresiva_numero');
const numeroMinutos = document.querySelector('.cuenta_regresiva_contador:nth-child(3) .cuenta_regresiva_numero');
const numeroSegundos = document.querySelector('.cuenta_regresiva_contador:nth-child(4) .cuenta_regresiva_numero');

function actualizarCuentaRegresiva() {
  const fechaActual = new Date();
  const diferencia = fechaObjetivo - fechaActual;

  const segundosTotales = Math.floor(diferencia / 1000);
  const dias = Math.floor(segundosTotales / (3600 * 24));
  const horas = Math.floor((segundosTotales % (3600 * 24)) / 3600);
  const minutos = Math.floor((segundosTotales % 3600) / 60);
  const segundos = Math.floor(segundosTotales % 60);

  numeroDias.textContent = dias.toString().padStart(2, '0');
  numeroHoras.textContent = horas.toString().padStart(2, '0');
  numeroMinutos.textContent = minutos.toString().padStart(2, '0');
  numeroSegundos.textContent = segundos.toString().padStart(2, '0');
}

setInterval(actualizarCuentaRegresiva, 1000);

//Overlay para seleccion de video

const primerOverlay = document.querySelector('.videos_socchi_mini .overlay');
primerOverlay.style.opacity = 1;

const overlays = document.querySelectorAll('.overlay');

overlays.forEach(overlay => {
    overlay.addEventListener('click', function() {
        overlays.forEach(overlay => {
                overlay.style.opacity = 0;
        });
        this.style.opacity = 1;
    });
});

// Seleccion del video principal

 const videoPrincipal = document.querySelector('.cuenta_regresiva_video_principal iframe');
 const videosMini = document.querySelectorAll('.videos_socchi_mini');

 videosMini.forEach(videoMini => {
   videoMini.addEventListener('click', function(event) {
     event.preventDefault();

     const href = this.querySelector('a').getAttribute('href');
     const videoId = href.match(/v=([^&]+)/)[1];
     const videoUrl = `https://www.youtube.com/embed/${videoId}?autoplay=1`;

     videoPrincipal.setAttribute('src', videoUrl);
   });
 });