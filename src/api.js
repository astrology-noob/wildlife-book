class Api {

    static async getAll(path = "https://wwf-server.herokuapp.com/api/animals") {
        return await fetch(path).then(res => res.json()).then(data => data.data).then(data => data);
    }

    static async getSingle(id, path="https://wwf-server.herokuapp.com/api/animals") { // _id
        return await fetch(path + "/" + id).then(res => res.json()).then(data => data);
    }

    static async addAnimal(body, path="https://wwf-server.herokuapp.com/api/animals") {
        return await fetch(path + "/add", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify(body)
        }).then(res => res.json()).then(data => data);
    }

    static async updateAnimal(id, body, path="https://wwf-server.herokuapp.com/api/animals") {
        return await fetch(path + "/update/" + id, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify(body)
        }).then(res => res.json()).then(data => data);
    }
}

export default Api;