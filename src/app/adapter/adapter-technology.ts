import {ApiTechnology} from '../dto/api-technology.dto';
import {Technology} from '../models/technologies';

export function adapterTechnology(technologyDto: ApiTechnology): Technology {
  return {
    id: technologyDto.idTechnology,
    name: technologyDto.name
  }
}

export function adapterTechnologyArray(technologiesDto: ApiTechnology[]) {
  return technologiesDto.map(adapterTechnology);
}
