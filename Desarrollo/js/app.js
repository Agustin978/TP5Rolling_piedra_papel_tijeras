const opciones = ['piedra', 'papel', 'tijera'];
let opElegida;
let contador = 0;
let cuentaGana = 0;
let cuentaPierde = 0;

function cargaApp()
{
    opElegida = opciones[Math.floor(Math.random() * 3)];
    console.log(opElegida);
}

function juega(variable)
{
    let resultado;
    contador++;
    if(contador <= 10)
    {
        if(variable == opElegida)
        {
            resultado = 'empate';
            console.log('Empate');
        }else if(variable === 'piedra' && opElegida === 'papel' || variable === 'papel' && opElegida === 'tijera' || variable === 'tijera' && opElegida === 'piedra')
        {
            console.log('Perdio');
            resultado = 'perdio';
            cuentaPierde++;
        }else
        {
            console.log('Gano');
            resultado = 'gana';
            cuentaGana++;
        }
        agregaTabla(variable, resultado);
        cargaApp();
    }else
    {
        if(cuentaGana > cuentaPierde)
        {
            alert('Felicidades!!! Gano '+cuentaGana+' de 10 partidas.');
        }else if(cuentaGana < cuentaPierde)
        {
            alert('Intentelo nuevamente. Gano '+cuentaPierde+' de 10 partidas.');
        }else
        {
            alert('El resultado final fue un empate.');
        }
        location.reload();
    }
}

function agregaTabla(opUsuario ,resultado)
{
    let contenedor = document.getElementById('tablaPartidas');
    let nuevaLinea = document.createElement('tr');
    let user = document.createElement('th');
    let cpu = document.createElement('th');
    let res = document.createElement('th');
    user.innerHTML = opUsuario;
    cpu.innerHTML = opElegida;
    res.innerHTML = resultado;
    if(resultado === 'empate')
    {
        res.className = 'text-warning fw-bold';
    }else if(resultado === 'gana')
    {
        res.className = 'text-success fw-bold';
    }else
    {
        res.className = 'text-danger fw-bold';
    }
    nuevaLinea.appendChild(user);
    nuevaLinea.appendChild(cpu);
    nuevaLinea.appendChild(res);
    contenedor.appendChild(nuevaLinea);
}