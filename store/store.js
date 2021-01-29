const Model = require('./Schema');

const courses = [
    {
        title: "Curso de GraphQL",
        teacher: "Roberto Peinado",
        description: "Api con GraphQL",
        topic: "JavaScript",
    },
    {
        title: "Curso de GraphQL 2",
        teacher: "Roberto Peinado",
        description: "Api con GraphQL",
        topic: "JavaScript",
    },
    {
        title: "Curso de GraphQL 3",
        teacher: "Roberto Peinado",
        description: "Api con GraphQL",
        topic: "JavaScript",
    }
]

const get = async () => await Model.find();

const getOne = async (id) => {
    
    const filter = {_id: id}
    const result = await Model.findOne(filter);
    return result;
}

const add = () => {
    const myCourse = new Model(courses[2]);
    myCourse.save().then((result) => {
        console.log(result);
        console.log('curso agregado a la database');
    }).catch((err) => {
        console.error(err);
    });
}

module.exports = {
    get,
    getOne,
    add
}