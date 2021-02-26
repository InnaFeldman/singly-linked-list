(function () {
    function Node(val) {
        this.val = val;
        this.next = null;
    }

    /// Add an element into the list
    Node.prototype.add = function (val) {
        let current = this;

        while (current) {
            if (current.val > val) {
                let tmp = current.val;
                let tmp_next = current.next;
                current.val = val;
                current.next = new Node(tmp);
                current.next.next = tmp_next;
                break;

            } else {
                if (current.next === null) {
                    current.next = new Node(val);
                    break;
                }
                current = current.next;
            }
        }
    }

    /// Search specific elememt
    Node.prototype.search = function (val) {
        let current = this;
        while (current) {
            if (current.val === val) {
                // return current.val;
                console.log('Searched element: ' + current.val);
            }
            current = current.next;
        }
        return null;
    }

    //// Find and remove a specific element
    Node.prototype.remove = function (val) {
        let current = this;
        while (current) {
            if (current.val === val) {
                current.val = current.next.val;
                current.next = current.next.next;
                break;
            }
            current = current.next;
        }
    }

    /// Find an element than copy it and all next elements into a new obj
    Node.prototype.findAndCopy = function (val) {
        let current = this;
        let newObj;
        let currentNew;
        let copyMode = false;
        while (current) {
            if (copyMode) {
                currentNew.next = new Node(current.val);
                currentNew = currentNew.next;
            } else {
                if (current.val === val) {
                    newObj = new Node(val);
                    currentNew = newObj;
                    copyMode = true;
                }
            }
            current = current.next;
        }
        return newObj;
    }

    /// Print function
    Node.prototype.print = function () {
        let current = this;

        while (current) {
            console.log(current.val);
            current = current.next;
            ///going to the next element
        }
    }

    let list = new Node(1);
    list.add(2);
    list.add(3);
    list.add(5);
    list.add(4);
    list.search(2);
    list.remove(4);
    list.findAndCopy(3);
    list.print();
    console.log(list.toArray());
    console.log(list);
})()