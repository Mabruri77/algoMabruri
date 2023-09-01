class Node {
  constructor(val, index) {
    this.data = { value: val, index: index }
    this.prev = null
    this.next = null
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null
    this.tail = null
  }
  pushEnd(val, index) {
    let newNode = new Node(val, index)
    if (!this.head) {
      this.head = newNode
      this.tail = newNode
    } else {
      newNode.prev = this.tail
      this.tail.next = newNode
      this.tail = newNode
    }
  }
  pushMid(current, val, index) {
    let newNode = new Node(val, index)
    let second = current.next
    current.next = newNode
    newNode.prev = current
    newNode.next = second
    second.prev = newNode
  }
  pushFirst(current, val, index) {
    let newNode = new Node(val, index)
    newNode.next = current
    current.prev = newNode
    this.head = newNode
  }
}

function linkSortAlgorithm(arr) {
  let makeIndex = {}
  let result = []
  let linkedList = new DoublyLinkedList()
  linkedList.pushEnd(arr[0], 0)
  result[0] = arr[0]
  let indexForEnd = 1
  for (let i = 1; i < arr.length; i++) {
    let char = arr[i]
    let current = linkedList.tail
    let indexForMid
    while (current.prev && char < current.data.value) {
      indexForMid = current.data.index

      current.data.index++
      result[current.data.index] = current.data.value

      //code above for make index in array using hash
      current = current.prev
    }
    if (char < current.data.value) {
      //push value in first node and add in array
      result[0] = char
      current.data.index++
      result[current.data.index] = current.data.value
      indexForEnd++
      //code above for make  index in array using hash
      linkedList.pushFirst(current, char, 0)
    } else if (current.next) {
      //push value to middle or between node and add in array
      result[indexForMid] = char
      indexForEnd++
      //code above for make  index in array using hash
      linkedList.pushMid(current, char, indexForMid)
    } else {
      //push value to end adn add in array
      result[indexForEnd] = char
      //code above for make  index in array using hash
      linkedList.pushEnd(char, indexForEnd)
      indexForEnd++
    }
  }

  console.log(result)
}

linkSortAlgorithm([
  286, 648, 523, 735, 437, 22, 159, 717, 932, 119, 753, 746, 269, 739, 7, 928, 737, 54, 624, 768,
  787, 241, 278, 233, 807, 204, 907, 134, 10, 635, 32, 444, 928, 714, 539, 849, 346, 861, 513, 993,
  444, 815, 403, 720, 853, 944, 236, 209, 579, 330, 896, 703, 639, 667, 90, 369, 222, 325, 312, 94,
  248, 515, 263, 554, 171, 107, 403, 528, 760, 626, 436, 42, 666, 565, 59, 461, 740, 975, 283, 395,
  580, 695, 287, 729, 55, 854, 392, 930, 407, 856, 27, 567, 15, 468, 989, 932, 757, 603, 75, 920,
])
