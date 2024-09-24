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
2. Выполните эту команду
   ```bat
   curl -L https://github.com/Diramix/Genius-Client/releases/download/Genius-Client-1.1.1/app.asar > %localappdata%/Programs/YandexMusic/resources/app.asar
   ```
3. Готово!

> [!NOTE]  
> После установки модификации может потребоваться повторный вход в аккаунт.


## Возможности

### Discord Статус
<details>
   <summary>Подробнее</summary>

<details>
   <summary>Настройки</summary>
   
      "discordRPC": {
			"enable": true or false,                         //Включает или отключает disocrd RPC
			"applicationIDForRPC": "1124055337234858005",    //ID пользовательского приложения вашего для discord RPC
			"showButtons": true or false,                    //Включает или отключает все кнопки в состоянии discord 
			"overrideDeepLinksExperiment": true or false,    //Включает или отключает разделение веб-кнопок и кнопок рабочего стола на одну кнопку
			"showGitHubButton": true or false                //Включает или отключает кнопку Github, если для параметра overrideDeepLinksExperiment установлено значение true
      }
      
</details>

   
Добавляет поддержку отображения текущего трека как статуса в Discord
![изображение](https://github.com/user-attachments/assets/2816f0af-b5d3-4907-9dd4-d970f0f66593)

</details>

### Кнопки в превью панели задач
<details>
   <summary>Подробнее</summary>

   
Добавляет поддержку расширений панели задач (Taskbar Extensions)

<details>
   <summary>Настройки</summary>
      
      "taskBarExtensions": {
			"enable": true or false //Включает или отключает расширения панели задач
		}
      
</details>

![изображение](https://github.com/user-attachments/assets/9877e5d5-677f-4e0f-8bbe-9294db3f780f)

</details>

### Возврат кнопки дизлайка
<details>
   <summary>Подробнее</summary>
   
Возвращает кнопку дизлайка в плеер на главной.

![image](https://github.com/user-attachments/assets/22a83331-dfc4-4c7b-92c9-4fdbe2758910)

</details>

### Переключатель локализации
<details>
   <summary>Подробнее</summary>
   
Разблокирует переключатель локализации

![изображение](https://github.com/user-attachments/assets/2b4bbeaa-b12c-4987-892d-bacd2111732a)

</details>

### Улучшенная анимация Моей Волны
<details>
   <summary>Подробнее</summary>
   
Улучшает поведение анимации Моей Волны. Она начинает лучше адаптироваться к музыке. Также позволяет настраивать частоту кадров в секунду при рендеринге анимации.
<details>
   <summary>Настройки</summary>
      
      "vibeAnimationEnhancement": {
	    "maxFPS": 25,             	// Максимально допустимая частота кадров в секунду. По умолчанию: 25. Рекомендуемое: 25 - 144. Не устанавливайте значание меньше 1
	    "intensityCoefficient": 1, 	// Чувствительность музыкального анализа. По умолчанию: 1; Рекомендуемое: 0,5 - 2; При значении 0 отключается улучшение анимации (почти :D)
	    "linearDeBoost": 5,		// Коэффициент выделения пиков в треке от основного трека. По умолчанию: 5. Рекомендуемое: 2 - 8. Если 1, отключает разделение пиков.
	    "playOnAnyEntity": false,	// Если включено, анимация воспроизводится, даже если источник трека не Моя Волна.
	    "disableRendering": false	// Полностью отключает анимацию. Используйте только если почувствуете значительное падение кадров в секунду. В противном случае подберите оптимальное значение параметра maxFPS для вашей системы.
      }
      
</details>

До:

https://github.com/user-attachments/assets/23a8da4d-3d6a-43c6-a5f5-965e065ed912

После:

https://github.com/user-attachments/assets/b062a3ee-d05e-4cf3-8e03-b6f8bf66525c

</details>

### Эксперементы
<details>
   <summary>Подробнее</summary>
   
Позволяет включать/выключать эксперементы. Для этого вам нужно модифицировать `%appdata%\YandexMusic\config.json`:

По умолчанию переопределены эти эксперементы:
```js
{
      WebNextEqualizer: 'on',
      WebNextTrackAboutModal: 'on',
      WebNextLanguageSwitcher: 'on',
      WebNextUGC: 'on',
}
```
</details>

### Devtools & Панель Разработчика
<details>
   <summary>Подробнее</summary>
   
Devtools по умолчанию отключены. Чтобы включить их, вам необходимо изменить `%appdata%\YandexMusic\config.json`:

Измените `"enableDevTools": false` на `"enableDevTools": true`

![electron_L6SeZLnSAH](https://github.com/TheKing-OfTime/YandexMusicModClient/assets/68960526/ae841087-d910-45e5-a007-3fd869a493e1)

![electron_y6aOeckPLH](https://github.com/TheKing-OfTime/YandexMusicModClient/assets/68960526/4bde4785-9196-4ac6-ad3b-9ac5db5b61c8)

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

### Удалены блоки концертов
<details>
    <summary>Подробнее</summary>
Встроен скрипт "No Concerts 1.0.0" для удаления блоков концертов
	
![image](https://github.com/user-attachments/assets/383c8112-474a-4cc9-8f22-733aaf44b9d5)
</details>

## Настройки
Настройки можно найти в `%appdata%\YandexMusic\config.json`

Настройки внутри приложения появятся скоро™ 

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
