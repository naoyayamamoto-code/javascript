//変更するのが setter
//取得するのが getter

class Person {
    constructor(name, age) {
      this._name = name;
      this._age = age;
    }
  
    // ゲッター: 名前を取得
    get name() {
      return this._name;
    }
  
    // セッター: 名前を設定
    set name(newName) {
      this._name = newName;
    }
  
    // ゲッター: 年齢を取得
    get age() {
      return this._age;
    }
  
    // セッター: 年齢を設定
    set age(newAge) {
      if (newAge > 0) { // 年齢が正の数であることをチェック
        this._age = newAge;
      } else {
        console.log('年齢は正の数でなければなりません');
      }
    }
  }
  
  let person = new Person('Alice', 30);
  
  // ゲッターを使ってプロパティにアクセス
  console.log(person.name); // 結果: Alice
  console.log(person.age);  // 結果: 30
  
  // セッターを使ってプロパティを変更
  person.name = 'Bob';
  person.age = 25;
  
  console.log(person.name); // 結果: Bob
  console.log(person.age);  // 結果: 25
  
  // セッターのバリデーションチェック
  person.age = -5; // 結果: 年齢は正の数でなければなりません
  console.log(person.age);  // 結果: 25（変更されない）
  