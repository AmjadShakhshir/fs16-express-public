import { Category } from "../types/Category";

export class CategoryRepo {
  categories = [
    {
      id: 1,
      name: "Shoes",
      images: ["https://placeimg.com/640/480/any?r=0.9178516507833767"],
    },
    {
      id: 2,
      name: "Clothes",
      images: ["https://placeimg.com/640/480/any?r=0.9178516507833767"],
    },
    {
      id: 3,
      name: "Accessories",
      images: ["https://placeimg.com/640/480/any?r=0.9178516507833767"],
    },
    {
      id: 23,
      name: "Children's clothes",
      images: ["https://placeimg.com/640/480/any?r=0.9178516507833767"],
    },
  ];

  getAll() {
    return this.categories
  }

  getSingle(categoryId: number) {
    const category = this.categories.find(cat => cat.id === categoryId)
    return category
  }

  createCategory(newCategory: Category) {
    this.categories.push(newCategory)
    return newCategory
  }

  updateCategory(index: number, updatedCategory: Category) {
    this.categories.splice(index, 1, updatedCategory)
    return updatedCategory
  }

  deleteCategory(index: number) {
    this.categories.splice(index, 1)
    return this.categories
  }
}