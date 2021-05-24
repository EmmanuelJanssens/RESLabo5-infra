var Chance = require('chance');
var chance = new Chance();

module.exports = {    
     generateCountries: function(){
        var numCountries = chance.integer({
            min:0,
            max:10
        });
    
        console.log(numCountries);
        var countries = [];
    
        for(var i = 0; i < numCountries; i++){
    
            var independence = chance.date({
                american: false,
                string: true,
                year: chance.integer({ min: 1600, max: 2000}),
                month: chance.integer({min:1,max: 12}),
                day:chance.integer({min: 1,max: 31})
            });
            
            countries.push({
                name:chance.word(
                    chance.integer({
                        min: 3,
                        max: 20
                    })),
                language:chance.word(
                    chance.integer({
                        min: 3,
                        max: 20
                    })),
                independenceDay: independence,
                population: chance.integer({min: 400,max: 30000000})
    
            })        
        };
        console.log(countries);
        return countries;
    }
    
}
