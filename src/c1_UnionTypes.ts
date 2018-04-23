namespace UnionTypes {
  /**
   * Only members that are common to all types in the union can be accessed
   * Type assertion enables you to access all members
   * Type guards perform runtime checks and define type assertions for a specific scope
   * */

  type Pet = Bird | Fish

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

  class PetProcessor {

    /** type guard function returning a type predicate */
    public static isFish(pet: Pet): pet is Fish {
      return (<Fish>pet).swim != undefined
    }

    /** uses the type guard 'isFish' to narrow the type 'Pet' */
    public static layEggsAndFlee(pet: Bird | Fish): void {
      pet.layEggs()
      if (PetProcessor.isFish(pet)) {
        pet.swim()
      }
      else {
        pet.fly()
      }
    }
  }
}