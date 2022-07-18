import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Noticia, NoticiaSchema } from 'src/schema/noticia.schema';
import { NoticiaController } from './controllers/noticia.controller';
import { NoticiaService } from './services/noticia.service';

@Module({
    imports: [
        MongooseModule.forFeature([{ name: Noticia.name, schema: NoticiaSchema }])
    ],
    controllers: [
        NoticiaController],
    providers: [
        NoticiaService]
})
export class NoticiaModule { }
