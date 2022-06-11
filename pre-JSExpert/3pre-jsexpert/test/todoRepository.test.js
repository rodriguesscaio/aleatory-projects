const { describe, it, before, afterEach } = require('mocha');
const { expect } = require('chai');
const TodoRepository = require('../src/todoRepository');
const { createSandbox } = require('sinon');

describe('TodoRepository', () => {
  let todoRepository, sandbox;

  before(() => {
    todoRepository = new TodoRepository();
    sandbox = createSandbox();
  });

  afterEach(() => {
    sandbox.restore();
  });

  describe('methods signature', () => {
    it('should call find from lokijs', () => {
      const mockDatabase = [
        {
          name: 'Caio',
          age: 20,
          meta: { revision: 0, created: 1611612318527, version: 0 },
          $loki: 1,
        },
      ];

      const functionName = 'find';
      const returnExpected = mockDatabase;
      // o stub é para substituir o comportamento de uma função
      // ou propriedade
      sandbox
        .stub(todoRepository.schedule, functionName)
        .returns(returnExpected);

      const result = todoRepository.list();
      expect(result).to.be.deep.equal(returnExpected);
      expect(todoRepository.schedule[functionName].calledOnce).to.be.ok;
    });

    it('should call insertOne from lokijs', () => {
      const functionName = 'insertOne';
      const expectedReturn = true;

      sandbox
        .stub(todoRepository.schedule, functionName)
        .returns(expectedReturn);

      const data = {
        name: 'Caio',
      };

      const result = todoRepository.create(data);

      expect(result).to.be.ok;
      expect(todoRepository.schedule[functionName].calledOnceWithExactly(data))
        .to.be.ok;
    });
  });
});
