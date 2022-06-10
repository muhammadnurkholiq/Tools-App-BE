// model
const { todo } = require("../../models");

// add todo
exports.addTodo = async (req, res) => {
  try {
    const data = req.body;

    const dataExist = await todo.findOne({
      where: {
        activity: data.activity,
      },
    });

    if (dataExist) {
      return res.status(200).send({
        status: "Failed",
        message: "Activity has been added",
      });
    }

    const newTodo = await todo.create({
      activity: data.activity,
      status: "unfinished",
    });

    res.status(200).send({
      status: "Success",
      message: "Activity added successfully",
      data: newTodo,
    });
  } catch (error) {
    res.status(500).send({
      status: "Error",
      message: "Status error",
    });
    console.log(error);
  }
};

// get todos
exports.getTodos = async (req, res) => {
  try {
    const dataTodos = await todo.findAll({
      attributes: {
        exclude: ["createdAt", "updatedAt"],
      },
    });

    if (!dataTodos) {
      return res.status(200).send({
        status: "Success",
        message: "Todo data not found",
      });
    }

    res.status(200).send({
      status: "Success",
      message: "Todo data found",
      data: dataTodos,
    });
  } catch (error) {
    res.status(500).send({
      status: "Error",
      message: "Server error",
    });
    console.log(error);
  }
};

// get todo
exports.getTodo = async (req, res) => {
  try {
    const { id } = req.params;

    const dataTodo = await todo.findOne({
      where: {
        id,
      },
      attributes: {
        exclude: ["createdAt", "updatedAt"],
      },
    });

    res.status(200).send({
      status: "Success",
      message: "Todo data found",
      data: dataTodo,
    });
  } catch (error) {
    res.status(500).send({
      status: "Error",
      message: "Server error",
    });
    console.log(error);
  }
};

// update todo
exports.updateTodo = async (req, res) => {
  try {
    const { id } = req.params;
    const data = req.body;

    await todo.update(data, {
      where: {
        id,
      },
    });

    const newTodo = await todo.findOne({
      where: {
        id,
      },
      attributes: {
        exclude: ["createdAt", "updatedAt"],
      },
    });

    res.status(200).send({
      status: "Success",
      message: "Todo data updated successfully",
      data: newTodo,
    });
  } catch (error) {
    res.status(500).send({
      status: "Error",
      message: "Server error",
    });
    console.log(error);
  }
};

// delete todo
exports.deleteTodo = async (req, res) => {
  try {
    const { id } = req.params;

    await todo.destroy({
      where: {
        id,
      },
    });

    res.status(200).send({
      status: "Success",
      message: "Todo data deleted successfully",
    });
  } catch (error) {
    res.status(500).send({
      status: "Error",
      message: "Server error",
    });
    console.log(error);
  }
};
