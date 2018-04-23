namespace TaggedUnionTypes {
  /**
   * Tagged union types enable you to narrow a type using an runtime tag
   * The type never can be used for exhaustiveness checks
   * */

  type Pet = Bird | Fish /*| Dog*/

  interface Bird {
    kind: 'bird'
    fly(): void
    layEggs(): void
  }

  interface Fish {
    kind: 'fish'
    swim(): void
    layEggs(): void
  }

  interface Dog {
    kind: 'dog'
    run(): void
  }

  class PetProcessor {

    /** uses type tags to narrow the type 'Pet' */
    public static move(pet: Pet): void {
      switch (pet.kind){
        case 'bird':
          pet.fly()
          break
        case 'fish':
          pet.swim()
          break
        default:
          ((x:never) => {})(pet)
      }
    }
  }
}