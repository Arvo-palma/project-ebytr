const { StatusCodes } = require('http-status-codes');
const userServices = require('../services/userServices');

const createTask = async (req, res) => {
  try {
    const { userId, description } = req.body;

    const newTask = await userServices.create(userId, description);
  
    if (!newTask) {
      return res.status(StatusCodes.BAD_REQUEST)
        .json({ message: 'Unable to create task. Verify typed data and try again ' });
    }
  
    const { id } = newTask; // Check this destructuring path
  
    return res.status(StatusCodes.CREATED).json({ id })
  } catch (error) {
    console.log(error);
  }
};

const getAllTasks = async (req, res) => {
  try {
    const userId = req.params.id;

    const userTasks = await userServices.getAll(userId);

    if (!userTasks) {
      return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
        message: 'Internal problem'
      });
    }

    return res.status(StatusCodes.OK).json(userTasks)
  } catch (error) {
    console.log(error);
  }
};

const updateTask = async (req, res) => {
  try {
    const taskId = req.params.id;
    const { userId, description, status } = req.body;
    const taskInfo = { userId, description, status };

    const updatedTask = await userServices.update(taskId, taskInfo);

    if (!updatedTask) {
      return res.status(StatusCodes.BAD_REQUEST)
        .json({ message: 'Unable to update task. Verify typed data and try again ' });
    }

    const { id } = updatedTask

    return res.status(StatusCodes.OK).json({ id })
  } catch (error) {
    console.log(error)
  }
};

const deleteTask = async (req, res) => {
  try {
    const taskId = req.params.id;

    const deletedTask = await userServices.deleteTaskService(taskId);

    if (!deletedTask) {
      return res.status(StatusCodes.BAD_REQUEST)
        .json({ message: 'Unable to delete task. Verify typed data and try again ' });
    }

    const { id } = deletedTask

    return res.status(StatusCodes.OK).json({ id })
  } catch (error) {
    console.log(error)
  }
};

module.exports = {
  createTask,
  getAllTasks,
  updateTask,
  deleteTask,
}
