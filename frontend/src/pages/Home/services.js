import api from "../../services";

class CadastroServices {
    static register(data) {
        return api.post("/users", data)
    }

    static getUsers() {
        return api.get("/users?_limit=4&_sort=id&_order=desc")
    }
}

export default CadastroServices;