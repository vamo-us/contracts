import { ProfileDto } from "@/user"

export interface ReviewDto {
  comment?: string
  rating: number
  reviewer: ProfileDto
  worker: ProfileDto
}