export interface ResponseObject {
    id: string,
    name: string,
    data?: Record<string, string>
}

export type CreationRequest = Omit<ResponseObject, 'id'>

export interface CreationResponse extends ResponseObject {
    createdAt: string
}
