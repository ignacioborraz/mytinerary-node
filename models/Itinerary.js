import { model, Schema, Types } from "mongoose";

let collection = "itineraries";
let schema = new Schema(
  {
    name: { type: String, required: true },
    city_id: { type: Types.ObjectId, ref: "cities", required: true },
    price: { type: Number, required: true },
    duration: { type: Number, required: true },
    tags: [{ type: String, required: true }],
    photo: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);

let Itinerary = model(collection, schema);
export default Itinerary;
