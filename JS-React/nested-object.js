const toyCompany = {
    redTeam: {
        production: {
            'redProdManager': 'Dan',
            'redWorkerOne': 'Steve',
            'redWorkerTwo': 'Larry'

        },
        sales: {
            'redSalesManager': 'Linda',
            'redSalesOne': 'Tony',
            'redSalesTwo': 'Matt'
        }
    },
    blueTeam: {
        production: {
            'blueProdManager': 'Stacy',
            'blueworkerOne': 'Kevin',
            'blueWorkerTwo': 'Robbie'

        },
        sales: {
            'blueSalesManager': 'Todd',
            'blueSalesOne': 'Jess',
            'blueSalesTwo': 'Nick'
        }
    }
};


function findEmployee(name){
    for(let team in toyCompany){
       /*  console.log(team); */
        let departments = toyCompany[team];
        for(let department in departments){
            //console.log(department);
            let jobTitle = departments[department];
            //console.log(jobTitle);
            for(let employee in jobTitle){
                if(jobTitle[employee] === name){
                   // console.log(`The employee ${name} is work for ${department} of this ${team}`);
                   // return `The employee ${name} is work for ${department} of this ${team}`
                }  
            }
        }
    }
}

findEmployee('Kevin');

const recordCollection = {
    2548: {
      albumTitle: 'Slippery When Wet',
      artist: 'Bon Jovi',
      tracks: ['Let It Rock', 'You Give Love a Bad Name']
    },
    2468: {
      albumTitle: '1999',
      artist: 'Prince',
      tracks: ['1999', 'Little Red Corvette']
    },
    1245: {
      artist: 'Robert Palmer',
      tracks: []
    },
    5439: {
      albumTitle: 'ABBA Gold'
    }
  };

  function updateRecords(records, id, prop, value) {
    for(let album in records){
       console.log(album);
        if(Number(album) === Number(id)){
            let obj = records[album];
            obj[prop] = value;
            //console.log(obj);
        }
    }
  }

  updateRecords(recordCollection, 5439, 'artist', 'ABBA');