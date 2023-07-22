var audioCtx = new(window.AudioContext || window.webkitAudioContext)();

export default function playNote(frequency, duration) {

  var oscillator = audioCtx.createOscillator();

  oscillator.type = 'sine';
  oscillator.frequency.value = frequency; // value in hertz

  const gainNode = audioCtx.createGain();
  gainNode.gain.value = 0.05;
  
  oscillator.connect(gainNode);
  gainNode.connect(audioCtx.destination);

  oscillator.start();

  setTimeout(
    function() {
      oscillator.stop();

    }, duration);
}

