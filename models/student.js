const db = require(".")

module.exports = (sequelize, DataTypes) => {
    const Student = sequelize.define("Student", {
        name: {
            type: DataTypes.STRING,
        },
    }, {
        tableName: 'Student',
        timestamps: false,
    });
    return Student;
};