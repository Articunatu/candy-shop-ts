export interface Order {
    id: number,
    firstName: string,
    lastName: string,
    address: string,
    zipCode: string,
    city: string,
    eMail: string,
    phoneNumber?: string
}