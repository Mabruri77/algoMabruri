function AlgorithmSortingSimplest(arr) {
  let result = [arr[0]]
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] >= result[result.length - 1]) {
      result.push(arr[i])
      continue
    }
    result.push(arr[i])
    for (let j = result.length - 2; result[j] > result[j + 1] && j >= 0; j--) {
      let temp = result[j]
      result[j] = result[j + 1]
      result[j + 1] = temp
    }
  }
  console.log(result)
}
AlgorithmSortingSimplest([
  286, 648, 523, 735, 437, 22, 159, 717, 932, 119, 753, 746, 269, 739, 7, 928, 737, 54, 624, 768,
  787, 241, 278, 233, 807, 204, 907, 134, 10, 635, 32, 444, 928, 714, 539, 849, 346, 861, 513, 993,
  444, 815, 403, 720, 853, 944, 236, 209, 579, 330, 896, 703, 639, 667, 90, 369, 222, 325, 312, 94,
  248, 515, 263, 554, 171, 107, 403, 528, 760, 626, 436, 42, 666, 565, 59, 461, 740, 975, 283, 395,
  580, 695, 287, 729, 55, 854, 392, 930, 407, 856, 27, 567, 15, 468, 989, 932, 757, 603, 75, 920,
])
