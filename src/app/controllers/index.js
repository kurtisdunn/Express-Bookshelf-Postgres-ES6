'use strict';

const home = function(req, res){
  res.render('main', {
		title: 'ES6 Test',
	}); 
}

export default { home };
