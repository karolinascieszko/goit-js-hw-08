# parcel-project-template

## Zalezności

Na komputerze musi być zainstalowana LTS-wersja Node.js.

## Przed rozpoczęciem pracy

Jeden raz na projekt zainstalować wszystkie zalezności.

npm ci

## Praca

Włączyć tryp pracy.

npm run dev
W przeglądarce przejść na http://localhost:1234.

### Deploy

Kod będzie automatycznie się zbierać i robić deploy aktualnej wersji projektu na GitHub Pages, w gałąź gh-pages, za kazdym razem jeśli zostaną wprowadzone zmiany w main. Na przykład, po bezpośrenim push lub po przyjęciu pull-request. Aby to działało musimy w pliku package.json zmienić pole homepage i skrypt build, zmieniając nazwe_uzytkownika i nazwe_repozytorium na swoje.

"homepage": "https://nazwa_uzytkownika.github.io/nazwa_repozytorium",
"scripts": {
  "build": "parcel build src/*.html --public-url /nazwa_repozytorium/"
},
Po jakimś czasie stronę mozna będzie zobaczyć na zywo pod adresem który jest wpisany w poprawione właściwości homepage, na przykład https://goitacademy.github.io/parcel-project-template.

### Деплой

Сборка будет автоматически собирать и деплоить продакшен версию проекта на GitHub Pages, в ветку
`gh-pages`, каждый раз когда обновляется ветка `main`. Например, после прямого пуша или принятого
пул-реквеста. Для этого необходимо в файле `package.json` отредактировать поле `homepage` и скрипт
`build`, заменив `имя_пользователя` и `имя_репозитория` на свои.

```json
"homepage": "https://имя_пользователя.github.io/имя_репозитория",
"scripts": {
  "build": "parcel build src/*.html --public-url /имя_репозитория/"
},
```

На всякий случай стоит зайти в настройки репозитория `Settings` > `Pages` и убедиться что продакшен
версии файлов раздаются из папки `/root` ветки `gh-pages`.

Через какое-то время живую страницу можно будет посмотреть по адресу указанному в отредактированном
свойстве `homepage`, например
[https://goitacademy.github.io/parcel-project-template](https://goitacademy.github.io/parcel-project-template).

## Pliki i folderzy

Wszystkie partials plików styłów powinny być w folderze src/sass i importować się w src/sass/main.scss
Zdjęcia dodawajcie w folder src/images, przed tym zoptymizujcie te zdjęcia które dodajecie. Program po prostu kopiuje wykorzystane zdjęcia aby system nie musiał optymizować je, bo na słabych komputerach to moze zająć duzo czasu.
