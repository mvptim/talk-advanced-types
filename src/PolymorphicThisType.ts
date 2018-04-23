/**
 * Vererbung und korrekte Rückgabe des this-Kontexts
 * Als Quiz: Weiß jemanc, warum das ohne this-Type nicht funktioniert?
 * */

abstract class Pet{
  protected starvation: number = 0

  public feed(){
    this.starvation += 10
    return this
  }
}

class Dog extends Pet{
  private happiness: number = 0

  public callGoodBoy(){
    this.happiness += 2
    return this
  }
}

const olaf = new Dog()
  .feed()
  .callGoodBoy()
