module Enums {
  /**
   * unless otherwise defined, enums are numerical by default and do automatically increment
   * except for const declared enums, they are actual objects at runtime and can be passed to functions
   * constant enums with literal enum members can be used like types
   * they can also be treated as union type of their members
   * only numeric enums include reverse mapping
   * */

  const enum Sex {
    Male = 'm',
    Female = 'f'
  }

  enum Gender {
    Male = 1,
    Female,
    Ze,
    Cat,
    Apache
  }

  interface Pet {
    sex: Sex
    gender: Gender
  }

  class Dog implements Pet {

    public readonly sex: Sex
    public readonly gender: Gender

    constructor(sex: Sex = Sex.Male, gender: Gender.Female) {
      this.sex = sex
      this.gender = gender
      // if (this.sex !== Sex.Male || this.sex !== Sex.Female) console.log('this should never happen')
      const testGender: string = Gender[this.gender]
    }

    public getGenderName(): string {
      return Gender[this.gender]
    }

    public getGenderValue(): Gender {
      return this.gender
    }
  }
}