const db = require('../database-connection')

module.exports = {
    readAllStudents(){
        return db('students')
    },
    readAllStudentById(id) {
        return db('students').where('id', id).first()
    }
}