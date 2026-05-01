import { ICategory } from '@/src/interfaces/catalog.interface'

export const industryCatalog: ICategory[] = [
	{
		id: 'food',
		label: 'Пищевая промышленность',
		subcats: [{ id: 'all', label: 'Все' }],
		products: [
			{
				id: 1,
				name: '1С:Хлебобулочное и кондитерское производство 2. Модуль для 1С:ERP',
				badge: 'in_stock',
			},
			{
				id: 2,
				name: '1С:Бухгалтерия хлебобулочного и кондитерского предприятия',
				badge: 'in_stock',
			},
			{
				id: 3,
				name: '1С:Производство алкогольной продукции. Модуль для 1С:ERP',
				badge: 'in_stock',
			},
			{
				id: 4,
				name: '1С:ERP Управление мясоперерабатывающим предприятием 2',
				badge: 'in_stock',
			},
			{
				id: 5,
				name: '1С:Мясопереработка MES. Модуль для 1С:ERP',
				badge: 'in_stock',
			},
			{
				id: 6,
				name: '1С:Молокозавод . Модуль для 1С:ERP и 1С:КА2',
				badge: 'in_stock',
			},
			{
				id: 7,
				name: '1С:Производство мясной и рыбной продукции 2. Модуль для 1C:ERP',
				badge: 'in_stock',
			},
		],
	},
	{
		id: 'healthcare',
		label: 'Здравоохранение',
		subcats: [{ id: 'all', label: 'Все' }],
		products: [
			{ id: 8, name: '1С:Розница 8. Аптека', badge: 'in_stock' },
			{ id: 9, name: '1С:Медицина. Поликлиника', badge: 'in_stock' },
			{ id: 10, name: '1С:Медицина. Больница', badge: 'in_stock' },
			{
				id: 11,
				name: '1С:Медицина. Клиническая лаборатория',
				badge: 'in_stock',
			},
		],
	},
	{
		id: 'logistics-warehouse',
		label: 'Логистика и склад',
		subcats: [{ id: 'all', label: 'Все' }],
		products: [
			{
				id: 12,
				name: '1С:Предприятие 8. 1С-Логистика. Управление складом',
				badge: 'in_stock',
			},
			{
				id: 13,
				name: '1С:Предприятие 8. Управление автотранспортом Стандарт',
				badge: 'in_stock',
			},
			{
				id: 14,
				name: '1С:Предприятие 8. Управление автотранспортом Проф',
				badge: 'in_stock',
			},
			{
				id: 15,
				name: '1С:WMS Логистика. Управление складом',
				badge: 'in_stock',
			},
			{
				id: 16,
				name: '1С:Предприятие 8. TMS Логистика. Управление перевозками',
				badge: 'in_stock',
			},
			{
				id: 17,
				name: '1С:Предприятие 8. Транспортная логистика, экспедирование и управление автотранспортом КОРП',
				badge: 'in_stock',
			},
			{
				id: 18,
				name: '1С:Транспортная логистика, экспедирование и управление автотранспортом КОРП',
				badge: 'in_stock',
			},
			{
				id: 19,
				name: '1С:Управление автотранспортом. Модуль для 1С:ERP',
				badge: 'in_stock',
			},
		],
	},
	{
		id: 'construction',
		label: 'Строительство',
		subcats: [{ id: 'all', label: 'Все' }],
		products: [
			{
				id: 20,
				name: 'Модуль «Планирование строительства» для «1С:ERP»',
				badge: 'in_stock',
			},
			{
				id: 21,
				name: '1С:Предприятие 8. Бухгалтерия строительной организации',
				badge: 'in_stock',
			},
			{
				id: 22,
				name: '1С:Подрядчик строительства 4.0',
				badge: 'in_stock',
			},
			{ id: 23, name: '1С:Предприятие 8. Смета', badge: 'in_stock' },
			{
				id: 24,
				name: '1C:Предприятие 8. Элит-строительство',
				badge: 'in_stock',
			},
			{
				id: 25,
				name: '1С:ERP Управление строительной организацией 2',
				badge: 'in_stock',
			},
		],
	},
	{
		id: 'printing',
		label: 'Полиграфия',
		subcats: [{ id: 'all', label: 'Все' }],
		products: [
			{
				id: 26,
				name: '1С:Предприятие 8. Оперативная печать',
				badge: 'in_stock',
			},
			{
				id: 27,
				name: '1С:Предприятие 8. Широкоформатная печать',
				badge: 'in_stock',
			},
			{
				id: 28,
				name: '1С:Полиграфия 2. Модуль для 1С:ERP',
				badge: 'in_stock',
			},
		],
	},
	{
		id: 'resource-management',
		label: 'Управление ресурсами',
		subcats: [{ id: 'all', label: 'Все' }],
		products: [
			{
				id: 29,
				name: '1С:Предприятие 8. PDM Управление инженерными данными',
				badge: 'in_stock',
			},
			{
				id: 30,
				name: '1С:ERP+PM Управление проектной организацией 2',
				badge: 'in_stock',
			},
			{
				id: 31,
				name: '1С:Предприятие 8. ITIL Управление информационными технологиями предприятия',
				badge: 'in_stock',
			},
			{
				id: 32,
				name: '1С:Предприятие 8. MDM Управление нормативно-справочной информацией',
				badge: 'in_stock',
			},
			{
				id: 33,
				name: '1С:Предприятие 8. MES Оперативное управление производством',
				badge: 'in_stock',
			},
			{
				id: 34,
				name: '1С:Предприятие 8. МТО Материально-техническое обеспечение',
				badge: 'in_stock',
			},
			{
				id: 35,
				name: '1С:Предприятие 8. ТОИР Управление ремонтами и обслуживанием оборудования',
				badge: 'in_stock',
			},
			{
				id: 36,
				name: '1С:ТОИР Управление ремонтами и обслуживанием оборудования 2 КОРП',
				badge: 'in_stock',
			},
			{
				id: 37,
				name: '1С:ERP Управление предприятием 2',
				badge: 'in_stock',
			},
			{
				id: 38,
				name: '1С:ERP Агропромышленный комплекс 2',
				badge: 'in_stock',
			},
			{
				id: 39,
				name: '1С ITIL Управление информационными технологиями предприятия СТАНДАРТ',
				badge: 'in_stock',
			},
			{
				id: 40,
				name: 'Модуль 1C:PM Управление проектами для 1С:ERP',
				badge: 'in_stock',
			},
		],
	},
	{
		id: 'professional',
		label: 'Профессиональные услуги',
		subcats: [{ id: 'all', label: 'Все' }],
		products: [
			{ id: 41, name: '1С:SPA-Салон', badge: 'in_stock' },
			{ id: 42, name: '1С:Автосервис', badge: 'in_stock' },
			{ id: 43, name: '1С:Кадровое агентство', badge: 'in_stock' },
			{ id: 44, name: '1С:Общепит 8', badge: 'in_stock' },
			{ id: 45, name: '1С:Предприятие 8. Отель', badge: 'in_stock' },
			{ id: 46, name: '1С:Предприятие 8. Ресторан', badge: 'in_stock' },
			{
				id: 47,
				name: '1С:Предприятие 8. Турагентство. Базовая версия',
				badge: 'in_stock',
			},
			{
				id: 48,
				name: '1С:Предприятие 8. Турагентство',
				badge: 'in_stock',
			},
			{
				id: 49,
				name: '1С:Предприятие 8. Управление проектным офисом',
				badge: 'in_stock',
			},
			{
				id: 50,
				name: '1С:Предприятие 8. Управление сервисным центром',
				badge: 'in_stock',
			},
			{ id: 51, name: '1С:Салон красоты', badge: 'in_stock' },
			{
				id: 52,
				name: '1С:Такси и аренда автомобилей',
				badge: 'in_stock',
			},
			{ id: 53, name: '1С:Фитнес клуб', badge: 'in_stock' },
			{ id: 54, name: '1С:Фитнес клуб КОРП', badge: 'in_stock' },
			{ id: 55, name: '1С:Фотоуслуги', badge: 'in_stock' },
			{
				id: 56,
				name: '1С:Предприятие 8. Страховая компания 8 КОРП',
				badge: 'in_stock',
			},
			{
				id: 57,
				name: '1С:Предприятие 8. Управление ритуальными услугами',
				badge: 'in_stock',
			},
			{ id: 58, name: '1С:Театр', badge: 'in_stock' },
		],
	},
	{
		id: 'trade-enterprises',
		label: 'Торговые предприятия',
		subcats: [{ id: 'all', label: 'Все' }],
		products: [
			{ id: 59, name: '1С:Мобильная торговля', badge: 'in_stock' },
			{
				id: 60,
				name: '1С:Предприятие 8. Управление торговлей алкогольной продукцией',
				badge: 'in_stock',
			},
			{
				id: 61,
				name: '1С:Розница 8. Книжный магазин',
				badge: 'in_stock',
			},
			{
				id: 62,
				name: '1С:Розница 8. Магазин автозапчастей',
				badge: 'in_stock',
			},
			{
				id: 63,
				name: '1С:Розница 8. Магазин бытовой техники и средств связи',
				badge: 'in_stock',
			},
			{
				id: 64,
				name: '1С:Розница 8. Магазин одежды и обуви',
				badge: 'in_stock',
			},
			{
				id: 65,
				name: '1С:Розница 8. Магазин строительных и отделочных материалов',
				badge: 'in_stock',
			},
			{ id: 66, name: '1С:Розница 8. Салон оптики', badge: 'in_stock' },
			{
				id: 67,
				name: '1С:Розница 8. Ювелирный магазин',
				badge: 'in_stock',
			},
			{ id: 68, name: '1С:Управление аптечной сетью', badge: 'in_stock' },
		],
	},
	{
		id: 'other',
		label: 'Другие отрасли',
		subcats: [{ id: 'all', label: 'Все' }],
		products: [
			{
				id: 69,
				name: '1С:Электронное обучение. Корпоративный университет',
				badge: 'in_stock',
			},
			{ id: 70, name: '1C:ERP Энергетика', badge: 'in_stock' },
			{ id: 71, name: '1С:Садовод', badge: 'in_stock' },
			{ id: 72, name: '1С:Музей', badge: 'in_stock' },
			{
				id: 73,
				name: '1С-Рарус: Финансовый менеджмент',
				badge: 'in_stock',
			},
			{
				id: 74,
				name: '1С:Предприятие 8. Производственная безопасность. Охрана окружающей среды',
				badge: 'in_stock',
			},
			{
				id: 75,
				name: 'Модуль 1С:Аренда и управление недвижимостью для 1С:ERP',
				badge: 'in_stock',
			},
			{ id: 76, name: '1С:Музейный каталог', badge: 'in_stock' },
			{
				id: 77,
				name: 'Программно-методический комплекс 1С:Машиностроение 8',
				badge: 'in_stock',
			},
			{
				id: 78,
				name: '1С:ERP Горнодобывающая промышленность 2',
				badge: 'in_stock',
			},
			{ id: 79, name: '1С:Управление водоканалом 2', badge: 'in_stock' },
			{
				id: 80,
				name: '1С:Управляющая компания ЖКХ. Модуль для 1С:ERP и 1С:КА2',
				badge: 'in_stock',
			},
			{ id: 81, name: '1C:Управление теплосетью 2', badge: 'in_stock' },
			{
				id: 82,
				name: '1С:Риэлтор. Управление продажами недвижимости. Модуль для 1С:ERP',
				badge: 'in_stock',
			},
			{
				id: 83,
				name: '1С:Управление металлургическим комбинатом 2. Модуль для 1С:ERP',
				badge: 'in_stock',
			},
		],
	},
]

export const productsCatalog: ICategory[] = [
	{
		id: 'popular',
		label: 'Популярные товары',
		subcats: [
			{ id: 'all', label: 'Все' },
			{ id: 'regulated', label: 'Регламентированный учет' },
			{ id: 'trade-warehouse', label: 'Торговый и складской учет' },
			{ id: 'management', label: 'Управленческий учет' },
			{ id: 'complex', label: 'Комплексные решения' },
		],
		products: [
			{
				id: 1,
				name: '1С:Бухгалтерия 8',
				subcat: 'regulated',
				badge: 'in_stock',
			},
			{
				id: 2,
				name: '1С:Зарплата и управление персоналом 8',
				subcat: 'regulated',
				badge: 'in_stock',
			},
			{
				id: 3,
				name: '1С:Бухгалтерия КОРП МСФО',
				subcat: 'regulated',
				badge: 'in_stock',
			},
			{
				id: 4,
				name: '1C:Налоговый мониторинг. Бухгалтерия КОРП МСФО',
				subcat: 'regulated',
				badge: 'in_stock',
			},
			{
				id: 5,
				name: '1С:Управление торговлей 8',
				subcat: 'trade-warehouse',
				badge: 'in_stock',
			},
			{
				id: 6,
				name: '1С:Розница 8',
				subcat: 'trade-warehouse',
				badge: 'in_stock',
			},
			{
				id: 7,
				name: '1С:Управление нашей фирмой 8',
				subcat: 'management',
				badge: 'in_stock',
			},
			{
				id: 8,
				name: '1С:Документооборот 8',
				subcat: 'management',
				badge: 'in_stock',
			},
			{
				id: 9,
				name: '1С:Предприятие 8. Управляющий',
				subcat: 'management',
				badge: 'in_stock',
			},
			{
				id: 10,
				name: '1С:Договорчики 8',
				subcat: 'management',
				badge: 'in_stock',
			},
			{
				id: 11,
				name: '1С:Предприятие 8. Управляющий. Базовая версия',
				subcat: 'management',
				badge: 'in_stock',
			},
			{
				id: 12,
				name: '1С:Предприятие 8. Управляющий. Стандарт',
				subcat: 'management',
				badge: 'in_stock',
			},
			{
				id: 13,
				name: '1С:ERP Управление предприятием 2',
				subcat: 'complex',
				badge: 'in_stock',
			},
			{
				id: 14,
				name: '1С:Комплексная автоматизация 8',
				subcat: 'complex',
				badge: 'in_stock',
			},
			{
				id: 15,
				name: '1С:Предприятие 8. Комплект прикладных решений на 5 пользователей',
				subcat: 'complex',
				badge: 'in_stock',
			},
			{
				id: 16,
				name: '1С:Корпорация',
				subcat: 'complex',
				badge: 'in_stock',
			},
			{
				id: 17,
				name: '1С:Управление холдингом 8',
				subcat: 'complex',
				badge: 'in_stock',
			},
			{
				id: 18,
				name: '1С:Предприятие 8. CRM',
				subcat: 'complex',
				badge: 'in_stock',
			},
		],
	},
	{
		id: 'license',
		label: 'Лицензии 1С',
		subcats: [
			{ id: 'all', label: 'Все' },
			{ id: 'single', label: 'Однопользовательские лицензии' },
			{ id: 'multi', label: 'Многопользовательские лицензии' },
			{ id: 'korp', label: 'Лицензии КОРП' },
		],
		products: [
			{
				id: 19,
				name: '1С:Предприятие 8 ПРОФ. Клиентская лицензия на 1 рабочее место',
				subcat: 'single',
				badge: 'in_stock',
			},
			{
				id: 20,
				name: '1С:Предприятие 8 ПРОФ. Клиентская лицензия на 5 рабочих мест',
				subcat: 'multi',
				badge: 'in_stock',
			},
			{
				id: 21,
				name: '1С:Предприятие 8 ПРОФ. Клиентская лицензия на 10 рабочих мест',
				subcat: 'multi',
				badge: 'in_stock',
			},
			{
				id: 22,
				name: '1С:Предприятие 8 ПРОФ. Клиентская лицензия на 20 рабочих мест',
				subcat: 'multi',
				badge: 'in_stock',
			},
			{
				id: 23,
				name: '1С:Предприятие 8 ПРОФ. Клиентская лицензия на 50 рабочих мест',
				subcat: 'multi',
				badge: 'in_stock',
			},
			{
				id: 24,
				name: '1С:Предприятие 8 ПРОФ. Клиентская лицензия на 100 рабочих мест',
				subcat: 'multi',
				badge: 'in_stock',
			},
			{
				id: 25,
				name: '1С:Предприятие 8 ПРОФ. Клиентская лицензия на 300 рабочих мест 1',
				subcat: 'multi',
				badge: 'in_stock',
			},
			{
				id: 26,
				name: '1С:Предприятие 8 ПРОФ. Клиентская лицензия на 500 рабочих мест 2',
				subcat: 'multi',
				badge: 'in_stock',
			},
			{
				id: 27,
				name: '1С:Предприятие 8. Расширение для карманных компьютеров (включает лицензию на 5 КПК)',
				subcat: 'multi',
				badge: 'in_stock',
			},
			{
				id: 28,
				name: '1С:Предприятие 8 КОРП. Клиентская лицензия на 5 рабочих мест',
				subcat: 'korp',
				badge: 'in_stock',
			},
			{
				id: 29,
				name: '1С:Предприятие 8 КОРП. Клиентская лицензия на 10 рабочих мест',
				subcat: 'korp',
				badge: 'in_stock',
			},
			{
				id: 30,
				name: '1С:Предприятие 8 КОРП. Клиентская лицензия на 20 рабочих мест',
				subcat: 'korp',
				badge: 'in_stock',
			},
			{
				id: 31,
				name: '1С:Предприятие 8 КОРП. Клиентская лицензия на 50 рабочих мест',
				subcat: 'korp',
				badge: 'in_stock',
			},
			{
				id: 32,
				name: '1С:Предприятие 8 КОРП. Клиентская лицензия на 100 рабочих мест',
				subcat: 'korp',
				badge: 'in_stock',
			},
			{
				id: 33,
				name: '1С:Предприятие 8 КОРП. Клиентская лицензия на 300 рабочих мест 1',
				subcat: 'korp',
				badge: 'in_stock',
			},
			{
				id: 34,
				name: '1С:Предприятие 8 КОРП. Клиентская лицензия на 500 рабочих мест 2',
				subcat: 'korp',
				badge: 'in_stock',
			},
			{
				id: 35,
				name: '1С:Предприятие 8. Расширение для карманных компьютеров (включает лицензию на 5 КПК)',
				subcat: 'korp',
				badge: 'in_stock',
			},
		],
	},
	{
		id: 'services',
		label: '1С-Сервисы',
		subcats: [
			{ id: 'all', label: 'Все' },
			{
				id: 'docs',
				label: 'Для работы с документами и сдачи отчетности',
			},
			{
				id: 'сounteragent',
				label: 'Для работы с контрагентами и их проверки',
			},
			{ id: 'questions', label: 'Для решения возникающих вопросов' },
			{ id: 'internet', label: 'Для работы через Интернет' },
		],
		products: [
			{ id: 36, name: '1С:ЭДО', subcat: 'docs', badge: 'in_stock' },
			{ id: 37, name: '1С:Подпись', subcat: 'docs', badge: 'in_stock' },
			{
				id: 38,
				name: '1С:Отчетность',
				subcat: 'docs',
				badge: 'in_stock',
			},
			{
				id: 39,
				name: '1С:ДиректБанк',
				subcat: 'docs',
				badge: 'in_stock',
			},
			{ id: 40, name: '1С:ОФД', subcat: 'docs', badge: 'in_stock' },
			{
				id: 41,
				name: '1С:Кабинет сотрудника',
				subcat: 'docs',
				badge: 'in_stock',
			},
			{
				id: 42,
				name: '1С:Распознование документов',
				subcat: 'docs',
				badge: 'in_stock',
			},
			{
				id: 43,
				name: '1С:Контрагент',
				subcat: 'сounteragent',
				badge: 'in_stock',
			},
			{
				id: 44,
				name: '1С:ПАРК Риски',
				subcat: 'сounteragent',
				badge: 'in_stock',
			},
			{
				id: 45,
				name: '1С:КП (ИТС)',
				subcat: 'questions',
				badge: 'in_stock',
			},
			{
				id: 46,
				name: '1С:Коннект',
				subcat: 'questions',
				badge: 'in_stock',
			},
			{ id: 47, name: '1С:ФРЕШ', subcat: 'internet', badge: 'in_stock' },
			{
				id: 48,
				name: 'Аренда 1С',
				subcat: 'internet',
				badge: 'in_stock',
			},
		],
	},
	{
		id: 'bitrix',
		label: '1С-Битрикс24',
		subcats: [{ id: 'all', label: 'Все' }],
		products: [
			{
				id: 49,
				name: '1С-Битрикс. Управление сайтом',
				badge: 'in_stock',
			},
			{
				id: 50,
				name: '1С-Битрикс24. Корпоративный портал',
				badge: 'in_stock',
			},
			{ id: 51, name: 'Облачный сервис Битрикс24', badge: 'in_stock' },
		],
	},
]

export const equipmentCatalog: ICategory[] = [
	{
		id: 'kassy',
		label: 'Онлайн-кассы',
		subcats: [
			{ id: 'all', label: 'Все' },
			{ id: 'fisk', label: 'Фискальные регистраторы' },
			{ id: 'smart', label: 'Смарт-терминалы' },
			{ id: 'prosh', label: 'Прошивки и лицензии для ККТ' },
		],
		products: [
			{
				id: 1,
				name: 'АТОЛ СТБ 5 Смарт-терминал',
				subcat: 'smart',
				badge: 'on_order',
			},
			{
				id: 2,
				name: 'АТОЛ 91Ф Фискальный регистратор',
				subcat: 'fisk',
				badge: 'on_order',
			},
			{
				id: 3,
				name: 'Эвотор 5 Смарт-терминал',
				subcat: 'smart',
				badge: 'on_order',
			},
			{
				id: 4,
				name: 'АТОЛ 55Ф Фискальный регистратор',
				subcat: 'fisk',
				badge: 'on_order',
			},
			{
				id: 5,
				name: 'Эвотор 10 Смарт-терминал',
				subcat: 'smart',
				badge: 'on_order',
			},
			{
				id: 6,
				name: 'АТОЛ Connect. ИТС на 1 год',
				subcat: 'prosh',
				badge: 'on_order',
			},
		],
	},
	{
		id: 'shtrih',
		label: 'Оборудование для штрих-кодов',
		subcats: [
			{ id: 'all', label: 'Все' },
			{ id: 'scan', label: 'Сканеры штрих-кодов' },
			{ id: 'print', label: 'Принтеры этикеток' },
			{ id: 'ter', label: 'Терминалы сбора данных' },
		],
		products: [
			{
				id: 7,
				name: 'Mindeo MD6600-HD Сканер штрих-кодов',
				subcat: 'scan',
				badge: 'on_order',
			},
			{
				id: 8,
				name: 'АТОЛ SB 2108 Plus Сканер штрих-кодов',
				subcat: 'scan',
				badge: 'on_order',
			},
			{
				id: 9,
				name: 'MERTECH CL-2310 Сканер штрих-кода беспроводной',
				subcat: 'scan',
				badge: 'on_order',
			},
			{
				id: 10,
				name: 'TSC TE200 Принтер этикеток',
				subcat: 'print',
				badge: 'on_order',
			},
			{
				id: 11,
				name: 'Mindeo M40 Терминал сбора данных',
				subcat: 'ter',
				badge: 'on_order',
			},
		],
	},
	{
		id: 'vesy',
		label: 'Весы',
		subcats: [
			{ id: 'all', label: 'Все' },
			{ id: 'torg', label: 'Торговые весы' },
			{ id: 'cen', label: 'Весы с печатью этикеток' },
			{ id: 'fas', label: 'Фасовочные весы' },
		],
		products: [
			{
				id: 12,
				name: 'CAS AP-M15 Торговые весы',
				subcat: 'torg',
				badge: 'on_order',
			},
			{
				id: 13,
				name: 'Масса-К МК-15.2-RP-10-1 Весы с печатью этикеток',
				subcat: 'cen',
				badge: 'on_order',
			},
			{
				id: 14,
				name: 'Штрих - ПРИНТ М15-2.5 Д2И1 Весы с печатью этикетки',
				subcat: 'cen',
				badge: 'on_order',
			},
			{
				id: 15,
				name: 'MERTECH M-ER 334ACFLP Фасовочные напольные весы',
				subcat: 'fas',
				badge: 'on_order',
			},
			{
				id: 16,
				name: 'M-ER 224 Фасовочные настольные весы',
				subcat: 'fas',
				badge: 'on_order',
			},
		],
	},
	{
		id: 'yashiki',
		label: 'Денежные ящики',
		subcats: [
			{ id: 'all', label: 'Все' },
			{ id: 'mech', label: 'Механические' },
			{ id: 'auto', label: 'Подключаемые' },
		],
		products: [
			{
				id: 17,
				name: 'VIOTEH HVC-14М Денежный ящик',
				subcat: 'mech',
				badge: 'on_order',
			},
			{
				id: 18,
				name: 'POScenter 16ЕM Денежный ящик',
				subcat: 'mech',
				badge: 'on_order',
			},
			{
				id: 19,
				name: 'АТОЛ FlipTop-MB Денежный ящик',
				subcat: 'auto',
				badge: 'on_order',
			},
		],
	},
	{
		id: 'bank',
		label: 'Банковское оборудование',
		subcats: [
			{ id: 'all', label: 'Все' },
			{ id: 'pin', label: 'Пинпады и терминалы' },
			{ id: 'schot', label: 'Счётчики банкнот' },
			{ id: 'det', label: 'Детекторы банкнот' },
		],
		products: [
			{
				id: 20,
				name: 'АТОЛ PT-5 Платежный терминал',
				subcat: 'pin',
				badge: 'on_order',
			},
			{
				id: 21,
				name: 'Ingenico IWL220 Платежный терминал',
				subcat: 'pin',
				badge: 'on_order',
			},
			{
				id: 22,
				name: 'Dors-800 Счётчик банкнот',
				subcat: 'schot',
				badge: 'on_order',
			},
			{
				id: 23,
				name: 'MERCURY C-100 CIS MG Счётчик банкнот',
				subcat: 'schot',
				badge: 'on_order',
			},
			{
				id: 24,
				name: 'DORS 200 Детектор банкнот',
				subcat: 'det',
				badge: 'on_order',
			},
		],
	},
	{
		id: 'avto',
		label: 'Оборудование для автоматизации',
		subcats: [
			{ id: 'all', label: 'Все' },
			{ id: 'pos', label: 'POS-терминалы' },
			{ id: 'disp', label: 'Дисплеи покупателя' },
			{ id: 'print', label: 'Принтеры чеков' },
		],
		products: [
			{
				id: 25,
				name: 'АТОЛ МАКС 16 V2 POS терминал-моноблок',
				subcat: 'pos',
				badge: 'on_order',
			},
			{
				id: 26,
				name: 'АТОЛ JAZZ 16 Lite V2 POS терминал-моноблок',
				subcat: 'pos',
				badge: 'on_order',
			},
			{
				id: 27,
				name: 'POScenter PCP220 Дисплей покупателя',
				subcat: 'disp',
				badge: 'on_order',
			},
			{
				id: 28,
				name: 'MERTECH F58 Принтер чеков',
				subcat: 'print',
				badge: 'on_order',
			},
			{
				id: 29,
				name: 'MPRINT G80 Принтер чеков',
				subcat: 'print',
				badge: 'on_order',
			},
		],
	},
	{
		id: 'raskh',
		label: 'Расходные материалы',
		subcats: [
			{ id: 'all', label: 'Все' },
			{ id: 'lenta', label: 'Чековая лента' },
			{ id: 'etik', label: 'Этикетки' },
			{ id: 'kras', label: 'Красящие ленты' },
		],
		products: [
			{
				id: 30,
				name: 'Лента чековая (разные размеры)',
				subcat: 'lenta',
				badge: 'on_order',
			},
			{
				id: 31,
				name: 'Этикетки (разные размеры)',
				subcat: 'etik',
				badge: 'on_order',
			},
			{
				id: 32,
				name: 'Лента красящая',
				subcat: 'kras',
				badge: 'on_order',
			},
		],
	},
]
