'use strict';

const bookings = [];

function createBooking(
  flightNum,
  numPassengers = 1,
  price = 199 * numPassengers,
) {
  const booking = {
    flightNum,
    numPassengers,
    price,
  };
  console.log(booking);
  return booking;
}

createBooking('LH123', undefined, 200);

const greet = greeting => name => `${greeting}, ${name}!`;
const greeterHey = greet('Hey');
console.log(greeterHey('Jonas'));
console.log(greeterHey('Steven'));
