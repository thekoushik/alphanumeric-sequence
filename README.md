# Alphanumeric Sequence Generator

Generate alphanumeric sequence by remembering last value

# Usage

```javascript
let value = 'zY7838';
value = computeNext(value, { length: 6, autoIncreaseLength: false });
console.log(value);
value = computeNext(value, { length: 6, autoIncreaseLength: false });
console.log(value);
// zY7839
// zY7840
```

# Example Sequence

```
A000
...
Z999
a000
...
z999
zA00
...
zz99
...
Aa00
...
Aa99
Ab00
...
Az99
Ba00
...
Bz99
...
Zz99
ZzA0
...
Zzz9
ZAa0
...
ZAz0
...
ZZz9
...
ZZZz
```