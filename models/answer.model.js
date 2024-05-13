module.exports = (sequelize, DataTypes) => {
    return sequelize.define('Answer', {
      answer_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      question_id: {
        type: DataTypes.INTEGER,
        references: {
          model: 'questions',
          key: 'question_id'
        }
      },
      student_id: {
        type: DataTypes.INTEGER,
        references: {
          model: 'users',
          key: 'user_id'
        }
      },
      student_answer: {
        type: DataTypes.STRING
      },
      submitted_at: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW
      },
      is_correct: {
        type: DataTypes.BOOLEAN
      }
    }, {
      tableName: 'answers',
      timestamps: false
    });
  };
  