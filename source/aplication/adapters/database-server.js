const mysql = require("mysql2")
const configurations = require("../configurations/configurations.json")

class DatabaseAdapter {
    constructor() {
        this.pool = mysql.createPool(configurations.database_connection)
    }

    query(sql, params) {
        return new Promise((resolve, reject) => {
            this.pool.query(sql, params, (error, results) => {
                if (error) {
                    reject(error);
                    console.log(error)
                } else {
                    resolve(results);
                    console.log(results)
                }
            })
        })
    }

    close() {
        return new Promise((resolve, reject) => {
            this.pool.end((error) => {
                if(error) {
                    reject(error);
                } else {
                    resolve()
                }
            })
        })
    }
}

module.exports = DatabaseAdapter;