function Cat() {
  this.name = 'cat';
  this.getNameArrow = () => {
    console.log(this.name);
  }
  this.getName = function () {
    console.log(this.name);
  } 
}

const cat = new Cat();

cat.getNameArrow();
cat.getName();

const { getName, getNameArrow } = cat;

getName();
getNameArrow();