import {FormControl} from '@angular/forms';

export class CnpjValidator {
    static validCNPJ(input: FormControl): {[key: string]: boolean} {
        const STRICT_STRIP_REGEX = /[-\/.]/g;
        const LOOSE_STRIP_REGEX = /[^\d]/g;
        const BLACKLIST = [
            "00000000000000",
            "11111111111111",
            "22222222222222",
            "33333333333333",
            "44444444444444",
            "55555555555555",
            "66666666666666",
            "77777777777777",
            "88888888888888",
            "99999999999999"
        ];
        const stripped = function (number, strict) {
            const regex = strict ? STRICT_STRIP_REGEX : LOOSE_STRIP_REGEX;
            return (number || '').toString().replace(regex, '');
        };
        const verifierDigit = function(numbers) {
            let index = 2;
            const reverse = numbers.split('').reduce(function(buffer, number) {
                return [parseInt(number, 10)].concat(buffer);
            }, []);

            const sum = reverse.reduce(function(buffer, number) {
                buffer += number * index;
                index = (index === 9 ? 2 : index + 1);
                return buffer;
            }, 0);

            const mod = sum % 11;
            return (mod < 2 ? 0 : 11 - mod);
        };

        // CNPJ must be defined
        if (!stripped(input.value, '')) {
            return ({ validCNPJ : true });
        }

        // CNPJ must have 14 chars
        if (stripped(input.value, '').length !== 14) {
            return ({ validCNPJ : true });
        }

        // CNPJ can't be blacklisted
        if (BLACKLIST.includes(stripped(input.value, ''))) {
            return ({ validCNPJ : true });
        }

        let numbers = stripped(input.value, '').substr(0, 12);
        numbers += verifierDigit(numbers);
        numbers += verifierDigit(numbers);

        return !input ?
            null :
            numbers.substr(-2) === stripped(input.value, '').substr(-2) ?
                null :
                { validCNPJ : true };
    }
}
