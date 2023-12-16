module.exports = (sequelize, DataTypes) => {
    let alias = "Orders";

    let cols = {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        url_id: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        transaction_id: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        amount: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        payment_intent: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        created_at: {
            type: DataTypes.DATE,
            allowNull: false,
        },
        updated_at: {
            type: DataTypes.DATE,
            allowNull: false,
        },
        delivered: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: false,
        },
        details: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        proof: {
            type: DataTypes.STRING,
            allowNull: true,
        },
    };

    let config = {
        tableName: "orders",
        timestamps: true,
        createdAt: "created_at",
        updatedAt: "updated_at",
    };

    const Order = sequelize.define(alias, cols, config);

    return Order;
};
