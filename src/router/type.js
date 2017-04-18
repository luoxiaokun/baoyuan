import categories from 'components/categories/categories'
import category from 'components/categories/category/category'

export const categoryRouter = {
  path: '/categories',
  name: 'categories',
  component: categories
}
export const subCategoriesRouter = {
  path: '/categories/sub/:categoryId',
  name: 'sub_categories',
  component: category
}

