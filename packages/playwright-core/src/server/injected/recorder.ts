  const addEvent = (event: Event) => {
    events.push(event);
  };
  const handleEvent = (event: Event) => {
    addEvent(event);
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (event as any)._playwrightHandled = true;
  };
