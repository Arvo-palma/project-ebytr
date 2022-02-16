const { MOVED_TEMPORARILY } = require('http-status-codes');
const { task } = require('../database/models');

const create = async (userId, description) => {
  try {
    const newTask = await task.create({ userId, description, status: 'Pendente' });

    if (!newTask) {
      return false;
    }

    return newTask;
  } catch (error) {
    console.log(error);
  }
};

const getAll = async () => {
  try {
    const allTasks = await task.getAll();

    if (!allTasks) return false;

    return allTasks;
  } catch (error) {
    console.log(error);
  }
};

const update =  async (taskId, taskInfo) => {
  try {
    const { userId, description, status } = taskInfo;

    const updatedTask = await task.update(
      {
        userId,
        description,
        status
      },
      {
        where: {
          id: taskId,
        },
      });
    
      return updatedTask;
  } catch (error) {
    console.log(error)
    return false;
  }
};

const deleteTaskService = async (id) => {
  try {
    const deletedTask = await task.delete({ where: id });

    return deletedTask;
  } catch (error) {
    console.log(error);
    return false;
  }
};

module.exports = {
  create,
  getAll,
  update,
  deleteTaskService,
};
