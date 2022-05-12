 
function get() {
    const personList = [
        {
            id: 1,
            name: 'alex',
            email: 'pando@hotmai.com',
            birthDate: '12-031991',
            address: {
              id: 0,
              street: 'cale salamanadxca',
              state: 'valencia',
              city: 'valencia',
              country: 'spain',
              zip: '33212'
            }
        }
        
    ]
    return personList;
}

function post() {
    const personList = [
        {
            id: 1,
            name: 'alex',
            email: 'pando@hotmai.com',
            birthDate: '12-031991',
            address: {
              id: 0,
              street: 'cale salamanadxca',
              state: 'valencia',
              city: 'valencia',
              country: 'spain',
              zip: '33212'
            }
        }
    ]
    return personList;
}

function getId() {
    const personList = [
        {
            "id": 0,
            "name": "string",
            "email": "string",
            "birthDate": "string",
        },
        {
            "id": 1,
            "name": "string",
            "email": "string",
            "birthDate": "string",
        }
        
    ]
    return personList;
}

function dilete() {
    const personList = [
        {
            "id": 0,
            "name": "string",
            "email": "string",
            "birthDate": "string",
        }
    ]
    return personList;
}

module.exports =  {
    get, post,getId, dilete
};