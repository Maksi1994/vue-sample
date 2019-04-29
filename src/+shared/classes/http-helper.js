import * as environment from "../../../.env/environment";

export class HttpHelper {

    static setup(VueHttp) {
        VueHttp.root = environment.API_URL;
    }
}
