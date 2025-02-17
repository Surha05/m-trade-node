// тут тыпы загружаемых с 1с данных

// контрагенты (клиенты)
// адрес  /contractors/
const contractors = [
  {
    "guid": "6f8f40f8-4c4b-4d55-a60b-4b92a0bc5a1h", 
    "name": "Контрагент 1", 
    "code_1c": "C001", 
    "phone": "1234567890", 
    "email": "contact@contractor.com", 
    "delivery_address": "ул. Пушкина, д. 10", 
    "login": "contractor1", 
    "password": "password123"
  }
]

// номенклатуры
// адрес  /nomenclatures/
const nomenclatures = [
  {
    'guid': '5b8f40f8-4c4b-4d55-a60b-4b92a0bc5a1f', 
    'name': 'Товар 1', 
    'code_1c': 'T001', 
    'supplier_guid': '4c8d40f8-4c4b-4d55-a60b-4b92a0bc5a1e'
  }
]

// типы цен
// адрес  /price_types/
const price_types = [
  {
    'guid': '9f8f40f8-4c4b-4d55-a60b-4b92a0bc5a1j', 
    'name': 'Цена по договору', 
    'code_1c': 'PT001'
  }
]

// Привязка типа цены к контрагенту
// адрес  /contractors/{contractor_guid}/add_price_type/
const add_price_type = [
  {
    'partner_guid': '3c7f40f8-4c4b-4d55-a60b-4b92a0bc5a1d', 
    'price_type_guid': '9f8f40f8-4c4b-4d55-a60b-4b92a0bc5a1j'
  }
]

// единицы измерения
// адрес  /units/
const units = [
  {
    'guid': '7d8f40f8-4c4b-4d55-a60b-4b92a0bc5a1g', 
    'name': 'шт', 
    'code_1c': 'U001', 
    'coefficient': 1.0, 
    'is_base': True, 
    'nomenclature_guid': '5b8f40f8-4c4b-4d55-a60b-4b92a0bc5a1f'
  }
]

// заказы
// адрес  /orders/
const orders = [
  {
    "id": 1,
    "order_number": 1001,
    "order_date": "2024-11-27",
    "delivery_date": "2024-11-30",
    "contractor": "ООО Ромашка",
    "comment": "Срочная доставка",
    "delivery_address": "г. Москва, ул. Тверская, д. 10",
    "total_sum": 12000.50,
    "items": [
      {
        "line_number": 1,
        "guid_product": "c44b57af-2345-4f1b-b817-61de8965b91c",
        "guid_unit": "a12b57af-1234-4f1b-b817-61de1234b91a",
        "quantity": 10,
        "price": 500.25,
        "total": 5002.50
      },
      {
        "line_number": 2,
        "guid_product": "d24c97af-5678-4f1b-b817-61de8965c92b",
        "guid_unit": "b78c97af-5678-4f1b-b817-61de5678c92b",
        "quantity": 15,
        "price": 466.50,
        "total": 6997.50
      }
    ]
  },
]

// поставщики
// адрес  /suppliers/
const suppliers = [
  {
    'guid': '4c8d40f8-4c4b-4d55-a60b-4b92a0bc5a1e', 
    'name': 'Поставщик 1', 
    'code_1c': '1C001'
  }
]


// партнёры
// адрес  /partners/
// const partners = [
//   {
//     'guid': '3c7f40f8-4c4b-4d55-a60b-4b92a0bc5a1d', 
//     'name': 'Партнёр 1', 
//     'code_1c': 'P001'
//   }
// ]

// даркстор (склады)
// адрес  /dark_stores/
// const dark_stores = [
//   {
//     'guid': '8f8f40f8-4c4b-4d55-a60b-4b92a0bc5a1i', 
//     'name': 'Даркстор 1', 
//     'code_1c': 'DS001', 
//     'supplier_guid': '4c8d40f8-4c4b-4d55-a60b-4b92a0bc5a1e'
//   }
// ]


