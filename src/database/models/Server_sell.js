module.exports = (sequelize, DataTypes) => {
    let alias = "Servers_sell";

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
            type: DataTypes.DECIMAL(10, 5).UNSIGNED,
            allowNull: false,
        },
        stock: {
            type: DataTypes.DECIMAL(10, 0).UNSIGNED,
            allowNull: false,
        },
    };

    let config = {
        tableName: "servers_sell",
        timestamps: false,
    };

    let Server_sell = sequelize.define(alias, cols, config);

    Server_sell.associate = function (models) {
        Server_sell.belongsTo(models.Games, {
            as: "game",
            foreignKey: "juego_id",
        });

        Server_sell.belongsTo(models.Factions, {
            as: "faction",
            foreignKey: "faccion_id",
        });
    };

    return Server_sell;
};
