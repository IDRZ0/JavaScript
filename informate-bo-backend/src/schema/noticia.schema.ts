import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";

export type NoticiaDocument = Noticia & Document

@Schema()
export class Noticia {
    @Prop()
    titulo: string;
    @Prop()
    fecha: string;
    @Prop()
    fuente: string;
    @Prop()
    contenido: string;
    @Prop()
    imagenes: string;
    @Prop()
    secciones: string[];
}

export const NoticiaSchema = SchemaFactory.createForClass(Noticia);