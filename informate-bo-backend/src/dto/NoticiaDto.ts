import { ApiProperty } from "@nestjs/swagger";
export class NoticiaDto {
    @ApiProperty({
        example: 'Elecciones Subnacionales',
        description: 'Título de la Noticia'
    })
    titulo: string;
    //fecha: Date;
    @ApiProperty({
        example: 'El Deber',
        description: 'Fuente de la Noticia'
    })
    fuente: string;
    @ApiProperty({
        example: 'La elecciones subnacionales de Bolivia 2021...',
        description: 'Contenido de la Noticia'
    })
    contenido: string;
    @ApiProperty({
        example: 'https://www.noticiasfides.com/images/news/2021/01/c-c-voto-405359-3aa4-407724-A6D9.jpg',
        description: 'Imagen de la Noticia'
    })
    imagenes: string;
    @ApiProperty({
        example: ['deportes','internacional'],
        description: 'Secciones de la Noticia'
    })
    secciones: string[]
}