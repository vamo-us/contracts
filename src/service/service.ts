import {
  AddressDto,
  AvailabilityDto,
  CategoryDto,
  ContactDto,
  ReviewDto,
} from '..'

export type LevelTypes = 'new' | 'basic' | 'superPro'

export interface ServiceDto {
  active: boolean
  address: AddressDto
  availability: AvailabilityDto[]
  category: CategoryDto
  contact: ContactDto
  description: string
  level: LevelTypes
  portfolio: string[]
  shortDescription: string
  subCategories: CategoryDto[]
  reviews: ReviewDto[]
  yearsOfExperience: number
}
