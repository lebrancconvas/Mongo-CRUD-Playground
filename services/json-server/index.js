const db = require('./data/db.json');
const monster = require('./data/monsters.json');

module.exports = () => ({
	db: db,
	monster: monster
});