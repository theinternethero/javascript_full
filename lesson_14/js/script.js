window.addEventListener('DOMContentLoaded', () => { // Скрипт будет выполняться только после того, как прогрузиться DOM дерево (HTML)

    'use strict'; // Активен строгий режим
    let tabContent = document.querySelectorAll('.info-tabcontent'), // Псевдомассив со всеми таб контентами от 0 до 4
        info = document.querySelector('.info-header'), // Родитель табов
        tab = document.querySelectorAll('.info-header-tab'); // Псевдомассив со всеми табами от 0 до 4
    
    tab.forEach(function(item, i, mass) {
        console.log(`Ключ: ${i}, значение: ${item}, массив: ${mass}`);
    });
    // Функции, которые мне необходимо реализовать:
    // 1) Скрыть ненужный таб контент; 
    // 2) В зависимости от выбранного таба показывать таб контент;
    // 3) Событие 'click' на табы через делегирование событий;
    // 4) Цикл, перебирающий табы

    // 1) Состояние по умолчанию, скрывает весь таб контент:
    function hideTabContent(a) { // a - технический аргумент, он будет 1, он подставляется в i и скроется весь таб контент кроме первого таб контента
        for (let i = a; i < tabContent.length; i++) { // tabContent.lenght это количество элементов в псевдомассиве tabContent
            tabContent[i].classList.remove('show'); // при проходе каждой итерации мы будем использовать каждый элемент в массиве tabContent, а именно в каждом удалять класс 'show'
            tabContent[i].classList.add('hide'); // при проходе каждой итерации мы будем использовать каждый элемент в массиве tabContent, а именно в каждом добавлять класс 'hide'
        }
    }
    hideTabContent(1); // вызываем нашу функцию с аргументом 1
    
    // 2) Показывает какой-то определенный таб контент
    function showTabContent(b) { // b - технический аргумент, он нам нужен для того чтобы показать именно тот таб контент, который нам необходим при клике на таб
        if (tabContent[b].classList.contains('hide')) { // проверка действительно ли какой-то таб контент в зависимости от i скрыт? если скрыт, то:
            tabContent[b].classList.remove('hide'); // удаляем класс 'скрыть'
            tabContent[b].classList.add('show'); // добавляем класс 'показать'
        }
    }

    // 3) Назначение обработчика событий при клике на каждый из наш табов через делигирование событий
    info.addEventListener('click', (event) => { // объект event, ведь мы будем сравнивать куда мы кликаем
        let target = event.target; // помещаем в переменную на что именно происходит клик
        if (target && target.classList.contains('info-header-tab')) { // проверка на то, что таргет вообще есть и то что мы тыкнули именно на элемент с классом info-header-tab
            // 4) Здесь нам необходимо определить что каждый таб связан со своим табконтентом
            for(let i = 0; i < tab.length; i++) { // запускаем цикл, который перебирает табы и сравнивает каждый таб с тем куда мы кликнули
                if (target == tab[i]) { // если то куда мы нажали полностью совпадает с тем табом куда мы нажали, то произойдет:
                    console.log(target); // доказательство того, что совпадает
                    console.log(tab[i]); // доказательство того, что совпадет
                    hideTabContent(0); // вызываем функцию скрывания, скроем все наши табы через аргумент 0
                    showTabContent(i); // показываем тот таб, в которую попадает итератор, и это тот самый аргумент b
                    break; // чтобы цикл просто так дальше не работал, остановим его с помощью break;
                }
            }
        }
    });

    // Timer
    // 1) Задать дедлайн, время до которого наш таймер будет отсчитывать;
    // 2) Получить разницу между дедлайном и текущем временем и из этого значения вытащить секунды, минуты, часы
    // 3) Написать функцию, которая будет передавать данные на страницу
    // 4) Написать функцию, которая будет обновлять эти данные, каждую секунду, если у нас таймер
    
    // 1) Задать дедлайн, время до которого наш таймер будет отсчитывать:
    let deadline = '2019-05-31';
    
    // 2) Получить разницу между дедлайном и текущем временем и из этого значения вытащить секунды, минуты, часы:
    function getTimeRemaining(endtime) { // функция, которая будет считать разницу между дедлайном и текущем временем
        // endtime - аргумент, дата дедлайн в будущем
        let t = Date.parse(endtime) - Date.parse(new Date()), // разница между дедлайном и текущим временем
            // Date.parse(new Date()) - создает новую дату с текущем временем
            seconds = Math.floor((t/1000) % 60), // Math.floor - получаем только целые числа; % 60 - это чтобы получать хвостик-остаток от целого и чтобы число не было больше 60
            // например если бы мы разделили 5000 на 60, мы были получили количество минут и какие-то значения после запятой, это и есть наши секунды, которых не хватает до целой минуты
            minutes = Math.floor((t/1000/60) % 60),
            hours = Math.floor((t/(1000*60*60))); // так как финальное число, но если бы еще были дни:
            // Math.floor((t/(1000*60*60))) - математически это тоже самое что t делить на каждое число в знаменатели
            // hours = Math.floor((t/1000/60/60) % 24);
            // days = Math.floor((t/(1000*60*60*24)));

        return { // говорим функции верни нам это
        // так как мы не можем вернуть из функции сразу несколько функций
            'total' : t, // в будущемы будем использовать эту переменную как таймер, как только только она станет 0 мы остановим функцию
            'hours' : hours,
            'minutes' : minutes,
            'seconds' : seconds
        };
    }
    
    // 3) Написать функцию, которая будет передавать данные на страницу:
    function setClock(id, endtime) { // аргумент id - это айди родителя всех спанов со значениями, то есть айди обертки, куда мы будем вставлять все значения
        let timer = document.getElementById(id), // указанный id обертки
            hours = timer.querySelector('.hours'), // querySelector получает первый элемент с таким классом на странице
            minutes = timer.querySelector('.minutes'),
            seconds = timer.querySelector('.seconds'),
            timeInterval = setInterval(updateClock, 1000); // создаем переменную в котором говорится что функция updateClock(пускай она еще не создана) будет повторяться каждую секунду, она будет работать сама без вызова
            // timeInterval своего рода цикл, его не нужно вызывать
        
        // 3) и 4) 
        function updateClock() {
            let t = getTimeRemaining(endtime); // заточаем в переменную t, тот объект который мы вернули из функции пунктом 2)
            // if (t.hours < 10) { // проверка значения hours объекта из 2)
            //     hours.textContent = '0' + t.hours;
            // } else {
            //     hours.textContent = t.hours; // изменяем контент на ключ hours
            // }
            // if (t.minutes < 10) {
            //     minutes.textContent = '0' + t.minutes;
            // } else {
            //     minutes.textContent = t.minutes;
            // }
            // if (t.seconds < 10) {
            //     seconds.textContent = '0' + t.seconds;
            // } else {
            //     seconds.textContent = t.seconds;
            // }

            // Версия автора:
            function addZero(num) {
                if(num <= 9) {
                    return '0' + num;
                } else {
                    return num;
                }
            }

            hours.textContent = addZero(t.hours);
            minutes.textContent = addZero(t.minutes);
            seconds.textContent = addZero(t.seconds);
            
            if (t.total <= 0) { // как только total будет равно 0 или меньше все останавливай
                clearInterval(timeInterval); // останавливаем переменную
                hours.textContent = '00';
                minutes.textContent = '00';
                seconds.textContent = '00';
            }
        }
    }

    setClock('timer', deadline); // вызываем функции с аргументами id и endtime
    // в будущем мы можем еще создать этим вызовом еще одну функцию только со своим дедлайном и оберткой

    // Popup:

    let more = document.querySelector('.more'),
        overlay = document.querySelector('.overlay'),
        close = document.querySelector('.popup-close'),
        descriptionBtn = document.querySelectorAll('.description-btn');
    
    // Мой вариант:
    // for (let i = 0; i < descriptionBtn.length; i++) {
    //     descriptionBtn[i].addEventListener('click', function() {
    //     overlay.style.display = 'block';
    //     this.classList.add('more-splash');
    //     document.body.style.overflow = 'hidden';
    //     });
    // };

    // Вариант с forEach (ошибка потому что нельзя использовать стрелочную функцию в обработчике событий она не имеет контекста вызова):
    // descriptionBtn.forEach((descriptionBtn) => { // перебираю созданный массив аргументом является целый массив
    //     descriptionBtn.addEventListener('click', () => { // вешаю событие
    //         overlay.style.display = 'block';
    //         this.classList.add('more-splash'); // работать не будет брат
    //         document.body.style.overflow = 'hidden';
    //     });
    // });

    // Правильно (в ES5):
    descriptionBtn.forEach(function(descriptionBtn) { // перебираю созданный массив аргументом является целый массив
        descriptionBtn.addEventListener('click', function() { // вешаю событие
            overlay.style.display = 'block';
            this.classList.add('more-splash');
            document.body.style.overflow = 'hidden';
        });
    });
    
    more.addEventListener('click', function() {
        overlay.style.display = 'block';
        this.classList.add('more-splash');
        document.body.style.overflow = 'hidden'; // запретили прокрутку странице при открытом модальном окном
    });

    close.addEventListener('click', function() { // здесь можно использовать стрелочные функции, но хз зачем
        for (let i = 0; i < descriptionBtn.length; i++) {
            descriptionBtn[i].classList.remove('more-splash');
        }
        overlay.style.display = 'none';
        more.classList.remove('more-splash');
        document.body.style.overflow = ''; // возвращем в исходное состояние
    });

    overlay.addEventListener('click', function(event) { // функция, реализующая закрытие попапа при клике на overlay
        if(event.target == overlay) { // проверка на то что, именно когда мы тыкаем по overlay закрывалось модальное окно
            for (let i = 0; i < descriptionBtn.length; i++) { 
                descriptionBtn[i].classList.remove('more-splash');
            }
            this.style.display = 'none';
            more.classList.remove('more-splash');
            document.body.style.overflow = '';
        }
    });

    // Плавная прокрутка:
    let menu = document.getElementsByTagName('nav')[0];
    menu.addEventListener('click', function(event) {
        event.preventDefault(); // отменили действия по умолчанию;
        let target = event.target, // создали переменную в которой будет кликнутая ссылка
            blockID = target.getAttribute('href'), // эта переменная, в этой кликнутей ссылке будет помещен атрибут ссылка
            blockTarget = document.querySelectorAll(blockID)[0]; // хз
        blockTarget.scrollIntoView({ // 
            behavior: "smooth" // судя по всему анимация хз
        });
    });

    // Form:

    // 1) Создание объекта, в котором будут содержаться различные состояния нашего запроса, мы будем использовать текстовый формат оповещения, но это могут быть картинки, анимации, что угодно
    let message = {
        loading: 'Загрузка...', // Эта строка будет показываться, когда наш запрос еще не обработался
        success: 'Спасибо! Скоро мы с вами свяжемся!',
        failure: 'Что-то пошло не так...'
    };

    let form = document.getElementsByClassName('main-form')[0],
        formBottom = document.getElementById('form'),
        input = form.getElementsByTagName('input'),
        statusMessage = document.createElement('div'); // Элемент, в котором будет находится message
    
    statusMessage.classList.add('status');

    // Для того, чтобы отправить форму, нужно, чтобы было button, либо <input type="sumbit">
    function sendForm(elem) { // создаем функцию
        elem.addEventListener('submit', function(e) { // обработчик событий на submit каждой формы, а НЕ КНОПКИ!!!
            e.preventDefault(); // отменяет стандартное поведение отправки формы
            elem.appendChild(statusMessage); // при отправке каждой формы добавляем в форму div, в котором будет выводиться сообщение о статусе запроса
            let formData = new FormData(elem); // каждый раз создается именно та formData, откуда получаем данные, вместо elem указанная форма через аргумент

            function postData(data) { // в аргумент подставляется formData
                return new Promise(function(resolve,reject) { // возвращаем сразу новый промис без функции

                    let request = new XMLHttpRequest(); // создаем запрос
                    request.open('POST', 'server.php');
                    request.setRequestHeader ('Content-Type', 'application/x-www-form-urlencoded'); // мы говорим, что наш контент будет содержать данные, которые мы получили из формы
                    // Получаем данные из формы (в инпутах, из которых мы получаем данные, в них должны быть прописаны атрибуты name, иначе данные могут передаться некорректно)

                    request.onreadystatechange = function() { // обработчий события readystatechange, каждый раз проверяет изменения текущего статуса запроса
                        if (request.readyState < 4) {
                            resolve();
                        } else if(request.readyState === 4) {
                            if (request.status == 200 && request.status < 300) {
                                // здесь мы можем добавлять абсолютно любые вещи, даже прогресс бар загрузки
                                resolve();
                            }
                            else {
                                reject();
                            }
                        }
                    };
                    request.send(data); // открываем соединение, другими словами отправляем данные
                });
            } // End postData
        
            function clearInput() {
                for (let i = 0; i < input.length; i++) { // после сабмита очищаем все наши инпуты
                    input[i].value = '';
                }
            }

            postData(formData) // вызываем функцию
                .then(()=> statusMessage.innerHTML = message.loading)
                .then(()=> statusMessage.innerHTML = message.success)
                .catch(()=> statusMessage.innerHTML = message.failure)
                .then(clearInput) // если then идет после catch, то оно будет всегда выполняться вне зависимости от выполнения обещания
        });
    }
    sendForm(form);
    sendForm(formBottom);

    // Slider:

    let slideIndex = 1, // параметр текущего слайда, именно его мы и будем менять
        slides = document.querySelectorAll('.slider-item'), // получаем псевдомассив со всеми слайдами
        prev = document.querySelector('.prev'), // правая стрелочка навигации
        next = document.querySelector('.next'), // левая стрелочка навигации
        dotsWrap = document.querySelector('.slider-dots'), // обертка переключателей
        dots = document.querySelectorAll('.dot'); // получили псевдомассив со всеми переключателями
    
    // 1) Необходимо написать функцию, которая оставляла бы один слайдер, а другие скрывала, она должна принимать аргумент - номер слайдера, который нам необходимо показать
    // 2) При изменении slideIndex, у нас должны изменяться и точки
    // 3) Функция переключения слайдов

    showSlides(slideIndex); // вызываем функцию сокрытия слайдов по умолчанию

    function showSlides(n) { // аргумент n, для того чтобы когда мы будем вызывать эту функцию, она нам переключала слайды

        if (n > slides.length) { // проверка: если наши слайды закончились в каруселе, то мы возвращаемся к первому
            slideIndex = 1;
        }

        if (n < 1) { // если n < 1, то мы возвращаемся к самому последнему слайдеру
            slideIndex = slides.length; // индекс + 1 в length
        }

        slides.forEach((item) => item.style.display = 'none'); // перебрали и скрыли все слайды
        // for (let i = 0; i < slides.length; i++) { // то же самое, что выше
        //     slides[i].style.display = 'none';
        // }
        dots.forEach((item) => item.classList.remove('dot-active')); // убрали у всех точек активный класс

        slides[slideIndex - 1].style.display = 'block'; // вычитаем 1, потому что lingth это индекс +1
        dots[slideIndex - 1].classList.add('dot-active');
    }

    function plusSlides(n) { // сюда мы например подставляем 1
        showSlides(slideIndex += n); // из за +=n , 1 становится 2, и мы 2 аргументом передаем в функцию showSlides вызывая ее, тем самым показывая необходимый нам слайд
    }
    function currentSlide(n) { // когда мы тыкаем на четвертую точку например
        showSlides(slideIndex = n); // наш видимый слайд становится 4
    }

    prev.addEventListener('click', function() {
        plusSlides(-1); // перемещаемся назад от нашего текущего слайда, от этого значения зависит через сколько слайдов мы хотим путешествовать
    });

    next.addEventListener('click', function() {
        plusSlides(1); // перемещаемся вперед от нашего текущего слайда
    });

    // делегирование событий применяем:
    dotsWrap.addEventListener('click', function(event) {
        // нам нужно перебрать все точки и понять а на какую именно мы кликнули
        for (let i = 0; i < dots.length + 1; i++) {
            if (event.target.classList.contains('dot') && event.target == dots[i-1]) {
                currentSlide(i);
            }
        }
    });
});