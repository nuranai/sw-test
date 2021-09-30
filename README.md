# Star-Wars task

**Краткое описание**: 
Нужно сделать приложение, которое выводило бы информацию о персонажах из звездных войн.

**ТЗ**:
Необходимо реализовать SPA приложение с двумя страницами, главная и "любимые герои".

*Главная страница*:
На главной странице нужно выводить карточки с героями. 
Карточка состоит из:
изображения героя;
его имени;
планеты проживания (homeworld, можно получить по адресу https://swapi.dev/planets/${id}/ );
кнопки "♥️" (иконка-сердечко) по клику на которую герой попадает в раздел "любимые герои", при повторном нажатии, герой должен удаляться из списка "любимые герои".

В качестве хранилища для "любимых героев", можно использовать localStorage.
Картинки для героев получать по адресу https://starwars-visualguide.com/assets/img/characters/{characterId}.jpg.

*Страница "любимые герои"*:
На странице "любимые герои" нужно выводить карточки героев которые были добавлены в "любимые герои" (по клику на соответсвующую кнопку).
Карточки героев идентичны карточкам с главной страницы.

Также обязательно реализовать поиск по имени персонажа и фильтрацию по полу персонажа на обоих страницах.

### Инструкция по запуску

* Сначала установите зависимости

```
npm install
```

* Запустите 

```
npm start
```
