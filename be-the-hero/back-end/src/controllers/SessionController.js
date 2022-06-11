const connection = require('../database/connection');

module.exports = {
    async create(request, response) {
        const { id } = request.body;

        const ong = await connection('ongs')
            .where('id', id)
            .select('name')
            .first(); // utiliza para ele não retornar um array, e sim apenas o resultado. 

            if (!ong) {
                return response.status(400).json({ error: 'No ONG found with this ID' })
            }

        return response.json(ong);
    }
}