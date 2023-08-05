// const { DataTypes } = require("sequelize");
// const sequelize = require("../databases/sequelize");
// const Apartment = require("./apartment.model");
// const User = require("./user.model");

// const UserApartments = sequelize.define('UserApartments')
// const UserFavoriteApartments = sequelize.define('UserFavoriteApartments')
// User.hasMany(Apartment, {
//     as: 'OwnedApartments',
//     foreignKey:{
//         type:DataTypes.INTEGER,
//         allowNull:false
//     },
//     through:UserApartments
// });
// User.hasMany(Apartment, { as: 'favoriteApartments', foreignKey: 'usertId',through:UserFavoriteApartments });
// Apartment.belongsTo(User, { as: 'Owner', foreignKey: 'userId',through:UserApartments });
// Apartment.belongsToMany(User, { as: 'favorites', foreignKey: 'userId',trough:UserFavoriteApartments });
