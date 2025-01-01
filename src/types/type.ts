export interface HomeService {
    id: number,
    slug: string,
    name: string,
    thumbnail: string,
    about: string,
    duration: number,
    price: number,
    is_popular: boolean,
    category: Category,
    benefits: Benefit[],
    testimonials: Testimonial[],
}

interface Benefit {
    id: number,
    name: string,
}

interface Testimonial {
    id: number,
    name: string,
    message: string,
    photo: string,
}

export interface Category {
    id: number,
    name: string,
    slug: string,
    photo: string,
    photo_white: string,
    home_services_count: number,
    home_services: HomeService[],
    popular_services: HomeService[],
}

export interface BookingDetails {
    id: number,
    name: string,
    phone: string,
    email: string,
    address: string,
    post_code: string,
    city: string,
    booking_trx_id: string,
    proof: string,
    is_paid: boolean,
    sub_total: number,
    total_tax_amount: number,
    total_amount: number,
    started_time: string,
    schedule_at: string,
    transaction_details: TransactionDetails[],
}

interface TransactionDetails {
    id: number,
    price: string,
    home_service_id: number,
    home_service: HomeService,
}

export interface CartItem { 
    service_id: number,
    slug: string,
    quantity: number,
}

export type BookingFormData = {
    name: string,
    email: string, 
    phone: string,
    started_time: string,
    schedule_at: string,
    post_code: string,
    address: string,
    city: string,
};