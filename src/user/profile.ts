import { ServiceDto } from '@/service'
import { AddressDto, ContactDto, LoginDto, NameDto } from '@/user'

export interface ProfileDto {
  address: AddressDto
  contact: ContactDto
  favorites: Array<ProfileDto>
  login: LoginDto
  name: NameDto
  pictureUrl: string
  services: Array<ServiceDto>
}
