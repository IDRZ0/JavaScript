import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";

export type UsuarioDocument = Usuario & Document

@Schema()
export class Usuario {
    @Prop()
    userName: string;
    @Prop()
    pass: string;
    
}

export const UsuarioSchema = SchemaFactory.createForClass(Usuario);