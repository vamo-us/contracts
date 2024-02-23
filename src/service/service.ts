import { AvailabilityDto, CategoryDto, ReviewDto } from '..'

export type LevelTypes = 'new' | 'basic' | 'superPro'

export interface ServiceDto {
  active: boolean
  availability: AvailabilityDto
  category: CategoryDto
  description: string
  level: LevelTypes
  portfolio: Array<string>
  shortDescription: string
  subCategories: CategoryDto[]
  reviews: Array<ReviewDto>
  yearsOfExperience: number
}
