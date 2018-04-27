module IntersectionTypes {
  /**
   * intersection types allow you to combine multiple types into one mixin type
   * */

  type FlyingFish = Fish & Bird

  interface Bird {
    fly(): void
    layEggs(): void
  }

  interface Fish {
    swim(): void
    layEggs(): void
  }

  class PetProcessor {

    public static createFlyingFish(fish: Fish, bird: Bird): FlyingFish {
      return PetProcessor.merge(fish, bird)
    }

    public static merge<PetA, PetB>(a: PetA, b: PetB): PetA & PetB {
      return Object.assign({}, a, b)
    }

  }
}