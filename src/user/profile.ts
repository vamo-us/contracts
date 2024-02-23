import { ReviewDto } from '@/review'
import { ServiceDto } from '@/service'
import { AddressDto, ContactDto, LoginDto, NameDto } from '@/user'

export interface ProfileDto {
  address: AddressDto
  contact: ContactDto
  favorites: ProfileDto[]
  login: LoginDto
  name: NameDto
  pictureUrl: string
  services: ServiceDto[]
  reviews: ReviewDto[]
}
