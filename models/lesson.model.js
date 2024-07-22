module.exports = (sequelize, DataTypes) => {
    return sequelize.define('Lesson', {
        lesson_id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        group_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'groups',
                key: 'group_id'
            }
        },
        section_title: {
            type: DataTypes.STRING,
            allowNull: false
        }
    }, {
        tableName: 'lessons',
        timestamps: true
    });
};
