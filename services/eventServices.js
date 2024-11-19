import { EVENTS_DATA } from "../models/eventModel.js";

export class EventServices {
  static events = [...EVENTS_DATA];

  static getAllEvents() {
    return this.events;
  }

  static getEventById(id) {
    return this.events.find((event) => event.id === parseInt(id));
  }

  static createEvent(data) {
    const id = this.events.length + 1;
    const newEvent = { id, ...data };
    this.events.push(newEvent);
    return newEvent;
  }

  static updateEvent(id, data) {
    const index = this.events.findIndex((event) => event.id === parseInt(id));
    this.events[index] = { ...this.events[index], ...data };
    return this.events[index];
  }
}
