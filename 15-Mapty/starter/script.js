'use strict';

// prettier-ignore
const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

class Workout {
  #date = new Date();
  #id = (Date.now() + '').slice(-10) + Math.floor(Math.random() * 1000);
  #clicks;

  constructor(coords, distance, duration) {
    this.coords = coords;
    this.distance = distance;
    this.duration = duration;
  }
}

class Running extends Workout {
  type = 'running';

  constructor(coords, distance, duration, cadence) {
    super(coords, distance, duration);
    this.cadence = cadence;
    this.pace = this.calcPace();
  }

  calcPace() {
    return this.duration / this.distance;
  }
}

class Cycling extends Workout {
  type = 'cycling';

  constructor(coords, distance, duration, elevationGain) {
    super(coords, distance, duration);
    this.elevationGain = elevationGain;
    this.speed = this.calcSpeed();
  }

  calcSpeed() {
    return this.distance / (this.duration / 60);
  }
}

const form = document.querySelector('.form');
const containerWorkouts = document.querySelector('.workouts');
const inputType = document.querySelector('.form__input--type');
const inputDistance = document.querySelector('.form__input--distance');
const inputDuration = document.querySelector('.form__input--duration');
const inputCadence = document.querySelector('.form__input--cadence');
const inputElevation = document.querySelector('.form__input--elevation');
class App {
  #map;
  #mapEvent;
  #workouts = [];

  constructor() {
    this._getPosition();

    form.addEventListener('submit', this._newWorkout.bind(this));

    inputType.addEventListener('change', this._toggleElevationField);
  }

  _getPosition() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(this._loadMap.bind(this), () => {
        alert("Couldn't find you :(");
      });
    }
  }

  _loadMap(position) {
    const { latitude } = position.coords;
    const { longitude } = position.coords;
    console.log(`Found you at ${latitude}, ${longitude}`);

    const coordinates = [latitude, longitude];

    this.#map = L.map('map').setView(coordinates, 13);
    console.log('map', this.#map);

    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution:
        '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    }).addTo(this.#map);

    this.#map.on('click', this._showForm.bind(this));
  }

  _showForm(e) {
    this.#mapEvent = e;
    form.classList.remove('hidden');
    inputDistance.focus();
  }

  _toggleElevationField() {
    inputCadence.closest('.form__row').classList.toggle('form__row--hidden');
    inputElevation.closest('.form__row').classList.toggle('form__row--hidden');
  }

  _newWorkout(e) {
    e.preventDefault();
    function validNumbers(...inputs) {
      return inputs.every(input => Number.isFinite(input));
    }
    function positiveNumbers(...inputs) {
      return inputs.every(input => input > 0);
    }

    // Get the inputs from form
    const type = inputType.value;
    const distance = +inputDistance.value;
    const duration = +inputDuration.value;
    const { lat, lng } = this.#mapEvent.latlng;
    let workout;

    // If running, create Running obj
    if (type === 'running') {
      const cadence = +inputCadence.value;

      if (
        !validNumbers(distance, duration, cadence) ||
        !positiveNumbers(distance, duration, cadence)
      ) {
        return alert('Input has to be positive number');
      }

      workout = new Running([lat, lng], distance, duration, cadence);
    }

    // If cycling — Cycling
    if (type === 'cycling') {
      const elevation = +inputElevation.value;

      if (
        !validNumbers(distance, duration, elevation) ||
        !positiveNumbers(distance, duration)
      ) {
        return alert('Input has to be positive number');
      }

      workout = new Cycling([lat, lng], distance, duration, elevation);
    }

    // Store the obj in an array
    this.#workouts.push(workout);

    inputCadence.value =
      inputDistance.value =
      inputDuration.value =
      inputElevation.value =
        '';

    this._renderWorkoutMarker(workout);
  }

  _renderWorkoutMarker(workout) {
    L.marker(workout.coords)
      .addTo(this.#map)
      .bindPopup(
        L.popup({
          autoClose: false,
          closeOnClick: false,
          className: `${workout.type}-popup`,
        }),
      )
      .setPopupContent(workout.type)
      .openPopup();
  }
}

const app = new App();
