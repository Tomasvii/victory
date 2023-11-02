module.exports = (sequelize, DataTypes) => {
    let alias = "Factions";

    let cols = {
        faccion_id: {
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
        tableName: "factions",
        timestamps: false,
    };

    const Faction = sequelize.define(alias, cols, config);

    return Faction;
};
