import apiClient from "./api-client";

interface Entity {
    id: number
}

class HttpService {
    endpoint: string

    constructor(endpoint: string){
        this.endpoint=endpoint
    }

    getAll<T>() {
        const controller = new AbortController()
        const request = apiClient.get<T[]>('/users', {signal: controller.signal})
        
        return {request, cancel: () => controller.abort()}
    }

    dummyFn<T extends Entity>(entity:T){
        return entity.id
    }

}

const httpService = (endpoint: string) => new HttpService(endpoint)

export default httpService