import { AddressDto } from '../user/address.js';
import { NameDto } from '../user/name.js';
import { S as ServiceDto } from '../review-ea85f0fe.js';
import '../service/availability.js';
import '../user/contact.js';
import '../user/login.js';
import '../category.js';

interface WorkerDto {
    address: Pick<AddressDto, 'city' | 'state'>;
    id: string;
    isFavorite: boolean;
    isTop10: boolean;
    name: NameDto;
    pictureUrl: string;
    rating: number;
    service: Pick<ServiceDto, 'availability' | 'category' | 'level' | 'subCategories'>;
}

export { WorkerDto };
