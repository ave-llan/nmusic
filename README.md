nmusic is an object-oriented JavaScript music library for programmatic music composition, **currently in development**.

## nmusic 

`nmusic` is a factory method which parses a variety of arguments and returns an immutable object of the appropriate class.

```
nmusic('Bb3')                  =>  Bb3
nmusic('Bb3') instanceof Note  =>  true
nmusic('Bb3').plus('P4')       =>  Eb4
nmusic('Bb3').interval('Eb4')  =>  P4
nmusic('Bb3').scale('major')   => [Bb3, C4, D4, Eb4, F4, G4, A4]
```


## Goals

nmusic is made of a set of sensical music classes like Note, Pitch, Duration, Measure. Most of the functionality of the library is loaded into the factory method `nmusic`.


## Docs
[View the api documentation here.](api.md)


## Development

To run eslint and tape tests:
```
npm test
```

### Background & Credits

I got into programming by trying to solve music composition problems programmatically.  My first project was a simple object oriented music library which I made from scratch to [counterpoint problems](https://github.com/jrleszcz/Computational-Counterpoint). As I've learned more, I've come back to that library and refactored it several times, and now I aim to completely rebuild it. 

There are already some very good JavaScript music libraries out there which have influenced this project:

[tonal](https://github.com/danigb/tonal) is an elegant library written in a functional style. 

[teoria](https://github.com/saebekassebil/teoria) is an object oriented library.

This library aims to be an intuitive mix between a functional and object-oriented style. 