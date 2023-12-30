import { AvailabilityDto } from './service/availability.js';
import { AddressDto } from './user/address.js';
import { ContactDto } from './user/contact.js';
import { LoginDto } from './user/login.js';
import { NameDto } from './user/name.js';
import { CategoryDto } from './category.js';

type LevelTypes = 'basic' | 'superPro';
interface ServiceDto {
    active: boolean;
    availability: AvailabilityDto;
    category: CategoryDto;
    description: string;
    level: LevelTypes;
    portfolio: Array<string>;
    profile: ProfileDto;
    shortDescription: string;
    subCategories: CategoryDto[];
    reviews: Array<ReviewDto>;
    yearsOfExperience: number;
}

interface ProfileDto {
    address: AddressDto;
    contact: ContactDto;
    favorites: Array<ProfileDto>;
    login: LoginDto;
    name: NameDto;
    pictureUrl: string;
    services: Array<ServiceDto>;
    reviews: Array<ReviewDto>;
}

interface ReviewDto {
    comment?: string;
    rating: number;
    reviewer: ProfileDto;
    worker: ProfileDto;
}

export { LevelTypes as L, ProfileDto as P, ReviewDto as R, ServiceDto as S };
