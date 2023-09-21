const { Sequelize } = require('sequelize')
const { Details } = require('./db-details')


const getStudentsById = async (id, res) => {
    try {
      let result = await Details.findOne({
        where: { id: id },
        include: Marks,
      })
      return JSON.parse(JSON.stringify(result));
    } catch (err) {
      throw err;
    }
  }

  module.exports={
    getStudentsById:getStudentsById
  }