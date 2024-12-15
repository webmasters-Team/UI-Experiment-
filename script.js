let rivCanvas = document.getElementsByClassName('js-riv-canvas');

const r1 = new rive.Rive({
  src: 'https://anim-icons.s3.amazonaws.com/lock-dark.riv',
  canvas: rivCanvas[0],
  autoplay: false,
  stateMachines: 'lockAnimation',
  onLoad: () => {
    r1.resizeDrawingSurfaceToCanvas();
    triggerAnim(document.getElementById('switch-checkbox-1'), r1, 'lockAnimation');
  }
});

const r2 = new rive.Rive({
  src: 'https://anim-icons.s3.amazonaws.com/password-dark.riv',
  canvas: rivCanvas[1],
  autoplay: false,
  stateMachines: 'passwordAnimation',
  onLoad: () => {
    r2.resizeDrawingSurfaceToCanvas();
    triggerAnim(document.getElementById('switch-checkbox-2'), r2, 'passwordAnimation');
  }
});

const r3 = new rive.Rive({
  src: 'https://anim-icons.s3.amazonaws.com/envelope-dark.riv',
  canvas: rivCanvas[2],
  autoplay: false,
  stateMachines: 'envelopeAnimation',
  onLoad: () => {
    r3.resizeDrawingSurfaceToCanvas();
    triggerAnim(document.getElementById('switch-checkbox-3'), r3, 'envelopeAnimation');
  }
});

function triggerAnim(trigger, rivObj, stateMachine) {
  const inputs = rivObj.stateMachineInputs(stateMachine);
  let isActive = inputs.find(i => i.name === 'isActive');
  trigger.addEventListener('change', function(event) {
    isActive.value = event.target.checked;
    rivObj.pause();
    isActive.value ? rivObj.play('active') : rivObj.play('inactive');
  });
}
