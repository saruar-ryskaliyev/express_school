module.exports = (sequelize, DataTypes) => {
    return sequelize.define('Message', {
        message_id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        user_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'users',
                key: 'user_id'
            },
            onDelete: 'SET NULL'
        },
        sender_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'users',
                key: 'user_id'
            },
            onDelete: 'SET NULL'
        },
        content: {
            type: DataTypes.TEXT,
            allowNull: false
        },
        sent_at: {
            type: DataTypes.DATE,
            defaultValue: DataTypes.NOW
        }
    }, {
        tableName: 'messages',
        timestamps: false
    });
};
  