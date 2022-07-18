import { Body, Controller, Get, Param, Post, Req, Res, Query, Put, Delete, HttpStatus, NotFoundException } from '@nestjs/common';
import { NoticiaDto } from 'src/dto/NoticiaDto';
import { NoticiaService } from '../services/noticia.service';

@Controller('noticia')
export class NoticiaController {
    constructor(
        private readonly _noticiaService: NoticiaService
    ) { }

    @Post()
    async create(@Body() noticiaDto: NoticiaDto) {
        return await this._noticiaService.guardarNoticia(noticiaDto);
    }

    @Get()
    async buscarNoticia() {
        return await this._noticiaService.obtenerNoticias();

    }

    @Get('titulo/:titulo')
    async buscarUnaNoticia(@Param('titulo') titulo: string) {
        return await this._noticiaService.obtenerNoticia(titulo)

    }

    @Get('/:id')
    async buscarNoticiaPorId(@Res() res, @Param('id') noticiaId:string) {
        const noticia = await this._noticiaService.obtenerNoticiaId(noticiaId);
        if (!noticia) throw new NotFoundException('La noticia no existe!');
        return res.status(HttpStatus.OK).json(noticia);
    }

    @Get('seccion/:seccion')
    async bucarPorSeccion(@Param('seccion') seccion: string) {
        return await this._noticiaService.obtenerNoticiasSeccion(seccion)
    }

    @Put('/:id')
    async update(@Res() res, @Param('id') id: string, @Body() noticiaDto: NoticiaDto) {
        const noticias = await this._noticiaService.actualizarNoticia(id, noticiaDto);
        if (!noticias) throw new NotFoundException('La Noticia no existe');
        return res.status(HttpStatus.OK).json({
            message: 'La Noticia fue actualizada exitosamente',
            noticias
        });
    }
    @Delete('/:id')
    async delete(@Res() res, @Param('id') id: string) {
        const noticias = await this._noticiaService.eliminarNoticia(id);
        if (!noticias) throw new NotFoundException('La Noticia no existe');
        return res.status(HttpStatus.OK).json({
            message: 'La Noticia fue eliminada',
            noticias
        });

    }
}
