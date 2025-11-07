import React from 'react';

const ClassesJS = () => (
  <div className="space-y-8">

    {/* Motivating Example */}
    <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6 rounded-md">
      <p className="text-gray-700 font-semibold mb-2">
        Motivating Example
      </p>
      <p className="text-gray-600 text-sm">
        How can we create multiple instances of a user with the same methods and attributes without repeating code?
      </p>
    </div>

    {/* Overview */}
    <section>
      <h3 className="text-2xl font-bold text-gray-800 mb-4">Overview</h3>
      <p className="text-gray-600">
        Classes provide a clean way to create objects using a reusable template.
      </p>
    </section>

    {/* Key Concepts */}
    <section>
      <h3 className="text-2xl font-bold text-gray-800 mb-4">Key Concepts</h3>
      <p className="text-gray-600">
        A class is not an object but a template for creating objects. It encapsulates data and methods that operate on that data.
        Elements can be private or public, and methods can be instance-level or static.
        The <code>constructor</code> method creates instances of a class.
        Like in Java, one class can extend another, inheriting the parent’s behavior.
      </p>
    </section>

    {/* Code Example */}
    <section>
      <h3 className="text-2xl font-bold text-gray-800 mb-4">Code Example</h3>
      <div className="bg-gray-900 text-gray-100 p-6 rounded-lg font-mono text-sm overflow-x-auto">
        <pre>{`
class Animal {
  constructor(name) {
    this.name = name;
  }

  speak() {
    console.log(\`\${this.name} makes a noise.\`);
  }
}

class Dog extends Animal {
  constructor(name) {
    super(name); // call parent constructor
  }

  speak() {
    console.log(\`\${this.name} barks.\`);
  }
}

const d = new Dog("Fido");
d.speak(); // Fido barks.
        `}</pre>
      </div>
    </section>

    <section>
      <h3 className="text-2xl font-bold text-gray-800 mb-4">Questions</h3>
      <div className="bg-blue-50 border-l-4 border-blue-400 p-6 rounded-md">
        <p className="text-gray-700 font-semibold mb-2"></p>
        <ul className="text-gray-700 space-y-2">
          <li>• What is the difference between a class and an object?</li>
          <li>• In the above code example, we used a function declaration. Is there another way to define a class?</li>
          <li>• What is the purpose of the <code>super</code> keyword?</li>
        </ul>
      </div>
    </section>


    <section>
      <h3 className="text-2xl font-bold text-gray-800 mb-4">Real-World Applications</h3>
      <p className="text-gray-600">
        Three.js is used for 3D graphics, and it contains classes such as mesh, which can be extended to create new 3D models
      </p>
    </section>

  </div>
);

export default ClassesJS;
