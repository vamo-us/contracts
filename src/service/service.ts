import { ProfileDto } from '@/user'
import { AvailabilityDto, CategoryDto, ReviewDto } from '..'

export type LevelTypes = 'basic' | 'superPro'

export interface ServiceDto {
  active: boolean
  availability: AvailabilityDto
  category: CategoryDto
  description: string
  level: LevelTypes
  portfolio: Array<string>
  profile: ProfileDto
  shortDescription: string
  subCategories: CategoryDto[]
  reviews: Array<ReviewDto>
  yearsOfExperience: number
}
