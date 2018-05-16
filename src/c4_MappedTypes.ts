module MappedTypes {
  /**
   * mapped types let you create new types based on old ones by using the following operators:
   * * the index type query operator: keyof T
   * * the index access operator: T[K]
   * */

  type Attributes = 'strength' | 'constitution' | 'intelligence' | 'charisma'
  type FromUnion<U extends string, T> = {
    [Key in U]: T
  }
  type Pet = FromUnion<Attributes, number>

  const smallDogConfig: Pet = {
    strength: 4,
    constitution: 7,
    intelligence: 8,
    charisma: 8
  }

  // homomorphic type mapping
  type Readonly<S> = {
    readonly [Key in keyof S]: S[Key]
  }

  const smallDogConfigReadonly: Readonly<Pet> = {
    strength: 4,
    constitution: 7,
    intelligence: 8,
    charisma: 8
  }
}