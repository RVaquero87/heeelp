const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema(
  {
    creatorUserid: String,
    title: String,    
    summary: String,    
    content: String,
    shoppinglist: {
      pharmacy:[
        {
          name: String,    
          quantity: String,    
          image: String,
          kind:{
            type: String,
            enum: [
              "Farmacia",
              "Supermercado",
              "Lavandería",
              "Ayuda con máscotas",
              "Tareas de casa"
            ]
          },
        }
      ],
      market:[
        {
          name: String,    
          quantity: String,   
          image: String, 
          kind:{
            type: String,
            enum: [
              "Farmacia",
              "Supermercado",
              "Lavandería",
              "Ayuda con máscotas",
              "Tareas de casa"
            ]
          },
        }

      ],
      laundry:[
        {
          name: String,    
          quantity: String,
          image: String,
          kind:{
            type: String,
            enum: [
              "Farmacia",
              "Supermercado",
              "Lavandería",
              "Ayuda con máscotas",
              "Tareas de casa"
            ]
          },
        }

      ],
      homeDuties:[
        {
          name: String,    
          quantity: String,image: String,    
          kind:{
            type: String,
            enum: [
              "Farmacia",
              "Supermercado",
              "Lavandería",
              "Ayuda con máscotas",
              "Tareas de casa"
            ]
          },
        }

      ],
      petTasks:[
        {
          name: String,    
          quantity: String,
          image: String,    
          kind:{
            type: String,
            enum: [
              "Farmacia",
              "Supermercado",
              "Lavandería",
              "Ayuda con máscotas",
              "Tareas de casa"
            ]
          },
        }

      ],

    },
  },
  {
    timestamps: true
  }
);

const AidRequests = mongoose.model("AidRequests", userSchema);

module.exports = AidRequests;
