class _Node {
  constructor(value){
      this.value = value,
      this.next = null,
      this.prev = null;
  }
}
class Queue{
  conctructor(){
      this.first = null;
      this.last = null;
  }
  enqueue(data){
      const node = new _Node(data);
      if(!this.first){
          this.first = node;
      }
      if(this.last){
          node.next = this.last;
          this.last.prev = node;
      }
      this.last = node;
  }
  dequeue(){
      if(!this.first){
          return;
      }
      const node = this.first;
      this.first = node.prev;
      if(node === this.last){
          this.last = null;
      }
      return node.value;
  }
}
function ophidianLine(line) {
  while(line.first !== null) {
      console.log('next step');
      display(line);
      let current = line.dequeue();
      if (Math.floor(Math.random()*4) === 3) {
        line.enqueue(current);
      }
    }
}

function ophidianLine(line) {
  while(line.first !== null) {
      console.log('next step');
      display(line);
      let current = line.dequeue();
      if (Math.floor(Math.random()*4) === 3) {
        line.enqueue(current);
      }
    }
}