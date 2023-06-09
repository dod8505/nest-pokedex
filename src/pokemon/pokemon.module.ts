import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose/dist';
import { Pokemon, PokemonSchema } from './entities/pokemon.entity';
import { PokemonController } from './pokemon.controller';
import { PokemonService } from './pokemon.service';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Pokemon.name, schema: PokemonSchema }]),
  ],
  controllers: [PokemonController],
  providers: [PokemonService],
  exports: [MongooseModule],
})
export class PokemonModule {}
