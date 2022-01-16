import http from "@/core/http-common"
class TutorialsService {
    endPoint='top-headlines?country=us&apiKey=075640c99ce94ef3aafdb7f1a3b09f4f';

    getAll() {
        return http.get(this.endPoint);
    }
    /* getById(id){
        return http.get( "${this.endPoint }/${id }" );
    } */
}

export default new TutorialsService();