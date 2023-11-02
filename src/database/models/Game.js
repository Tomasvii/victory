module.exports = (sequelize, DataTypes) => {
    let alias = "Games";

    let cols = {
        juego_id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        nombre: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    };

    let config = {
        tableName: "games",
        timestamps: false,
    };

    let Game = sequelize.define(alias, cols, config);

    Game.associate = function (models) {
        Game.hasMany(models.Servers, {
            as: "server",
            foreignKey: "juego_id",
        });
    };

    return Game;
};
