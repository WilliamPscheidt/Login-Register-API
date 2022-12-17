const mysql = require("mysql")

class DatabaseAdapter {
    constructor(configuration) {
        this.pool = mysql.createPool(configuration)
    }

    query(sql, values) {
        return new Promise((resolve, reject) => {
            this.pool.query(sql, values, (error, results) => {
                if (error) {
                    reject(error);
                } else {
                    resolve(results);
                }
            })
        })
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