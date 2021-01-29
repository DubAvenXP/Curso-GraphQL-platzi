const courses = [
    {
        _id: "ID1",
        title: "Curso de GraphQL",
        teacher: "Roberto Peinado",
        description: "Api con GraphQL",
        topic: "JavaScript",
    },
    {
        _id: "ID2",
        title: "Curso de GraphQL 2",
        teacher: "Roberto Peinado",
        description: "Api con GraphQL",
        topic: "JavaScript",
    },
    {
        _id: "ID3",
        title: "Curso de GraphQL 3",
        teacher: "Roberto Peinado",
        description: "Api con GraphQL",
        topic: "JavaScript",
    },
];

module.exports = {
    Query:{

        getCourses: () => courses,
        getCourse: (root, args) => {
            return courses.filter((data) => data._id === args.id).pop();
        },
        
    }
};
