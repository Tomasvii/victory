module.exports = (sequelize, DataTypes) => {
    let alias = "Servers";

    let cols = {
        servidor_id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        nombre: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        juego_id: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        faccion_id: {
            type: DataTypes.STRING,
        },
        price: {
            type: DataTypes.DECIMAL(10, 0).UNSIGNED,
            allowNull: false,
        },
        stock: {
            type: DataTypes.DECIMAL(10, 0).UNSIGNED,
            allowNull: false,
        },
    };

    let config = {
        tableName: "servers",
        timestamps: false,
    };

    let Server = sequelize.define(alias, cols, config);

    Server.associate = function (models) {
        Server.belongsTo(models.Games, {
            as: "game",
            foreignKey: "juego_id",
        });
    };

    Server.associate = function (models) {
        Server.belongsTo(models.Factions, {
            as: "faction",
            foreignKey: "faccion_id",
        });
    };

    return Server;
};
