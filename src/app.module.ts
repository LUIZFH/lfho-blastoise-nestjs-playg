import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PokemonController } from './pokemon/pokemon.controller';

@Module({
  imports: [],
  controllers: [AppController, PokemonController],
  providers: [AppService],
})
export class AppModule {}
