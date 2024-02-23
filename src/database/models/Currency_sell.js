module.exports = (sequelize, DataTypes) => {
    let alias = "Currencies_sell";

    let cols = {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        moneda: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        precio: {
            type: DataTypes.DECIMAL(10, 2).UNSIGNED,
            allowNull: false,
        },
    };

    let config = {
        tableName: "currencies_sell",
        timestamps: false,
    };

    const Currency_sell = sequelize.define(alias, cols, config);

    return Currency_sell;
};
