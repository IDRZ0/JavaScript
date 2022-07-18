import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { REFUSED } from 'dns';
import { Model } from 'mongoose';
import { NoticiaDto } from 'src/dto/NoticiaDto';
import { Noticia, NoticiaDocument } from 'src/schema/noticia.schema';

@Injectable()
export class NoticiaService {
    constructor(
        @InjectModel('Noticia') private readonly noticiaModel: Model<NoticiaDocument>,


    ) { }

    async guardarNoticia(noticiaDto: NoticiaDto): Promise<Noticia> {
        const noticia = new this.noticiaModel(noticiaDto);
        noticia.fecha = new Date().toLocaleString();
        return noticia.save();

    }

    async obtenerNoticias(): Promise<Array<Noticia>> {
        return this.noticiaModel.find().exec();

    }

    async obtenerNoticia(tituloNoticia: string): Promise<Array<Noticia>> {
        return this.noticiaModel.find({ titulo: { "$regex": tituloNoticia } }).exec();

    }

    async obtenerNoticiaId(idNoticia: string): Promise<Noticia> {
        return await this.noticiaModel.findById(idNoticia); 
    }

    async obtenerNoticiasSeccion(seccion: string): Promise<Array<Noticia>> {
        const allNews = await this.noticiaModel.find();
        let noticias: Noticia[] = [];
        for (var i = 0; i < (await allNews).length; i++) {
            const noticia: Noticia = allNews[i];
            const secciones = noticia.secciones;
            for (var j = 0; j < secciones.length; j++) {
                const seccionNoticia = secciones[j];
                if (seccionNoticia == seccion) {
                    noticias.push(noticia);
                    break;
                }
            }
        }
        return noticias;
    }

    async actualizarNoticia(id: string, noticiaDto: NoticiaDto): Promise<Noticia> {
        return await this.noticiaModel.findByIdAndUpdate(id, noticiaDto, { new: true });
    }

    async eliminarNoticia(id: String): Promise<NoticiaDocument> {
        return this.noticiaModel.findByIdAndDelete(id);
    }
}
