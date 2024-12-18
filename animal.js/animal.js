class Animal {
    constructor(name) {
      this.name = name;
    }
  
    speak() {
      console.log(`${this.name} makes a sound.`);
    }
  }
  class Dog extends Animal {
    constructor(name, breed) {
      super(name); // 親クラスのコンストラクタを呼び出す
      this.breed = breed;
    }
  
    speak() {
      console.log(`${this.name} barks.`);
    }
  }
  
  // オブジェクトの作成
  let dog = new Dog('Buddy', 'Golden Retriever');
  dog.speak(); // 結果: Buddy barks.
    