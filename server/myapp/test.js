var expect  = require('chai').expect;
var request = require('request');

it('Main page content', function() {
    request('http://localhost:3030' , function(error, response, body) {
        expect(body).to.equal('Helljhjho');
    });
});
