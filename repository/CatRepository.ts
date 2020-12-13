import { Cat } from '~/entities/Cat'

export class CatRepository {
  private init() {
    localStorage.cats = JSON.stringify([])
  }

  addCat(cat: Cat) {
    if (localStorage.cats === undefined || localStorage.cats === null) {
      this.init()
    }

    const cats: Array<Cat> = JSON.parse(localStorage.cats)
    cats.unshift(cat)
    localStorage.cats = JSON.stringify(cats)
  }

  getCats(): Cat[] {
    return JSON.parse(localStorage.cats)
  }

  getLatestCat(): Cat {
    const cats: Array<Cat> = JSON.parse(localStorage.cats)

    return cats[0]
  }

  isEmpty(): boolean {
    console.log(localStorage.cats)

    if (
      localStorage.cats === undefined ||
      localStorage.cats === null ||
      JSON.parse(localStorage.cats).length === 0
    ) {
      return true
    }
    return false
  }
}
