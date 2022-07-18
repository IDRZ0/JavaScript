import { Body, Controller, Get, Post } from '@nestjs/common';
import { UsuarioDto } from 'src/dto/UsuarioDto';
import { UsuarioService } from '../services/usuario.service';

@Controller('usuario')
export class UsuarioController {
    constructor(
        private readonly _usuarioService: UsuarioService
    ) { }

    @Post()
    async create(@Body() usuarioDto: UsuarioDto) {
        return await this._usuarioService.guardarUsuario(usuarioDto);
    }

    @Get()
    async buscarNoticia() {
        return await this._usuarioService.obtenerUsuarios();

    }
}
