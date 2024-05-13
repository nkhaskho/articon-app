export class Review {
    id?: number = 0;
    comment: string = "";
    created_at: Date = new Date();
    rating: string = "";
    user: number = 1;
    product: number = 1;
}
