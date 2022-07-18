import { ApiProperty } from "@nestjs/swagger";
export class UsuarioDto {
    @ApiProperty({
        example: 'JuanP',
        description: 'Nombre de usuario del administrador'
    })
    userName: string;
    
    @ApiProperty({
        example: 'Juanito1234',
        description: 'Contraseña del administrador'
    })
    pass: string;
    
}