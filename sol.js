class TimeLimitedCache {
    constructor() {
      this.cache = {};
    }
    set(key, value, duration){
        const existing=this.cache[key];
        if (existing) {
            clearTimeout(existing.timeoutId);
          }
           const timeoutId=setTimeout(() => 
            {delete this.cache[key];

           }, duration);
           this.cache[key]=(value,timeoutId);
           return Boolean(existing);

          }
      
        
      
        get(key) {
          const existing=this.cache[key];
          if (existing){
            return existing.value;
          }
          else{
            return -1;
          }
        }
      
        count() {
          return Object.keys(this.cache).length;
        }
      } 
      const cache = new TimeLimitedCache();
  //     console.log(cache.set(1, 42, 100)) ;
  //     setTimeout(()=>{
  //       console.log(cache.get(1));
  //     console.log(cache.count());
  //   },50);
  //   setTimeout(()=>{
  //     console.log(cache.get(1));
  // },150);
  console.log(cache.set(1, 42, 100)) ;
  setTimeout(()=>{
    console.log(cache.get(1));
  console.log(cache.count());
},50);
setTimeout(()=>{
  console.log(cache.get(1));
},250);

    //OOP(classes)
   // class Person{
      //attributes -private and public
//#age;//private attributes use setters and getters
      // methods
    //   constructor(name){
    //     this.name=name;

    //   }
    //   sayHello(){
    //     console.log("Hello Liz");
    //   }
    //   set age(age){
    //     this.#age=age;

    //   }
    //   get age(){
    //     return this.#age;
    //   }
    // }
    // const person1=new Person("John");
    // person1.sayHello();
    // person1.age=30;
    // console.log(person1.age);
    // console.log(person1.name);
