export const ParseEvent = (instance: any, jsonEvents: any, events: any) => {
  for (const key in jsonEvents) {
    events.value[key] = new Function(`return (${jsonEvents[key]['funcString']}).bind(this)`).call(instance);
  }
};
