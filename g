class Person {
  #name; // プライベートフィールド
  #age;  // プライベートフィールド

  constructor(name, age) {
    this.#name = name;
    this.#age = age;
  }

  // パブリックメソッド: 名前を取得
  getName() {
    return this.#name;
  }

  // パブリックメソッド: 年齢を取得
  getAge() {
    return this.#age;
  }

  // パブリックメソッド: 名前を設定
  setName(name) {
    this.#name = name;
  }

  // パブリックメソッド: 年齢を設定
  setAge(age) {
    this.#age = age;
  }
}

let person = new Person('Alice', 30);
console.log(person.getName()); // 結果: Alice
console.log(person.getAge());  // 結果: 30

person.setName('Bob');
person.setAge(25);
console.log(person.getName()); // 結果: Bob
console.log(person.getAge());  // 結果: 25
