exports.up = function(knex) { // o método UP é responsável pela criação da tabela, é o que vai acontecer quando eu executar essa migration.
    return knex.schema.createTable('ongs', function (table) {
        table.string('id').primary();
        table.string('name').notNullable();
        table.string('email').notNullable();
        table.string('whatsapp').notNullable();
        table.string('city').notNullable();
        table.string('uf', 2).notNullable(); // este parâmetro dois, serve para reforçar que o estado tem duas letras.
    });
};
// e o método down serve para se der algum problema e eu precisar voltar atrás. O que tenho que desfazer?
// quer dizer que eu preciso deletar a tabela.
exports.down = function(knex) {
    return knex.schema.dropTable('ongs');
};
