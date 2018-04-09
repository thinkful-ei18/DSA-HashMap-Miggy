'use strict';
// no collision handling
class HashMap {
  constructor(initialCapacity = 8) {
    this.length = 0;
    this._slots = [];
    this._capacity = initialCapacity;
    this._deleted = 0;
  }

  get(key) {
    const index = this._findSlot(key);
    if (this._slots[index] === undefined) {
      throw new Error('Key error');
      // return null;
    }
    return this._slots[index].value;
  }

  set(key, value) {
    const loadRatio = (this.length + this._deleted + 1) / this._capacity;
    if (loadRatio > HashMap.MAX_LOAD_RATIO) {
      this._resize(this._capacity * HashMap.SIZE_RATIO);
    }

    const index = this._findSlot(key);

    this._slots[index] = {
      key,
      value,
      deleted: false
    };
    this.length++;
  }

  remove(key) {
    const index = this._findSlot(key);
    const slot = this._slots[index];
    if(slot === undefined) {
      throw new Error('Key error');
    }
    slot.deleted = true;
    this.length--;
    this._deleted++;
  }

  _findSlot(key) {
    const hash = HashMap._hashString(key);
    const start = hash % this._capacity;

    for (let i = start; i<start + this._capacity; i++) {
      const index = i % this._capacity;
      const slot = this._slots[index];
      if(slot === undefined || (slot.key === key && !slot.deleted)){
        return index;

      }
      // if (slot === undefined || (slot.key === slot.deleted)) {
      //   return index;
      // }

    }
  }

  _resize(size) {
    const oldSlots = this._slots;
    this._capacity = size;
    this.length = 0;
    this._deleted = 0;
    this._slots = [];

    for (const slot of oldSlots) {
      if (slot !== undefined && !slot.deleted) {
        this.set(slot.key, slot.value);
      }
    }
  }
  static _hashString(string) {
    let hash = 5381;
    for (let i=0; i<string.length; i++) {
      hash = (hash << 5) + hash + string.charCodeAt(i);
      hash = hash & hash;
    }
    return hash >>> 0;
  }
}


HashMap.MAX_LOAD_RATIO = 0.9;
HashMap.SIZE_RATIO = 3;

//'dad'
//hash d inrement that slot
//hash a increment that slot
//hash d increment that slot

function palindrome(string) {
  let palindromeCount = 0;
  let dromeHashMap = new HashMap();
  let dromeCheck = string.split('');

  for(let i = 0; i<dromeCheck.length; i++){
    try{
      dromeHashMap.get(dromeCheck[i]);
      dromeHashMap.set(dromeCheck[i],0);
    }
    catch(e){
      dromeHashMap.set(dromeCheck[i],1);
    }
  }
  dromeCheck = [...new Set(dromeCheck)];
  dromeCheck.forEach(letter =>palindromeCount+=dromeHashMap.get(letter));

  return palindromeCount<2;
}
// ['east', 'cars', 'acre', 'arcs', 'teas', 'eats', 'race']
function sortPalindrom(words){
  //use an alphabet hash to assign each
  // palindrome a value and then sort the vals together

}

function main() {

  let lor = new HashMap();
  lor.set('Hobbit','Bilbo');
  lor.set('Hobbit','Frodo');
  lor.set('Wizard','Gandolf');
  lor.set('Human','Aragon');
  lor.set('Elf','Legolas');
  lor.set('Maiar','The Necromancer');
  lor.set('Maiar','Sauron');
  lor.set('RingBearer','Gollum');
  lor.set('LadyLight','Galadriel');
  lor.set('HalfElven','Arwen');
  lor.set('Ent','Treebeard');

  console.log('get on Maiar should return Sauron',lor.get('Maiar'));



  // palindrome check
  console.log(`==========================
Palindrom Check should return
  true
  false
  true
for strings add, bobarbob, & rraecca`);
  console.log(palindrome('add'));
  console.log(palindrome('bobarbob'));
  console.log(palindrome('rraecca'));

  let palindrom

}

main();
