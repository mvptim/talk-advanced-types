module TaggedUnionTypes {
  /**
   * tagged union types enable you to narrow a type using an runtime tag
   * the type 'never' can be used for exhaustiveness checks
   * */

  type Pet = Bird | Fish /*| Dog*/
  enum Kind { Bird, Fish, Dog }

  interface Bird {
    kind: Kind.Bird
    fly(): void
    layEggs(): void
  }

  interface Fish {
    kind: Kind.Fish
    swim(): void
    layEggs(): void
  }

  // interface Dog {
  //   kind: Kind.Dog
  //   run(): void
  // }

  class PetProcessor {

    /** uses type tags to narrow the type 'Pet' */
    public static move(pet: Pet): void {
      switch (pet.kind){
        case Kind.Bird:
          pet.fly()
          break
        case Kind.Fish:
          pet.swim()
          break
        default:
          const x: never = pet
          // ((x:never) => {})(pet)
      }
    }
  }
}