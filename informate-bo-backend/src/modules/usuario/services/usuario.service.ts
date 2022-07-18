import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { UsuarioDto } from 'src/dto/UsuarioDto';
import { Usuario, UsuarioDocument } from 'src/schema/usuario.schema';

@Injectable()
export class UsuarioService {
    constructor(
        @InjectModel('Usuario') private readonly usuarioModel: Model<UsuarioDocument>,
    ) { }

    async guardarUsuario(usuarioDto: UsuarioDto): Promise<Usuario> {
        const usuario = new this.usuarioModel(usuarioDto);
        return usuario.save();

    }

    async obtenerUsuarios(): Promise<Array<Usuario>> {
        return this.usuarioModel.find().exec();

    }
}
