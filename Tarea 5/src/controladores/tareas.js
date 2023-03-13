const { response } = require('express');
const funcTarea = require('./../modelos/tarea');

function getTareas(req, res) {
    funcTarea.find().then(tareas => {
        console.log(tareas);
        res.status(200).json({message: "Listado de tareas de mongodb con sus datos", tareas: tareas});
    }).catch(err => {
        console.log(err);
        res.status(400).json({message: 'Error al buscar lista de tareas'});
    })
}

function getTareaId(req, res){
    funcTarea.findOne({_id: req.params.id}).then(tarea => {
        console.log(tarea);
        res.status(200).json({message: "Tarea especifica por id", tarea: tarea});
    }).catch(err => {
        console.log(err);
        res.status(200).json({message: 'tarea especifica no encontrada'});
    })
}

function postTarea(req, res){
    try{
        const tarea = new funcTarea({
            titulo: req.body.titulo,
            descripcion: req.body.descripcion,
            status: req.body.status,
            fechaCreacion: req.body.fechaCreacion
        });

        tarea.save().then(ntarea => {
            res.status(200).json({message: "Tarea creada", tarea: ntarea});
        });
        console.log('tarea creada');

    }catch (err){
        console.log(err);
        res.status(400).json({message: 'Error, tarea no creada'});
    }
}

function putTarea(req, res){
    funcTarea.findById(req.params.id).then(tarea => {
        if(tarea){
            tarea.titulo = req.body.titulo || tarea.titulo;
            tarea.descripcion = req.body.descripcion || tarea.descripcion;
            tarea.status = req.body.status || tarea.status;
            tarea.fechaCreacion = req.body.fechaCreacion || tarea.fechaCreacion

            tarea.save().then(ntarea => {
                console.log(ntarea);
                res.status(200).json({message: "Tarea actualizada", tarea: ntarea});
            }).catch(err => {
                console.log(err);
                res.status(500).json({message: 'Error, tarea no actualizada'});
            });
        }else{
            return res.status(404).json({message: 'No se encontro la tarea'});
        }
    }).catch(err => {
        console.log(err);
        res.status(400).json({message: 'Datos invalidos, tarea no actualizada'});
    });
}

function deleteTarea(req, res){
    funcTarea.findByIdAndDelete(req.params.id).then(tarea => {
        if(tarea){
            res.status(204).json({message: 'tarea eliminada', tarea: tarea});
        }else{
            return res.status(404).json({message: 'No se encontro la tarea a eliminar', tarea: tarea});
        }
    }).catch(err => {
        res.status(400).json({message: 'Error, tarea no eliminada'});
    });
}

module.exports = {getTareas, getTareaId, postTarea, putTarea, deleteTarea};
