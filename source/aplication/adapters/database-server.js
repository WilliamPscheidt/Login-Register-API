const mysql = require("mysql2")
const configurations = require("../configurations/configurations.json")

class DatabaseAdapter {
    constructor() {
        this.pool = mysql.createPool(configurations.database_connection)
    }

    select(sql) {
        return new Promise((resolve, reject) => {
            this.pool.query(sql, (error, results) => {
                if (error) {
                    reject(error);
                } else {
                    resolve(results);
                }
            })
        })
    }

    insert(sql) {
        return new Promise((resolve, reject) => {
            this.pool.query(sql, (error, results) => {
                if (error) {
                    reject(error);
                } else {
                    resolve(results);
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