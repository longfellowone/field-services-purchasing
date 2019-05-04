export const Order = (id, project_name, date, comments, status, items) => {
  return {
    id,
    project_name,
    date,
    comments,
    status,
    items,
  };
};

export const Item = (
  product_id,
  product_name,
  product_uom,
  product_category,
  quantity_requested,
) => {
  return {
    product_id,
    product_name,
    product_uom,
    product_category,
    quantity_requested,
  };
};

const item1 = Item('pid1', 'Product1', 'ea', 'category1', 29);
const item2 = Item('pid2', 'Product2', 'ft', 'category2', 1000);
const item3 = Item('pid3', 'Product3', 'ft', 'category1', 270);
const item4 = Item('pid4', 'Product4', 'ea', 'category2', 7);
const item5 = Item('pid5', 'Product5', 'ea', 'category2', 150);
const item6 = Item('pid6', 'Product6', 'ea', 'category1', 500);
const item7 = Item('pid7', 'Product7', 'ea', 'category1', 48);

const items1 = [item1, item2, item3, item4, item5, item6, item7];
const items2 = [item7, item6, item5, item4, item3, item2, item1];

const order1 = Order(
  'oid1',
  'Site Name 1',
  '1556396396',
  'Comments go here...',
  'Complete',
  items1,
);

const order2 = Order(
  'oid2',
  'Site Name 2',
  '1556396416',
  'Comments go here...',
  'Processed',
  items2,
);

const order3 = Order(
  'oid3',
  'Site Name 3',
  '1552186577',
  'Comments go here...',
  'Complete',
  items1,
);

const order4 = Order(
  'oid4',
  'Site Name 4',
  '1554064562',
  'Comments go here...',
  'Processed',
  items2,
);

const order5 = Order('oid5', 'Site Name 5', '1556396473', 'Comments go here...', 'New!', items1);

const order6 = Order(
  'oid6',
  'Site Name 6',
  '1552256702',
  'Comments go here...',
  'Processed',
  items2,
);

const order7 = Order(
  'oid7',
  'Site Name 7',
  '1552186855',
  'Comments go here...',
  'Complete',
  items1,
);

const order8 = Order('oid8', 'Site Name 8', '1556396416', 'Comments go here...', 'New!', items2);

const order9 = Order(
  'oid9',
  'Site Name 9',
  '1552186577',
  'Comments go here...',
  'Complete',
  items1,
);

const order10 = Order(
  'oid10',
  'Site Name 10',
  '1552256702',
  'Comments go here...',
  'Complete',
  items2,
);

export const orders = [
  order5,
  order4,
  order6,
  order8,
  order2,
  order10,
  order9,
  order7,
  order3,
  order1,
];
