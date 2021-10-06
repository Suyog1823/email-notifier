const Tracker = require('./models/tracker');



const tracks = [
    {
        fname: 'Suyog',
        lname: 'Gadal',
        desc: "student of chitkara",
        email: "1823@gmail.com",
        etime:"defalut",
        extime: "defalut",
        edate:"defalut"
    },
    {
        fname: 'Mex',
        lname: 'John',
        desc: "student of chitkara",
        email: "1999@gmail.com",
        etime:"defalut",
        extime: "defalut",
        edate: "defalut"
    },
   
];


const seedDB = async () => {
    
    await Tracker.deleteMany({});
    await Tracker.insertMany(tracks);
    console.log('DB Seeded');
}

module.exports = seedDB;