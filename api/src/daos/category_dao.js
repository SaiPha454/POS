const { findImpl , createImpl , updateImpl , deleteImpl } = require('./imple/category_impl')

const find = () => findImpl();

const create = ({name}) => createImpl({name});

const update = ({id,name}) => updateImpl({id,name});

const destroy = ({id}) => deleteImpl({id});


//===Exports====//
module.exports = {
    find,
    create,
    update,
    destroy,
}