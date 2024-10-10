const defaultText = document.getElementById('default-text')
const calculationsContainer = document.getElementById('calculations-container')

//form handling where the user can select diff types of mortgages an duser can choose + select one option
document.querySelectorAll(.mortgage-type).forEach(input => { // looks for this 'mortgae-type' element and stores it in this variable
    input.addEventListener('change', () => {
        document.querySelectorAll('.radio-inputs').forEach(div => {
            div.classList.remove('selected');
        })

        if (this.checked) {
            this.parentElement.classList.add('selected')
        }
    })

})

document.getElementById('calculate-btn').addEventListener('click', () => {
    const amount = parseFloat(document.getElementById('mortgage-amount').value)
    const term = parseFloat(document.getElementById('mortgage-term').value)
    const rate = parseFloat(document.getElementById('mortgage-term').value) / 100
    const mortgageType = doucmemt.querySelector('input[name="mortgage-type"]:checked')

    let isValid = true;

    document.querySelectorAll('.form-flex')forEach(el => {
        el.classList.remove('error')
    })

    if(isNaN(amount) || amount <= 0) {
        document.getElementById('amount-alert').style.display = 'block'
        document.getElementById('mortgage-amount-main').classList.add('error')
        isValid = false
    } else {
        document.getElementById('amount-alert').style.display = 'none'
    }

    if(isNaN(term) || term <= 0) {
        document.getElementById('term-alert').style.display = 'block'
        document.getElementById('mortgage-term-main').classList.add('error')
        isValid = false
    } else {
        document.getElementById('term-alert').style.display = 'none'
    }

    if(isNaN(rate) || rate <= 0) {
        document.getElementById('rate-alert').style.display = 'block'
        document.getElementById('interest-rate-main').classList.add('error')
        isValid = false
    } else {
        document.getElementById('rate-alert').style.display = 'none'
    }
})