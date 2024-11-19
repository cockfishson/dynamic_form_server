import { EventServices } from "../services/eventServices.js";

export class EventController {
  static list(req, res) {
    const events = EventServices.getAllEvents();
    res.status(200).json(events);
  }

  static getEvent(req, res) {
    const event = EventServices.getEventById(req.params.id);
    res.status(200).json(event);
  }

  static create(req, res) {
    const newEvent = EventServices.createEvent(req.body);
    res.status(201).json(newEvent);
  }

  static update(req, res) {
    const updatedEvent = EventServices.updateEvent(req.params.id, req.body);
    res.status(200).json(updatedEvent);
  }
}
