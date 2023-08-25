import { AddressDto } from '../user/address.js';
import { ContactDto } from '../user/contact.js';
import { NameDto } from '../user/name.js';
import { S as ServiceDto } from '../review-c3585109.js';
import '../service/availability.js';
import '../user/login.js';
import '../category.js';

interface WorkerDetailDto {
    address: AddressDto;
    contact: ContactDto;
    id: string;
    isFavorite: boolean;
    isTop10: boolean;
    name: NameDto;
    pictureUrl: string;
    service: Omit<ServiceDto, 'profile' | 'reviews'>;
    rating: number;
    ratingCount: number;
}

export { WorkerDetailDto };
