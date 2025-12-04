import { DataTypes, Sequelize } from 'sequelize';

export const MovieSQL = (sequelize: Sequelize) => {
  return sequelize.define('Movie', {
    id: { type: DataTypes.UUID, primaryKey: true, defaultValue: DataTypes.UUIDV4 },
    title: { type: DataTypes.STRING, allowNull: false },
    genre: { type: DataTypes.STRING },
    year: { type: DataTypes.INTEGER },
    rating: { type: DataTypes.FLOAT, defaultValue: 0 },
  });
};
