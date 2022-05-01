import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PokemonController } from './pokemon/pokemon.controller';
import { PokemonService } from './pokemon/pokemon.service';
import { PokemonModule } from './pokemon/pokemon.module';

@Module({
  imports: [HttpModule, PokemonModule,],
  controllers: [AppController, PokemonController],
  providers: [AppService, PokemonService],
})
export class AppModule {}
