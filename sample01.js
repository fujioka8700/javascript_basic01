const person = {
    name: '山田太郎',
    age: 20,
    gender: 'male',
    address: {
        postcode: '100-0001',
        pref: '東京都',
        city: '千代田区'
    }
}

let btn = document.getElementById('btn');

btn.onclick = function () {
    let gender;

    switch (person.gender) {
        case 'male':
            gender = '男'
            break;
        case 'female':
            gender = '女'
            break;
        default:
            break;
    }
    document.getElementById('text').innerHTML = `
    <p>${person.name}</p>
    <p>${person.age}</p>
    <p>${gender}</p>
    <table>
    <tr>
        <th>
            郵便番号
        </th>
        <th>
            住所
        </th>
    </tr>
    <tr>
        <td>
            ${person.address.postcode}
        </td>
        <td>
        ${person.address.pref + person.address.city}
        </td>
    </tr>
</table>
    `
}