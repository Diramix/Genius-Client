# Genius Client

## Это модификация для настольного приложения Яндекс Музыка, не модифицированную версию которого можно загрузить [здесь](https://music.yandex.com/download/)
### Genius Client или его разработчик не связаны с Яндексом или какой-либо из их компаний, сотрудников и т.д.
<details>
   <summary>Сообщение для сотрудников Яндекс Музыки</summary>
   
   Поскольку вы сочли код TheKingOfTime полезным и скопировали некоторые части [отсюда](https://github.com/TheKing-OfTime/YandexMusicModClient/commit/5384285a8de1101102fc21f593266807b38a304f#diff-c314348839e9fcfdd871cc449297e9cf3f9631701ff29758014ba11bf9200ba0) (более конкретно, событие PLAYER_ACTION) и добавили его в ванильный клиент, возможно, вы захотите нанять его.
   Его работа будет намного эффективнее, если он буду работать над исходным кодом в уютном бомжарнике, а не с минифицированной и прогнанной через webpack версией кода!
</details>


## Установка

> [!WARNING]  
> ### Установка модификации для неподходящей версии клиента может привести к непредсказуемым результатам.
> Перед установкой убедитесь, что версия клиента и версия, для которой было написана модификация, совпадают.
> Это можно сделать на странице релиза.

0. Загрузите последнюю версию клиента Яндекс музыки с официального сайта https://music.yandex.com/download/
1. Откройте командную строку (Win + R -> cmd -> Enter)
2. Выполните команду.

Команда для установки обычной версии
```bat
curl -L https://github.com/Diramix/Genius-Client/releases/download/Genius-Client-1.5.0/app.asar > %localappdata%/Programs/YandexMusic/resources/app.asar
```

Команда для установки версии с системной рамкой
```bat
curl -L https://github.com/Diramix/Genius-Client/releases/download/Genius-Client-1.5.0/app-wsf.asar > %localappdata%/Programs/YandexMusic/resources/app.asar
```
3. Готово!

> [!NOTE]  
> После установки модификации может потребоваться повторный вход в аккаунт.


## Возможности

### Discord RPC
<details>
   <summary>Подробнее</summary>

Удалены надписи в RPC "by" и "on".

</details>

### Удалена анимация запуска Яндекс Музыки
<details>
    <summary>Подробнее</summary>
Всех же бесит эта ужасная анимация!? Так вот, её больше нет!

Яндекс Музыка запускается быстро и плавно.
</details>

### Добавлен Volume Master
<details>
    <summary>Подробнее</summary>
	
![image](https://github.com/user-attachments/assets/78f842c6-5259-42b6-8b2a-c38ab7ea2314)

Теперь вы можете менять громкость на ALT + колёсико мыши вверх или вниз

**Создатель этого скрипта:**

<div align="center">

[![Avatar](https://github.com/user-attachments/assets/bdf69eba-3e60-4006-9aed-c071afc2c7a2)](https://github.com/Maks1mio)

**[EvT (Maks1mio)](https://github.com/Maks1mio)**

Нажмите чтобы перейти на страницу создателя скрипта

</div>

</details>

### Скрипт No Concerts
<details>
    <summary>Подробнее</summary>
Встроен скрипт "No Concerts 1.0.3" для удаления блоков концертов и донатов.
	
![image](https://github.com/user-attachments/assets/383c8112-474a-4cc9-8f22-733aaf44b9d5)
</details>

### Скрипт Name Blur
<details>
    <summary>Подробнее</summary>
Встроен скрипт "Name Blur 1.0.1" который блюрит ник.
	
![image](https://github.com/user-attachments/assets/c282f990-cb66-40a8-98a6-5830fc4e681c)

</details>

### Скрипт MoveToFirst
<details>
    <summary>Подробнее</summary>
Встроен скрипт "MoveToFirst 1.0.1" который перемещает закреп с лайкнутыми песнями на верх.

</details>

### Свободное изменение размера окна
<details>
    <summary>Подробнее</summary>
	
![image](https://github.com/user-attachments/assets/67256d66-312f-4303-8d95-4f947af32547)

</details>

### Версия с системной рамкой окна
<details>
    <summary>Подробнее</summary>
	
![image](https://github.com/user-attachments/assets/f5bf2616-bb45-4918-bbde-d208aa03fdf2)
![image](https://github.com/user-attachments/assets/0c4bb38a-1d3d-4a97-9ed5-2ca095c7fbe4)
![image](https://github.com/user-attachments/assets/50cd6be4-000e-4f64-ba42-bb80016f9b20)

</details>

## Настройки
Настройки можно найти в настройках Яндекс Музыки.

Доп. настройки можно найти по пути `%appdata%\YandexMusic\config.json`

## Поддержка
Если вам действительно понравился новый опыт использования Яндекс Музыки с этой модификацией, вы можете поддержать работу TheKingOfTime над ней:
<p align="left">
   <a href="https://boosty.to/thekingoftime/donate">
      <img width="300" alt="Поддержите меня на бусти" src="https://github.com/user-attachments/assets/7b341f16-6513-4138-a3c5-b5892b062f63">
   </a>
</p>

~~А ещё мне дайте деняг:~~
<p align="left">
   <a href="https://boosty.to/Diramix">
      <img width="165" alt="Поддержите меня на бусти" src="https://github.com/user-attachments/assets/97220d0f-21c6-42bd-91ff-bfedbc2e32c8">
   </a>
</p>
