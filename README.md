# Algorithms and Data Structures

![license](https://img.shields.io/badge/license-MIT-yellow.svg)

> The aim of the project is to collect, provide information and solutions based on algorithms and data structures.

## TODO:

- Init package.json

- Bublesort Algorithm

  - Info, Descriptions, Showcase.
  - Implementation in different languages.

- Given a non-empty array of integers, return the result of multiplication of each item in an array. Vector multiplication.

- Given a "square" array of subarrays, find the sum of values from the first value of the first array, the second value of the second array, the third value of the third array, and so on (Otherwords, sum of a diagonal of a square matrix)

  ```javascript
  function diagonalSum(matrix) {
    var sum = 0;
    var inner = 0;

    for (var i = matrix.length; i > 0; i--) {
      inner = matrix[i - 1];
      sum += inner[i - 1];
    }

    return sum;
  }
  ```

## Algorithms

## Meta

- Ivan Tsud – [@JStr00per](https://twitter.com/JStr00per) – ivts@tuta.io

Distributed under the MIT license. See [LICENSE](LICENSE) for more information.

## Acknowledgments

- Hat tip to anyone whose code was used.
- Made with <span style="color: #e25555;">&#9829;</span> in Estonia.
