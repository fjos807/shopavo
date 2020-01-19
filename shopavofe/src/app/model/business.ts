import { User } from './user';

export class Business {

    constructor(name: string, businessType: string, productsType: string[], priceRange: string, stars: number, description: string, admis: User[], location: number[]) {
        this.name = name;
        this.businessType = businessType;
        this.productsType = productsType;
        this.priceRange = priceRange;
        this.stars = stars;
        this.description = description;
        this.admins = admis;
        this.location = location;
    }

    name: string;
    businessType: string;
    productsType: string[];
    priceRange: string;
    stars: number;
    description: string;
    admins: User[];
    location: number[];
}