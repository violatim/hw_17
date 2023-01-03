(function () {
    const cityValue = document.getElementById('city')
    const countryValue = document.getElementById('country')
    const butgetValue = document.getElementById('butget')
    const dataStart = document.getElementById('date_start')
    const dataEnd = document.getElementById('date_end')
    const personValue = document.getElementById('person')
    const transferValue = document.getElementById('transfer')

    const outputItems = document.getElementById('output_items')

    const storageValue = localStorage.getItem('travels_information')
    const array = (storageValue) ? JSON.parse(storageValue) : []


    const addInformation = (event) => {
        event.preventDefault()
        let items = {
            city: cityValue.value,
            country: countryValue.value,
            butget: butgetValue.value,
            dataStart: dataStart.value,
            dataEnd: dataEnd.value,
            person: personValue.value,
            transfer: transferValue.value
        }
        array.push(items)

        localStorage.setItem('AllTravels', JSON.stringify(array))
        outputItems.innerHTML = displayInformation(array)
    }

    document.addEventListener('DOMContentLoaded', () => {
        document.getElementById('task').addEventListener('click', addInformation)
    })

    const displayInformation = (array) => {
        if ((cityValue.value === "" || countryValue.value === "") ||  // after checking the value prints undefined WHY???
            (cityValue.value === "" && countryValue.value === "")) {
            alert('Please add options!')
        } else {
            return ['<ul class="p-0">', ...array.map((value) => {
                return `<li class="card p-3 mb-2">
                <div class="row">
                    <div class="col">
                    <h3>From Haifa To ${value.city} , ${value.country}</h3>
                        <div class="position-absolute top-0 end-0 p-2">
                            <img src="img/pencil.png" alt="pencil">
                            <img src="img/cancel.png" alt="cancel">
                            <img src="img/menu.png" alt="menu">
                        </div>
                    </div>
                    <h5 class="mt-1">Expected budget: ${value.butget} ILS</h5>
                    <h5 class="mt-1">${value.dataStart} - ${value.dataEnd} | ${value.person} person | ${value.transfer}</h5>
                </div>
            </li>`
            }), '</ul>'].join('')
        }
    }
})();


