const mongoose = require('mongoose');
const Category = require('../../models/category')

const findImpl = async () => {
    return await Category.find();
}

const createImpl = async ({name}) => {
    const data = Category({
        name,
    })
    return await data.save();
}

const updateImpl = async ({id,name}) => {
    const data = {
        name,
    }

    await Category.findByIdAndUpdate(id,data);
    return {
        "_id" : id,
        "name" : name,
    }
}

const deleteImpl = async ({id}) => {
    return await Category.findByIdAndDelete(id);
}



//===Exports====//
module.exports = {
    findImpl,
    createImpl,
    updateImpl,
    deleteImpl,
}