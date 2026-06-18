export interface Workshop {
    id: number;
    title: string;
    description: string;
    ageGroup: string;
    duration: string;
    mode: string;
    fee: number;
    startDate: string;
    instructor: string;
    rating: number;
    totalStudents: number;
    image: string;
}
export interface WorkshopResponse {
    success: boolean;
    message: string;
    data: Workshop[];
}