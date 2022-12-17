const User = require('./User');
const Note = require('./Note');

User.hasMany(Note, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
});

Notes.belongsTo(User, {
  foreignKey: 'user_id'
});

module.exports = { User, Note };