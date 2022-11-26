window.addEventListener('load', function() {
    nebula.boot();
})

function link(page) {
    window.open(page, '_self');
}

let wordAccordion = {
    out: function(self, begin, extend, end, freq, separation) {
        for (let i = 0; i < freq; i++) {
            setTimeout(function() {
                self.innerHTML = begin + extend.repeat(i) + end;
            }, separation * i);
        }
    },
    in: function(self, begin, extend, end, freq, separation) {
        for (let i = 1; i <= freq; i++) {
            setTimeout(function() {
                self.innerHTML = begin + extend.repeat(freq - i) + end;
            }, separation * i);
        }
    }
}

let mainDisplay = {
    separation: 20,
    out: function(self) {
        setTimeout(function() {
            self.innerHTML = 'Whaat is Nebula?'
        }, this.separation);
        setTimeout(function() {
            self.innerHTML = 'Whaaat is Nebula?'
        }, this.separation * 2);
        setTimeout(function() {
            self.innerHTML = 'Whaaaat is Nebula?'
        }, this.separation * 3);
        setTimeout(function() {
            self.innerHTML = 'Whaaaaat is Nebula?'
        }, this.separation * 4);
        setTimeout(function() {
            self.innerHTML = 'Whaaaaat is Nebula?'
        }, this.separation * 5);
    },
    in: function(self) {
        setTimeout(function() {
            self.innerHTML = 'Whaaaaat is Nebula?'
        }, this.separation);
        setTimeout(function() {
            self.innerHTML = 'Whaaaat is Nebula?'
        }, this.separation * 2);
        setTimeout(function() {
            self.innerHTML = 'Whaaat is Nebula?'
        }, this.separation * 3);
        setTimeout(function() {
            self.innerHTML = 'Whaat is Nebula?'
        }, this.separation * 4);
        setTimeout(function() {
            self.innerHTML = 'What is Nebula?'
        }, this.separation * 5);
    }
}