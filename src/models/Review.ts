export type Review = {
    id:string
    reviewer_name: {
        name:string
        profile_image: string
    }
    rating: string,
    review_text: string
}