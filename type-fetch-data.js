// тут тыпы загружаемых с 1с данных

// поставщики
// адрес  /suppliers/
const suppliers = [
  {
    'guid': '4c8d40f8-4c4b-4d55-a60b-4b92a0bc5a1e', 
    'name': 'Поставщик 1', 
    'code_1c': '1C001'
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

// партнёры
// адрес  /partners/
const partners = [
  {
    'guid': '3c7f40f8-4c4b-4d55-a60b-4b92a0bc5a1d', 
    'name': 'Партнёр 1', 
    'code_1c': 'P001'
  }
]

// контрагенты
// адрес  /contractors/
const contractors = [
  {
    'guid': '6f8f40f8-4c4b-4d55-a60b-4b92a0bc5a1h', 
    'name': 'Контрагент 1', 
    'code_1c': 'C001', 
    'phone': '1234567890', 
    'email': 'contact@contractor.com', 
    'delivery_address': 'ул. Пушкина, д. 10', 
    'login': 'contractor1', 
    'password': 'password123'
  }
]


// даркстор
// адрес  /dark_stores/
const dark_stores = [
  {
    'guid': '8f8f40f8-4c4b-4d55-a60b-4b92a0bc5a1i', 
    'name': 'Даркстор 1', 
    'code_1c': 'DS001', 
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

