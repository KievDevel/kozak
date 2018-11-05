/**
 * Time: 40min
 */
class Validator {
    constructor (text) {
        this.text  = text;

        this.openingSymbols = [ '(', '<', '[' ];
        this.closingSymbols = [ ')', '>', ']' ];
    }

    validate() {
        let text = this.text;
        this.__reset();

        /*
         * Go through text, symbol by symbol
         * If character isn't from list of symbols - ignore it
         * If new symbol is opening - add to stack
         * If new symbol is closing - check if it closes last opened symbol
         * If yes - continue
         * If it closes something else - exit (not valid)
         *
         * If stack is not empty - not enough closing symbols - exit
         */
        for (let idx = 0; idx < text.length; idx++) {
            if (this.openingSymbols.includes(text[idx])) {
                this.__push(text[idx]);
                continue;
            }

            if (this.closingSymbols.includes(text[idx])) {

                if (this.__isValidClosingSymbol(text[idx])) {
                    this.__pop();
                } else {
                    this.result = 0;
                    break;
                }
            }
        }

        if (this.stack.length > 0) {
            this.result = 0;
        }

        return this;
    }

    setText(text) {
        this.text = text;

        return this;
    }

    outputResult() {
        console.log(this.result);
    }

    __push(symbol) {
        this.stack.push(symbol);
    }

    __pop() {
        this.stack.pop();
    }

    __getLast() {
        return this.stack[this.stack.length - 1];
    }

    __isValidClosingSymbol(closingSymbol) {
        let lastOpenedSymbol = this.__getLast();

        // TODO: refactor comparison - extract symbols
        return (
            (lastOpenedSymbol === '[' && closingSymbol === ']') ||
            (lastOpenedSymbol === '<' && closingSymbol === '>') ||
            (lastOpenedSymbol === '(' && closingSymbol === ')')
        )
    }

    __reset() {
        this.result = 1;
        this.stack  = [];
    }
}

let validator = new Validator();

validator.setText("---(++++)----").validate().outputResult(); // 1
validator.setText("").validate().outputResult(); // 1
validator.setText('before ( middle []) after ').validate().outputResult(); // 1
validator.setText(') (').validate().outputResult(); // 0
validator.setText('<( >)').validate().outputResult(); // 0
validator.setText('( [ <> () ] <> )').validate().outputResult(); // 1
validator.setText('( [ <> () ] <> ').validate().outputResult(); // 0