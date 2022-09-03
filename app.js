let text = document.querySelector('.text')

let lang = prompt('Tilni tanlang: "uz", "ru", "en" ').toLowerCase()

while (!isNaN(lang) || lang == "") {
    lang = prompt('Tilni tanlang: "uz", "ru", "en" ').toLowerCase()
}

let year = new Date().getFullYear()

const users = {
    name: 'Ziyod Akhmedov',
    username: 'ZICO',
    email: 'ZICO@gmail.com',
    address: {
        street: 'Nurafshon',
        suite: 'Apt. 1',
        city: 'Tashkent',
        zipcode: '92998-3874',
        geo: {
            lat: '-77.5765',
            lng: '54.8798'
        }
    },
    phone: '1-770-736-8031 x56442',
    website: 'hildegard.org',
    company: {
        compName: 'Romaguera-Crona',
        catchPhrase: 'Multi-layered client-server neural-net',
        bs: 'Harness real time e-markets'
    }
}

function parserUserUz(data) {
    const {name, username, email, address: {street, suite, city, zipcode, geo: {lat, lng}}, phone, website, company: {compName, catchPhrase, bs}} = data  

    const currentYear = `${year}`,
          userName = `Foydalanuvchini Ismi: ${name}`,
          userNickName = `Foydalanuvchini Niki: ${username}`,
          userEmail = `Foydalanuchini email pochtasi: ${email}`,
          userStreet = `${name} ${city} shahri ${street} kochasi ${suite} uyda yashidi`,
          userHomeCordi = `Uyining koordinatasi shimoldan ${lat} janubdan ${lng}`,
          userZipCode = `Uning zip codi: ${zipcode}`,
          userPhone = `${name}ning telefon raqami: ${phone}`,
          userWebsite = `Uning shaxsiy website: ${website}`,
          userWorkAdd = `${compName} Kompaniyasida Ishlaydi`,
          userWork = `${catchPhrase} sohasida`,
          userJob = `Ushbu ${bs} sohasida ishlaydi`,
          
          userInfo = `${currentYear}\n${userName}\n${userNickName}\n${userEmail}\n${userStreet}\n${userHomeCordi}\n${userZipCode}\n${userPhone}\n${userWebsite}\n${userWorkAdd}\n${userWork}\n${userJob}`

        text.innerHTML = userInfo
    return userInfo
}

function parserUserRu(data) {
    const {name, username, email, address: {street, suite, city, zipcode, geo: {lat, lng}}, phone, website, company: {compName, catchPhrase, bs}} = data  

    const currentYear = `${year}`,
          userName = `Имя пользователя: ${name}`,
          userNickName = `Ник пользователя: ${username}`,
          userEmail = `Электронная почта пользователя: ${email}`,
          userStreet = `${name} Живет в городе ${city}, улица ${street}, в квартире ${suite}`,
          userHomeCordi = `Координаты дома ${lat} с Севера и ${lng} с Юга.`,
          userZipCode = `Его почтовый индекс: ${zipcode}`,
          userPhone = `Телефон ${name}: ${phone}`,
          userWebsite = `Его личный сайт: ${website}`,
          userWorkAdd = `Работает в компании: ${compName}`,
          userWork = `В поле ${catchPhrase}`,
          userJob = `Он работает на ${bs}`,
          
          userInfo = `${currentYear}\n${userName}\n${userNickName}\n${userEmail}\n${userStreet}\n${userHomeCordi}\n${userZipCode}\n${userPhone}\n${userWebsite}\n${userWorkAdd}\n${userWork}\n${userJob}`
          
        text.innerHTML = userInfo
    return userInfo
}

function parserUserEn(data) {
    const {name, username, email, address: {street, suite, city, zipcode, geo: {lat, lng}}, phone, website, company: {compName, catchPhrase, bs}} = data  

    const currentYear = `${year}`,
          userName = `Name: ${name}`,
          userNickName = `Username: ${username}`,
          userEmail = `User email: ${email}`,
          userStreet = `${name} lives in ${city}, street ${street}, apartment ${suite}`,
          userHomeCordi = `House coordinates ${lat} from the north and ${lng} from South.`,
          userZipCode = `His postal code: ${zipcode}`,
          userPhone = `${name}'s phone number: ${phone}`,
          userWebsite = `His personal website: ${website}`,
          userWorkAdd = `Works for ${compName} Company`,
          userWork = `Works at ${catchPhrase}`,
          userJob = `Works in ${bs}`,
          
          userInfo = `${currentYear}\n${userName}\n${userNickName}\n${userEmail}\n${userStreet}\n${userHomeCordi}\n${userZipCode}\n${userPhone}\n${userWebsite}\n${userWorkAdd}\n${userWork}\n${userJob}`
        
        text.innerHTML = userInfo
    return userInfo
}

if (lang == "uz") {
    console.log(parserUserUz(users));    
} else if (lang == "ru") {
    console.log(parserUserRu(users));    
} else {
    console.log(parserUserEn(users));
}

