/* --- ___ --- ___ --- ___ --- ___ --- ___ *
*           Exported class Mask            *
*                                          *
*  Author:                        Auda_R8  *
*  Version:                         1.0.0  *
*  Docs:    github.com/Auda-R8/MaskJS.git  *
*  Git:     github.com/Auda-R8/MaskJS.git  *
*  Copyright:                   © Auda_R8  *
* --- ___ --- ___ --- ___ --- ___ --- ___ */

export class Mask {

    /**
     * @private
     * @type {HTMLElement|null} - HTML-элемент, к которому применяется маска.
     */
    static #element = null

    /**
     * @private
     * @type {string|null} - Тип маски, который следует применить.
     */
    static #maskType = null

    /**
     * @private
     * @type {Object} - Типы масок, каждый входящий тип обрабатывается
     * соответствующим методом
     */
    static #maskTypes = {
        phone: {
            phoneDefault: Mask.#phoneDefault,                              // +7 (***) ***-**-**
            phoneWithoutBrackets: Mask.#phoneWithoutBrackets,              // +7 *** ***-**-**
            phoneWithoutDash: Mask.#phoneWithoutDash,                      // +7 (***) *** ** **
            phoneOnlySpaces: Mask.#phoneOnlySpaces,                        // +7 *** *** ** **
            phoneOnlyDash: Mask.#phoneOnlyDash,                            // +7 ***-***-**-**
            phoneAbonentGroup: Mask.#phoneGroup,                           // +7 *** *** ****
            phoneAbonentFullGroup: Mask.#phoneFullGroup,                   // +7 *** *******
            phoneAbonentDash: Mask.#abonentDash,                           // +7 *** *** **-**
            phoneAbonentGroupBrackets: Mask.#phoneGroupBrackets,           // +7 (***) *** ****
            phoneAbonentFullGroupBrackets: Mask.#phoneFullGroupBrackets,   // +7 (***) *******
        },
    }

    static #phoneDefault(element) {
        
    }

    static #phoneWithoutBrackets(element) {

    }

    static #phoneWithoutDash(element) {

    }

    static #phoneOnlySpaces(element) {

    }

    static #phoneOnlyDash(element) {

    }

    static #phoneGroup(element) {

    }

    static #phoneFullGroup(element) {

    }

    static #abonentDash(element) {

    }

    static #phoneGroupBrackets(element) {

    }

    static #phoneFullGroupBrackets(element) {

    }

    /**
     * Применяет маску к элементу.
     * @param {HTMLElement} element - HTML-элемент, к которому применяется маска.
     * @param {string} maskType - Тип маски, который следует применить.
     *   Возможные значения: 'moneyDot', 'dateDot', 'moneySpace', и т.д.
     * @returns {void}
     */
    static useMask(element, maskType) {
        maskType.includes('phone') ? Mask.#maskTypes.phone[maskType](element) : Mask.#error('phone', maskType)
    }

    static #error(categoryTypes, maskType) {
        const errors = {
            phone: `Error in create phone mask! Your maskType: ${maskType} is not exist, use another`,
        }

        console.error(errors[categoryTypes])
    }
}
