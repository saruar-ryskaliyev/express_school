module.exports = (sequelize, DataTypes) => {
    const Group = sequelize.define('Group', {
        group_id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        teacher_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'users',
                key: 'user_id'
            },
            onDelete: 'SET NULL'
        },
        invite_code: {
            type: DataTypes.STRING,
            unique: true
        }
    }, {
        tableName: 'groups',
        timestamps: false
    });

    Group.associate = models => {
        Group.hasMany(models.Calendar, {
            foreignKey: 'group_id',
            as: 'calendars'
        });
    };

    return Group;
};