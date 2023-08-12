import { ProfileDto } from '@/user'
import { AvailabilityDto, CategoryDto, ReviewDto } from '..'

export interface ServiceDto {
  active: boolean
  availability: AvailabilityDto
  category: CategoryDto
  description: string
  level: 'basic' | 'superPro' | 'top10'
  portfolio: Array<string>
  profile: ProfileDto
  shortDescription: string
  subCategory: CategoryDto
  reviews: Array<ReviewDto>
}
