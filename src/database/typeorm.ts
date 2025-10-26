import { DataSource } from 'typeorm';
import * as path from 'path';
import * as dotenv from 'dotenv';
import {
  User,
  Contato,
  UsuariosContatos
} from '../app/entities';

import { CreateUsersTable1718145260000 } from './migrations/2025-04-28_10-39-00_create_users';
import { contatos1718145260000 } from './migrations/2025-04-28_10-39-04_create_contatos';
import { usuariosContatos1718145260000 } from './migrations/2025-04-28_10-39-06_create_usuarios_contatos';

// Garante que o arquivo .env da raiz do projeto seja carregado
const envPath = path.resolve(__dirname, '..', '..', '.env');
dotenv.config({ path: envPath });

const dataSource = new DataSource({
  type: 'postgres',
  // --- ALTERAÇÃO DE DEBUG ---
  // Forçando o host para 'localhost' para contornar o problema de carregamento do .env
  host: 'localhost', 
  port: parseInt(process.env.DB_PORT || '5432', 10),
  username: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
  entities: [
    User,
    Contato,
    UsuariosContatos,
  ],
  migrations: [
    CreateUsersTable1718145260000,
    contatos1718145260000,
    usuariosContatos1718145260000
  ],
});

export default dataSource;

