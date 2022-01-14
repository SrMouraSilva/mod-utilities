function(event, funcs) {
  function handleValueChange(symbol, value) {
    // Ignore toggle 'off' state
    if (value == 0)
      return;

    switch (symbol) {
      case "channel1":
        updateChannels(1, [2, 3, 4], event.icon);
        break;
      case "channel2":
        updateChannels(2, [1, 3, 4], event.icon);
        break;
      case "channel3":
        updateChannels(3, [1, 2, 4], event.icon);
        break;
      case "channel4":
        updateChannels(4, [1, 2, 3], event.icon);
        break;
    }
  }

  function updateChannels(active, disableds, element) {
    element.find(`.channel${active}`).addClass('on').removeClass('on');
    disableds.forEach(channel => {
      element.find(`.channel${channel}`).addClass('off').removeClass('on');
    });
  }

  if (event.type == 'start'){
    // The first channel is the initial active channel.
    updateChannels(1, [2, 3, 4], element);
  } else if (event.type == 'change') {
    handleValueChange(event.symbol, event.value);
  }
} 