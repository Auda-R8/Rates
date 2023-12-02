/* --- ___ --- ___ --- ___ --- ___ --- ___ *
*           Exported class Rates           *
*                                          *
*  Author:                        Auda_R8  *
*  Version:                         1.0.0  *
*  Docs:             www.cbr-xml-daily.ru  *
*  Git:      github.com/Auda-R8/Rates.git  *
*  Copyright:                   © Auda_R8  *
* --- ___ --- ___ --- ___ --- ___ --- ___ */

export class Rates {

    static #newpath = "https://www.cbr-xml-daily.ru/daily_json.js"
    static #path = "https://www.cbr-xml-daily.ru/latest.js"

    /*
    *   Local method to implement internal logic
    */
    static async #handlerJson() {
        return await (await fetch(this.#path)).json()
    }

    /*
    *    Returns the server response as an object
    */
    static async getJSON() {
        return await this.#handlerJson()
    }

    /*
    *   Returns default (local) currency
    */
    static async getBase() {
        return (await this.#handlerJson()).base
    }

    /*
    *   Returns today's date
    */
    static async getDate() {
        return (await this.#handlerJson()).date
    }

    /*
    *   Returns the currency coefficient from the
    *   rates object by name, for example: RUB, USD, EUR
    */
    static async getCurrency(name) {
        return (await this.#handlerJson()).rates[name]
    }

    /*
    *   Returns an array of rates values
    */
    static async getRates() {
        return (await this.#handlerJson()).rates
    }
}