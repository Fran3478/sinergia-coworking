const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
    sequelize.define("office", {
        id: {
            type: DataTypes.UUID,
            primaryKey: true,
            allowNull: false,
            defaultValue: DataTypes.UUIDV4
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        area: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        capacity: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        price: {
            type: DataTypes.FLOAT,
            allowNull: false
        },
        address: {
            type: DataTypes.STRING,
            allowNull: false
        },
        category: {
            type: DataTypes.UUID,
            allowNull: false
        },
        ratingAverage: {
            type: DataTypes.FLOAT,
            allowNull: false,
            defaultValue: 0.0
        },
        city: {
            type: DataTypes.UUID,
            allowNull: false
        }
    },
    {
        timestamps: false,
        tableName: 'Office'
    }
    );
};