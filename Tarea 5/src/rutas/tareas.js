const express = require('express');
const router = express.Router();
const controladorTareas = require('./../controladores/tareas');

/**
 * @swagger
 * /tareas:
 *   get:
 *     description: Listado de las tareas en mongodb.
 *     produces:
 *       - application/json
 *     responses:
 *       200:
 *         description: Listado de tareas de mongodb con sus datos.
 *         schema:
 *           type: array
 *           items:
 *             type: object
 *             properties:
 *               _id:
 *                 type: string
 *               titulo:
 *                 type: string
 *               description:
 *                 type: string
 *               status:
 *                 type: string
 *               fechaCreacion:
 *                 type: Date
 */
router.get('', controladorTareas.getTareas);

/**
 * @swagger
 * /tareas/id:
 *   get:
 *     description: Obtiene una tarea especifica por id del listado de tareas.
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: id
 *         in: path
 *         description: Identificador de la tarea
 *         required: true
 *         type: string
 *     responses:
 *       200:
 *         description: Tarea especifica por id
 *         schema:
 *           type: object
 *           properties:
 *             _id:
 *               type: string
 *             title:
 *               type: string
 *             description:
 *               type: string
 *             status:
 *               type: string
 *             fechaCreacion:
 *                 type: Date
 *       404:
 *         description: Tarea especifica no encontrada
 */
router.get('/:id', controladorTareas.getTareaId);

/**
 * @swagger
 * /tareas:
 *   post:
 *     description: Crea una tarea nueva y la agrega al listado de tareas.
 *     produces:
 *       - application/json
 *     parameters:
 *       - in: body
 *         name: tarea
 *         description: Objeto con la tarea creada.
 *         required: true
 *         schema:
 *           type: object
 *           properties:
 *             title:
 *               type: string
 *             description:
 *               type: string
 *             status:
 *               type: string
 *             fechaCreacion:
 *                 type: Date
 *     responses:
 *       201:
 *         description: Tarea creada
 *         schema:
 *           type: object
 *           properties:
 *             _id:
 *               type: string
 *             title:
 *               type: string
 *             description:
 *               type: string
 *             status:
 *               type: string
 *             fechaCreacion:
 *                 type: Date
 *       400:
 *         description: Error, tarea no creada
 */
router.post('', express.json(), controladorTareas.postTarea);

/**
 * @swagger
 * /tareas/id:
 *   put:
 *     description: Encuentra y actuliza la tarea por id
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: id
 *         description: Identificador de la tarea
 *         in: path
 *         required: true
 *         type: string
 *       - in: body
 *         name: tarea
 *         description: Objeto con la tarea actualizada.
 *         required: true
 *         schema:
 *           type: object
 *           properties:
 *             title:
 *               type: string
 *             description:
 *               type: string
 *             status:
 *               type: string
 *             fechaCreacion:
 *                 type: Date
 *     responses:
 *       200:
 *         description: Tarea actualizada
 *         schema:
 *           type: object
 *           properties:
 *             _id:
 *               type: string
 *             title:
 *               type: string
 *             description:
 *               type: string
 *             status:
 *               type: string
 *             fechaCreacion:
 *                 type: Date
 *       400:
 *         description: Datos invalidos, tarea no actualizada
 *       404:
 *         description: No se encontro la tarea
 *       500:
 *         description: Error, tarea no actualizada
 */
router.put('/:id', express.json(), controladorTareas.putTarea);

/**
 * @swagger
 * /tareas/id:
 *   delete:
 *     description: Elimina la tarea por el id del listado de tareas.
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: id
 *         description: Identificador de la tarea.
 *         in: path
 *         required: true
 *         type: string
 *     responses:
 *       204:
 *         description: Tarea eliminada
 *       404:
 *         description: No se encontro la tarea a eliminar
 *       400:
 *         description: Error, tarea no eliminada
 */
router.delete('/:id', express.json(), controladorTareas.deleteTarea);

module.exports = router;