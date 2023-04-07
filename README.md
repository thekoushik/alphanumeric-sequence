# Alphanumeric Sequence Generator

Generate alphanumeric sequence by remembering last value

# Usage

```javascript
const gen = new Generator(6);
gen.reset('zY7838');
console.log(gen.getNext());
console.log(gen.getNext());
// zY7839
// zY7840
```

# Example Sequence

A00000
A00001
A00002
...
Z99999
a00000
a00001
...
z99999
zA0000
zZ9999
za0000
...
zzzzzz
zzzzzzA
zzzzzzB
...
zzzzzzZ
zzzzzzzA
...
and so on
