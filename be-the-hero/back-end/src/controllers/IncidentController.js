const connection = require('../database/connection');

module.exports = {

    async index(request, response) {
        const { page = 1 } = request.query;

        const [count] = await connection('incidents').count();
       

        const incidents = await connection('incidents')
            .join('ongs', 'ongs.id', '=', 'incidents.ong_id') // join relaciona dados em duas tabelas
            .limit(5)                                           // quero trazer dados da tabela de Ongs,
            .offset((page - 1) *5)                           // quero todos os dados onde o ID presente da            
            .select([                                       // tabela de ongs, seja igual ao ID da ong relacio-
                'incidents.*',                              // nada aos incidentes.
                'ongs.name', 
                'ongs.email', 
                'ongs.whatsapp', 
                'ongs.city', 
                'ongs.uf'
            ]); // quero todos os dados do indicente, porém da ong quero selecionar os dados que eu quero.

        response.header('X-Total-Count', count['count(*)'])

        return response.json(incidents);
    },

    async create(request, response){
        const { title, description, value } = request.body;
        const ong_id = request.headers.authorization;

        const [id] = await connection('incidents').insert({
            title,
            description,
            value,
            ong_id
        });

        return response.json({ id });
    },

    async delete(request, response) {
        const { id } = request.params;
        const ong_id = request.headers.authorization;

        const incident = await connection('incidents')
            .where('id', id)
            .select('ong_id')
            .first();

            if (incident.ong_id !== ong_id) {
                return response.status(401).json({ error: 'Operation not permitted' });
            }

            await connection('incidents').where('id', id).delete();

            return response.status(204).send();
    }
};