import { CACHE_MANAGER } from '@nestjs/cache-manager';
import { Cache } from 'cache-manager'; // ! Don't forget this import
import { Inject, Injectable } from '@nestjs/common';
import { CreateDataDto } from 'dtos/create-data.dto';

@Injectable()
export class AppService {
  constructor(@Inject(CACHE_MANAGER) private cacheManager: Cache) {}
  async getData(): Promise<string | undefined> {
    const value = await this.cacheManager.get<string>('key'); // ? Retrieve data from the cache

    return value;
  }

  async postData(createDataDto: CreateDataDto) {
    const { value } = createDataDto;
    await this.cacheManager.set('key', value); //  ? Set data in the cache
  }

  async deleteData() {
    await this.cacheManager.del('key'); // ? Delete data from the cache
  }
}
