const store = require('../store/store');


module.exports = {
    Query:{
        getCourses: () => store.get(),
        getCourse: (root, {id}) => store.getOne(id)
        }        
}

