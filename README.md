# JsonHandleFreedom.NodeJs
Json Encoding - Decoding, Bindings To Class( Json to Class Instance), Decoding to Class, Library that can be used with Php(JsonHandleFreedom)



JsonHandleFreedom.NodeJs library is created for Json Encode And Decode(Parse), Bind To class From NodeJs To Php and the opposite,
for now by using my other repo JsonHandleFreedom. 



Example Of Use Encode:
-----------------------------------------------------
This is the Person Class for the example:

    let free = new WeakMap();

       class Person {
          constructor() {
              free.set(this, 'iamprivate');
              this.id = '1';
          }
          set name(name) {
              this._name = name.charAt(0).toUpperCase() + name.slice(1);
          }
          get name() {
              return this._name;
          }
          //***Its Crusial For Mapper to create at your Class a setter function Like 'set_' and the name of the var***
          set_free(ji) {
              free.set(this, ji);
          }
          
          get free() {
              return free.get(this);
          }
          sayHello() {
              console.log('Hello, my name is ' + this.name + ', I have ID: ' + this.id);
          }
          set FrStatic(iif) {
              this._FrStatic = iif;
          }

          get FrStatic() {
              return this._FrStatic;
          }

      }
      module.exports = Person;


This is the Example use File:


      const Person = require('./Main');
      const JsonMain = require('./JsonHandle/src/JsonHandleFreeInc');
      encoder = JsonMain.JsonEncoderFree();
      decoder = JsonMain.JsonDecoderFree();
      var personOne = new Person();
      personOne.name = 'js';
      personOne.someNumbers = [1, 2, 3, 4];
      var personTwo = new Person();

      personTwo.name = 'go';
      personTwo.jd = [1, 2, 3];

      personTwo.FrStatic = JSON.stringify(personOne);
      personTwo.varia = [
          JSON.stringify({ jsM: [1, 2, 3, 4, 5, 6] })
      ];
      personTwo.FrPrivate = { free: 'go', kAMain: 1 };
      //The Encoded Json is Encrypted With PassKey 'password':
      var json = encoder.encodeJsonFree(personTwo, false, 'password');
      console.log(json);
      
      //The Decoded Json is Decrypted With PassKey 'password':
      var objectNew = decoder.decodeJsonFree(json, false, 'password', require('./Main'), true);
      console.log(objectNew);
      
      
      
The Encoded Json is Encrypted With PassKey 'password':
      
            dd490b8a73467fa8a23b2dc:9a2850f0de151282:ltDeQQ6mS48dLj1q29cbtgOeAUb+htnlvmH1d4ORD0wH
            peIGO6BTLCtLrJX6cCX2ihqYHf8ST6nXAQOQIKJyZV9vnrMM3mxu4TORoa/glXAMeA/EBw3evfcGTdYIbiNa1kmphN0YA4T1y
            FF6XL25nFEcHwayY/ZL/WZoksyjiv/GbZLi+YfIFzGCVmUtvjGvC41dHIIStPFo0xJnq2kq75LsRPiko7ft79b+6WcuBic=
            
            
The Decoded Json is Decrypted With PassKey 'password' and Binned to Person Class:
      
      Person {
        id: 1,
        _name: 'Go',
        jd: [ 1, 2, 3 ],
        _FrStatic: [ { id: 1, name: 'Js', someNumbers: [Object] } ],
        varia: [ { jsM: [Object] } ],
        FrPrivate: [ { kAMain: 1 } ] }

--------------------------------------------------------



Example 2 
-----------------
-----------------------------------------------------
This is the Person Class for the example:

    let free = new WeakMap();

       class Person {
          constructor() {
              free.set(this, 'iamprivate');
              this.id = '1';
          }
          set name(name) {
              this._name = name.charAt(0).toUpperCase() + name.slice(1);
          }
          get name() {
              return this._name;
          }
          //***Its Crusial For Mapper to create at your Class a setter function Like 'set_' and the name of the var***
          set_free(ji) {
              free.set(this, ji);
          }
          
          get free() {
              return free.get(this);
          }
          sayHello() {
              console.log('Hello, my name is ' + this.name + ', I have ID: ' + this.id);
          }
          set FrStatic(iif) {
              this._FrStatic = iif;
          }

          get FrStatic() {
              return this._FrStatic;
          }

      }
      module.exports = Person;


This is the Example use File:


      const Person = require('./Main');
      const JsonMain = require('./JsonHandle/src/JsonHandleFreeInc');
      encoder = JsonMain.JsonEncoderFree();
      decoder = JsonMain.JsonDecoderFree();


      var personOne = new Person();
      personOne.name = 'js';
      personOne.someNumbers = [1, 2, 3, 4];
      var personTwo = new Object;

      personTwo.name = 'go';
      personTwo.jd = [1, 2, 3];

      personTwo.FrStatic = JSON.stringify(personOne);
      personTwo.varia = [
          JSON.stringify({ jsM: [1, 2, 3, 4, 5, 6] })
      ];
      personTwo.FrPrivate = { free: 'go', kAMain: 1 };
      //personTwo is Object
      console.log(personTwo);
      
      //the encrypted json string
      var json = encoder.encodeJsonFree(personTwo, false, 'password');
      console.log(json);
      
      var objectNew = decoder.decodeJsonFree(json, false, 'password', require('./Main'), true);

      //the binned object
      console.log(objectNew);
 



The personTwo is Object

          { name: 'go',
            jd: [ 1, 2, 3 ],
            FrStatic: '{"id":"1","_name":"Js","someNumbers":[1,2,3,4]}',
            varia: [ '{"jsM":[1,2,3,4,5,6]}' ],
            FrPrivate: { free: 'go', kAMain: 1 } }

The Encoded Json is Encrypted With PassKey 'password':
      
            e0e780318fbad58fa0226f3:5b976db86100c25f:DUUoodH+Hg3jfRgYg78Fjob
            XFf4YwzhjiWQ4esA6JNMoWMki28FbO0t9RiNrBSXZEbbExO26Qt4QhGwvDL7XECOZH4
            ueOcqCs2V7kPwADxqn0G4lL7c6vmD1jjdf8+uF+qxbQWTKvSbOutosQXEwy8C40cjlic6hN
            imQNniRPwyXn5IdZBVK3tGunY/tClIpoH61fyyF8/naj4vNX1lfYw==
            
            
The Decoded Json is Decrypted With PassKey 'password' and Binned to Person Class:
      
      Person {
      id: '1',
      _name: 'Go',
      jd: [ 1, 2, 3 ],
      _FrStatic: [ { id: 1, name: 'Js', someNumbers: [Object] } ],
      varia: [ { jsM: [Object] } ],
      FrPrivate: [ { kAMain: 1 } ] }
--------------------------------------------------------



