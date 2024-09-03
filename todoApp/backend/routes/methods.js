var routerMethods = {
    get: function(req, res, path, callback) {
        if(req.url === path && req.method === "GET") {
            callback(req, res);
        };
    },
    put: function(req, res, path, callback) {
        if(req.url === path && req.method === "PUT") {
            callback(req, res);
        };
    },
    delete: function(req, res, path, callback) {
        if(req.url === path && req.method === "DELETE") {
            callback(req, res);
        };
    }
};

module.exports = routerMethods;