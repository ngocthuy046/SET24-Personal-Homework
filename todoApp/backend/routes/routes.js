module.exports = {
    user: {
        value: '/users',
        //method: GET
        register: {
            value: '/user/register' 
            /*  method: POST
                body:
                {
                "username": "your-username",
                "password": "your-password"
                }
             */
        },
        login: {
            value: '/user/login'
            /*  method: POST
                body:
                {
                "username": "your-username",
                "password": "your-password"
                }
             */
            //method: POST
        },
        logout: {
            value: '/user/logout'
            /*  method: DELETE
            */
        }
    },
    task: {
        create: {
            value: '/tasks' 
            /*  Create task: 
                method: GET
                body:
                {
                "title": "Task Title",
                "description": "Task Description",
                "completed": false
                }
            */ 
        },
        update: {
            value: '/task/:id'
            /*  Update task: 
                method: PUT
                body:
                {
                "title": "Task Title",
                "description": "Task Description",
                "completed": true
                }
            */ 
        },
        delete: {
            value: '/task/:id'
            /*  Delete task:
                method: DELETE
            */
            //method: DELETE
        },
        get: {
            value: '/tasks'
            /*  Get tasks:
                method: GET
                query:
                {
                "completed": true | false
                }
            */
        }
    }
};