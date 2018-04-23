/**
 * Only members that are common to all types in the union can be accessed
 * Type assertion enables you to access all members
 * Type guards perform runtime checks and define type assertions for a specific scope
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

  /** type guard function returning a type predicate */
  public static isFish(pet: Pet): pet is Fish {
    return (<Fish>pet).swim != undefined
  }

  /** uses the type guard 'isFish' to narrow the type 'Pet' */
  public static layEggsAndFlee(pet: Bird | Fish): void {
    pet.layEggs();
    if (PetProcessor.isFish(pet)){
      pet.swim()
    }
    else {
      pet.fly()
    }
  }

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
        assertNever(pet)
    }
  }
}

/** Enables TypeScript to do exhaustiveness checks */
function assertNever(x: never): never {
  throw new Error("Unexpected object: " + x);
}