nmusic is a JavaScript music library for programmatic music composition which offers an intuitive mix of functional and object-oriented programming styles.  It is thoroughly tested and well [documented](api.md) but **currently in development**.


## Usage

Navigate to your project directory and install nmusic:
```
npm install nmusic
```

In your project file, import nmusic.
```js
var nmusic = require('nmusic')

// if you'd like, create global variables for the functions you will be using
var plusInterval = nmusic.plusInterval
plusInterval('G3', 'P5')             =>  'D4'

// or, call all functions directly from nmusic
nmusic.interval('Bb3', 'Ab4')        =>  'm7'

```


To work in a functional style, use the many functional methods. These methods all return strings and numbers which represent pitches and intervals.  (The example assumes you have assigned all methods to global variables).
```js
interval('B3', 'F#5')           =>  'P12'
interval.simple('B3', 'F#5')    =>  'P5'
semitonesBetween('B3', 'D#4')   =>   4
plusInterval('B3', -6)          =>  'D3'
plusInterval('B3', '-m6')       =>  'D#3'
```

To work in an object-oriented style, create Pitch objects. The Pitch methods will return other Pitch objects, but behind the scenes they are just using the same functional methods introduced above.

```js
var p1 = new Pitch('Bb3')
var p2 = p1.plusInterval('P5')
p2.toString()                  => 'F4'
p2 instanceof Pitch            => true
p1.interval(p2)                => 'P5'
```


## Goals

nmusic is made of a set of sensical music classes like Note, Pitch, Duration, Measure. Most of the functionality of the library will be loaded into the factory method `nmusic` which will parse a variety of arguments and return objects of the appropriate class.

```js
nmusic('Bb3')                  =>  Bb3
nmusic('Bb3') instanceof Note  =>  true
nmusic('Bb3').plus('P4')       =>  Eb4
nmusic('Bb3').interval('Eb4')  =>  P4
nmusic('Bb3').scale('major')   => [Bb3, C4, D4, Eb4, F4, G4, A4]
```


## Docs
[View the api documentation here.](api.md)


## Development

To run eslint and tape tests:
```
npm test
```

To generate api documentation:
```
npm run docs
```

## Background & Credits

 My first programming project was a simple object oriented music library which I made from scratch to solve [counterpoint problems](https://github.com/jrleszcz/Computational-Counterpoint). As I've learned more, I've come back to that library and refactored it several times, and now I aim to completely rebuild it.

There are already some very good JavaScript music libraries out there which have influenced this project:

[tonal](https://github.com/danigb/tonal) is an elegant library written in a functional style.

[teoria](https://github.com/saebekassebil/teoria) is an object oriented library.

This library aims to be an intuitive mix between a functional and object-oriented style.