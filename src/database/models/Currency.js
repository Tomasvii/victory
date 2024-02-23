module.exports = (sequelize, DataTypes) => {
    let alias = "Currencies";

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
        tableName: "currencies",
        timestamps: false,
    };

    const Currency = sequelize.define(alias, cols, config);

    return Currency;
};
