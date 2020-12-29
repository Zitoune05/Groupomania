'use strict';
module.exports = (sequelize, DataTypes) => {
  const Like = sequelize.define('Like', {
    
    publicationsId: { 
      type: DataTypes.INTEGER,
      references: {               
        model: 'Publication',
        key: 'id'
      }
    },
    userId: { type: DataTypes.INTEGER, 
      references: {
        model: 'User',
        key: 'id'
      }
    },
    isLike: DataTypes.INTEGER
  }, {});

  Like.associate = function(models) {

    models.User.belongsToMany(models.Publication, {   // Relation M to M 
      through: models.Like,   // Table de jonction Like
      foreignKey: 'userId',
      otherKey: 'publicationsId',
    });

    models.Publication.belongsToMany(models.User, {       // Relation M to M 
      through: models.Like,   // Table de jonction Like
      foreignKey: 'publicationsId',
      otherKey: 'userId',
    });

    models.Like.belongsTo(models.User, {  // Reation avec la table de reference like
      foreignKey: 'userId',
      as: 'user',   // alias
    });

    models.Like.belongsTo(models.Publication, {   // Reation avec la table de reference like
      foreignKey: 'publicationsId',
      as: 'message',   // alias
    });
  };
  return Like;
};