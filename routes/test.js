var express  = require('express');
var router   = express.Router();

router.get('/:id/:rem', function(req, res, next){
	var id = req.params.id;
	var rem = req.params.rem;
	var util  = require('util'),
	spawn = require('spawn-command'),
	ls = spawn('/home/pi/testIOT/script.sh '+id.toString().replace(":","")+' '+rem.toString().replace(":",""));
	ls.stdout.on('data', function (data) {
		res.json(data.toString());
	});
});

module.exports = router;
