import { EVENTS_DATA } from "../models/eventModel.js";

export class EventServices {
  static getEventsList() {
    return EVENTS_DATA;
  }

  static getEventById(id) {
    return EVENTS_DATA.find((event) => event.id === parseInt(id));
  }

  static createEvent(data) {
    const id = EVENTS_DATA.length + 1;
    const newEvent = { id, ...data };
    EVENTS_DATA.push(newEvent);
    return newEvent;
  }

  static updateEvent(id, data) {
    const index = EVENTS_DATA.findIndex((event) => event.id === parseInt(id));
    EVENTS_DATA[index] = { ...EVENTS_DATA[index], ...data };
    return EVENTS_DATA[index];
  }
}
