let start  = {
    "k1":"v1",
    "k2" : {"k3":"v3"},
    "k4" : {"k5":[{"it":"bi1"},{"it":"bi2"}]}
}
    
let mapping = {
    "k1":"l1",
    "k3":"l3",
    "k4" : {"k5":{"it":"bow"}}
}

// Створюємо метод, який буде змінювати об'єкти (Створити метод, який по стартовому об'єкту і маперу, створює новий з назвою final)
const changeValue = (oldObj, map) => {
    let final = {};
    // Ітеруємо об'экти
    for(let key in oldObj) {
        for(let k in map) {
            // Додаємо до об'єкту final ті ключі та значення які відсутні в меппері для оновлення ключа (Де в мапері ключ означає ключ в об'єкті start)
            if(!map.hasOwnProperty(key)) {
                final[key] = oldObj[key]
            }

            // Додаємо в final змінені ключі (значення відповідає на що потрібно змінити ключ в початковому об'єкті)
            if(key == k) {
                // Перевіряемо, якщо значення ключа в меппері не є строкою, то змінюємо його на строку
                if(typeof map[k] !== 'string') {
                    final[JSON.stringify(map[k])] = oldObj[key];
                } else {
                    final[map[k]] = oldObj[key];
                }
                
            }
        }
    }

    // Повертаємо final

    return final
}
// Викликаємо наш медот у консоль
console.log(changeValue(start, mapping))