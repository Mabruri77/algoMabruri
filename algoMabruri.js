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

function doublyLinkedListSort(arr) {
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

      //code above for make  Index using hash
      current = current.prev
    }
    if (char < current.data.value) {
      result[0] = char
      current.data.index++
      result[current.data.index] = current.data.value
      indexForEnd++
      //code above for make  Index using hash
      linkedList.pushFirst(current, char, 0)
    } else if (current.next) {
      result[indexForMid] = char
      indexForEnd++
      //code above for make  Index using hash
      linkedList.pushMid(current, char, indexForMid)
    } else {
      result[indexForEnd] = char
      //code above for make  Index using hash
      linkedList.pushEnd(char, indexForEnd)
      indexForEnd++
    }
  }

  console.log(result)
  return linkedList.head
}

function prinValue(node) {
  let result = []
  let current = node
  while (current) {
    result.push(current.data)
    current = current.next
  }
  console.log(result)
}

doublyLinkedListSort([9, 5, 3, 2, 3, 6, 7, -1, 2, 2, 2, 2])
