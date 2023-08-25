import { ServiceDto } from '@/service';
import { AddressDto, ContactDto, LoginDto, NameDto } from '@/user';
import { ReviewDto } from '..';
export interface ProfileDto {
    address: AddressDto;
    contact: ContactDto;
    favorites: Array<ProfileDto>;
    login: LoginDto;
    name: NameDto;
    pictureUrl: string;
    services: Array<ServiceDto>;
    reviews: Array<ReviewDto>;
}
//# sourceMappingURL=profile.d.ts.map