module.exports = (sequelize, DataTypes) => {
    const SatAnswer = sequelize.define('SatAnswer', {
        sat_answer_id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        selected_option: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        user_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        sat_attempt_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'sat_attempts',
                key: 'sat_attempt_id',
            },
            allowNull: false,
            onDelete: 'CASCADE'
        },
        sat_question_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'sat_questions',
                key: 'sat_question_id',
            },
            onDelete: 'CASCADE',
            allowNull: false,
        },
        submitted_at: {
            type: DataTypes.DATE,
            defaultValue: DataTypes.NOW,
        },
    }, {
        tableName: 'sat_answers',
        timestamps: true,
    });

    SatAnswer.associate = models => {
        SatAnswer.belongsTo(models.SatAttempt, { foreignKey: 'sat_attempt_id', as: 'sat_attempt', onDelete: 'CASCADE' });
        SatAnswer.belongsTo(models.SatQuestion, { foreignKey: 'sat_question_id', as: 'sat_question', onDelete: 'CASCADE' });
        SatAnswer.belongsTo(models.User, { foreignKey: 'user_id', as: 'user', onDelete: 'CASCADE' });
    };

    return SatAnswer;
};
