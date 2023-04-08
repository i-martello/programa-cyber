import { Schema, model, models } from "mongoose";

const cyberSchema = new Schema(
  {
    segundos: { type: Number, required: true },
    minutos: { type: Number, required: true },
    horas: { type: Number, required: true },
    precio: { type: Number, required: true },
    createdAt: {
      type: Date,
      default: Date.now,
    },
  },
  {
    versionKey: false,
  }
);

export const historial = models.historials || model("historials", cyberSchema);
