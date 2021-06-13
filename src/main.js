function main() {
    class freelanceCalculator {
        constructor() {
            this.form = document.querySelector('#calcFORM');
            this.event();
        }
        event() {
            this.form.addEventListener('submit', e => {
                e.preventDefault();
                const valueTotal = this.isFieldValid(1);
                const workedHoursPerDays = this.isFieldValid(2);
                const workedDays = this.isFieldValid(3);
                const workedHolidays = this.isFieldValid(4);
            
                if(valueTotal && workedHoursPerDays && workedDays && workedHolidays) {
                    const fields = [
                        'valueTotalINPUT',
                        'workedHoursPerDaysINPUT',
                        'workedDaysINPUT',
                        'workedHolidaysINPUT'
                    ];
                    let total = document.querySelector(`#${fields[0]}`).value;
                    let hour = document.querySelector(`#${fields[1]}`).value;
                    let day = document.querySelector(`#${fields[2]}`).value;
                    let holiday = document.querySelector(`#${fields[3]}`).value;

                    const main = document.querySelector('main');
                    const content = `<span class="icon" id="close-result"><i class="fas fa-times"></i></span>
                    <p>O valor por hora do seu freelance será de <span class="value">${this.calculate(total, hour, day, holiday)}</span></p>`;
                    let resultDIV = document.createElement("DIV");
                    resultDIV.classList.add('result')
                    resultDIV.innerHTML = content;
                    main.appendChild(resultDIV);
                    document.querySelector('#close-result').addEventListener('click', () => {
                        resultDIV.parentNode.removeChild(resultDIV);
                    });
                    this.cleanInputValues();
                }
            })
        }

        isFieldValid(type) {
            let valid = true;
            let field;
            if (type === 1) {
                field = document.querySelector('#valueTotalINPUT');
                field.classList.remove('error');
                if (isNaN(field.value) || field.value == '') {
                    valid = false;
                    field.classList.add('error');
                }
            }
            else if (type === 2) {
                field = document.querySelector('#workedHoursPerDaysINPUT');
                field.classList.remove('error');
                if (isNaN(field.value) || field.value == '') {
                    valid = false;
                    field.classList.add('error');
                }
            }
            else if (type === 3) {
                field = document.querySelector('#workedDaysINPUT');
                field.classList.remove('error');
                if (isNaN(field.value) || field.value == '') {
                    valid = false;
                    field.classList.add('error');
                }
            }
            else if (type === 4) {
                field = document.querySelector('#workedHolidaysINPUT');
                field.classList.remove('error');
                if (isNaN(field.value) || field.value == '') {
                    valid = false;
                    field.classList.add('error');
                }
            }
            return valid;
        }

        calculate(valueTotal, workedHoursPerDays, workedDays, workedHolidays) {
            valueTotal = Number(valueTotal);
            workedHoursPerDays = Number(workedHoursPerDays);
            workedDays = Number(workedDays);
            workedHolidays = Number(workedHolidays);
            const valuePerHour = (valueTotal / (workedDays * 4 * workedHoursPerDays) ) + ( ( workedHolidays * workedDays * workedHoursPerDays ) );
            
            return `R$ ${valuePerHour.toFixed(2)}`;
        }

        cleanInputValues() {
            const fields = [
                'valueTotalINPUT',
                'workedHoursPerDaysINPUT',
                'workedDaysINPUT',
                'workedHolidaysINPUT'
            ];
            document.querySelector(`#${fields[0]}`).value = "";
            document.querySelector(`#${fields[1]}`).value = "";
            document.querySelector(`#${fields[2]}`).value = "";
            document.querySelector(`#${fields[3]}`).value = "";
        }
    }

    const calculate = new freelanceCalculator();
};
main();
