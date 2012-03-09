exports.index = function(req, res){
  res.render(	
		'index',
		{ 
			title : 'Express'
		}
	)
	
};

exports.register = function(req, res){
  res.render(	
		'user/register',
		{ 
			title : 'Express'
		}
	)
	
};

exports.createuser = function(req, res){
  res.render(	
		'user/createuser',
		{ 
			title : 'Express'
		}
	)	
};



