import { AddressDto, NameDto, ServiceDto } from '..'

export interface WorkerDto {
  address: Pick<AddressDto, 'city' | 'state'>
  id: string
  isFavorite: boolean
  isTop10: boolean
  name: NameDto
  pictureUrl: string
  rating: number
  service: Pick<
    ServiceDto,
    'availability' | 'category' | 'level' | 'subCategory'
  >
}
