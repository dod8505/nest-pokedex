import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { Poke, PokeResponse } from './interfaces/poke-response.interface';

@Injectable()
export class SeedService {
  constructor(private readonly httpService: HttpService) {}

  async executeSeed(): Promise<Poke[]> {
    const { data } = await this.httpService.axiosRef.get<PokeResponse>(
      'https://pokeapi.co/api/v2/pokemon?limit=2',
    );

    data.results.forEach(({ name, url }) => {
      const segments = url.split('/');
      const number = +segments[segments.length - 2];

      console.log({ name, number });
    });

    return data.results;
  }
}
