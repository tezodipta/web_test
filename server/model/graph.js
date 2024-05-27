// const mongoose = require('mongoose');

// // Define the schema
// const DataSchema = new mongoose.Schema({

//     date:  Date,
        
   
//     Open:  Number,
        
 
//     High:  Number,
        

//     Low: Number,
       

//     Close: Number,
        

//     Volume:  Number,
       

//     Tomorrow:Number,
      

//     Target:  Number,
    
 
// });

// // Create the model
// const DataModel = mongoose.model('googles', DataSchema);

// // Export the model
// module.exports = DataModel;
const mongoose = require('mongoose');

const DataSchema = new mongoose.Schema({
  date: Date,
  Open: Number,
  High: Number,
  Low: Number,
  Close: Number,
  Volume: Number,
  Tomorrow: Number,
  Target: Number,
});

const DataModel = mongoose.model('googles', DataSchema);

module.exports = DataModel;
