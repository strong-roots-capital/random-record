
random-record [![Build Status](https://travis-ci.org/strong-roots-capital/random-record.svg?branch=master)](https://travis-ci.org/strong-roots-capital/random-record) [![npm](https://img.shields.io/npm/dt/random-record.svg)](https://www.npmjs.com/package/random-record) [![npm version](https://img.shields.io/npm/v/random-record.svg)](https://npmjs.org/package/random-record)
======================================================================================================================================================================================================================================================================================================================================================================================

> Generate a random talib-record

Install
-------

```shell
npm install random-record
```

Use
---

```typescript
var randomRecord = require('random-record');

randomRecord()
//=> { Time: 47, Open: 78, High: 139, Low: 56, Close: 89, Volume: 90550 }
```

## Index

### Interfaces

* [Record](interfaces/record.md)

### Functions

* [randomRecord](#randomrecord)

---

## Functions

<a id="randomrecord"></a>

###  randomRecord

▸ **randomRecord**(): [Record](interfaces/record.md)

*Defined in random-record.ts:43*

Generate a random (and valid) Record.

**Returns:** [Record](interfaces/record.md)

___

