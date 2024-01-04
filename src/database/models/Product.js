module.exports = (sequelize, DataTypes) => {
    let alias = "Products";

    let cols = {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        nombre: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        region: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        plataforma: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        descripcion: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        price: {
            type: DataTypes.DECIMAL(10, 0).UNSIGNED,
            allowNull: false,
        },
        original_price: {
            type: DataTypes.DECIMAL(10, 0).UNSIGNED,
            allowNull: false,
        },
        entrega: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        requisitos_minimos: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        requisitos_recomendados: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        image: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    };

    let config = {
        tableName: "products",
        timestamps: false,
    };

    const Product = sequelize.define(alias, cols, config);

    return Product;
};
