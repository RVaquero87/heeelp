const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema(
  {
    username: { type: String, unique: true, index: true },
    password: String,
    rol: {
      type: String,
      enum: ["Admin", "Helpers", "Helped"]
    },
    name: String,
    lastname: String,
    dniPassport: String,
    birthYear: Date,
    image: {
      type: String,
      default:
        "https://res.cloudinary.com/dbe3zwswv/image/upload/v1585834440/heeelp/default-profile_a6kktl.png"
    },
    street: String,
    number: Number,
    portal: String,
    stairs: String,
    floor: Number,
    letter: String,
    postalCode: Number,
    city: {
      type: String,
      enum: [
        "Alava",
        "Albacete",
        "Alicante",
        "Almería",
        "Asturias",
        "Avila",
        "Badajoz",
        "Barcelona",
        "Burgos",
        "Cáceres",
        "Cádiz",
        "Cantabria",
        "Castellón",
        "Ciudad Real",
        "Córdoba",
        "La Coruña",
        "Cuenca",
        "Gerona",
        "Granada",
        "Guadalajara",
        "Guipúzcoa",
        "Huelva",
        "Huesca",
        "Islas Baleares",
        "Jaén",
        "León",
        "Lérida",
        "Lugo",
        "Madrid",
        "Málaga",
        "Murcia",
        "Navarra",
        "Orense",
        "Palencia",
        "Las Palmas",
        "Pontevedra",
        "La Rioja",
        "Salamanca",
        "Segovia",
        "Sevilla",
        "Soria",
        "Tarragona",
        "Santa Cruz de Tenerife",
        "Teruel",
        "Toledo",
        "Valencia",
        "Valladolid",
        "Vizcaya",
        "Zamora",
        "Zaragoza"
      ]
    },
    country: {
      type: String,
      default: "España"
    },
    lat: Number,
    lng: Number,
    legalCheck: String,
    visits: { type: Number, default: 0 }
  },
  {
    timestamps: true
  }
);

const Users = mongoose.model("Users", userSchema);

Users.collection.createIndexes([
  {
    key: { username: 1 },
    name: "username"
  }
]);

module.exports = Users;
