const apple = {
    name: 'apple',
    display: function() {
        console.log(`${this.name} : 🍎`); // 객체 내에서 자기 자신을 지목할 때 this
    }
};

apple.display();