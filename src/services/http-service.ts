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
        const request = apiClient.get<T[]>(this.endpoint, {signal: controller.signal})
        
        return {request, cancel: () => controller.abort()}
    }

    dummyFn<T extends Entity>(entity:T){
        return entity.id
    }

    postOne<T>(headers:any, body:any){
        const controller = new AbortController()
        const request = apiClient.post<T[]>(this.endpoint,body, {headers: headers, signal: controller.signal})
        
        return {request, cancel: () => controller.abort()}
    }

}

const httpService = (endpoint: string) => new HttpService(endpoint)

export default httpService