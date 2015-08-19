nmusic is an object-oriented JavaScript music library for programmatic music composition, **currently in development**.

# n()

`n` is a factory method which parses a variety of arguments and returns an immutable object of the appropriate class.

```
n('Bb3')                 // =>  Bb3
n('Bb3').constructor     // =>  Note
n('Bb3').plus('P4')      // =>  Eb4
n('Bb3').interval('Eb4') // =>  P4
n('Bb3').scale('major')  // => [Bb3, C4, D4, Eb4, F4, G4, A4]
```



### Goals

nmusic is made of a set of sensical music classes like Note, Pitch, Duration, Measure. Most of the functionality of the library is loaded into the factory method `n`.