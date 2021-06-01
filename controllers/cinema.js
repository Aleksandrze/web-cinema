module.exports.getAll = function(req, res){
    res.status(200).json({
        cinema: {
            name: req.body.name,
            title: req.body.title
        }
    })
}

module.exports.getId = function(req, res){
    
}


module.exports.removeId = function(req, res){
    
}

module.exports.create = function(req, res){
    res.status(200).json({
        cinema: {
            name: req.body.name,
            title: req.body.title
        },
        messagr: 'Cinema create'
    })
}

module.exports.update = function(req, res){
    
}