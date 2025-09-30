document.addEventListener('DOMContentLoaded', function() {
    const barra_progreso = document.getElementById('barra-progreso');
    const fecha_actual = new Date();
    const anio = fecha_actual.getFullYear();
    const primer_dia_anio = new Date(anio, 0, 1);
    const ultimo_dia_anio = new Date(anio, 11, 31);
    const total_dia_anio = (ultimo_dia_anio - primer_dia_anio) / (1000 * 60 * 60 * 24);
    const dias_transcurridos = (fecha_actual - primer_dia_anio) / (1000 * 60 * 60 * 24);
    const porcentaje = Math.round((dias_transcurridos / total_dia_anio) * 100);
    const ancho_llenado = (230 * porcentaje) / 100;
    const anio_actual = document.getElementById('anio-actual');
    const anio_siguiente = document.getElementById('anio-siguiente');
    anio_actual.innerText = anio;
    anio_siguiente.innerText = anio + 1;

    barra_progreso.style.setProperty('--ancho-llenado', `${ancho_llenado}px`);
    const porcentaje_texto = document.createElement('div');
    porcentaje_texto.textContent = `${porcentaje}%`;
    porcentaje_texto.classList.add('porcentaje-texto');
    barra_progreso.appendChild(porcentaje_texto);
})