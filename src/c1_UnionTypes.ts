module UnionTypes {
  /**
   * only members that are common to all types in the union can be accessed
   * type assertion enables you to access all members
   * type guards perform runtime checks and remember resulting type assertions for a specific scope
   * */

  type Pet = Bird | Fish

  interface Bird {
    fly(): void
    layEggs(): void
  }

  interface Fish {
    swim(): void
    layEggs(): void
  }

  class PetProcessor {

    /** uses the type guard 'isFish' to narrow the type 'Pet' */
    public static layEggsAndFlee(pet: Pet): void {
      pet.layEggs()
      if (PetProcessor.isFish(pet)) {
        pet.swim()
      }
      else {
        pet.fly()
      }
    }

    /** type guard function returning a type predicate */
    public static isFish(pet: Pet): pet is Fish {
      return (<Fish>pet).swim != undefined
    }
  }
}