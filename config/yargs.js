const descripcion = {
    demand: true,
    alias: 'd',
    desc: 'descripción de la tarea por hacer'
};

const completado = {
    default: true,
    alias: 'c',
    desc: 'marca como completada o pendiente la tarea'
};

const argv = require('yargs')
    .command('crear', 'crea el elemento por hacer', {
        descripcion
    })


.command('actualizar', 'actualiza el elemento por hacer', {
        descripcion,
        completado
    })
    .command('borrar', 'borra una tarea', {
        descripcion
    })
    .help()
    .argv;


module.exports = {
    argv
}